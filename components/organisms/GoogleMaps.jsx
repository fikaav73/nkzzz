import { useCallback, useMemo, useState } from "react";
// import GoogleMapForm from "../molecules/GoogleMapForm";
import GoogleMapMarker from "../molecules/GoogleMapMarker";
import GoogleMap from "./GoogleMap";
import { GOOGLE_MAPS_API_KEY } from "../../constants";
import Flex from "../styled/Flex.styled";
import { Wrapper } from "@googlemaps/react-wrapper";
import { debounce } from "../../utils";

const GoogleMaps = (props) => {
    const [clicks, setClicks] = useState([]);

    const onClick = useCallback(
        (e) => {
            setClicks([...clicks, e.latLng]);
        },
        [setClicks, clicks]
    );

    const onIdle = useCallback(
        debounce((m) => {
            props.setZoom(m.getZoom());
            props.setCenter(m.getCenter().toJSON());
        }, 300),
        [props.setZoom, props.setCenter]
    );

    const mapStyle = useMemo(() => ({ flexGrow: "1", height: "100%" }), []);

    return (
        <Flex direction="column" height="60vh" width="100%">
            <Wrapper apiKey={GOOGLE_MAPS_API_KEY}>
                <GoogleMap
                    center={props.center}
                    onClick={onClick}
                    onIdle={onIdle}
                    zoom={props.zoom}
                    style={mapStyle}
                >
                    {clicks.map((latLng, i) => (
                        <GoogleMapMarker key={i} position={latLng} />
                    ))}
                </GoogleMap>
            </Wrapper>
            {/* <GoogleMapForm
                center={props.center}
                setCenter={props.setCenter}
                zoom={props.zoom}
                setZoom={props.setZoom}
                clicks={clicks}
                setClicks={setClicks}
            /> */}
        </Flex>
    );
};

export default GoogleMaps;
