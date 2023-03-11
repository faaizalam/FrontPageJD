import React, { useEffect } from 'react'
import ClassHome from "../Component/Homestyle/Sectionfive.module.scss"


const Sectionfive = () => {
  // const n= document.querySelectorAll(".myanimation")
  useEffect(()=>{

    const observer=new IntersectionObserver(([xleft,xright])=>{
      console.log(xleft)
      if (xleft.isIntersecting) {
        xleft.target.classList.add(`${ClassHome.onscreenfive}`)
        // xright.target.classList.add(`${ClassHome.onscreen}`)
  
      
        
      }
  
      
      
    })
    let  card = document.querySelector(".myfive")
    
    
      observer.observe(card)
      
    
  })


  
 




  return (
    <>
   
 
      <section className={ClassHome.Sectionthree}>
    
          <div className={`myfive ${ClassHome.leftfive}`}>

          <h1>
          Privacy and security are our top priority
          </h1>
          <div className={ClassHome.Linemain}>
            <div className={ClassHome.Linee}></div>

          </div>

          
          <h2 className={ClassHome.h2secfive} style={{display:"flex" ,flexDirection:"column"}}>
          Since day one, it's part of every decision we're making.
          <span>Learn more.</span>
          </h2>
          </div>
          <div className={ClassHome.Rightthree}>

            <img src='./images/imgBox.PNG' alt='Box' />
            {/* <div>

            <img src='./images/secfiveimg.jpg' alt='pic'></img>
            </div>

         <div className={ClassHome.RightthreeCard}>
         <video muted autoPlay loop>
          <source src='./images/file2.mp4'></source>
         </video>
          
         </div> */}
          </div>



    

      </section>

    </>
  )
}

export default Sectionfive