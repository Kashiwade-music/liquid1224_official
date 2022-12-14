import React from "react";
import { Layout } from "../components/layout_index";
import TopCarousel from "../components/carousel";
import "../styles/index.css"

export default function Home(){
  return(
    <Layout>
      <TopCarousel/>
    </Layout>
  )
}