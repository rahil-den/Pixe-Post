import { Download } from "lucide-react";

const TopBar = () => {
  return (
    <header className="w-full h-16 bg-white/60 backdrop-blur-lg border-b border-black/10 px-6 flex items-center justify-between">
      
     
      <div className="text-lg font-semibold tracking-tight text-slate-900">
        Pixel-post
      </div>

    
      <div className="text-sm text-slate-600">
        Instagram Post · 1080 × 1080
      </div>

      
      <div className="flex items-center gap-3">
        <button className="flex items-center gap-2 px-4 py-2 bg-black text-white rounded-lg text-sm font-medium hover:bg-black/90 active:scale-[0.97] transition">
          <Download className="w-4 h-4" />
          Export
        </button>
      </div>

    </header>
  );
};

export default TopBar;
