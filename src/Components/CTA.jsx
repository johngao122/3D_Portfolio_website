import React from "react";
import { socialinks } from "../constants";

const CTA = () => {
  return (
    <section className="cta">
      <p className="text-black-500 font-extrabold flex-1 text-3xl max-md:text-center">
        Contact me <br className="sm:block hidden" />
      </p>
      <div className="flex space-x-4">
        {socialinks.map((link, index) => (
          <a
            key={index}
            href={link.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                link.name === "LinkedIn" || link.name === "Github"
                  ? "bg-white"
                  : "bg-blue-500"
              }`}
            >
              <img
                src={link.iconurl}
                alt={link.name}
                className="text-white text-2xl object-cover w-full h-full"
              />
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default CTA;
