import { Tooltip, Polygon } from 'react-leaflet';

const ParkingLot = ({ way }) => {
    const tags = way.tags;

    const name = (() => {
        let prefix = '';
        if (tags.name) return tags.name;
        else if (tags['operator:type'] == 'private') prefix = "Private ";
        return prefix + "Parking Lot";
    })();

    return (
        <Polygon pathOptions={{ color: 'blue' }} key={way.key} positions={way.poly}>
            <Tooltip>
                <h2>{name}</h2>
            </Tooltip>
        </Polygon>
    )

}

export default ParkingLot;