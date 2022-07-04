import { Typography } from "@mui/material";
import { memo } from "react";
import ExternalLinks from "../organisms/ExternalLinks";
import PageSlider from "../organisms/PageSlider";
import PageText from "../organisms/PageText";
import PageTitle from "../organisms/PageTitle";
import IconNav from "../organisms/IconNav";
import NumericalInfo from "../organisms/NumericalInfo";
import StoryText from "../organisms/StoryText";
import Profile from "../organisms/Profile";
import GoldenLinks from "../organisms/GoldenLinks";
import BoxLinks from "../organisms/BoxLinks";
import IconLinksWithText from "../organisms/IconLinksWithText";
import SimpleIconLinks from "../organisms/SimpleIconLinks";
import List from "../organisms/List";
import MunicipalitiesTable from "../organisms/MunicipalitiesTable";
import NumbersTable from "../organisms/NumbersTable";
import ContactInfo from "../organisms/ContactInfo";
import TextTable from "../organisms/TextTable";
import UserRequestForm from "./UserRequestForm";
import SliderLatestNews from "../organisms/SliderLatestNews";

const FactoryPage = (props) => {
    switch (props.__component) {
        case "page.title":
            return <PageTitle title={props.text} />;

        case "page.text":
            return <PageText text={props.text} />;

        case "slider.slider":
            return <PageSlider slide={props.slide} />;

        case "icon-links.icon-links":
            return <IconNav data={props.Link} />;

        case "external-links.external-links":
            return <ExternalLinks links={props.externalLinks} />;

        case "numerical-info.numerical-info":
            return <NumericalInfo info={props.numericalInfo} background={props.background} />;

        case "page.story-text":
            return <StoryText data={props} />;

        case "external-links.golden-links":
            return <GoldenLinks data={props} />;

        case "profile.profile":
            return <Profile {...props} />;

        case "box-links.box-links":
            return <BoxLinks links={props.boxLinks} />;

        case "icon-links.icon-links-text":
            return <IconLinksWithText data={props} />;

        case "icon-links.simple-icon-links":
            return <SimpleIconLinks data={props} />;

        case "list.list":
            return <List list={props.data} />;

        case "contacts.contacts":
            return <ContactInfo {...props} />;

        case "request-form.form":
            return <UserRequestForm data={props.files} />;

        case "table.municipalities":
            return <MunicipalitiesTable data={props.municipality} />;

        case "table.important-numbers":
            return <NumbersTable data={props.category} />;

        case "table.text-table":
            return <TextTable data={props} />;

        case "slider.news-slider":
            return (
                <SliderLatestNews
                    latestNews={props.latestNews}
                    perStack={props.perStack}
                    backgroundImage={props.backgroundImage}
                />
            );

        default:
            return <Typography>Not Found {props.__component}</Typography>;
    }
};

export default memo(FactoryPage);
