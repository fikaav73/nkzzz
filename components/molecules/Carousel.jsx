import { styled, useTheme } from "@mui/material";
import React from "react";
import { useCallback } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FiArrowRight, FiArrowLeft } from "react-icons/fi";
import ButtonNav from "../styled/ButtonNav.styled";

const Slider = (props) => {
    const theme = useTheme();
    const renderArrowNext = useCallback(
        (onClickHandler, hasNext, label) =>
            hasNext && (
                <ButtonNav
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    right="calc(50% - 70px)"
                    variant="contained"
                >
                    <FiArrowRight size="1.5rem" />
                </ButtonNav>
            ),
        []
    );

    const renderArrowPrev = useCallback(
        (onClickHandler, hasPrev, label) =>
            hasPrev && (
                <ButtonNav
                    type="button"
                    onClick={onClickHandler}
                    title={label}
                    left="calc(50% - 70px)"
                >
                    <FiArrowLeft size="1.5rem" />
                </ButtonNav>
            ),
        []
    );

    const renderIndicator = useCallback((onClickHandler, isSelected, index, label) => {
        if (isSelected) {
            return (
                <li
                    style={{ ...indicatorStyles, background: theme.color.primary }}
                    aria-label={`Selected: ${label} ${index + 1}`}
                    title={`Selected: ${label} ${index + 1}`}
                />
            );
        }
        return (
            <li
                style={indicatorStyles}
                onClick={onClickHandler}
                onKeyDown={onClickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`${label} ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
            />
        );
    }, []);

    return (
        <Container>
            <Carousel
                width={props.width}
                autoPlay
                infiniteLoop
                showStatus={false}
                emulateTouch
                showThumbs={false}
                showArrows={props.showArrows}
                renderArrowNext={renderArrowNext}
                renderArrowPrev={renderArrowPrev}
                renderIndicator={renderIndicator}
                interval={5000}
            >
                {props.children}
            </Carousel>
        </Container>
    );
};

const Container = styled("div")({
    "& ul.control-dots": {
        position: "relative",
        marginBottom: 0
    },
    marginBottom: ".5rem"
});

const indicatorStyles = {
    background: "#fff",
    boxShadow: "0 0 5px 1px gray",
    borderRadius: "50%",
    width: 16,
    height: 16,
    display: "inline-block",
    margin: "0 8px",
    cursor: "pointer"
};

export default Slider;
