import Link from "next/link";
import Nav from "../styled/Nav.styled";
import NavItem from "../molecules/NavItem";
import { Box, IconButton, styled, SwipeableDrawer } from "@mui/material";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Image from "next/image";
import { ROUTES } from "../../constants/routes";

const Navigation = (props) => {
    const menuItems = props.attributes.menuItems.data;

    const [sideMenu, setSideMenu] = useState(false);

    const handleOpen = () => {
        setSideMenu(true);
    };

    const handleClose = () => {
        setSideMenu(false);
    };

    return (
        <Nav>
            <Link href={ROUTES.HOME} passHref>
                <a rel="noopener noreferrer" aria-label="city logo">
                    <img src="/images/logo-4.png" alt="city logo" />
                </a>
            </Link>

            <IconButton
                sx={{
                    display: { lg: "none" },
                    color: (theme) => theme.color.secondary
                }}
                aria-label="menu"
                onClick={handleOpen}
            >
                <GiHamburgerMenu />
            </IconButton>
            <SwipeableDrawer
                anchor={"right"}
                open={sideMenu}
                onClose={handleClose}
                onOpen={handleOpen}
            >
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: "1rem",
                        padding: "2rem",
                        maxWidth: "70vw",
                        textTransform: "uppercase"
                    }}
                >
                    <Link href={ROUTES.HOME} passHref>
                        <a rel="noopener noreferrer" aria-label="logo">
                            <ImageContainer url={props.url}>
                                <Image
                                    src={"/images/logo-4.png"}
                                    layout="fill"
                                    objectFit="scale-down"
                                    alt="logo"
                                />
                            </ImageContainer>
                        </a>
                    </Link>
                    {menuItems.map((menuItem) => (
                        <NavItem key={menuItem.id} {...menuItem} />
                    ))}
                </Box>
            </SwipeableDrawer>

            <LargeContainer
                sx={{
                    display: { xs: "none", lg: "flex" },
                    justifyContent: "space-between",
                    flexGrow: 1,
                    px: "4rem"
                }}
            >
                {menuItems.map((menuItem) => (
                    <NavItem key={menuItem.id} {...menuItem} />
                ))}
            </LargeContainer>
        </Nav>
    );
};

export default Navigation;

const LargeContainer = styled("div")(({ theme }) => ({
    "@keyframes Underline": {
        from: {
            width: "0%"
        },
        to: {
            width: "100%"
        }
    },

    "@keyframes RemoveUnderline": {
        from: {
            width: "100%"
        },
        to: {
            width: "0%"
        }
    },

    "& > *": {
        cursor: "pointer",
        position: "relative"
    },

    "& > ::after": {
        position: "absolute",
        top: "100%",
        left: 0,
        content: "''",
        height: "3px",
        background: theme.color.secondary,
        animation: "RemoveUnderline ease 200ms forwards"
    },

    "& > :hover::after": {
        animation: "Underline ease 200ms forwards"
    }
}));

const ImageContainer = styled("div")({
    position: "relative",
    width: "100%",
    height: "4rem"
});
