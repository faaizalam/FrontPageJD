import React, { useEffect } from 'react'
import ClassHome from "../Component/Homestyle/Sectionseven.module.scss"


const Sectionseven = () => {
  // const n= document.querySelectorAll(".myanimation")
  useEffect(()=>{

    const observer=new IntersectionObserver(([xleft,xright])=>{
      console.log(xleft)
      if (xleft.isIntersecting) {
        xleft.target.classList.add(`${ClassHome.onscreen}`)
        // xright.target.classList.add(`${ClassHome.onscreen}`)
  
      
        
      }
  
      
      
    })
    let  card = document.querySelectorAll(".myaniseven")
    
    card.forEach(ob => {
      observer.observe(ob)
      
    });
  })


  
 




  return (
    <>
   
 
      <section className={ClassHome.Sectionseven}>
          <div className={`myaniseven ${ClassHome.leftthree}`}>
    

          <h1>
          theGist for Gmail is coming soon!
          </h1>
          <div className={ClassHome.Linemain}>
            <div className={ClassHome.Linee}></div>

          </div>

          
          <h2 className={ClassHome.h2three}>
          Join our Waiting list to get updates.
          </h2>
          </div>
          <div className={ClassHome.Rightthree}>
            <div>

            <img className={ClassHome.imgback} src='./images/circle.jpg' alt='pic'></img>
            </div>

         <div className={`${ClassHome.RightthreeCard}`}>
         <img src='./images/gmail.jpg' alt='pic'></img>
          
         </div>
          </div>



    

      </section>

    </>
  )
}

export default Sectionseven