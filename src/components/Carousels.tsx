import { KeyboardArrowLeft, KeyboardArrowRight } from '@mui/icons-material';
import { Collapse, IconButton, MobileStepper, useTheme } from '@mui/material';
import { alpha, Box, display, styled } from '@mui/system';
import React from 'react';
import SwipeableViews from 'react-swipeable-views';
 
const CarouselStyledBox = styled("img")(({ theme }) => ({
    width: "100%",
    height: "100%",

    flexGrow: 1
    , [theme.breakpoints.down("lg")]: {
        height: "550px",
    }
}))
const CarouselMain = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100vw",
    height: "500px",
    overflow: "hidden",
    flexGrow: 1,
    display: "flex"
    , [theme.breakpoints.down("lg")]: {
        height: "550px",
    }
}))

const StyledMobileStepper = styled(MobileStepper)(({ theme }) => ({
    backgroundColor: "transparent",

    display: "none",
    [theme.breakpoints.down("lg")]: {
        display: "block",
        ".MuiMobileStepper-dots > *": {// all the child
            width: "10px",
            height: "10px",
            marginLeft: "2px",
            marginRight: "2px",
        },
    },


}))

const StyledMobileStepperMain = styled('div')(({ theme }) => ({
    position: "absolute",
    bottom: 30,
    width: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
}))

const IconBtnSize = 36;

type direction = "left" | "right";

const StyledIconButton = styled(IconButton, { shouldForwardProp: (prop) => prop !== 'direction' })<{
    direction?: direction;
}>(({ theme, direction }) => ({
    marginLeft: "34px",
    marginRight: "34px",
    position: "absolute",
    width: IconBtnSize + "px",
    height: IconBtnSize + "px",
    top: `calc(50% - ${IconBtnSize / 2}px)`,
    ...(direction === "left" ? { left: 0 } : { right: 0 }),
    backgroundColor: theme.palette.common.white,
    disabledButton: {
        backgroundColor: theme.palette.primary || 'red'
    },
    "&:hover": {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.common.white,
    },
    "&:disabled": {
        color: alpha("#000000", .5),
        backgroundColor: alpha("#ffffff", .4)
    },
    [theme.breakpoints.down("lg")]: {
        display: "none"
    },
}))



type CarouselComponentPropType = {
    children: React.ReactElement<null>[] | React.ReactElement<null>,
}
function CarouselComponent(props: CarouselComponentPropType) {
     const theme = useTheme();
    const [activeStep, setActiveStep] = React.useState(0);
    const Childrens=React.Children.map(props.children, (child: React.ReactElement<null>) => child);
    const maxSteps = Childrens.length;

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleStepChange = (step: number) => {
        setActiveStep(step);
    };

    return (
        <CarouselMain id="carrouselMain">
            <SwipeableViews enableMouseEvents
                index={activeStep}
                onSwitching={(index, type) => {

                }}
                style={{
                    width: "100%",
                    height: "100%",
                    overflow: 'hidden',
                 }}
                slideStyle={{ overflow: 'hidden' }}
                onChangeIndex={handleStepChange} >
                    {
                       Childrens.
                        map((child, _ind) => (
                            <div key={_ind}>
                                {Math.abs(activeStep - _ind) <= 2 ? (
                                    <div
                                        style={{
                                            cursor: Childrens.length > 1 ?"grab":"pointer",
                                        }}
                                    >
                                        {child}
                                    </div>
                                ) : null}
                            </div>
        
                        ))
                    }
             </SwipeableViews>

            {Childrens.length > 1 && (
                <> <StyledIconButton
                    direction={"left"}
                    size="medium"
                    onClick={handleNext}
                    disabled={activeStep === maxSteps - 1}>
                    <KeyboardArrowLeft />
                </StyledIconButton>
                    <StyledIconButton size="medium"
                        direction={"right"}
                        onClick={handleBack} disabled={activeStep === 0} >
                        <KeyboardArrowRight />
                    </StyledIconButton>

                    <StyledMobileStepperMain>
                        <StyledMobileStepper
                            steps={maxSteps}
                            position="static"
                            activeStep={activeStep}
                            nextButton={null}
                            backButton={null}
                        />
                    </StyledMobileStepperMain>
                </>)
            }
        </CarouselMain>
    );
}

export default CarouselComponent;

