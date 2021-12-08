import { Button } from "@mui/material";
import { styled } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

type FooterProps = {

}

const appbarOptions: {
    title: string,
    hint: string,
    link: string,
    subTitles: { title: string, link: string }[] | null
}[] = [{
    title: "About",
    hint: "Find out more about Movemeback from our vision,  to FAQs or just get in contact",
    link: "/about",
    subTitles: null

},
{
    title: "Careers",
    hint: "Exciting African Career,job internship, enntrepreneurial and investment opportunities",
    link: "/careers",
    subTitles: null

},
{
    title: "Events",
    hint: "Top Africa events from accross the World - Business ,Education, Culture & Social",
    link: "/events",
    subTitles: null

},
{
    title: "Initiatives",
    hint: "High impact African Initiative from accross the World-Programs,Companies & Scholarships acorss Entrepreneurship, Business, Product, Service & Education",
    link: "/initiatives",
    subTitles: null

},
{
    title: "Insight",
    hint: "Actionable African insignt accross Business, Education, Policies, Culture, Education, & Social Categories",
    link: "/insight",
    subTitles: null

},
{
    title: "Companies",
    link: "/companies",
    hint: "Are you an Africa company or organization looking for international talent,partners or investors?",
    subTitles: null
}]
const StyledFooter = styled("footer")(({ theme }) => ({

    backgroundColor: theme.palette.primary.main,
    height: "270px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection:"column",
     
    [theme.breakpoints.down("lg")]: {
        height: "360px",
    }
}))



const StyledUnOrderedList = styled("ul")(({ theme }) => ({
    display: "flex",
    listStyle: "none",

    "li": {
        cursor: "pointer",
        marginRight: "20px",

    },
    [theme.breakpoints.down("lg")]: {
        display: "block"
    }
}));

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "inherit"
}))

const ListButton = styled(Button, { shouldForwardProp: (prop) => prop !== 'clicked' })<{
    clicked?: boolean;
}>(({ theme, clicked }) => ({
    color: clicked ? theme.palette.primary.dark : theme.palette.common.white,
    ...(clicked && {
        fontWeight: 700,

    }),
    flexWrap:"nowrap",
    flexDirection:"column",
    justifyContent:"space-between", 
    height:"100px",
    marginLeft: "5px",
    marginRight: "5px",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    "&:hover": {
        ...(!clicked && {
            // backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.primary.dark
        }),
        // ...(clicked && {
        //     backgroundColor: "transparent",
        // })
    },
    "&:focus": {
        fontWidth: "bold",
        color: theme.palette.primary.dark,
    },
    [theme.breakpoints.down("lg")]: {
        justifyContent: "flex-start",
        width: "100%",

    }
}));


export default function AppFooter(props: FooterProps) {
    const AppbarOptions = React.useMemo(() => appbarOptions, [])


    return (
        <StyledFooter>
            <StyledUnOrderedList>
                {
                    AppbarOptions.map((data, index) =>
                    (<React.Fragment >
                        {data.link !== "" ?
                            <StyledLink to={data.link}>
                                <ListButton  >
                                    {data.title.toUpperCase()}
                                </ListButton>
                            </StyledLink> :
                            <ListButton >
                                {data.title.toUpperCase()}
                            </ListButton>
                        }
                    </React.Fragment>
                    ))
                }
            </StyledUnOrderedList>

            <div>
                &copy; Copyright 2021 - SteppinngStonne Ltd. All rights reserved | Terms of use | Privacy policy
            </div>
        </StyledFooter>
    );
}

// clicked={linkAnchorEl?.title === data.title}
