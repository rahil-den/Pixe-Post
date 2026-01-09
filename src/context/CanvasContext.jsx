
import { createContext, useContext, useState } from "react";

const CanvasContext = createContext(null);

export const CanvasProvider = ({ children }) => {
    const [elements, setElements] = useState([]);
    const [selectedId, setSelectedId] = useState(null);

    const addImage = (src) => {
        const newImage = {
            id: crypto.randomUUID(),
            type: "image",
            src, 
            x:100,
            y:100,
            width:300,
            height:300,
        };

        setElements((prev) => [...prev, newImage]);
        setSelectedId(newImage.id);

    }


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