import { ImagePlus, Type, Download} from 'lucide-react'

const LeftBar = () => {
  return (
    <>
    <aside className="w-20 bg-white/60 backdrop-blur-lg border-r border-black/10 p-4 flex flex-col items-center gap-6">
    <span className="text-sm font-medium text-slate-900">Tools</span>
    <interval className="w-full border-t border-black/10 my-2" />
      <button className="p-3 bg-white border border-black/10 rounded-lg shadow-md hover:bg-slate-50 active:scale-[0.97] transition-transform duration-100">
        <ImagePlus className="w-6 h-6 text-slate-900" />
        
      </button>
    <interval className="w-full border-t border-black/10 my-2" />

    <button className="p-3 bg-white border border-black/10 rounded-lg shadow-md hover:bg-slate-50 active:scale-[0.97] transition-transform duration-100">
        <Type className="w-6 h-6 text-slate-900" />
      </button>

        <interval className="w-full border-t border-black/10 my-2" />
        <button className="p-3 bg-white border border-black/10 rounded-lg shadow-md hover:bg-slate-50 active:scale-[0.97] transition-transform duration-100">
        <Download className="w-6 h-6 text-slate-900" />
        </button>
    </aside>
    </>
  )
}

export default LeftBar
