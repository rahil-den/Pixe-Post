
import { createContext, useContext, useState  } from "react";
const CANVAS_PRESETS = {
    default: { label: "default" ,width:1080, height:1080 },
   
    //  linkedinPost: { label: "LinkedIn Post", width: 1080, height: 627 },
    // pinterestPost: { label: "Pinterest Post", width: 1000, height: 1000 },
    // a4Document: { label: "A4 Document", width: 794, height: 1123 },
    // youtubeThumbnail: { label: "YouTube Thumbnail", width: 1200, height: 720 },
};

const CanvasContext = createContext();

export const CanvasHeaderContext = ({ children  })=>{
    const [canvasSize, setCanvasSize] = useState(CANVAS_PRESETS.default);
    
    const value = {
        canvasSize,
        setCanvasSize,
        CANVAS_PRESETS,
        presets: CANVAS_PRESETS,};

        return (
        <CanvasContext.Provider value={value}>
            {children}
        </CanvasContext.Provider>
    );
};

/* 4. Custom hook (VERY IMPORTANT) */
export const useCanvasHeader = () => {
  const context = useContext(CanvasContext);

  if (!context) {
    throw new Error(
      "useCanvasHeader must be used inside CanvasHeaderProvider"
    );
  }

  return context;
};