import { useCanvas } from "../../context/CanvasContext.jsx";

const RightBar = () => {
  const { selectedElement, updateElement } = useCanvas();

  if (!selectedElement) {
    return (
      <aside className="w-72 shrink-0 border-l p-4 text-sm text-neutral-500">
        Select an element to edit
      </aside>
    );
  }

  if (selectedElement.type === "image") {
    return (
      <aside className="w-72 shrink-0 border-l p-4 space-y-4">
        <h3 className="font-medium">Image Settings</h3>

        <div>
          <label className="text-xs">Width</label>
          <input
            type="number"
            value={selectedElement.width}
            onChange={(e) =>
              updateElement(selectedElement.id, {
                width: Number(e.target.value),
              })
            }
            className="w-full border rounded px-2 py-1"
          />
        </div>

        <div>
          <label className="text-xs">Height</label>
          <input
            type="number"
            value={selectedElement.height}
            onChange={(e) =>
              updateElement(selectedElement.id, {
                height: Number(e.target.value),
              })
            }
            className="w-full border rounded px-2 py-1"
          />
        </div>
      </aside>
    );
  }

  return null;
};

export default RightBar;
