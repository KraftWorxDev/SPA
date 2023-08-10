import { Component, For } from "solid-js";
import Logo from "../../assets/img/Logo.png"
import { A } from "@solidjs/router"

const Nav:Component = () => {
    const Links = [
        {
            id: 1,
            name: 'Home',
            link: '#home'
        },
        {
            id: 2,
            name: 'About us',
            link: '#about'
        },
        {
            id: 3,
            name: 'Services',
            link: '#services'
        },
        {
            id: 4,
            name: 'Venus',
            link: '#venu'
        },
        {
            id: 7,
            name: 'Contact us',
            link: '#contact'
        },
    ]
    return (
        <nav class="w-full pt-1 z-50 fixed bg-gray-400 bg-opacity-50 h-16">
            <div class="w-10/12 m-auto flex justify-between items-center">
                <div>
                    <A href="#home">
                        <img 
                            src={Logo}
                            alt="Company logo"
                            class="h-14"
                        />
                    </A>
                </div>
                <div>
                    <ul class="flex gap-10 text-white text-lg font-thin">
                        <For each={Links}>{
                            (l) => <A href={l.link}><li>{l.name}</li></A> 
                        }</For>
                    </ul>
                </div>
                <div>
                    <button class="bg-orange-500 hover:bg-orange-700 duration-500 ease-in-out px-3 text-lg py-2 rounded-sm text-white">
                        Request a quote
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;