"use client";

import React from "react";
import { ArrowUpRight } from "lucide-react";

const WorkSection = () => {
  const projects = [
    {
      id: 1,
      title: "Nexora",
      category: "Fintech Website",
      theme: "dark",
      bgColor: "bg-[#111111]",
      textColor: "text-white",
      subTextColor: "text-white/50",
      imagePlaceholder: (
        <div className="absolute -bottom-8 -right-8 w-64 h-48 bg-gradient-to-br from-gray-800 to-black rounded-2xl border border-white/10 transform rotate-[-5deg] shadow-2xl"></div>
      ),
    },
    {
      id: 2,
      title: "Clarity",
      category: "Brand Identity",
      theme: "dark",
      bgColor: "bg-[#151515]",
      textColor: "text-white",
      subTextColor: "text-white/50",
      imagePlaceholder: (
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/3 w-48 h-56 bg-black rounded-sm border border-white/5 flex items-center justify-center shadow-xl">
          <span className="text-white/20 font-serif text-2xl tracking-widest">Clarity</span>
        </div>
      ),
    },
    {
      id: 3,
      title: "Pulse Analytics",
      category: "Dashboard Design",
      theme: "light",
      bgColor: "bg-[#F8F9FA]",
      textColor: "text-black",
      subTextColor: "text-black/50",
      imagePlaceholder: (
        <div className="absolute -bottom-4 -right-4 w-72 h-40 bg-white rounded-xl border border-black/5 shadow-lg overflow-hidden flex flex-col">
          <div className="h-6 border-b border-black/5 flex items-center px-3 gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-black/20"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-black/20"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-black/20"></div>
          </div>
          <div className="flex-1 p-3 flex gap-2">
            <div className="w-12 h-full bg-black/5 rounded"></div>
            <div className="flex-1 h-full bg-black/5 rounded"></div>
          </div>
        </div>
      ),
    },
    {
      id: 4,
      title: "Nexonom",
      category: "Mobile App Design",
      theme: "light",
      bgColor: "bg-[#EAEAEA]",
      textColor: "text-black",
      subTextColor: "text-black/50",
      imagePlaceholder: (
        <div className="absolute -bottom-12 -right-8 w-40 h-72 bg-[#1A1A1A] rounded-[2rem] border-[6px] border-black shadow-2xl transform rotate-[15deg]">
           <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-black rounded-full"></div>
           <div className="mt-8 px-4">
             <div className="w-full h-20 bg-white/10 rounded-xl mb-4"></div>
             <div className="w-full h-8 bg-white/10 rounded-md mb-2"></div>
             <div className="w-full h-8 bg-white/10 rounded-md"></div>
           </div>
        </div>
      ),
    },
  ];

  return (
    <section id="work" className="relative w-full min-h-screen bg-[#050505] overflow-hidden py-24 lg:py-32">
      {/* Background Noise/Effect */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none noise-overlay"></div>
      
      {/* Abstract Background Element (similar to image bottom left) */}
      <div className="absolute bottom-0 left-0 w-[800px] h-[400px] bg-gradient-to-tr from-white/[0.03] to-transparent rounded-tr-[100%] pointer-events-none blur-3xl"></div>

      <div className="max-w-[1560px] mx-auto px-6 lg:px-14 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-12 xl:gap-8">
          
          {/* Left Column: Text and Button */}
          <div className="xl:col-span-4 flex flex-col justify-start pt-4">
            
            {/* Label */}
            <div className="inline-flex items-center gap-2 border border-white/15 rounded-full px-4 py-1.5 w-fit mb-10">
              <span className="w-1.5 h-1.5 bg-white rounded-full"></span>
              <span className="text-[10px] text-white tracking-[0.2em] font-medium uppercase">Our Work</span>
            </div>

            {/* Title */}
            <h2 className="text-5xl lg:text-[64px] leading-[1.1] text-white mb-6">
              <span className="font-sans font-medium block">Work that</span>
              <span className="font-serif italic font-light block mt-1">Speaks for Itself</span>
            </h2>

            {/* Subtitle */}
            <p className="text-[#888888] font-sans text-base lg:text-lg max-w-md mb-12 leading-relaxed">
              We take pride in delivering digital experiences that make a difference.
            </p>

            {/* Button */}
            <a 
              href="#projects"
              className="inline-flex items-center justify-between bg-white text-black px-6 py-3.5 rounded-full w-fit hover:scale-105 transition-transform duration-300 ease-out font-sans font-medium text-sm group"
            >
              <span className="mr-6">View All Projects</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Right Column: Project Cards Grid */}
          <div className="xl:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
            {projects.map((project) => (
              <div 
                key={project.id}
                className={`${project.bgColor} rounded-[32px] overflow-hidden relative group cursor-pointer h-[380px] lg:h-[420px] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]`}
              >
                {/* Text Content */}
                <div className="relative z-20 p-8 lg:p-10">
                  <h3 className={`${project.textColor} font-sans font-semibold text-2xl mb-1`}>
                    {project.title}
                  </h3>
                  <p className={`${project.subTextColor} font-sans text-sm font-medium`}>
                    {project.category}
                  </p>
                </div>

                {/* Arrow Button */}
                <div className="absolute bottom-8 left-8 z-20">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110 ${project.theme === 'dark' ? 'bg-white text-black' : 'bg-white shadow-sm text-black border border-black/5'}`}>
                    <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* Image / Placeholder Area */}
                <div className="absolute inset-0 z-10 transition-transform duration-700 group-hover:scale-105">
                  {project.imagePlaceholder}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkSection;
