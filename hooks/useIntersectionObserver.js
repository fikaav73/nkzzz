import { useCallback, useEffect, useState } from "react";

const createObserver = (inViewCallback, options = {}) => {
    const defualtOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0
    };
    return new IntersectionObserver(inViewCallback, Object.assign(defualtOptions, options));
};

const useIntersectionObserver = ({ callback, cleanup }, { root, rootMargin, threshold } = {}) => {
    const [observer, setObserver] = useState(null);

    const inView = useCallback(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const element = entry.target;
                    callback(element);
                    if (!cleanup) observer.unobserve(element);
                } else {
                    if (cleanup) cleanup();
                }
            });
        },
        [callback, cleanup]
    );

    useEffect(() => {
        setObserver(
            createObserver(inView, {
                root,
                threshold,
                rootMargin
            })
        );
    }, [inView]);

    return observer;
};

export default useIntersectionObserver;
