import React from 'react'
import logo from '/src/assets/Barato log-red.svg'

function About() {
  return (
    <div className='flex flex-col justify-center items-center px-8 py-10 md:px-14 md:py-14 2xl:px-24 2xl:py-24 gap-4'>
        <h1 className='font-bold text-2xl  '>What we do?</h1>
        <p className='md:px-20 xl:px-50 2xl:px-60 text-center '>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
        <img src={logo} alt=""  className='my-4'/>
        <div className='flex flex-col gap-5'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries</p>
            <p>but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of letraset sheets containing lorem Ipsum passages, and more recently with</p>
            <p>Content here, content here', making it look like readable english. many desktop publishing packages and web page editors now use lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.</p>
            <p>College in virginia, looked up one of the more obscure latin words, consectetur, from a lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. lorem Ipsum comes from sections</p>
            <p>The standard chunk of lorem Ipsum used since the 1500s is reproduced below for those interested. sections 1.10.32 and 1.10.33 from "de finibus bonorum et malorum" by cicero are also reproduced in their</p>
        </div>
    </div>
  )
}

export default About