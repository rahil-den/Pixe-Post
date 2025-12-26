import { label } from 'motion/react-client';
import { useState, useEffect, useRef, use} from 'react'

const CANVAS_PRESETS = {
  instagramPost: { label: 'Instagram Post', width: 1080, height: 1080 },
  instagramStory: { label: 'Instagram Story', width: 1080, height: 1920 },
  facebookPost: { label: 'Facebook Post', width: 1200, height: 630 },
  twitterPost: { label: 'Twitter Post', width: 1024, height: 512 },
  linkedinPost: { label: 'LinkedIn Post', width: 1200, height: 627 },
  pinterestPost: { label: 'Pinterest Post', width: 1000, height: 1500 },
  a4Document: { label: 'A4 Document', width: 794, height: 1123 },
  youtubeThumbnail: { label: 'YouTube Thumbnail', width: 1280, height: 720 },
}


const CanvasArea = () => {
  const [canvasSize, setCanvasSize] = useState(CANVAS_PRESETS.instagramPost);
  const [isActive, setIsActive] = useState(false);


    
    


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
          className="bg-white shadow-lg border border-neutral-300 rounded-lg"
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
