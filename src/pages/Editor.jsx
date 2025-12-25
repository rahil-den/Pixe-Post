import TopBar from "../components/Editor/TopBar.jsx";
import LeftBar from "../components/Editor/LeftBar.jsx";
import CanvasArea from "../components/Editor/CanvasArea.jsx";
import RightBar from "../components/Editor/RightBar.jsx";

const Editor = () => {
  return (
    <div className="h-screen w-full flex flex-col">
      <TopBar />

      <div className="flex flex-1 overflow-hidden">
        <LeftBar />

       
        <div className="flex-1">
          <CanvasArea />
        </div>

        <RightBar />
      </div>

    </div>
  );
};

export default Editor;
