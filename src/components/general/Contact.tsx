import { Component } from "solid-js";
import ContactForm from "../forms/ContactForm";

const Contact: Component = () => {
    return (
        <>
            <div class="w-full pb-10 md:py-16 scroll-mt-16" id="contact">
                <h1 class="text-5xl text-center pb-10 text-gray-700">
                    Get intouch with us
                </h1>
                <div class="w-10/12 m-auto gap-4 flex flex-wrap sm:flex-nowrap">
                    <div class="w-full md:w-3/4">
                        <ContactForm />
                    </div>
                    <div class="border-l"></div>
                    <div class="w-full md:w-1/4 py-2">
                        <div class="w-full flex pb-10">
                            <div class="text-xl font-thin w-28">
                                Address
                            </div>
                            <div class="text-xl font-thin">
                                38 Chef Street,<br></br> Cape Town,<br></br> Western Cape,<br></br> 0077
                            </div>
                        </div>
                        <div class="w-full flex pb-10">
                            <div class="text-xl font-thin w-28">
                                Email
                            </div>
                            <div class="text-xl font-thin">
                                cefsamplesite@gmail.com
                            </div>
                        </div>
                        <div class="w-full flex">
                            <div class="text-xl font-thin w-28">
                                Tel
                            </div>
                            <div class="text-xl font-thin">
                                +27 81 567 4523
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="w-full bg-gray-100 h-64">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d133349.1801497864!2d18.518347146060126!3d-34.00592693617065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc500f8826eed7%3A0x687fe1fc2828aa87!2sCape%20Town!5e0!3m2!1sen!2sza!4v1691684699901!5m2!1sen!2sza" width="100%" height="100%" style="border:0;" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </>
    )
}

export default Contact;