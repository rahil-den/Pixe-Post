import { useState , useRef, useMemo} from 'react';
import { useCanvasHeader } from '../../context/CanvasHeader';
import { useCanvas } from '../../context/CanvasContext';

const CanvasArea = () => {

  const { canvasSize, setCanvasSize, CANVAS_PRESETS } = useCanvasHeader();

 const {elements, selectedId, setSelectedId} = useCanvas();
    
    


  return (
  <main className="flex-1 bg-neutral-200 overflow-auto p-6 min-h-0">
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
        {Object.values(CANVAS_PRESETS).map((preset) => {
          const isActive = canvasSize.label === preset.label;

          return (
            <button
              key={preset.label}
              onClick={() => setCanvasSize(preset)}
              className={`
                px-3 py-1.5 rounded-md text-sm border transition-all
                ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600 shadow-md"
                    : "bg-white text-neutral-700 border-neutral-300 hover:bg-neutral-100"
                }
              `}
            >
              {preset.label}
            </button>
          );
        })}
      </div>


      <div className="flex justify-center">
  <div
    className="bg-white relative shadow-lg border border-neutral-300 rounded-lg overflow-hidden"
    style={{
      width: canvasSize.width,
      height: canvasSize.height,
    }}
  >
    {elements.map((el) => (
      <img
        key={el.id}
        src={el.src}
        onClick={() => setSelectedId(el.id)}
        className={`absolute cursor-pointer ${
          selectedId === el.id ? "ring-2 ring-blue-500" : ""
        }`}
        style={{
          top: el.y,
          left: el.x,
          width: el.width,
          height: el.height,
        }}
      />
    ))}
  </div>
</div>


    </main>
  )
}

export default CanvasArea
