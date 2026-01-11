
import { createContext, useContext, useState } from "react";

const CanvasContext = createContext(null);

export const CanvasProvider = ({ children }) => {
    const [elements, setElements] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const addImage = (src, canvasWidth,canvasHeight) => {

        const img = new Image();
        img.src = src;
//  Creates a new HTMLImageElement.

// Assigning src starts loading the image asynchronously -> Basically naya tag bangega betaa
        img.onload = () => {
    const maxWidth = canvasWidth * 0.8;
    const scale = Math.round(maxWidth / img.width) < 1 ? Math.round(maxWidth / img.width) : 1;

    const newImage = {
      id: crypto.randomUUID(),
      type: "image",
      src,
      x: (canvasWidth - img.width * scale) / 2,
      y: (canvasHeight - img.height * scale) / 2,
      width: img.width * scale,
      height: img.height * scale,
    };

    setElements((prev) => [...prev, newImage]);
    setSelectedId(newImage.id);
  };

    };


const updateElement = (id, updates) => {
    setElements((prev) =>
        prev.map((el) => (el.id === id ? { ...el, ...updates } : el))
    );
};

const selectedElement = elements.find((el) => el.id === selectedId);

 return (
    <CanvasContext.Provider
      value={{
        elements,
        addImage,
        selectedId,
        setSelectedId,
        selectedElement,
        updateElement,
      }}
    >
      {children}
    </CanvasContext.Provider>
  );
};

export const useCanvas = () => {
    const context = useContext(CanvasContext);
    if (!context) {
        throw new Error("useCanvas must be used within a CanvasProvider");
    }
    return context;
};