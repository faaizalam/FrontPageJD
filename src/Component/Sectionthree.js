import React, { useEffect } from 'react'
import ClassHome from "../Component/Homestyle/Sectionthree.module.scss"


const Sectionthree = () => {
  // const n= document.querySelectorAll(".myanimation")
  useEffect(()=>{

    const observer=new IntersectionObserver(([xleft,xright])=>{
      console.log(xleft)
      if (xleft.isIntersecting) {
        xleft.target.classList.add(`${ClassHome.onscreen}`)
        xright.target.classList.add(`${ClassHome.onscreen}`)
  
      
        
      }
  
      
      
    })
    let  card = document.querySelectorAll(".myanimationthree")
    
    card.forEach(ob => {
      observer.observe(ob)
      
    });
  })


  
 




  return (
    <>
   
 
      <section className={ClassHome.Sectionthree}>
    
          <div className={`myanimationthree ${ClassHome.leftthree}`}>

          <h1>
          The magic of AI & deep learnings at your service
          </h1>
          <div className={ClassHome.Linemain}>
            <div className={ClassHome.Linee}></div>

          </div>

          
          <h2 className={ClassHome.h2three}>
          theGist algorithm goes over the conversation, and instantly creates a short summary for you.
          </h2>
          </div>
          <div className={ClassHome.Rightthree}>
            <div>

            <img src='./images/circle.jpg' alt='pic'></img>
            </div>

         <div className={`myanimationthree ${ClassHome.RightthreeCard}`}>
         <img src='./images/card.jpg' alt='pic'></img>
          
         </div>
          </div>



    

      </section>

    </>
  )
}

export default Sectionthree