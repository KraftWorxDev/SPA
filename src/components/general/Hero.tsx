import { Component } from "solid-js";
import Background1 from "../../assets/img/background.png"

const Hero: Component = () => {
    return (
        <header class="w-full relative h-screen bg-gray-200" style={{"background-image":`url(${Background1})`,"background-size":"cover"}}>
            <div class="w-full bg-yellow-600 px-36 bottom-0 left-0 bg-opacity-70 py-10 absolute">
               <p class="text-white text-xl text-center">
                    An Unforgettable Culinary Affair Awaits! Step into a world of culinary marvels, where events, weddings, corporate soirées, and private functions become moments of pure delight. Our chef's innovative artistry promises to leave a lasting impression on your guests' palates and hearts.
               </p>
            </div>
        </header>
    )
}

export default Hero;