import { ImagePlus, Type, Download} from 'lucide-react'

import { useRef } from 'react'
import { useCanvas } from '../../context/CanvasContext.jsx'


const LeftBar = () => {

  const inputRef = useRef(null);
  const { addImage } = useCanvas();

  const handleFile = (event) => {
    const file = event.target.files[0];
    if (!file) return;

    const url = URL.createObjectURL(file);
    addImage(url);
  }
  return (
    <>
    <aside className="w-20 bg-white/60 backdrop-blur-lg border-r border-black/10 p-4 flex flex-col items-center gap-6">
      <button 
      onClick={()=> inputRef.current.click()}
      className="p-3 bg-white border border-black/10 rounded-lg shadow-md hover:bg-slate-50 active:scale-[0.97] transition-transform duration-100">
        <ImagePlus className="w-6 h-6 text-slate-900" />
        
      </button>
           <input
        ref={inputRef}
        type="file"
        accept="image/*"
        hidden
        onChange={handleFile}
      />
    <hr className="w-full border-t border-black/10 my-2" />

    <button className="p-3 bg-white border border-black/10 rounded-lg shadow-md hover:bg-slate-50 active:scale-[0.97] transition-transform duration-100">
        <Type className="w-6 h-6 text-slate-900" />
      </button>

        <hr className="w-full border-t border-black/10 my-2" />
        <button className="p-3 bg-white border border-black/10 rounded-lg shadow-md hover:bg-slate-50 active:scale-[0.97] transition-transform duration-100">
        <Download className="w-6 h-6 text-slate-900" />
        </button>
    </aside>
    </>
  )
}

export default LeftBar
