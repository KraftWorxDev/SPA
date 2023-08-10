import { Component } from "solid-js";
import Venus1Img from "../../assets/img";
import Venus2Img from "../../assets/img";
import Venus3Img from "../../assets/img";
import { IoArrowDownOutline } from 'solid-icons/io';

const Venus:Component = () => {
    return (
        <div class="w-full py-16">
            <div class="w-10/12 m-auto">
                <h1 class="text-5xl font-semibold text-center pb-16"> 
                    Venus
                </h1>
                <div class="w-full flex flex-wrap sm:flex-nowrap gap-5">
                    <div class="w-1/3 border p-1 rounded-md shadow">
                        <img 
                            src={Venus1Img} 
                            alt="service one image"
                            class="rounded-md"
                        />
                        <h3 class="uppercase text-2xl text-center py-2">
                            desginer menu's
                        </h3>
                        <p class="px-10 text-center font-light h-14">
                            Choose from our pre-set menus or design your own
                        </p>
                        <div class="flex w-full justify-center font-thin text-gray-400 pb-3">
                            <IoArrowDownOutline class="text-2xl"/>
                        </div>
                    </div>
                    <div class="w-1/3 border p-1 rounded-md shadow">
                        <img 
                            src={Venus2Img} 
                            alt="Service two image"
                            class="rounded-md"
                        />
                        <h3 class="uppercase text-2xl text-center py-2">
                            bar services
                        </h3>
                        <p class="px-10 text-center font-light h-14">
                            We do open bars and hoasted bars
                        </p>
                        <div class="flex w-full justify-center font-thin text-gray-400 pb-3">
                            <IoArrowDownOutline class="text-2xl"/>
                        </div>
                    </div>
                    <div class="w-1/3 border p-1 rounded-md shadow">
                        <img 
                            src={Venus3Img} 
                            alt="Service three image"
                            class="rounded-md"
                        />
                        <h3 class="uppercase text-2xl text-center py-2">
                            staffing
                        </h3>
                        <p class="px-10 text-center font-light h-14">
                            We provide all the staffing  for your event including DJ’s, Hosts, Service Staff.
                        </p>
                        <div class="flex w-full justify-center font-thin text-gray-400 pb-3">
                            <IoArrowDownOutline class="text-2xl"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Venus;