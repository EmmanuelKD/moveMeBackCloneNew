import { Avatar, Typography, useTheme } from "@mui/material";
import { lineHeight, styled } from "@mui/system";
import React from "react";
import { businessWomenMeeting } from "../../assets/images/imagesGetter";
import CarouselItem from "../../components/CarouselItem";
import CarouselComponent from "../../components/Carousels";
import Theme from "../../theme";

const MainBody = styled("div")(({ theme }) => ({
    // backgroundColor: theme.palette.secondary.light,
}));

const FoundersConstainerMain = styled("div")(({ theme }) => (
    {

        alignItems: "center",


    }
))

const FoundersConstainer = styled("div")(({ theme }) => (
    {

        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",

    }
))


const MainContent = styled("div")(({ theme }) => (
    {
        paddingLeft: "141px",
        paddingRight: "141px",

    }
))

const ContentInfoMain = styled("div")(({ theme }) => (
    {
        marginTop: "50px",
        marginBottom: "50px"
    }
))

export default function AboutUs() {

    return (
        <MainBody>
            <CarouselComponent>
                <MainVocalPoint />
            </CarouselComponent>
            <MainContent>
                <ContentInfo
                    titleStyle={{
                        // marginTop: "23px",
                        marginBottom: "24px"
                    }}
                    title="THE MOVEMEBACK VISION"
                    content="
                    Movemeback aspires to drive positive economic and social growth in Africa by providing an internationally 
                    trusted platform through which individuals, organisations and institutions across the world interact and partner with Africa. We’re 
                    making Africa’s most exciting and unique opportunities accessible to talented professionals, students, leaders and influencers, whilst 
                    providing a platform to empower and enable those individuals to contribute to Africa's economic and social growth and development story. 
                    Movemeback's founders, Oyin Solebo & Charles Sekwalor, share a commitment and passion for realising tangible and positive change in Africa, 
                    through the application of business, talent, entrepreneurial problem-solving, and increased access to information and knowledge." />

                <ContentInfo
                    titleStyle={{
                        // marginTop: "23px",
                        marginBottom: "24px"
                    }}
                    title="WHAT WE DO"
                    content="Movemeback is a members-only community, connecting overseas leaders, influencers, talent and organisations to unique, exclusive and 
                    exciting high potential opportunities on the African continent. We focus on distinctive and non-cliché opportunities from senior leadership roles
                    with Africa’s most influential organisations through to unique investments, creative and entrepreneurial partnerships, nation shaping, social impact
                    and more. We’re structured to enable talent relocation - including internships, secondments or remote engagements - and the facilitation of investment
                    and advisory relationships. We're also focused on supporting the move to the continent through services, insights, content and access to a collaborative 
                    community." />

                <ContentInfo
                    titleStyle={{
                        // marginTop: "23px",
                        marginBottom: "24px"
                    }}
                    style={{ marginTop: "80px" }}
                    title="THE PROBLEMS WE ARE ADDRESSING"
                    content="Through our delivery of Movemeback we are seeking to address four main areas of opportunity and challenge:" />

                <ProblemsWeAreAddressingComponent
                    titleStyle={{
                        // marginTop: "23px",
                        marginBottom: "12px"
                    }}
                    title="1. AFRICAN ORGANISATION’S FACE CHALLENGES ACCESSING RELEVANT TALENT AND PARTNERS FOR GROWTH"
                    content={"The growth of African economies not only hinges on governments and infrastructure but equally-so on the growth of private sector companies and organisation. When surveyed, \
                              African organisations failed to cite ‘customer/consumer demand’ as a point of concern. On the contrary - satisfying existing demand majored as a primary consideration, with access to suitable talent and finance \
                              for sustenance and growth being two of the biggest underlying barriers. Whilst Africa has and is building a formidable, young workforce that will rival the most revered labour-markets from India to China to US in years \
                              to come – there currently remains a challenge in locally sourcing the volumes of highly skilled and experienced labour required to continually deliver on Africa’s growth potential and its current trajectory. Similarly, African \
                              financial markets do not offer the liquidity to small and medium size businesses afforded in other regions. To that end,\n\n the sheer volume of African originated talent, experience and wealth residing overseas cannot and should not \
                              be ignored. With 3.5 million diaspora in Europe and ~40m in North America, the diaspora are a nation in their own right. In the USA, Africans are classed as the most educated group, with the percentage of African immigrants with\
                              bachelor degrees 1.5x that of native born Americans. Viewed from another perspective 1/3 of the highly skilled global African population reside in the diaspora; whilst in Ghana, almost 50 % of the tertiary skilled are living outside\
                              of the country. Spending power and wealth are also of note – with US$51.8bn (£34bn) estimated as the net sum of African diaspora remittance to the continent in 2010.These combined statistics cannot be ignored, and with the African\
                              diaspora forming an obvious part of the full-sea of resource that is ready, willing and authentically committed to engaging with the continent, Movemeback’s mission of enabling greater access can only benefit the continent in the long-term."}

                    subTitle="We are enabling progressive African organisations and companies to access top talent, leaders and influencers living abroad who maintain a genuine interest and readiness for operating on the continent:"
                />

                <ProblemsWeAreAddressingComponent
                    titleStyle={{
                        // marginTop: "23px",
                        marginBottom: "12px"
                    }}
                    title="2. THE FULL WEALTH OF AFRICAN OPPORTUNITIES ARE NOT VISIBLE TO OVERSEAS TALENT AND LEADERS"
                    content={" the level of interest in African opportunities is at an all-time high. There is an ever-increasing focus on African opportunities overseas, and \
                            it is of no coincidence that corporate websites have also started to evolve, affording Africa its own section as opposed a bullet point grouped within ‘the rest of EMEA’.\
                            This is progressive, yet when we look more closely, it appears that it is modern-day Western lenses which are being primarily employed to contextualise the scope of the opportunity\
                            on the continent (both within and outside of the region). Based on observations from our own network of leaders, professionals and influencers as well as our personal experiences, the most \
                            visible and accessible opportunities represent those which require the least imagination and local context to conjure: investment banking roles, oil trading and strategy consulting are to name \
                            a few. Whilst the influx of fantastic professional roles are encouraging, the scope of the real opportunities that lies beneath are arguably multiple times more exciting yet harder to find and engage with.\
                            More specifically, the full story is compelling. We have the makings of a ~30 trillion dollar collective economy by 2050, the largest and youngest global workforce by 2035, a US$75 billion ecommerce sector by \
                            2020. This reflects against the backdrop of the world’s 2nd fastest growing region where only 28% are in stable wage-paying jobs, where there are just 1.1 doctors to every 1000 patients, where on average the largest\
                            retailers own no more than 4-5% of their respective markets vs 47% (for the market leader) in South America, where (using Nigeria as an example) 90% of energy demand is unmet, where only 10-12% of trade is intra-continental \
                            (vs. 60% EU), and where 75% of the population are unbanked. These are the platforms for the opportunities that will shape the continent and in due course shape the world; this also represents the starting point for Movemeback in\
                            delivering opportunities to our members in the form of jobs, internships, partnerships or investments. We are continually discovering and bringing exciting opportunities that will ultimately write contribute to the next chapter in the global story, and bring them to the forefront for our members and partners."}
                    subTitle="We are enabling leaders, influencers and top-talent to discover and engage with the full diversity of African opportunities:\
                    Anecdotally"
                />

                <ProblemsWeAreAddressingComponent
                    titleStyle={{
                        // marginTop: "23px",
                        marginBottom: "12px"
                    }}
                    title="3.THERE ARE BOTH REAL AND PERCEIVED CHALLENGES ASSOCIATED WITH MOVING TO OR OPERATING ON THE CONTINENT"
                    content={"Countries and cities in Africa can be hugely rewarding arenas in which to operate, from the perspective\
                     of business potential, cultural richness and depth, diversity of experience and proximity to nature.\
                     However in parts, the terrain can also be very unforgiving; Sub-Saharan Africans are the first to confess that their arch-nemesis – which comes \
                     in a form several hundred orders of magnitude smaller than a human, with wings, an annoying night-time buzz and an unhygienic yet deadly habit for consuming humans – typically maintain the upper-hand. Similarly, Nigerians will educate you comprehensively on the \
                     generator market and war-stories involving depleting diesel after 10pm, whilst Londoners’ complaining of 1 month rent deposits and 6 month tenancies will be humbled by comparisons of 2 year tenancies paid in-full upfront. Nonetheless, whilst significant adjustments are required and tricks to be learnt on arrival, \
                     general misconceptions resulting in fear and despair misrepresent the reality on the ground.\
                     In recognition of these dynamics, Movemeback will support individuals and parties in moving to and operating on the continent with a set of practically targetted services and information insights which \
                     will evolve and expand over-time, whilst working to quash via transparency, common misconceptions creating false or soft barriers. Of equal importance, the Movemeback community will be brought to task, contributing in peer-to-peer knowledge exchange and local community building to provide an extended arm of support and further opportunity to those who need it."}
                    subTitle="We are offering soft and tangible support for individuals and organisations interested in operating on the continent:"
                />

                <ProblemsWeAreAddressingComponent
                    titleStyle={{
                        // marginTop: "23px",
                        marginBottom: "12px"
                    }}

                    title="4.THE AFRICA STORY IS OUT OF DATE AND NEEDS REWRITING"
                    content={"Even today with increased political and economic attention, the story is uninspiringly black and white. On one side everyone is familiar with the default – ‘Africa: the troubled ‘country’\
                     of the poor, needy and under-developed’ – and we’re reminded today with fears of an impending pandemic that stories of growth and prosperity are easily submerged by the default historic narrative. On the other side, we hear of ‘Africa rising’, \
                     the next frontier, the land of rich resource and untapped potential – we like this story however like its historic predecessor it lacks the depth which goes beyond presenting the obvious. The continent has so much diversity, unmet and undiscovered \
                     need but even more interestingly untapped and uninitiated talent. The story is colourful, \
                    it’s multifaceted and through the process of the crowd we intend to share it in high definition."}
                    subTitle="Movemeback is committed to crowd-sourcing the updated, more insightful version of Africa’s story and contributing to writing its next chapter"
                />
                <FoundersConstainerMain>
                    <FounsersHeading
                        titleStyle={{
                            // marginTop: "23px", 
                            marginBottom: "36px"
                        }}
                        style={{
                            display: "flex", justifySelf: "center", alignItems: "center",
                            flexDirection: "column",
                            flexWrap: "nowrap",
                            textAlign: "center",
                            marginTop: "80px"
                        }}
                        title={"OUR FOUNDERS".toUpperCase()}
                        content="The Movemeback founders are McKinsey & Goldman Sachs alumni who have returned to the continent as entrepreneurs; we are creating the service we once craved, for people to whom we highly relate" />

                    <FoundersConstainer>
                        <FoundersCard
                            description="Previously an Investment Associate at Goldman Sachs and a Strategy Consultant for Roland Berger's Sub-Saharan Africa, Financial Services Team. Executive MBA with distinction
                            from London Business School and BSc Hons in Economics from The London School of Economics & Political Science.
                            Cake-addict and lover of all things musical"
                            name="OYIN SOLEBO"
                            position="FOUNDER"
                            image=""
                        />
                        <FoundersCard
                            description="Previously a Strategy Consultant at McKinsey & Company, Supply Chain project manager at Tesco and Consultant at Accenture. MEng Hons in Electrical & Electronic Engineering & Management from Imperial College, London.
                            F1 fanatic with ambitions to own a team and bring F1 to West Africa"
                            name="CHARLES SEKWALOR"
                            position="FOUNDER"
                            image=""
                        />
                    </FoundersConstainer>
                </FoundersConstainerMain>
            </MainContent>
        </MainBody>
    );
}

type ContentInfoPropTypes = {
    title: string,
    content: string,
    style?: React.CSSProperties,
    titleStyle?: React.CSSProperties
}
function ContentInfo(props: ContentInfoPropTypes) {
    const { content, title, style, titleStyle } = props;
    return (
        <ContentInfoMain style={{ ...style }}>
            <Typography variant="h5" style={{
                ...titleStyle,
                fontStyle: "normal",
                fontWeight: 500,
                fontSize: "24px",
                lineHeight: "26px",
                // color: Theme.palette.secondary.dark,
                fontFamily: "lato"
            }}>
                {title}
            </Typography>
            <Typography variant="body1" style={{
                fontStyle: "normal",
                fontWeight: 400,
                fontSize: "16px",
                lineHeight: "24px",
                color: Theme.palette.secondary.contrastText,
                fontFamily: "Open Sans, sans-serif"
            }}>
                {content}
            </Typography>
        </ContentInfoMain>
    );
}
function FounsersHeading(props: {
    title: string,
    content: string,
    style?: React.CSSProperties,
    titleStyle?: React.CSSProperties,
}) {
    const { content, title, style, titleStyle } = props;
    return (
        <ContentInfoMain style={{ ...style }}>
            <Typography variant="h5" style={{ ...titleStyle }}>
                {title}
            </Typography>
            <Typography variant="body1">
                {content}
            </Typography>
        </ContentInfoMain>
    );
}
type WhatAreWeAddressingPropTypes = {
    title: string,
    subTitle: string,
    content: string,
    titleStyle?: React.CSSProperties
}
function ProblemsWeAreAddressingComponent(props: WhatAreWeAddressingPropTypes) {
    const { content, title, subTitle, titleStyle } = props;
    const theme = useTheme();
    return (
        <ContentInfoMain>
            <div   style={{
                ...titleStyle,
                color: theme.palette.primary.main,
                fontSize: "18px",
                lineHeight: "27px",
                fontWeight: 700
                ,fontFamily:"lato"
            }}>
                {title}
            </div>
            <div style={{ fontWeight: 700 , fontSize:"15px" ,lineHeight:"23px", color: theme.palette.secondary.main,}}>
                {subTitle}
            </div>
            <ExpandableText text={content} minHeight="93px" />
        </ContentInfoMain>
    );
}
function ExpandableText(props: { text: string, minHeight: number | string }) {
    const { text, minHeight } = props;
    const [expand, setExpand] = React.useState<boolean>(false)


    return (
        <>
            <div style={{
                height: expand ? "auto" : minHeight,
                overflow: "hidden",
                transitionProperty: "height",
                transitionDuration: "500ms",
                transitionTimingFunction: "ease-in",
                lineHeight: "1.428571429",
                textOverflow: "ellipsis",
            }}>

                {text}

            </div>
            <Typography variant="body1"

                color="primary" style={{ cursor: "pointer" }}

                onClick={() => setExpand(!expand)}>
                {!expand ? "read more..." : "...read less"}
            </Typography>
        </>
    );
}
function MainVocalPoint() {

    return (
        <CarouselItem imgPath={businessWomenMeeting} buttonText="Join Movemeback"
            discription="Shaping & accelerating social & economic development on the Continent
        Join Movemeback"
            title="About Movemeback"
            label="carouselImg"
        />
    );
}
const FoundersComponentMain = styled("div")(({ theme }) => (
    {
        display: "flex",
        flexDirection: "column",
        flexWrap: "nowrap",
        justifyContent: "center",
        alignItems: "center",
        width: "565px",
        height: "525px"

    }
))
const FoundersAvatar = styled(Avatar)(({ theme }) => (
    {
        width: "283px",
        height: "283px",
        // backgroundColor: theme.palette.secondary.light,
    }
))
function FoundersCard(props: {
    name: string,
    image: string,
    position: string,
    description: string,
}) {
    const { name,
        image,
        position,
        description } = props;
    return (
        <FoundersComponentMain>
            <FoundersAvatar
                src={image}
            />
            <Typography variant="h6">
                {name}
            </Typography>
            <Typography variant="body1">
                {position}
            </Typography>
            <Typography variant="body2">
                {description}
            </Typography>
        </FoundersComponentMain>
    );
}