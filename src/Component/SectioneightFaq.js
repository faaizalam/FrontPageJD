import React, { useEffect } from 'react'
import secteight from "../Component/Homestyle/SectioneightFAQ.module.scss"
import { FAQ } from './FAQdata'
import parse from "html-react-parser"
// import MessengerCustomerChat from 'react-messenger-customer-chat';
// "205375315461291"
// page  216280915482971
const SectionEightFaq = () => {

// useEffect(()=>{
//   const faq=document.querySelectorAll("details")
//   faq.forEach((xx)=>{
   
      
      
//       const ani=new KeyframeEffect(xx,[
//         {opacity:0,marginLeft:"-10px"},
        
//       ],
//       {duration:5000,easing:"ease-in"}
//       )
//       const t=new Animation(ani)
//       t.play()
    
    
//   })
  
 


// },[])


const deatilstagclose=((e)=>{
 const faq=document.querySelectorAll("details")
 faq.forEach((x)=>{
  //  console.log(x.childElementCount)
  //  console.log(x["open"])
   
   if (x!==e.currentTarget) {
     x.removeAttribute("open")
    }
    
  })
  
  
  
  
  const faqss=document.querySelectorAll("details")
  // console.log(faqss,"h")
  // faqss.forEach((xx)=>{
  //   // console.log(xx.childNodes[1])
    
      
      
  //     const ani=new KeyframeEffect(xx.childNodes[1],[
  //       {opacity:0,marginLeft:"-40px"},
  //       {opacity:1,marginLeft:"0"}
        
  //     ],
  //     {duration:2000,easing:"ease-in"}
  //     )
  //     const t=new Animation(ani)
  //     t.play()
    
    
  // })


})



    
  return (
    <section className={secteight.mainfaq}>
      <div className={secteight.faqmain}>
        <h1>FAQ'S</h1>
        <div className={secteight.faqlines}>

       
        {
          
          FAQ.map((x)=>(
            
            
       x.longtext?(<details onClick={deatilstagclose} className={secteight.faqtitlenumber}>
        <summary><div className={secteight.ids}>{x.id}</div>   {"    "}  <div className={secteight.texts}>{x.title}</div> </summary> 
        <div className={secteight.faqpara}>
          {
            x.text.map((intext)=>(
              
            <p>{intext.textnum} {"   "}  {parse(intext.textin)}</p>
        
        
        
        ))
      }
      </div> 
        </details>
            ):(<details onClick={deatilstagclose} className={secteight.faqtitlenumber}>
              <summary><div className={secteight.ids}>{x.id}</div>   {"    "}  <div className={secteight.texts}>{x.title}</div> </summary> 
              <div className={secteight.faqpara}>
                
              <p>{parse(x.text)}</p>
                </div> 
              </details>
                  )))
        }
        
        
      </div>
      </div>
     
 
    
    </section>
  )
}

export default SectionEightFaq