import { Fragment } from "react";
import Navigation from "../templates/Navigation";
import Header from "../templates/Header";
import BackToTop from "../organisms/BackToTop";
import Footer from "../organisms/Footer";

const MainLayout = (props) => {
    return (
        <Fragment>
            <Header visits={props.visits} />
            <Navigation {...props.navigation} />
            <main>{props.children}</main>
            <Footer {...props.configuration.attributes} links={props.footerLinks.attributes.link} />
            <BackToTop />
        </Fragment>
    );
};

export default MainLayout;
