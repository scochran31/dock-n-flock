import React from 'react';
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const MapPopup = ({ item }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const venue = item._embedded.venues[0]
    const lat = venue.location.latitude || 40.7406;
    const long = venue.location.longitude || -111.8927;
    const locationName = venue.name || "Smiths Field";
    console.log(venue.location,long,lat);
    return (
        <>
            <Button onClick={onOpen}>View Parking Map</Button>
            <Modal motionPreset="slideInBottom" onClose={onClose} isOpen={isOpen}>
                <ModalOverlay />
                <ModalContent pb={5}>
                    <ModalHeader>Parking near {locationName}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <MapContainer center={[lat, long]} zoom={13} scrollWheelZoom={false}>
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                            <Marker position={[lat, long]}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default MapPopup;
