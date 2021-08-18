import React, { useState } from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import axios from 'axios'
import querystring from 'querystring';
import ParkingLot from './ParkingLot';

const getBoundingBox = (lat, long, radius) => {
  const latLen = 40075017 / 360;
  const longLen = Math.cos(lat * Math.PI / 180) * 40075017 / 360;
  return `(
    ${+lat - radius / latLen},
    ${+long - radius / longLen},
    ${+lat + radius / latLen},
    ${+long + radius / longLen}
  )`;
}

const ParkingMap = ({ item, colorScheme }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(true);
  const [selectedKey, setSelectedKey] = useState(null);
  const [ways, setWays] = useState([]);

  const venue = item._embedded.venues[0]
  const locationName = venue.name;
  const lat = venue.location.latitude;
  const long = venue.location.longitude;
  const radius = 1000;
  const opQuery = `
        [out:json];
        way[amenity=parking]${getBoundingBox(lat, long, radius)};
        (._;>;);out;`.replace(/\s/g, '');
  const url = 'https://overpass-api.de/api/interpreter';

  async function loadMap() {
    setIsLoading(true);
    onOpen();
    const result = await axios.post(
      url,
      querystring.stringify({ data: opQuery }),
      { headers: { "Content-Type": "application/x-www-form-urlencoded" } })
    const nodes = {};
    result.data.elements
      .filter(e => e.type === 'node')
      .forEach(node => nodes[node.id] = [node.lat, node.lon]);
    const localWays = result.data.elements
      .filter(e => e.type === 'way')
      .map(way => ({
        key: way.id,
        poly: way.nodes.map(nodeID => nodes[nodeID]),
        tags: way.tags || {}
      }));
    setWays(localWays);
    setIsLoading(false);
  }

  function onSelect(key) {
    setSelectedKey(key);
  }

  return (
    <>
      <Button colorScheme={colorScheme} onClick={loadMap}>View Parking Map</Button>
      <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent maxW="75vw" pb={5}>
          <ModalHeader>Parking near {locationName}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <MapContainer isLoading={isLoading} center={[lat, long]} zoom={15} scrollWheelZoom={true}>
              <TileLayer
                attribution='&copy; <a href="https://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              {ways.length && ways.map(way => <ParkingLot way={way} key={way.key} selected={selectedKey === way.key} onSelect={onSelect} />)}
            </MapContainer>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ParkingMap;
