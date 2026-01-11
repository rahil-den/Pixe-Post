import TopBar from "../components/Editor/TopBar.jsx";
import LeftBar from "../components/Editor/LeftBar.jsx";
import CanvasArea from "../components/Editor/CanvasArea.jsx";
import RightBar from "../components/Editor/RightBar.jsx";
import { CanvasHeaderContext } from "../context/CanvasHeader.jsx";
import { CanvasProvider } from "../context/CanvasContext.jsx";
const Editor = () => {
  return (
    <CanvasHeaderContext>
    <CanvasProvider>
    <div className="h-screen w-full flex flex-col">
      <TopBar />

      <div className="flex flex-1 min-h-0">

        <LeftBar />

       
        <div className="flex-1">
          <CanvasArea />
        </div>

        <RightBar />
      </div>

    </div>
    </CanvasProvider>
    </CanvasHeaderContext>
  );
};

export default Editor;
