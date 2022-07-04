import { useCallback, useEffect } from "react";
import { debounce } from "../utils";

const useWindowResize = (onResize, dependecyArray = [], debounceDelay = 250) => {
    const debounceResize = useCallback(debounce(onResize, debounceDelay), [
        onResize,
        ...dependecyArray
    ]);

    useEffect(() => {
        onResize();
        window.addEventListener("resize", debounceResize);

        return () => window.removeEventListener("resize", debounceResize);
    }, [debounceResize]);
};

export default useWindowResize;
