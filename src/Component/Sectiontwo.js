import React from 'react'
import ClassHome from "../Component/Homestyle/Sectiontwo.module.scss"
// import ClassHome from "../Component/Homestyle/Sectiontwo.module.scss"
import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei"

const Sectiontwo= () => {

const ImagesPath=[
  {
    image:"../images/SecTwo1.jpg"
  },
  {
    image:"../images/SecTwo2.jpg"
  },
  {
    image:"../images/SecTwo3.jpg"
  },
  {
    image:"../images/SecTwo4.jpg"
  },
  {
    image:"../images/SecTwo5.jpg"
  }
]



  return (
    <>
      <>
            <section className={ClassHome.MAINSECONSEC}>
              
   <div  className={ClassHome.secText}>
    <p>

Top performing teams around the world use theGist
    </p>
    

   </div>
   <div  className={ClassHome.secImages}>
    {
      ImagesPath.map((x)=>(
        <img src={x.image} alt="secimg"></img>
      ))
    }
    
    

   </div>



            </section>

        </>

    
    </>
  )
}

export default Sectiontwo