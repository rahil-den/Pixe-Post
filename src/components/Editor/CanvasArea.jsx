import { useState } from 'react';
import { useCanvasHeader } from '../../context/CanvasHeader';


const CanvasArea = () => {

  const { canvasSize, setCanvasSize, CANVAS_PRESETS } = useCanvasHeader();


    
    


  return (
  <main className="flex-1 bg-neutral-200 overflow-auto p-6">
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
          className="bg-white shadow-lg border border-neutral-300 rounded-lg transition-all delay-75"
          style={{
            width: `${canvasSize.width}px`,
            height: `${canvasSize.height}px`,
          }}
        />
      </div>
    </main>
  )
}

export default CanvasArea
