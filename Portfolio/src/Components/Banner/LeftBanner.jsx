import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaTwitter, FaLinkedinIn, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiFigma, SiReact } from "react-icons/si";
import { DiResponsive } from "react-icons/di";


const LeftBanner = () => {
    const [typeText] = useTypewriter({
        words: ["Professional Coder.", "Front-end Developer.", "Web Developer."],
        loop: true,
        typeSpeed: 30,
        deleteSpeed: 20,
        delaySpeed: 2000,
    });
    return (
        <>
            <div className="w-full  lgl:w-1/2 flex flex-col gap-20">
                <div className=" flex flex-col gap-5">
                    <h4 className="text-lg font-normal">WELCOME TO MY WORLD</h4>
                    <h1 className="text-6xl font-bold text-white ">
                        Hi, i'm <span className="text-designColor capitalize">Panneer</span>
                    </h1>
                    <h2 className="text-4xl font-bold text-white">
                        a <span>{typeText}</span>
                        {/* <Cursor cursorColor='red' /> */}
                        <Cursor cursorColor="#ff014f" />
                    </h2>
                    <p className="text-base font-bodyFont leading-6 tracking-wide">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
                        quos ducimus eos eveniet saepe explicabo magni. Error officia dolore
                        dolor saepe eos nulla recusandae inventore ipsam, corporis cumque
                        perferendis aliquam.
                    </p>
                </div>

                <div className="flex flex-col gap-6 md:flex-row md:justify-start md:gap-20 lgl:flex-col lgl:gap-10 xl:flex-row justify-between">
                    <div>
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            Find me in
                        </h2>
                        <div className="flex gap-4">
                            <span className="bannerIcon">
                                <a href="https://github.com/panneerselvam999" target="_blank" rel="noopener noreferrer">
                                    <FaGithub />
                                </a>
                            </span>
                            <span className="bannerIcon">
                                <a href="https://www.linkedin.com/in/npspanneerselvam/" target="_blank" rel="noopener noreferrer">
                                    <FaLinkedinIn />
                                </a>
                            </span>
                        </div>
                    </div>
                    <div>
                        <h2 className="text-base uppercase font-titleFont mb-4">
                            best skill on
                        </h2>
                        <div className="flex gap-4">
                            <span className="bannerIcon">
                                <FaReact />
                            </span>
                            <span className="bannerIcon">
                                <SiTailwindcss />
                            </span>
                            <span className="bannerIcon text-4xl">
                                <DiResponsive />
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default LeftBanner;
