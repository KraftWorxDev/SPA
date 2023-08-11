import { Component } from "solid-js";
import "solid-slider/slider.css";
import { Slider, createSlider, SliderProvider, SliderButton} from "solid-slider";
import Venus1Img from "../../assets/img/Screenshot 2023-08-10 at 15.42.51.png";
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
                                        <div class="m-auto">
                                            <div class="my-auto pr-4 text-center lg:text-left font-thin text-xl">
                                            Nestled within the breathtaking beauty of Stellenbosch, our enchanting event venue is a true gem. Surrounded by majestic mountains, rolling vineyards, and lush greenery, it provides an idyllic backdrop for your special occasion.
                                            </div>
                                            <button class="py-4 px-10 text-lg text-white mt-5 rounded-sm bg-black">
                                                View Gallery
                                            </button>
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