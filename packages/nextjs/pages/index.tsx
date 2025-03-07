import { useState } from "react";
import Image from "next/image";
import type { NextPage } from "next";
import { MetaHeader } from "~~/components/MetaHeader";

const Home: NextPage = () => {
  return (
    <>
      <MetaHeader />
      {/* Hero section  */}
      <div
        className="flex flex-col items-center py-8 gap-12 md:gap-20"
        style={{ backgroundImage: `url(/assets/bg.png)`, backgroundRepeat: "repeat" }}
      >
        <div className="flex items-center gap-2">
          <div className="flex relative w-10 h-10">
            <Image alt="MC1R Ginger Science Logo" className="cursor-pointer" fill src="/favicon.png" />
          </div>
          <p className="text-3xl m-0 font-medium text-white mt-1">Ginger Science</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 mb-14 px-4">
          <h1 className="text-center text-3xl lg:text-5xl text-white max-w-md lg:max-w-2xl px-3 m-0">
            Unlock the Science of Redhead Health, Wellness & Longevity
          </h1>
          <h3 className="text-center text-3xl lg:text-2xl text-white max-w-md lg:max-w-2xl px-3 m-0">
            Personalized Genomics, AI & Data for Redheads
          </h3>
          <div className="flex flex-wrap gap-4 items-center justify-center">
            

          </div>
        </div>
      </div>

      {/* About */}
      <div className="bg-base-300/20">
        <div className="container max-w-[90%] lg:max-w-7xl m-auto py-16 lg:py-56 lg:py-20 lg:pl-12 lg:pr-6 flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-0">
          <div className="space-y-6">
            <div className="flex items-center justify-center lg:flex-col lg:items-start lg:justify-start gap-2 pt-4 lg:pt-0">
              <Image src="/favicon.png" alt="MC1R logo" height={30} width={30} />
              <p className="text-center lg:text-left text-xl m-0 font-light">WHY REDHEADS ARE DIFFERENT</p>
            </div>

            <h2 className="text-2xl lg:text-4xl lg:w-4/5 text-center lg:text-left font-medium">
              The MC1R gene influences not just hair color, but pain tolerance, inflammation, vitamin D processing, and even aging.
            </h2>
            <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
              Redheads are genetically unique—and that means our health, longevity, and biology don’t fit the one-size-fits-all model.
            </p>
            <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
              Until now, redhead health has been overlooked. We’re here to change that.
            </p>
          </div>
          <div className="max-w-[400px] lg:max-w-none">
            <Image src="/MC1R.png" alt="Ginger Science MC1R" width={1000} height={1000} />
          </div>
        </div>
      </div>
      <div className="container max-w-[90%] lg:max-w-7xl m-auto py-16 lg:py-20 pb-20 lg:pb-32 lg:px-12 flex flex-col-reverse lg:flex-row items-center gap-5 lg:gap-10">
  {/* Left Side - Image */}
  <div className="max-w-[400px] lg:max-w-none">
    <Image src="/redhead.png" alt="Ginger Science MC1R" width={800} height={800} />
  </div>

  {/* Right Side - Content */}
  <div className="space-y-6 flex flex-col items-center lg:items-end">
    <div className="flex items-center justify-center lg:flex-col lg:items-start lg:justify-start gap-2 lg:w-3/4 pt-4 lg:pt-0">
      <Image src="/favicon.png" alt="MC1R logo" height={20} width={20} />
      <p className="text-center lg:text-left text-xl m-0 font-light">GENETICS & LONGEVITY</p>
    </div>
    <div className="lg:w-3/4 space-y-5">
      <h2 className="text-2xl lg:text-4xl lg:w-4/5 text-center lg:text-left font-medium">
        How does MC1R affect aging, metabolism, and inflammation?
      </h2>
      <p className="m-auto text-center lg:text-left lg:mx-0 max-w-[300px] lg:max-w-none lg:w-3/4">
        What do redheads need to thrive? Our AI-driven research uncovers new insights into redhead health and longevity.
      </p>
    </div>
  </div>
</div>


      
    
     


      {/* Join the Movement */}
      <div className="bg-[url(/assets/bg.png)] h-[576px] bg-cover bg-center flex items-end justify-center py-20 lg:py-32 pb-20 lg:pb-32">
        
        <div className="flex flex-col justify-center items-center bg-base-300 w-4/5 max-w-3xl lg:w-5/12 rounded-3xl shadow-lg shadow-primary p-10 gap-4 -mb-12">
          <Image src="/favicon.png" alt="MC1R logo" height={30} width={30} />
          <p className="text-center text-3xl font-medium m-0">Join the Movement</p>
          <p className="text-center m-0">Be the first to get exclusive insights, early research findings, and opportunities to participate in redhead longevity studies.</p>
          <div className="ml-embedded" data-form="CUVD6r"></div>
        </div>
      </div>
    </>
  );
};

export default Home;
