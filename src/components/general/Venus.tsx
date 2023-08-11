import { Component } from "solid-js";
import "solid-slider/slider.css";
import { Slider, createSlider, SliderProvider, SliderButton} from "solid-slider";
import Venus1Img from "../../assets/img/service1.png";
// import Venus2Img from "../../assets/img";
// import Venus3Img from "../../assets/img";
import { IoArrowBackOutline, IoArrowForwardOutline } from 'solid-icons/io';

const Venus:Component = () => {
    return (
        <div class="w-full py-16 scroll-mt-16" id="venu">
            <div class="w-full lg:w-10/12 m-auto">
                <h1 class="text-5xl text-gray-600  text-center pb-10 md:pb-16"> 
                    Venues
                </h1>
                <div class="w-full gap-5 relative">
                        <SliderProvider>
                            <div class="w-10/12 flex m-auto">
                            <Slider options={{ loop: true }}>
                                <div class="w-9/12 lg:w-10/12 m-auto h-[65vh] flex flex-wrap">
                                    <div class="w-full lg:w-3/4 flex justify-center">
                                        <img 
                                            src={Venus1Img} 
                                            alt="venu one image" 
                                            class="rounded-md lg:h-[60vh] shadow"
                                        />
                                    </div>
                                    <div class="w-full lg:w-1/4 flex">
                                        <div class="my-auto pr-4 text-center lg:text-left font-thin text-xl">
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti repellat sint quas illum cum? Deleniti nesciunt est quis quos quam!
                                        </div>
                                    </div>
                                </div>
                            </Slider>
                            </div>
                            <div class="w-full flex absolute text-gray-400 top-56 justify-between">
                                <SliderButton prev class="text-left">
                                    <IoArrowBackOutline class="text-3xl" />
                                </SliderButton>
                                <SliderButton next class="text-right">
                                    <IoArrowForwardOutline class="text-3xl" />
                                </SliderButton>
                            </div>
                        </ SliderProvider>
                </div>
            </div>
        </div>
    )
}

export default Venus;