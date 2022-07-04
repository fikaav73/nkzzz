import { styled, Tooltip } from "@mui/material";
import { useMemo } from "react";
import { BsFillPersonFill } from "react-icons/bs";

const VisitCount = (props) => {
    const shortVisits = useMemo(() => {
        if (props.visits >= 1_000) return (props.visits / 1_000).toFixed(2) + "k";
        if (props.visits >= 1_000_000) return (props.visits / 1_000_000).toFixed(2) + "m";
        if (props.visits >= 1_000_000_000) return (props.visits / 1_000_000_000).toFixed(2) + "b";
        return props.visits;
    }, [props.visits]);

    return (
        <Tooltip title={props.visits} placement="bottom">
            <Counter>
                {shortVisits}
                <BsFillPersonFill />
            </Counter>
        </Tooltip>
    );
};

const Counter = styled("div")({
    "@keyframes ViewCount": {
        from: {
            boxShadow: "0 0 15px #000 inset"
        },
        to: {
            boxShadow: "0 0 5px #000 inset"
        }
    },
    "@keyframes ViewCountBack": {
        from: {
            boxShadow: "0 0 5px #000 inset"
        },
        to: {
            boxShadow: "0 0 15px #000 inset"
        }
    },

    position: "relative",
    borderRadius: "5px 25px 5px 25px ",
    fontFamily: "Nunito, sans-serif",
    height: "75%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "1rem",
    zIndex: "1",
    background: "#273170",

    "&::before": {
        boxShadow: "0 0 15px #000 inset",
        position: "absolute",
        content: "''",
        top: "0",
        left: "1px",
        background:
            "linear-gradient(0deg, rgba(158,128,36,1) 0%, rgba(214,175,55,1) 50%, rgba(137,111,31,1) 100%)",
        width: "100%",
        height: "100%",
        borderRadius: "inherit",
        zIndex: "-1",
        borderLeft: "7px",
        borderTop: "10px",
        animation: "ViewCountBack .5s ease forwards"
    },
    "&:hover::before": {
        animation: "ViewCount .5s ease forwards"
    },
    "&::after": {
        position: "absolute",
        content: "''",
        top: "50%",
        left: "50%",
        width: "90%",
        height: "80%",
        border: "2px solid white",
        zIndex: "1",
        borderRadius: "0 25px 5px 25px",
        transform: "translate(-50%, -50%)",
        borderTop: 0,
        borderRight: 0,
        borderLeft: 0
    }
});

export default VisitCount;
