import { Button, Divider, Stack, Text } from '@chakra-ui/react';
import { Tooltip, Polygon } from 'react-leaflet';

const ParkingLot = ({ way, selected, onSelect }) => {
  const tags = way.tags;

  const name = (() => {
    let prefix = '';
    if (tags.name) return tags.name;

    else if (tags['operator:type'] === 'private' || tags.access === 'private' || tags.access === 'customers') prefix += "Private ";
    else if (tags.fee === 'yes') prefix += "Paid ";

    return prefix + "Parking Lot";
  })();

  const color = (() => {
    if (tags['operator:type'] === 'private' || tags.access === 'private' || tags.access === 'customers') return 'red';
    else if (tags['capacity:disabled']) return 'blue';
    else if (tags.fee === 'yes') return 'yellow';
    return 'green'
  })();

  if (tags.parking === 'surface') tags.parking = 'above ground';

  const centerLat = way.poly.reduce((acc, val) => acc + val[0], 0) / way.poly.length;
  const centerLong = way.poly.reduce((acc, val) => acc + val[1], 0) / way.poly.length;

  const mapsLink = `https://www.google.com/maps/dir//${centerLat},${centerLong}`;

  const eventHandlers = {
    click: () => onSelect(way.key)
  }

  return (
    <Polygon pathOptions={{ color: color }} positions={way.poly} eventHandlers={eventHandlers}>
      {selected &&
        <Tooltip permanent>
          <Stack spacing={1} minW={'12em'}>
            <Text align='center' fontSize='lg'>{name}</Text>
            <Divider />
            {tags.operator && <Text>Operator: {tags.operator}</Text>}
            {tags.parking && <Text>Type: {tags.parking}</Text>}
            {tags.surface && <Text>Surface: {tags.surface}</Text>}
            {tags.access && <Text>Access: {tags.access}</Text>}
            {tags['capacity:disabled'] && <Text>Handicapped: {tags['capacity:disabled']}</Text>}
            <Button target='_blank' variant='outline' textColor='white' as='a' href={mapsLink} pointerEvents={'all'}>Get Directions</Button>
          </Stack>
        </Tooltip>}
    </Polygon>
  )
}

export default ParkingLot;