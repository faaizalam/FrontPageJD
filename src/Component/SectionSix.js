import React, { useEffect } from 'react'
import ClassHome from "../Component/Homestyle/SectionSix.module.scss"
// import ClassHome from "../Component/Homestyle/Sectionfour.module.scss"
const SectionSix = () => {
   // const n= document.querySelectorAll(".myanimation")
//    useEffect(()=>{

//     const observer=new IntersectionObserver(([xleft,xright])=>{
//       console.log(xleft)
//       if (xleft.isIntersecting) {
//         xleft.target.classList.add(`${ClassHome.onscreen}`)
//         xright.target.classList.add(`${ClassHome.onscreen}`)
  
      
        
//       }
  
      
      
//     })
//     let  card = document.querySelectorAll(".myanimation")
    
//     card.forEach(ob => {
//       observer.observe(ob)
      
//     });
//   })
  return (
    <>
      <section className={ClassHome.Sectionsix}>
   
    
      <div className={ClassHome.Rightthree}>
      <div>

      <img src='./images/Customimg.PNG' alt='pic'></img>
      </div>

  
    </div>


    <div className={`myanimation ${ClassHome.leftfour}`}>

    <h1>
    
Ready to organize insights from your Slack integrations?
    </h1>
    <div className={ClassHome.Linemain}>
      <div className={ClassHome.Linee}></div>

    </div>

    
    <h2 className={ClassHome.h2four}>
    
    Save time with summaries of insights from supported bots for Slack.
  A list of supported bots
    </h2>
    </div>
   








   </section>
    
    </>
  )
}

export default SectionSix