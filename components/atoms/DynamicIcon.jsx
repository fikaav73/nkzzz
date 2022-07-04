import dynamic from "next/dynamic";
import { useMemo } from "react";

const DynamicIcon = ({ icon, className, color, size }) => {
    const Icon = useMemo(() => {
        let family = icon.substring(0, 2).toLowerCase();
        if (family === "io") {
            family = icon.substring(0.5) === "IoIos" ? "io" : "io5";
        }
        switch (family) {
            case "ai":
                return dynamic(() => import("react-icons/ai").then((icons) => icons[icon]));
            case "bs":
                return dynamic(() => import("react-icons/bs").then((icons) => icons[icon]));
            case "bi":
                return dynamic(() => import("react-icons/bi").then((icons) => icons[icon]));
            case "di":
                return dynamic(() => import("react-icons/di").then((icons) => icons[icon]));
            case "fi":
                return dynamic(() => import("react-icons/fi").then((icons) => icons[icon]));
            case "fc":
                return dynamic(() => import("react-icons/fc").then((icons) => icons[icon]));
            case "fa":
                return dynamic(() => import("react-icons/fa").then((icons) => icons[icon]));
            case "gi":
                return dynamic(() => import("react-icons/gi").then((icons) => icons[icon]));
            case "go":
                return dynamic(() => import("react-icons/go").then((icons) => icons[icon]));
            case "gr":
                return dynamic(() => import("react-icons/gr").then((icons) => icons[icon]));
            case "hi":
                return dynamic(() => import("react-icons/hi").then((icons) => icons[icon]));
            case "im":
                return dynamic(() => import("react-icons/im").then((icons) => icons[icon]));
            case "io":
                return dynamic(() => import("react-icons/io").then((icons) => icons[icon]));
            case "io5":
                return dynamic(() => import("react-icons/io5").then((icons) => icons[icon]));
            case "md":
                return dynamic(() => import("react-icons/md").then((icons) => icons[icon]));
            case "ri":
                return dynamic(() => import("react-icons/ri").then((icons) => icons[icon]));
            case "si":
                return dynamic(() => import("react-icons/si").then((icons) => icons[icon]));
            case "ti":
                return dynamic(() => import("react-icons/ti").then((icons) => icons[icon]));
            case "vs":
                return dynamic(() => import("react-icons/vsc").then((icons) => icons[icon]));
            case "wi":
                return dynamic(() => import("react-icons/wi").then((icons) => icons[icon]));
            case "cg":
                return dynamic(() => import("react-icons/cg").then((icons) => icons[icon]));
        }
    }, [icon]);
    return <>{Icon && <Icon size={size} className={className} color={color} />}</>;
};

export default DynamicIcon;
