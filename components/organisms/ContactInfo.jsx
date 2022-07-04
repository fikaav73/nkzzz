import { Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { useCallback, useState } from "react";
import SliderContact from "../molecules/SliderContact";
import Flex from "../styled/Flex.styled";
import GoogleMaps from "./GoogleMaps";
import Carousel from "../molecules/Carousel";

const childWidth = 350;

const ContactInfo = (props) => {
    const theme = useTheme();
    const [zoom, setZoom] = useState(3);
    const [center, setCenter] = useState({
        lat: 0,
        lng: 0
    });

    const render = useCallback(
        (item) => <SliderContact {...item} key={item.id} setZoom={setZoom} setCenter={setCenter} />,
        [setZoom, setCenter]
    );

    const Title = useMemo(
        () => (
            <Typography variant="h5" color={theme.color.primary} className="title">
                {props.label}
            </Typography>
        ),
        [props.label, theme]
    );

    return (
        <Flex direction="column" justifyContent="center" alignItems="center" gap=".5rem">
            {Title}
            <Carousel width={childWidth}>{props.contacts.map(render)}</Carousel>

            {props.includeMapView && (
                <GoogleMaps zoom={zoom} center={center} setZoom={setZoom} setCenter={setCenter} />
            )}
        </Flex>
    );
};

export default ContactInfo;
