import { styled } from "@mui/material";
import { useRef } from "react";
import { useCallback, useEffect } from "react";
import { BsFillArrowUpSquareFill } from "react-icons/bs";
import { throttle } from "../../utils";

const BackToTop = () => {
    const upRef = useRef(null);

    const handleScroll = useCallback(
        throttle((event) => {
            if (upRef.current === null) return;
            if (
                event.srcElement.body.scrollTop > 50 ||
                event.srcElement.documentElement.scrollTop > 50
            ) {
                upRef.current.style.transform = "scale(1)";
                return;
            }
            if (
                event.srcElement.body.scrollTop === 0 ||
                event.srcElement.documentElement.scrollTop === 0
            ) {
                upRef.current.style.transform = "scale(0)";
            }
        }, 200),
        [upRef.current]
    );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [handleScroll]);

    const scrollTop = useCallback(() => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        });
    }, []);

    return (
        <Container ref={upRef} onClick={scrollTop}>
            <BackToTopArrow size="2rem" />
        </Container>
    );
};
const Container = styled("div")({
    position: "fixed",
    bottom: ".5em",
    right: ".5rem",
    cursor: "pointer",
    zIndex: 99,

    transition: "transform 100ms",
    transform: "scale(0)"
});

const BackToTopArrow = styled(BsFillArrowUpSquareFill)(({ theme }) => ({
    color: theme.color.secondary,
    "&:hover": {
        color: theme.color.secondaryHover
    },
    "&:active": {
        color: theme.color.secondaryActive
    }
}));

export default BackToTop;
