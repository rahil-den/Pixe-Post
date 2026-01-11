import { useState , useRef, useMemo} from 'react';
import { useCanvasHeader } from '../../context/CanvasHeader';
import { useCanvas } from '../../context/CanvasContext';
// import { isDragging } from 'motion';

const CanvasArea = () => {

 const { canvasSize, setCanvasSize, CANVAS_PRESETS } = useCanvasHeader();

 const {elements, selectedId, setSelectedId} = useCanvas();
 const canvasRef = useRef(null);
 
 const dragRef = useRef({
  isDragging: false,
  id: null,
  offsetX: 0,
  offsetY: 0,

 });
  
const onMouseDown = (e, el) => {
dragRef.current = {
  isDragging:true,
  id: el.id,
  offsetX: e.clientX - el.x,
  offsetY: e.clientY - el.y,
};
 setSelectedId(el.id);
};

const onMouseMove = (e) => {
  if (!dragRef.current.isDragging) return;

  updateElement(dragRef.current.id,{
    x:e.clientX - dragRef.current.offsetX,
    y:e.clientY - dragRef.current.offsetY,
  });

};

const onMouseUp = (e) => {
  dragRef.current.isDragging = false;
}


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
    ref={canvasRef}
    onMouseMove={onMouseMove}
    onMouseUp={onMouseUp}

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

        onMouseDown={(e) => onMouseDown(e, el)}
      />
      
    ))
    
    }
  </div>
</div>


    </main>
  )
}

export default CanvasArea
