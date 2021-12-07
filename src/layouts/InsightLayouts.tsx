import { Typography } from "@mui/material";
import React, { useEffect } from "react";
import { Outlet } from "react-router";
import Appbar from "../components/shared/Appbar";
import ContentBody from "../components/shared/Body";
import InsightAppbar from "../components/shared/InsightAppbar";

export default function InsightLayout() {
 
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    React.useEffect(() => {

    }, [])
    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };
    const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
        if (isMobileMenuOpen)
            handleMobileMenuClose()
        else
            setMobileMoreAnchorEl(event.currentTarget);
    };

 

    return (
        <React.Fragment>
            <InsightAppbar handleMobileMenuOpen={handleMobileMenuOpen} handleMobileMenuClose={handleMobileMenuClose} isMobileMenuOpen={isMobileMenuOpen} />
            <ContentBody open={isMobileMenuOpen} content={<Outlet />} />
        </React.Fragment>
    );
}