import React from "react";
import { certificatesData } from "./CertificatesData";
import FadeIn from "@/app/components/animations/FadeIn";

const Certificates = () => {
  return (
    <div className="max-w-[90%] mx-auto my-8 px-4 md:px-6 lg:px-8 py-8">
      <FadeIn>
        <h1 className="text-2xl sm:text-3xl md:text-4xl text-center font-extrabold tracking-tight leading-tight mb-8">
          Certificates
        </h1>
      </FadeIn>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-center">
        {certificatesData.map((cert, index) => (
          <FadeIn key={index} delay={index * 0.1}>
            <div
              key={index}
              className="bg-white rounded-lg p-4 border border-neutral-400"
            >
              <h3 className="text-sm font-medium text-gray-800 mb-2">
                {cert.title}
              </h3>
              <p className="text-xs text-gray-500">{cert.issuer}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
