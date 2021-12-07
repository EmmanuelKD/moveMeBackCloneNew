import { styled } from "@mui/system";

type FooterProps = {

}

const StyledFooter = styled("footer")(({ theme }) => ({

    backgroundColor:theme.palette.primary.main,
    height:"270px",
    [theme.breakpoints.down("lg")]: {
        height:"360px",
    }
}))
export default function AppFooter(props: FooterProps) {

    return (
        <StyledFooter>

        </StyledFooter>
    );
}

