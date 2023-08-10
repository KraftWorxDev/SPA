import { Component } from "solid-js";
import Background2 from "../../assets/img/photo-1507757861675-f14524bb197d.avif"

const BreakComponent: Component = () => {
    return (
        <div class="w-full h-96" style={{"background-image":`url(${Background2})`,"background-size":"cover","background-attachment":"fixed"}}>

        </div>
    )
}

export default BreakComponent;