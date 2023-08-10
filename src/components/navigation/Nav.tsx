import { Component, For } from "solid-js";
import Logo from "../../assets/img/Logo.png"

const Nav:Component = () => {
    const Links = [
        {
            id: 1,
            name: 'Home',
        },
        {
            id: 2,
            name: 'About us',
        },
        {
            id: 3,
            name: 'Services',
        },
        {
            id: 4,
            name: 'Venus',
        },
        {
            id: 7,
            name: 'Contact us',
        },
    ]
    return (
        <nav class="w-full py-2 z-50 fixed bg-gray-400 bg-opacity-50">
            <div class="w-10/12 m-auto flex justify-between items-center">
                <div>
                    <img 
                        src={Logo}
                        alt="Company logo"
                        class="h-14"
                    />
                </div>
                <div>
                    <ul class="flex gap-10 text-white text-lg font-thin">
                        <For each={Links}>{
                            (l) => <li>{l.name}</li> 
                        }</For>
                    </ul>
                </div>
                <div>
                    <button class="bg-orange-500 px-3 py-2 rounded-sm text-white">
                        Request a quote
                    </button>
                </div>
            </div>
        </nav>
    )
}

export default Nav;