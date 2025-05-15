import React, { useRef, useState } from "react";
import Title from "../Layout/Title";
import { contactImg } from "../../assets";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import DownloadResumeButton from "../downloadResume/DownloadResume";

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
            setError("Name is required!");
            return false;
        }

        const telPattern = /^[0-9]+$/;
        if (!telVal || !telPattern.test(telVal)) {
            setError("A valid phone number is required!");
            return false;
        }

        const emailPattern = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
        if (!emailVal || !emailPattern.test(emailVal)) {
            setError("A valid email address is required!");
            return false;
        }

        if (!subjectVal) {
            setError("Subject is required!");
            return false;
        }

        if (!messageVal) {
            setError("Message is required!");
            return false;
        }

        return true;
    };

    const handleSubmit = async (e) => {
        e.preventDefault(); // Prevent default behavior here once

        if (validateForm()) {
            setError("Sending...");

            const formData = new FormData();
            formData.append("name", nameRef.current.value.trim());
            formData.append("tel", telRef.current.value.trim());
            formData.append("email", emailRef.current.value.trim());
            formData.append("subject", subjectRef.current.value.trim());
            formData.append("message", messageRef.current.value.trim());
            formData.append("access_key", "08fbfaad-f8c3-4420-84a4-752481347674");

            try {
                const response = await fetch("https://api.web3forms.com/submit", {
                    method: "POST",
                    body: formData,
                });

                const data = await response.json();

                if (data.success) {
                    setError("Mail send successfully");
                    e.target.reset();
                } else {
                    console.log("Error", data);
                    setError(data.message);
                }
            } catch (error) {
                console.error("Submission error:", error);
                setError(
                    "An error occurred while submitting the form. Please try again."
                );
            }
        }
    };

    return (
        <section
            id="contact"
            className="w-full py-20 border-b-[1px] border-b-black"
        >
            <Title title={"Hier me"} des={"Contact with me"} />

            <div className="w-full ">
                <div className="w-full h-auto flex flex-col gap-6 lgl:flex-row justify-between">
                    <div className=" w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-8 rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center">
                        <img
                            className="w-full h-64 object-cover rounded-lg mb-3"
                            src={contactImg}
                            alt="Contact img"
                        />
                        <div className="flex flex-col gap-4">
                            <h3 className="text-3xl font-bold text-white">Panneer selvam</h3>
                            <p className="text-lg font-normal to-gray-400">
                                Frontend Developer
                            </p>
                            {/* <p className="text-base text-gray-400 tracking-wide">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                                Dignissimos, corrupti illo? Dignissimos officiis sed ipsam.
                            </p> */}
                            <p className="text-base text-gray-400 flex items-center gap-2">
                                <a href="https://wa.me/9361613554?text=Hello%2C%20I%20would%20like%20to%20contact%20you">
                                    Phone:{" "}
                                    <span className="text-lightText">+91 936-161-3554</span>
                                </a>
                            </p>
                            <p className="text-base text-gray-400 flex items-center gap-2">
                                <a href="mailto:npspanneerselvam999@gmail.com?subject=Contact%20Us&body=Hello,">
                                    Email: {" "}
                                    <span className="text-lightText">
                                        npspanneerselvam999@gmail.com
                                    </span>
                                </a>
                            </p>
                        </div>
                        <div>
                            {/* <DownloadResumeButton /> */}
                            <a
                                href="./resume/ps-resume.pdf"
                                download="PANNEER SELVAM - MERN Stack Developer.pdf"
                                className="bannerIcon w-fit px-3"
                            >
                                Download Resume
                            </a>
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

                    <div className=" w-full  lgl:w-[60%] h-auto  py-10 bg-gradient-to-r from-[#1e2024] to-[#23272b] flex flex-col gap-8 p-8 rounded-lg shadow-shadowOne ">
                        <form
                            className="w-full h-full flex flex-col gap-5 justify-between"
                            onSubmit={handleSubmit}
                        >
                            <div className="flex flex-col lgl:flex-row gap-5 lgl:gap-10">
                                <div className="w-full lgl:w-1/2 flex flex-col">
                                    <label
                                        className="contactLable mb-5 outline-designColor"
                                        htmlFor="name"
                                    >
                                        Your name
                                    </label>
                                    <input
                                        ref={nameRef}
                                        name="name"
                                        className={`${error === "Name is required!" && "outline-designColor"
                                            } contactInput`}
                                        type="text"
                                        id="name"
                                    />
                                </div>
                                <div className="w-full lgl:w-1/2 flex flex-col">
                                    <label className="contactLable mb-5" htmlFor="tel">
                                        Phone number
                                    </label>
                                    <input
                                        ref={telRef}
                                        name="tel"
                                        className={`${error === "A valid phone number is required!" &&
                                            "outline-designColor"
                                            } contactInput`}
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
                                    name="email"
                                    className={`${error === "A valid email address is required!" &&
                                        "outline-designColor"
                                        } contactInput`}
                                    type="email"
                                    id="email"
                                />
                            </div>
                            <div className="flex flex-col  ">
                                <label className="contactLable mb-5" htmlFor="subject">
                                    Subject
                                </label>
                                <input
                                    ref={subjectRef}
                                    name="subject"
                                    className={`${error === "Subject is required!" && "outline-designColor"
                                        } contactInput`}
                                    type="text"
                                    id="subject"
                                />
                            </div>
                            <div className="flex flex-col">
                                <label className="contactLable mb-5" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    ref={messageRef}
                                    name="message"
                                    className={`${error === "Message is required!" && "outline-designColor"
                                        } contactTextArea w-full h-[150px] p-2 border rounded resize-none`}
                                    id="message"
                                />
                            </div>
                            <button className="w-full h-12 mt-5 bg-[#141518] rounded-lg text-base text-gray-400 tracking-wide uppercase hover:text-white duration-300 hover:border-[1px] hover:border-designColor border-transparent">
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
