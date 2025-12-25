import React from "react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/60 backdrop-blur-lg border-b border-black/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between flex-wrap">
        <div className="text-2xl font-semibold tracking-tight cursor-pointer">
          <span className="bg-gradient-to-r from-slate-900 to-slate-500 bg-clip-text text-transparent transition-colors duration-300 hover:from-slate-700 hover:to-slate-900">
            PixePost
          </span>
        </div>

        <div className="flex items-center gap-4 mt-4 lg:mt-0">
        
          <a href="/canvas">
            <button className="px-5 py-2.5 rounded-lg font-medium text-white bg-gradient-to-r from-slate-900 to-slate-700 transition-transform duration-200 hover:scale-[1.03] active:scale-[0.97]">
              Start creating
            </button>
          </a>

          <a
            href="https://github.com/rahil-den/Pixe-Post"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="px-5 py-2.5 rounded-lg font-medium text-slate-900 border border-slate-300 transition-colors duration-200 hover:bg-slate-900 hover:text-white">
              Star on GitHub
            </button>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
