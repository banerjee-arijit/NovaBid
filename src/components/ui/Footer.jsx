import React from "react";

const Footer = () => {
  return (
    <div className="relative h-screen -mt-32">
      {/* Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 -z-10 h-full w-full px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#00b8db_100%)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4">
        <div className="max-w-3xl text-center">
          <h1 className="mb-8 text-4xl tracking-tight sm:text-6xl lg:text-7xl text-white">
            Your Next Great <span className="text-[#00b8db]">Auction</span>
          </h1>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-neutral-300">
            Build your perfect auction with ease. Our platform lets you create
            and participate in auctions like never before—secure, seamless, and
            customizable.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="rounded-lg px-6 py-3 font-medium bg-[#00b8db] text-slate-900 hover:bg-[#00b8db]/80">
              Get Started
            </button>
            <button className="rounded-lg border px-6 py-3 font-medium border-slate-700 bg-slate-800 text-white hover:bg-slate-700">
              Learn More
            </button>
          </div>

          {/* Contact Email */}
          <p className="text-sm text-neutral-400">
            Contact us at{" "}
            <a
              href="mailto:arijitbanerjee873@gmail.com"
              className="text-cyan-400 hover:underline"
            >
              arijitbanerjee873@gmail.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
