
const Features = () => {
  return (
     <section className="w-full px-6 mt-[25%]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Features</h1>

        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">

          <div className="border border-gray-300 rounded-xl p-6 w-full md:w-1/2 h-64 md:h-96 bg-purple-100 flex flex-col gap-6">
            
            <div className="w-full bg-neutral-100 rounded-xl h-60 flex items-center justify-center">
              <img
                src=""
                alt="No image"
                className="h-14 opacity-30"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Upload and Create</h2>
              <p className="text-neutral-500">
                Upload your photo and turn it into a share-worthy quote image with personalized style.
              </p>
            </div>
          </div>

          <div className="border border-gray-300 rounded-xl p-6 w-full md:w-1/2 h-64 md:h-96 bg-cyan-100/20 flex flex-col gap-6">
            
            <div className="w-full bg-neutral-100 rounded-xl h-60 flex items-center justify-center">
              <img
                src=""
                alt="No image"
                className="h-14 opacity-30"
              />
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2">Instant Previews</h2>
              <p className="text-neutral-500">
                See rotating examples of aesthetic quote photos—get inspired before you start.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>


  )
}

export default Features
