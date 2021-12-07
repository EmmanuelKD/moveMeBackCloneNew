import { Navigate, useRoutes } from "react-router";
import CommunityLayout from "../layouts/CommunityLayout";
import InsightLayout from "../layouts/InsightLayouts";
import MainLayout from "../layouts/MainLayout";
import Community from "../screens/Community/Community";
import CommunitySearchResult from "../screens/Community/SearchResult";
import CareerGuides from "../screens/Insight/CareerGuides";
import Careers from "../screens/Insight/Careers";
import CategoryAllThingsAfrica from "../screens/Insight/CategoryAllThingsAfrica";
import CaterlogConnectivity from "../screens/Insight/CaterlogConnectivity";
import CaterlogCulturalIdentity from "../screens/Insight/CaterlogCulturalIdentity";
import CaterlogHealthcare from "../screens/Insight/CaterlogHealthcare";
import Companies from "../screens/Insight/Companies";
import Events from "../screens/Insight/Events";
import Initiatives from "../screens/Insight/Initiatives";
import InsightContact from "../screens/Insight/InsightContact";
import InsightMain from "../screens/Insight/InsightMain";
import InsightSearchResult from "../screens/Insight/InsightSearchResult";
import Pulse from "../screens/Insight/Pulse";
import AboutUs from "../screens/Main/AboutUs";
import ContactUs from "../screens/Main/ContactUs";
import Faqs from "../screens/Main/Faqs";
import OurPartners from "../screens/Main/OurPartners";
import Referral from "../screens/Main/Referral";

export default function AppRouter() {

    // the whole app is devided into three main section , mainn app , community section and insight
    return useRoutes([

        {
            path: "/community",
            element: <CommunityLayout />,
            children: [
                { path: "/community", element: <Community /> },
                { path: "insight/searchResult", element: <CommunitySearchResult /> },

            ]

        }
        , {
            path: "/insight",
            element: <InsightLayout />,
            children: [
                { path: "/insight", element: <InsightMain /> },
                { path: "category/connectivity", element: <CaterlogConnectivity /> },
                { path: "category/culture-identity", element: <CaterlogCulturalIdentity /> },
                { path: "category/healthcare", element: <CaterlogHealthcare /> },
                { path: "category/all-things-africa", element: <CategoryAllThingsAfrica /> },
                { path: "pulse", element: <Navigate to="/pulse" /> },
                { path: "insight/contact", element: <InsightContact /> },
                { path: "insight/careers", element: <Navigate to={"/careers"} /> },
                { path: "insight/about", element: <Navigate to={"/about"} /> },
                { path: "insight/events", element: <Navigate to={"/events"} /> },
                { path: "insight/initiatives", element: <Navigate to={"/initiatives"} /> },
                { path: "insight/searchResult", element: <InsightSearchResult /> },

            ]
        }
        ,
        {
            path: "/",
            element: <MainLayout />,
            children: [
                { path: "/" ,element: <Navigate to="/about" /> },
                { path: "about", element: <AboutUs /> },
                { path: "community", element: <Navigate to={"/community"} /> },
                { path: "partners", element: <OurPartners /> },
                { path: "faqs", element: <Faqs /> },
                { path: "contact", element: <ContactUs /> },
                { path: "referral", element: <Referral /> },

                { path: "careers", element: <Careers /> },
                { path: "careers/resources/guides", element: <CareerGuides /> },
                { path: "events", element: <Events /> },
                { path: "initiatives", element: <Initiatives /> },
                { path: "insight", element: <Navigate to={"/insight"} /> },
                { path: "pulse", element: <Pulse /> },
                { path: "companies", element: <Companies /> },

            ]
        },

    ]);
}