import React from "react";
import { Layout } from "../components/layout";
import Hero from "../components/hero";
import Posts from "../components/posts";

export default function Home(){
  return(
    <Layout>
      <div>
        <Hero />
        <Posts />
        <Posts/>
        <Posts/>
      </div>
    </Layout>
  )
}