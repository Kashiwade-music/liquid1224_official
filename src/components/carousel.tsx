import React from "react";
import { Component } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.css";
import "../styles/carousel.css";
import CAROUSEL1 from "../images/carousel1.jpg";
import { StaticImage } from "gatsby-plugin-image";
import { useState, useEffect } from "react";

export default function TopCarousel() {
  const getWindowDimensions = () => {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  };
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  useEffect(() => {
    const onResize = () => {
      setWindowDimensions(getWindowDimensions());
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  let height =
    windowDimensions.width / (windowDimensions.height - 80) > 16 / 9
      ? `${windowDimensions.height - 80}px`
      : "auto";

  return (
    <div>
      <Carousel
        className="carousel"
        autoPlay
        interval={5500}
        infiniteLoop
        transitionTime={500}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={CAROUSEL1}
            className="carousel_img"
            style={{
              margin: "auto",
              maxWidth: "100%",
              height: height,
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img
            src={CAROUSEL1}
            className="carousel_img"
            style={{
              margin: "auto",
              maxWidth: "100%",
              height: height,
            }}
          />
        </div>
      </Carousel>
    </div>
  );
}
