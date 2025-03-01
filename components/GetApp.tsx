import Image from "next/image";

import Button from "./Button";

const GetApp = () => {
  return (
    <section id="get-app" className="flexCenter w-full flex-col pb-[100px]">
      <div className="get-app">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-12">
          <h2 className="bold-40 lg:text-[64px] lg:font-[700] lg:leading-[120%] xl:max-w-[320px] capitalize">
            Get for <span className="text-green-50">free</span> now!
          </h2>
          <p className="regular-16 text-gray-10">
            Available for iOS and Android Devices
          </p>
          <span className="mt-[-40px] text-green-50 bold-18">
            Download Now!
          </span>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap xl:flex-row">
            <Button
              type="button"
              title="App Store"
              icon="/apple.svg"
              variant="btn_white"
              full
            />
            <Button
              type="button"
              title="Play Store"
              icon="/android.svg"
              variant="btn_dark_green_outline"
              full
            />
          </div>
        </div>

        <div className="flex flex-1 items-center justify-end">
          <Image src={"/phones.png"} alt="Phones" width={550} height={870} />
        </div>
      </div>
    </section>
  );
};

export default GetApp;
