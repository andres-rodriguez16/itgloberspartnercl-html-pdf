import React, {useState, useEffect} from 'react'

type Props = {
  pdfUrl : string,
  width : number,
  height : number
}

function PdfRender({pdfUrl, width, height} : Props) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    mounted && (
      <div className="flex justify-center">
        <object 
          data={pdfUrl} 
          type="application/pdf" 
          width={width} 
          height={height} 
        >
          <iframe  title= "PDF" src= {pdfUrl} width= {width} height= {height} >
            <p>Este navegador no soporta pdf</p>
          </iframe>
        </object>
      </div>
    )
  )
}

export default PdfRender