import { Component } from "solid-js";
import Hero from "../components/general/Hero";
import About from "../components/general/About";
import Services from "../components/general/Services";

const Home:Component = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
        </>
    )
}

export default Home;