import { IconButton } from "@mui/material";
import Link from "next/link";
import DynamicIcon from "./DynamicIcon";

const SimpleIconLink = ({ icon, link, label }) => {
    let content = (
        <IconButton>
            <DynamicIcon size={"4rem"} icon={icon} />
        </IconButton>
    );
    if (link === undefined) {
        content = (
            <Link href={`/${link}`} passHref>
                <a target="_blank" rel="noopener noreferrer" aria-label={label}>
                    <IconButton>
                        <DynamicIcon size={"4rem"} icon={icon} />
                    </IconButton>
                </a>
            </Link>
        );
    }
    return content;
};

export default SimpleIconLink;
