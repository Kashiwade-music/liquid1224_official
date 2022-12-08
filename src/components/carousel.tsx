import React from "react";
import { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css"
import "../styles/carousel.css"
import CAROUSEL1 from "../images/carousel1.jpg"

export default function TopCarousel(){
    return(
        <Carousel className="carousel" autoPlay interval={5500} infiniteLoop transitionTime={500} showThumbs={false} showStatus={false} showIndicators={false}>
            <div>
                <img src={CAROUSEL1}/>
            </div>
            <div>
                <img src={CAROUSEL1}/>
            </div>
        </Carousel>
    )
}