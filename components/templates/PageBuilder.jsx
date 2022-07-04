import Head from "next/head";
import { Fragment } from "react";
import Flex from "../styled/Flex.styled";
import FactoryPage from "./FactoryPage";

const PageBuilder = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{props.page.attributes.title}</title>
                <meta charSet="utf-8" />
            </Head>
            <Flex direction="column" gap=".5rem" margin="2rem 0 5% 0">
                {props.page.attributes.content.map((component) => (
                    <FactoryPage key={component.id + component.__component} {...component} />
                ))}
            </Flex>
        </Fragment>
    );
};

export default PageBuilder;
