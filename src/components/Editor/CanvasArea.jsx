import { useState, useEffect, useRef} from 'react'
const CanvasArea = () => {
    const canvasRef = useRef(null);
    

  return (
    <div>
        CanvasArea Component
        <canvas></canvas>
    </div>
  )
}

export default CanvasArea
