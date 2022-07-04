/* eslint-disable no-undef */
import { Children, cloneElement, isValidElement, useEffect, useRef, useState } from "react";
import useDeepCompareEffectForMaps from "../../hooks/google";

const GoogleMap = ({ onClick, onIdle, children, style, ...options }) => {
    const ref = useRef(null);
    const [map, setMap] = useState();

    useEffect(() => {
        if (ref.current === null || map) return;
        setMap(new window.google.maps.Map(ref.current, {}));
    }, [ref.current, map]);

    useDeepCompareEffectForMaps(() => {
        if (map) {
            map.setOptions(options);
        }
    }, [map, options]);

    useEffect(() => {
        if (!map) return;

        ["click", "idle"].forEach((eventName) => google.maps.event.clearListeners(map, eventName));

        if (onClick) {
            map.addListener("click", onClick);
        }

        if (onIdle) {
            map.addListener("idle", () => onIdle(map));
        }
    }, [map, onClick, onIdle]);

    return (
        <>
            <div ref={ref} style={style} />
            {Children.map(children, (child) => {
                if (isValidElement(child)) {
                    return cloneElement(child, { map });
                }
            })}
        </>
    );
};

export default GoogleMap;
