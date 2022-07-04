import { styled } from "@mui/material";
import Link from "next/link";
import DynamicIcon from "../atoms/DynamicIcon";

const IconLink = ({ url, icon, text }) => {
    let content = (
        <LinkContainer>
            <LinkIcon>{<DynamicIcon icon={icon} size="2rem" />}</LinkIcon>
            <p>{text}</p>
        </LinkContainer>
    );
    if (url !== undefined) {
        content = (
            <Link href={url} passHref>
                <a rel="noopener noreferrer">
                    <LinkContainer>
                        <LinkIcon>{<DynamicIcon icon={icon} size="2rem" />}</LinkIcon>
                        <p>{text}</p>
                    </LinkContainer>
                </a>
            </Link>
        );
    }

    return content;
};

const LinkContainer = styled("div")(({ theme }) => ({
    "@keyframes UnderlineLink": {
        from: {
            width: "0rem"
        },
        to: {
            width: "3rem"
        }
    },

    "@keyframes RemoveUnderlineLink": {
        from: {
            width: "3rem"
        },
        to: {
            width: "0rem"
        }
    },

    "@keyframes CardElevate": {
        from: {
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 0px",
            transform: "scale(1)"
        },
        to: {
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            transform: "scale(1.1)"
        }
    },

    "@keyframes CardDepres": {
        from: {
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            transform: "scale(1.1)"
        },
        to: {
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 0px 0px",
            transform: "scale(1)"
        }
    },

    position: "relative",
    cursor: "pointer",
    padding: "3rem",
    display: "flex",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    flexDirection: "column",
    background: "white",
    animation: "CardDepres 500ms forwards",
    "&:hover": {
        zIndex: 1,
        animation: "CardElevate 500ms forwards"
    },

    "&:hover > :first-of-type": {
        color: theme.color.secondary,
        background: "white",
        transition: "all 500ms ease"
    },

    "&::after": {
        position: "absolute",
        content: "''",
        height: "2px",
        background: theme.color.secondary,
        bottom: "3rem",
        left: "50%",
        transform: "translate(-50%, 0)",
        animation: "RemoveUnderlineLink 500ms ease"
    },

    "&:hover::after": {
        animation: "UnderlineLink 500ms ease forwards"
    }
}));

const LinkIcon = styled("div")(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50%",
    background: theme.color.secondary,
    padding: "2rem",
    color: "white"
}));

export default IconLink;
