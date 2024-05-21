import React from "react";
import Title from "../Layout/Title";
import { contactImg } from "../../assets";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Hellow");
    }
    return (
        <section
            id="contact"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <Title title={"Contact"} des={"Contact with me"} />

            <div className="w-full">
                <div className="w-full h-auto flex justify-between">
                    <div className="w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                        <img
                            className="w-full h-64 object-cover rounded-lg mb-3"
                            src={contactImg}
                            alt="Contact img"
                        />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl font-bold text-white">Panneer selvam</h3>
                            <p className="text-lg font-normal to-gray-400">
                                React JS - Developer
                            </p>
                            <p className="text-base text-gray-400 tracking-wide">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Dignissimos, corrupti illo? Dignissimos officiis sed ipsam.
                            </p>
                            <p className="text-base text-gray-400 flex items-center gap-2">
                                Phone: <span className="text-lightText">+91 936-161-3554</span>
                            </p>
                            <p className="text-base text-gray-400 flex items-center gap-2">
                                Email:{" "}
                                <span className="text-lightText">
                                    npspanneerselvam999@gmail.com
                                </span>
                            </p>
                        </div>
                        <div>
                            <p>FIND IN ME</p>
                            <div className="flex gap-5 mt-6">
                                <span className="bannerIcon">
                                    <FaGithub />
                                </span>
                                <span className="bannerIcon">
                                    <FaLinkedin />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="w-[60%] h-hull py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne">
                        <form className="w-full h-full flex flex-col justify-between ">
                            <div className="flex gap-10">
                                <div className="w-1/2 flex flex-col">
                                    <label className="contactLable mb-5" htmlFor="name">
                                        Your name
                                    </label>
                                    <input className="contactInput" type="text" id="name" />
                                </div>
                                <div className="w-1/2 flex flex-col">
                                    <label className="contactLable mb-5" htmlFor="tel">
                                        Phone number
                                    </label>
                                    <input className="contactInput" type="tel" id="tel" />
                                </div>
                            </div>
                            <div className="flex flex-col  ">
                                <label className="contactLable mb-5" htmlFor="email">
                                    Email
                                </label>
                                <input className="contactInput" type="mail" id="email" />
                            </div>
                            <div className="flex flex-col  ">
                                <label className="contactLable mb-5" htmlFor="subject">
                                    subject
                                </label>
                                <input className="contactInput" type="text" id="subject" />
                            </div>
                            <div className="flex flex-col">
                                <label className="contactLabel mb-5" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    className="contactTextArea w-full h-[150px] p-2 border rounded resize-none"
                                    name="message"
                                    id="message"
                                />
                            </div>
                            <button onClick={handleSubmit} className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">Send Message</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

{
    /* <form className="w-full flex flex-col space-y-reverse">
          <div className="flex flex-col space-y-1">
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" className="p-1" />
          </div>
          <div className="flex flex-col space-y-1">
              <label htmlFor="tel">Phone number</label>
              <input type="tel" id="tel" className="p-1" />
          </div>
          <div className="flex flex-col space-y-1">
              <label htmlFor="email">Email</label>
              <input type="mail" className="p-1" />
          </div>
          <div className="flex flex-col space-y-1">
              <label htmlFor="subject">subject</label>
              <input type="text" className="p-1" />
          </div>
          <div className="flex flex-col space-y-1">
              <label htmlFor="message">message</label>
              <textarea name="message" id="message" className="p-1" />
          </div>
      </form> */
}
