import React from "react";
import { Layout } from "../components/layout";
import TopCarousel from "../components/carousel";
import "../styles/index.css"

export default function Home(){
  return(
    <Layout>
      <div className="carousel_wrapper">
        <TopCarousel></TopCarousel>
      </div>
    </Layout>
  )
}