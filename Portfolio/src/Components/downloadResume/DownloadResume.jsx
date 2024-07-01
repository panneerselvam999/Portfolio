import React from "react";

const DownloadResumeButton = () => {
    const handleDownload = () => {
        // The path to your resume file
        const resumeUrl = "./resume/ps-resume.pdf.pdf";
        const link = document.createElement("a");
        link.href = resumeUrl;
        link.download = "PANNEER SELVAM - Frontend Developer.pdf.pdf"; // The name of the downloaded file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <button
            onClick={handleDownload}
            // className=" bg-boxBg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            className="bannerIcon w-fit px-3"
        >
            Download Resume
        </button>
    );
};

export default DownloadResumeButton;
