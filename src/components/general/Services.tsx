import { Component } from "solid-js";
import Service1Img from "../../assets/img/service1.png";
import Service2Img from "../../assets/img/service2.png";
import Service3Img from "../../assets/img/service3.png";
import { IoArrowDownOutline } from 'solid-icons/io'

const Services:Component = () => {
    return (
        <div class="w-full py-16 bg-gray-50">
            <div class="w-10/12 m-auto">
                <h1 class="text-5xl font-semibold text-center pb-16"> 
                    Services
                </h1>
                <div class="w-full flex flex-wrap sm:flex-nowrap gap-5">
                    <div class="w-1/3 border p-1 rounded-md shadow">
                        <img 
                            src={Service1Img} 
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
                            src={Service2Img} 
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
                            src={Service3Img} 
                            alt="Service three image"
                            class="rounded-md"
                        />
                        <h3 class="uppercase text-2xl text-center py-2">
                            staffing
                        </h3>
                        <p class="px-10 text-center font-light h-14">
                            Chew Chucky, decadent, and always freshly backed 
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

export default Services;