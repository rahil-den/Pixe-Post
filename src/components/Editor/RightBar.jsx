import React from 'react'

const fontFamilies = [
  { value: 'Inter', label: 'Inter', style: 'font-sans' },
  { value: 'Playfair Display', label: 'Playfair Display', style: 'font-serif' },
  { value: 'Space Grotesk', label: 'Space Grotesk', style: '' },
  { value: 'Poppins', label: 'Poppins', style: '' },
  { value: 'Bebas Neue', label: 'Bebas Neue', style: '' },
  { value: 'Lobster', label: 'Lobster', style: '' },
  { value: 'Pacifico', label: 'Pacifico', style: '' },
  { value: 'Dancing Script', label: 'Dancing Script', style: '' },
  { value: 'Caveat', label: 'Caveat', style: '' },
  { value: 'Permanent Marker', label: 'Permanent Marker', style: '' },
  { value: 'Righteous', label: 'Righteous', style: '' },
  { value: 'Fredoka', label: 'Fredoka', style: '' },
  { value: 'Dela Gothic One', label: 'Dela Gothic One', style: '' },
  { value: 'Georgia', label: 'Georgia', style: 'font-serif' },
  { value: 'Arial', label: 'Arial', style: 'font-sans' },
  { value: 'Geista', label: 'Geista', style: '' },
];
const RightBar = () => {
    
  return (
       <aside className="w-74 bg-editor-panel border-l border-editor-panel-border p-4 panel-shadow">
        <div className="h-full flex items-center justify-center">
          <p className="text-sm text-muted-foreground text-center">
            Select an element to edit
          </p>
        </div>
      </aside>
  )
}

export default RightBar
