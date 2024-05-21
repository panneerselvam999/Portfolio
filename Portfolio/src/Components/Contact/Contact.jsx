import React, { useRef, useState } from "react";
import Title from "../Layout/Title";
import { contactImg } from "../../assets";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Contact = () => {
    const [error, setError] = useState("");

    const nameRef = useRef(null);
    const telRef = useRef(null);
    const emailRef = useRef(null);
    const subjectRef = useRef(null);
    const messageRef = useRef(null);

    const validateForm = () => {
        const nameVal = nameRef.current.value.trim();
        const telVal = telRef.current.value.trim();
        const emailVal = emailRef.current.value.trim();
        const subjectVal = subjectRef.current.value.trim();
        const messageVal = messageRef.current.value.trim();

        if (!nameVal) {
            setError("Name is  required !");
            return false;
        }

        const telPattern = /^[0-9]+$/;
        if (!telVal || !telPattern.test(telVal)) {
            setError("A valid phone number is  required !");
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailVal || !emailPattern.test(emailVal)) {
            setError("A valid email address is  required !");
            return false;
        }

        if (!subjectVal) {
            setError("Subject is  required !");
            return false;
        }

        if (!messageVal) {
            setError("Message is  required !");
            return false;
        }

        return true;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            setError("form submit successfully");
            nameRef.current.value = "";
            telRef.current.value = "";
            emailRef.current.value = "";
            subjectRef.current.value = "";
            messageRef.current.value = "";
        }
        console.log("Hellow");
    };
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
                    <div className="w-[60%] h-auto  py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne ">
                        <form className="w-full h-full flex flex-col justify-between">
                            {/* {error && (
                <p className="py-3 bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                  {error}
                </p>
              )} */}

                            <div className="flex gap-10">
                                <div className="w-1/2 flex flex-col">
                                    <label
                                        className="contactLable mb-5 outline-designColor"
                                        htmlFor="name"
                                    >
                                        Your name
                                    </label>
                                    <input
                                        ref={nameRef}
                                        className={`${(error == "Name is required !") && "outline-designColor"} contactInput`}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div className="w-1/2 flex flex-col">
                                    <label className="contactLable mb-5" htmlFor="tel">
                                        Phone number
                                    </label>
                                    <input
                                        ref={telRef}
                                        className="contactInput"
                                        type="tel"
                                        id="tel"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col  ">
                                <label className="contactLable mb-5" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    ref={emailRef}
                                    className="contactInput"
                                    type="mail"
                                    id="email"
                                />
                            </div>
                            <div className="flex flex-col  ">
                                <label className="contactLable mb-5" htmlFor="subject">
                                    subject
                                </label>
                                <input
                                    ref={subjectRef}
                                    className="contactInput"
                                    type="text"
                                    id="subject"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="contactLabel mb-5" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    ref={messageRef}
                                    className="contactTextArea w-full h-[150px] p-2 border rounded resize-none"
                                    name="message"
                                    id="message"
                                />
                            </div>
                            <button
                                onClick={handleSubmit}
                                className="w-full h-12 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent"
                            >
                                Send Message
                            </button>
                            {error && (
                                <p className="py-3  bg-gradient-to-r from-[#1e2024] to-[#23272b] shadow-shadowOne text-center text-orange-500 text-base tracking-wide animate-bounce">
                                    {error}
                                </p>
                            )}
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
