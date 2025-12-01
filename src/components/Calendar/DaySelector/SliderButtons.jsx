import {useSwiper} from "swiper/react";
import { IconButton } from "@mui/material";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";


export function SlidePrevButton() {
    const swiper = useSwiper();
    return (
        <IconButton onClick={() => swiper.slidePrev()} >
        <ArrowBackIosNewIcon/>
        </IconButton>
    );
}

export function SlideNextButton() {
    const swiper = useSwiper();
    return (
        <IconButton onClick={() => swiper.slideNext()}>
            <ArrowForwardIosIcon/>
        </IconButton>
    );
}