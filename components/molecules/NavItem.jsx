import { styled, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

const NavItem = (props) => {
    if (props.attributes.children === undefined || props.attributes.children.data.length === 0) {
        return (
            <Link href={props.attributes.url} passHref>
                <a rel="noopener noreferrer">
                    <Typography
                        sx={{
                            fontWeight: "500",
                            ":hover": {
                                color: (theme) => theme.color.secondary
                            }
                        }}
                    >
                        {props.attributes.label}
                    </Typography>
                </a>
            </Link>
        );
    }

    const [isOpen, setIsOpen] = useState(false);
    const clickHandler = (e) => {
        e.stopPropagation();
        setIsOpen((prev) => !prev);
    };

    return (
        <Parent onClick={clickHandler}>
            <Typography
                sx={{
                    fontWeight: "500",
                    ":hover": {
                        color: (theme) => theme.color.secondary
                    }
                }}
            >
                {props.attributes.label}
            </Typography>
            <Children className={`children ${isOpen && "open"}`}>
                {props.attributes.children.data.map((navItem) => (
                    <NavItem key={navItem.id} {...navItem} />
                ))}
            </Children>
        </Parent>
    );
};

const Parent = styled("div")({
    position: "relative",

    "& > p": {
        cursor: "pointer"
    },

    "@media (max-width: 1200px)": {
        ".open": {
            maxHeight: "unset",
            transform: "translateY(0%) scaleY(1)",
            transition: "all 200ms ease"
        }
    },
    "@media (min-width: 1200px)": {
        "&:hover > .children": {
            transform: "translateY(0%) scaleY(1)"
        }
    }
});

const Children = styled("div")(({ theme }) => ({
    "@media (max-width: 1200px)": {
        position: "relative",
        "&::before": {
            content: "''",
            position: "absolute",
            width: "2px",
            height: "100%",
            background: theme.color.secondary,
            left: "0"
        },
        paddingLeft: "1rem",
        maxHeight: 0,
        transform: "translateY(-50%) scaleY(0)"
    },

    "@media (min-width: 1200px)": {
        "&:hover": {
            maxHeight: "unset",
            opacity: 1
        },
        borderRadius: "0.5rem",
        position: "absolute",
        left: "-1rem",
        transition: "transform 250ms",
        transform: "translateY(-50%) scaleY(0)",
        transitionDelay: "100ms",
        background: "white",
        width: "max(100% + 4rem, 16rem)",
        padding: "1rem",
        boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
        "& .children": {
            position: "absolute",
            top: 0,
            left: "100%"
        }
    }
}));

export default NavItem;
