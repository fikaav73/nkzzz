import { useMemo } from "react";
import { ListItem } from "@mui/material";
import buildURL from "../../utils/urlBuilder";

const Field = (props) => {
    const href = useMemo(() => {
        if (props.file.data !== null) return buildURL(props.file.data.attributes.url);
        if (props.url !== null) return props.url;
        return false;
    }, [props]);

    return (
        <ListItem>
            {href ? (
                <a href={href} download={props.alternativeText} target="_blank" rel="noreferrer">
                    {props.label}
                </a>
            ) : (
                props.label
            )}
        </ListItem>
    );
};

export default Field;
