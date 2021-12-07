import { Button, Typography } from "@mui/material";
import { alpha, styled } from "@mui/system";
import React from "react";

const ImageStyledBox = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",

    flexGrow: 1
    , [theme.breakpoints.down("lg")]: {
        height: "550px",
    }
}))

const InfoStyledBox = styled("div")(({ theme }) => ({
    width: "100%",
    height: "236px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "column",
    flexWrap: "nowrap",
    color: "white"

}))

const OpacityWrapperStyledBox = styled("div")(({ theme }) => (
    {
        backgroundColor:alpha(theme.palette.common.black,.3),
        width: "100%",
        height: "100%",
        position: "absolute",
        display: "flex",
        // alignItems: "center",
        paddingTop:"60px",
     }
))


type CarouselComponent = {
    imgPath: string,
    label: string,
    buttonText: string,
    title: string,
    discription: string
}

export default function CarouselItem(props: CarouselComponent) {
    const { imgPath, label, title, discription, buttonText } = props;

    return (
        <div style={{
            position: "relative", width: "100%",
            height: "500px",
        }}>
            <OpacityWrapperStyledBox>

                <InfoStyledBox>
                    <Typography variant="h3">
                        {title}
                    </Typography>
                    <Typography variant="h6">
                        {discription}
                    </Typography>
                    <Button variant={"contained"} size={"medium"} >{buttonText}</Button>
                </InfoStyledBox>

            </OpacityWrapperStyledBox>

            <ImageStyledBox
                sx={{
                    objectFit: "cover",
                    flexGrow: 1,
                    overflow: 'hidden',
                    width: '100%',
                    height: "100%",
                }}
                src={imgPath}
                alt={label}
            />


        </div>
    );
}