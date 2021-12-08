import MenuIcon from '@mui/icons-material/Menu';
import { Button, Drawer, Fade } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';
import Tooltip, { tooltipClasses, TooltipProps } from '@mui/material/Tooltip';
import { useTheme } from '@mui/system';
import * as React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from "../../assets/images/imagesGetter";





const appbarOptions: {
    title: string,
    hint: string,
    link: string,
    subTitles: { title: string, link: string }[] | null
}[] = [{
    title: "About",
    hint: "Find out more about Movemeback from our vision,  to FAQs or just get in contact",
    link: "",
    subTitles: [{
        title: "About Us",
        link: "/about"
    }, {
        title: "Community Blog",
        link: "/community"
    }
        , {
        title: "Partners & Friends",
        link: "/partners"
    }
        , {
        title: "Faqs",
        link: "/faqs"
    }
        , {
        title: "Contact Us",
        link: "/contact"
    }
        , {
        title: "Invite Others",
        link: "/referral"
    }
    ]

},
{
    title: "Careers",
    hint: "Exciting African Career,job internship, enntrepreneurial and investment opportunities",
    link: "",
    subTitles: [{
        title: "Career Opportunities",
        link: "/careers"
    }, {
        title: "Career Guides",
        link: "/careers/resources/guides"
    }
    ]

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
    link: "",
    subTitles: [{
        title: "Insight Articles",
        link: "/insight"
    }, {
        title: "Pluse Newspaper",
        link: "/pulse"
    }
    ]

},
{
    title: "Companies",
    link: "/companies",
    hint: "Are you an Africa company or organization looking for international talent,partners or investors?",
    subTitles: null
}]

const LogoBox = styled(Box)(({ theme }) => ({

    [theme.breakpoints.down("lg")]: {
        display: "flex",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"

    }
}));

const LogoImage = styled('img')(({ theme }) => ({
    width: "300px",
    [theme.breakpoints.down("lg")]: {
        justifySelf: "center",
        alignSelf: "center",
        width: "222px",


    }
}));


const HtmlTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        backgroundColor: '#f5f5f9',
        color: 'rgba(0, 0, 0, 0.87)',
        maxWidth: 220,
        fontSize: theme.typography.pxToRem(12),
        border: '1px solid #dadde9',
    },
}));

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

const ListButton = styled(Button, { shouldForwardProp: (prop) => prop !== 'clicked' })<{
    clicked?: boolean;
}>(({ theme, clicked }) => ({
    color: clicked ? theme.palette.primary.dark : theme.palette.secondary.main,
    ...(clicked && {
        fontWeight: 700,

    }),
    marginLeft: "5px",
    marginRight: "5px",
    fontWeight: 400,
    fontSize: "14px",
    lineHeight: "20px",
    "&:hover": {
        ...(!clicked && {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.common.white
        }),
        ...(clicked && {
            backgroundColor: "transparent",
        })
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

const StyledAppBarButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    margin: theme.spacing(.5),
    height: "37px",
    marginLeft: "5px",
    marginRight: "5px",


}))
const AppBarMain = styled(Box)(({ theme }) => ({
    zIndex: theme.zIndex.appBar,
    [theme.breakpoints.down("lg")]: {


    }
}))

const StyledAppBar = styled(AppBar)(({ theme }) => ({
    position: "relative",
    zIndex: theme.zIndex.drawer + 1,
    color: theme.palette.secondary.main,
    borderBottom: `.3px  solid ${theme.palette.secondary.light}`,
    height: "85px",

    paddingLeft: "130px",
    paddingRight: "130px",

    backgroundColor: "white", //theme.palette.secondary.light,    height: "85px",
    [theme.breakpoints.down("lg")]: {
        height: "58px",
        borderBottom: "none",
        paddingLeft: "67px",
        paddingRight: "67px",
    }
}))

const StyledDrawer = styled(Drawer)(({ theme }) => ({
    display: "none",
    [theme.breakpoints.down("lg")]: {
        display: "block",
    }
}))

const StyledLink = styled(Link)(({ theme }) => ({
    textDecoration: "none",
    color: "inherit"
}))


type appBarProps = {
    isMobileMenuOpen: boolean,
    handleMobileMenuClose: () => void,
    handleMobileMenuOpen: (event: React.MouseEvent<HTMLElement>) => void,
}

export default function Appbar(props: appBarProps) {
    const { isMobileMenuOpen,
        handleMobileMenuClose,
        handleMobileMenuOpen,

    } = props;
    const theme = useTheme();
    const AppbarOptions = React.useMemo(() => appbarOptions, []);

    // nav link state
    const [linkAnchorEl, setLinkAnchorEl] = React.useState<null | { anchore: HTMLElement, title: string }>(null);
    const handleLinkClick = (event: React.MouseEvent<HTMLElement>, title: string) => {
        setLinkAnchorEl({ anchore: event.currentTarget, title });
    };

    const handleLinkClose = () => {
        setLinkAnchorEl(null);
    };

    // React.useEffect(()=>{
    //     alert("reload")
    // },[])



    const NavMenu = (<StyledUnOrderedList>
        {
            AppbarOptions.map((data, index) =>
            (<React.Fragment >
                <HtmlTooltip
                    key={index}
                    title={
                        <React.Fragment>
                            {
                                data.hint
                            }
                        </React.Fragment>
                    }
                >{data.link !== "" ?
                    <StyledLink to={data.link}>
                        <ListButton onClick={(e) => handleLinkClick(e, data.title)} clicked={linkAnchorEl?.title === data.title}>
                            {data.title.toUpperCase()}
                        </ListButton>
                    </StyledLink> :
                    <ListButton onClick={(e) => handleLinkClick(e, data.title)} clicked={linkAnchorEl?.title === data.title}>
                        {data.title.toUpperCase()}
                    </ListButton>
                    }
                </HtmlTooltip>
                <Menu
                    anchorEl={linkAnchorEl?.anchore}
                    open={linkAnchorEl?.title === data.title && data.subTitles !== null}
                    onClose={handleLinkClose}
                    onClick={handleLinkClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            overflow: 'visible',
                            border: `.3px  solid ${theme.palette.secondary.light}`,
                            filter: `drop-shadow(0px 1px 1px ${theme.palette.secondary.light})`,
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                borderLeft: `.3px  solid ${theme.palette.secondary.light}`,
                                borderTop: `.3px  solid ${theme.palette.secondary.light}`,
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                                [theme.breakpoints.down("lg")]: {
                                    left: 50,
                                }
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    {data.subTitles?.map((subData, subIndex) => {
                        return (
                            <StyledLink to={subData.link}>
                                <MenuItem key={subIndex}
                                    sx={{
                                        color: theme.palette.secondary.main,
                                        "&:hover": {
                                            backgroundColor: theme.palette.primary.main,
                                            color: theme.palette.common.white

                                        }
                                    }}
                                    onClick={handleLinkClose}>
                                    {subData.title.toUpperCase()}
                                </MenuItem>
                            </StyledLink>
                        )
                    })
                    }
                </Menu>
            </React.Fragment>
            ))
        }
    </StyledUnOrderedList>
    )



    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <React.Fragment>
            <StyledDrawer
                variant="persistent"
                elevation={0}
                anchor={"top"}
                open={isMobileMenuOpen}
                onClose={handleMobileMenuClose}
            >
                <Toolbar />
                {NavMenu}
            </StyledDrawer>
        </React.Fragment>
    );

    return (


        <AppBarMain sx={{ flexGrow: 1 }} id="Appbar">
            <StyledAppBar position={"static"} elevation={.5}
                sx={{
                }}
            >
                <Toolbar style={{ height: "100%" }}>

                    <LogoBox sx={{ display: { md: 'flex', alignItems: "center" } }}>
                        <LogoImage src={Logo} alt="logo" />
                    </LogoBox>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', lg: 'flex', alignItems: "center" } }}>

                        {NavMenu}
                        <StyledAppBarButton variant="contained" disableElevation>Join</StyledAppBarButton>
                        <StyledAppBarButton variant="contained" disableElevation style={{ backgroundColor: theme.palette.primary.dark }}>Login</StyledAppBarButton>

                    </Box>
                    <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
                        <Button

                            variant="outlined"
                            size="small"
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="secondary"
                        >
                            <MenuIcon />
                        </Button>
                    </Box>
                </Toolbar>
            </StyledAppBar>
            {renderMobileMenu}
        </AppBarMain >
    );
}

