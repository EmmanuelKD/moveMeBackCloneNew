import React from "react";
import { Outlet } from "react-router";
import Appbar from "../components/shared/Appbar";
import ContentBody from "../components/shared/Body";
import Footer from "../components/shared/AppFooter";
 
export default function MainLayout() {

    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
        React.useState<null | HTMLElement>(null);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);


    function handleScroll(event: Event) {
        var carrouselRef = document.getElementById("carrouselMain");
        var AppbarRef = document.getElementById("Appbar");
        if (AppbarRef && carrouselRef) {
            var AppbarHeight = AppbarRef?.offsetHeight;
            var carrouselHeight = carrouselRef?.offsetHeight;
            const offsetHeight = AppbarHeight + carrouselHeight;
            var screenPosition = window.scrollY;
            if (screenPosition > offsetHeight) {
                if (AppbarRef.style.position !== "fixed") {
                    AppbarRef.style.position = "fixed"
                    AppbarRef.style.width = "100vw"
                    AppbarRef.style.opacity = "1"
                }

            } else {
                if (AppbarRef.style.position !== "static") {
                    AppbarRef.style.position = "static"
                }
            }

        }

    }
    React.useEffect(() => {

        window.addEventListener("scroll", (e) => handleScroll(e));
        return () => (
            window.removeEventListener("scroll", (e) => handleScroll(e))
        );
    })

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
            <Appbar handleMobileMenuOpen={handleMobileMenuOpen} handleMobileMenuClose={handleMobileMenuClose} isMobileMenuOpen={isMobileMenuOpen} />
            <ContentBody open={isMobileMenuOpen} content={<Outlet />} />
            <Footer />
        </React.Fragment>
    );
}