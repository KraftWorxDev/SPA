import { Component } from "solid-js";
import Hero from "../components/general/Hero";
import About from "../components/general/About";
import Services from "../components/general/Services";
import Venus from "../components/general/Venus";

const Home:Component = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <Venus />
        </>
    )
}

export default Home;