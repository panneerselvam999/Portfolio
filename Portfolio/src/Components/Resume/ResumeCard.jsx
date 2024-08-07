import React from "react";

const ResumeCard = ({ title, subTitle, result, des }) => {
    return (
        <div className="w-full h-fit group flex">
            <div className="w-10  h-[6px] bgOpacity mt-16 relative ">
                <span className="absolute w-5 h-5 rounded-full -top-2 -left-3 flex justify-center items-center bg-black bg-opacity-60">
                    <span className="w-3 h-3 rounded-full bg-bodyColor inline-flex group-hover:bg-designColor duration-300"></span>
                </span>
            </div>
            <div className="w-full bg-black bg-opacity-20 hover:bg-opacity-30 duration-300 rounded-lg px-10  flex flex-col justify-center gap-10 shadow-shadowOne ">
                <div className="flex flex-col md:flex-row gap-6 md:gap-0 justify-between md:items-center">
                    <div>
                        <h3 className="text-xl md:text-2xl mt-2 text-gray-400 group-hover:text-white duration-300 ">
                            {title}
                        </h3>
                        <p>{subTitle}</p>
                    </div>
                    <div>
                        {typeof result !== "boolean" ? (
                            <p className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium">
                                {result}
                            </p>
                        ) : (
                            <h3>
                                <a
                                    href="https://drive.google.com/file/d/1HlAAUboMyj0yrGVRMUElz-UmL9dkxsfi/view"
                                    target="_blank"
                                    className="px-4 py-2 text-designColor bg-black bg-opacity-25 rounded-lg flex justify-center items-center shadow-shadowOne text-sm font-medium"
                                >
                                    View Certificate
                                </a>
                            </h3>
                        )}
                    </div>
                </div>
                <div>
                    <p>{des}</p>
                </div>
            </div>
        </div>
    );
};

export default ResumeCard;
