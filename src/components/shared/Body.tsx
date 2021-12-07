
import { Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import React from 'react';

const drawerWidth = 240;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme, open }) => ({
    flexGrow: 1,
    // padding: theme.spacing(3),
    color: "black", width: "100vw",
    transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    [theme.breakpoints.down("lg")]: {
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginTop: drawerWidth,
        }),
    }
}));

type ContentBodyProps = {
    open: boolean,
    content: React.ReactNode
}
export default function ContentBody(props: ContentBodyProps) {
    const { open, content } = props;
    React.useEffect(() => {
    }, [open])
    return (
        <Main open={open}>
            {content}
        </Main>
    );
}