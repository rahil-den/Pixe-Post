import React from 'react'

const Header = () => {
  return (
    <>
     <header class="px-6 py-4">
  <div class="max-w-5xl mx-auto flex items-center justify-between">
    <div class="text-xl font-semibold">Logo</div>

    <div class="flex items-center gap-4">
          <button class="px-4 py-2 bg-black text-white rounded-md">Start creating</button>
      <button class="px-4 py-2 border border-black rounded-md">Star on GitHub</button>
    </div>
  </div>
</header>



    </>
  )
}

export default Header
