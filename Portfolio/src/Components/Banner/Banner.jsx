import React, { Suspense } from "react";
// import LeftBanner from "./LeftBanner";
// import RightBanner from "./RightBanner";

const LeftBanner = React.lazy(() => import("./LeftBanner"));
const RightBanner = React.lazy(() => import("./RightBanner"));

const Banner = () => {
  return (
    <section
      id="home"
      className="w-full mx-auto pt-10 pb-20 flex flex-col gap-10 xl:gap-0 lgl:flex-row  items-center border-b-[1px] font-titleFont border-b-black"
    >
      <Suspense fallback={<div>Loading ....</div>}>
        <LeftBanner />
        {/* <RightBanner /> */}
      </Suspense>
    </section>
  );
};

export default Banner;
