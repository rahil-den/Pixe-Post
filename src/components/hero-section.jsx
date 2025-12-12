const HeroSection = () => {
  return (
    <section className="w-full px-6 mt-10">
      <div className="max-w-6xl mx-auto">
        
       
        <h1 className="text-[2.3rem] font-semibold leading-tight">
          Pixe-post
        </h1>

       
        <p className="text-[1.3rem] text-neutral-500 mt-1">
          Create aesthetic quote photos.
        </p>

        <div className="w-full mt-10 bg-neutral-100 rounded-xl h-[400px] flex items-center justify-center">
          <div className="opacity-30">
            <img 
              src="" 
              alt="No video"
              className="h-12"
            />
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
