import React, { useEffect } from 'react'
import ClassHome from "../Component/Homestyle/Sectionfour.module.scss"
// import ClassHome from "../Component/Homestyle/Sectionfour.module.scss"
const Sectionfour = () => {
   // const n= document.querySelectorAll(".myanimation")
   useEffect(()=>{

    const observer=new IntersectionObserver(([xleft,xright])=>{
      console.log(xleft)
      if (xleft.isIntersecting) {
        xleft.target.classList.add(`${ClassHome.onscreen}`)
        xright.target.classList.add(`${ClassHome.onscreen}`)
  
      
        
      }
  
      
      
    })
    let  card = document.querySelectorAll(".myanimationfour")
    
    card.forEach(ob => {
      observer.observe(ob)
      
    });
  })
  return (
    <>
      <section className={ClassHome.Sectionfour}>
   
    
      <div className={ClassHome.Rightthree}>
      <div>

      <img src='./images/sectfourcardback.jpg' alt='pic'></img>
      </div>

   <div className={`myanimationfour ${ClassHome.RightthreeCard}`}>
   <img src='./images/secfcard.jpg' alt='pic'></img>
    
   </div>
    </div>


    <div className={`myanimationfour ${ClassHome.leftfour}`}>

    <h1>
    Instantly catch up with your team's important discussions
    </h1>
    <div className={ClassHome.Linemain}>
      <div className={ClassHome.Linee}></div>

    </div>

    
    <h2 className={ClassHome.h2four}>
    
Instantly catch up with your team's important discussions
No need to go through 100`s of posts. Cover channels you're active in, and those you're not.
    </h2>
    </div>
   








   </section>
    
    </>
  )
}

export default Sectionfour