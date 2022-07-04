/* eslint-disable no-undef */
import { createCustomEqual } from "fast-equals";
import { useEffect, useRef } from "react";

const deepCompareEqualsForMaps = createCustomEqual((deepEqual) => (a, b) => {
    if (a instanceof google.maps.LatLng || b instanceof google.maps.LatLng) {
        return new google.maps.LatLng(a).equals(new google.maps.LatLng(b));
    }

    // TODO extend to other types

    // use fast-equals for other objects
    return deepEqual(a, b);
});

const useDeepCompareMemoize = (value) => {
    const ref = useRef();
    if (!deepCompareEqualsForMaps(value, ref.current)) {
        ref.current = value;
    }

    return ref.current;
};

const useDeepCompareEffectForMaps = (callback, dependencies) => {
    useEffect(callback, dependencies.map(useDeepCompareMemoize));
};

export default useDeepCompareEffectForMaps;
