import { Component } from "solid-js";
import Hero from "../components/general/Hero";
import About from "../components/general/About";
import Services from "../components/general/Services";
import Venus from "../components/general/Venus";
import Contact from "../components/general/Contact";
import BreakComponent from "../components/general/BreakComponent";

const Home:Component = () => {
    return (
        <>
            <Hero />
            <About />
            <Services />
            <BreakComponent />
            <Venus />
            <Contact />
        </>
    )
}

export default Home;