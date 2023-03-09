import React, { useRef } from 'react'
import Class from "../Component/Navbar.module.scss"


import { FaHamburger } from "react-icons/fa";
import { GrClose } from "react-icons/gr";

const Header = () => {


const HumburgerRef=useRef()
const sidebarOpen=(()=>{
  HumburgerRef.current.classList.add(`${Class.ActiveHum}`)

})
const sidebarClose=(()=>{
  HumburgerRef.current.classList.remove(`${Class.ActiveHum}`)

})





    const linkRoutes = [
        {
            title: "Getting started",
            path: ""
        },
        {
            title: "Security and Privacy",
            path: ""
        },
        {
            title: "Pricing",
            path: ""
        },
        {
            title: "Blog",
            path: ""
        },
        {
            title: "Company",
            path: ""
        },
        {
            
            image: "./images/Btnslack.jpg",
            path: ""
        },

    ]

    const Headcomponent=(()=>{
           


        return(
          <>

            <ul  className={Class.navleft}>
                {
                    linkRoutes.map((x) => (
                        <>
                            {
                                x.image?(
                                    <li> <img
                            src={x.image && x.image}
                            alt="BtnSlack"
                            
                            >
                        </img></li>):
                            (
                                    <li>
                                       
                                        <li className={x.title==="Company"?Class.Hover:""}>{x.title}
                                            
                                        {

                                            x.title==="Company"&&(<ul className={Class.HOverli}><li >About</li>
                                            <li >Careers</li>
                                            </ul>)
                                        }
                                        
                                        </li>
                                        
                                    </li>)  
                            }
                            </>
                    ))
                }
                </ul>
                  <ul className={Class.humburger}>
                    <span onClick={sidebarOpen}>
                  <FaHamburger/>

                    </span>
                    {/* {
                        linkRoutes.filter((x)=>!x.image).map((x)=>(
                            <li>
                                {x.title}
                            </li>

                        ))
                    } */}

                  </ul>
                                    </>
        )
    })


    return (
        
        <header className={Class.nav}>
     
            <div className={Class.logo}>
                <img src="./images/logo.PNG" alt='logo'></img>
               <p className={Class.logotext}>
                the
                <span>Gist</span>

               </p>
               
            </div>
            <div className={Class.LogoInresponsive}>
             {/* <span> */}
            <svg className={Class.Svg} viewBox="0 0 100 100" width="200px" height="200px">
     <circle cx="50"  cy="50" r="40" stroke="" stroke-width="4" fill="#AA336A" />
   </svg>
 <div className={Class.SvgImg}>
    <img src='./images/Frame.jpg' alt='img'></img>
    <span>theGist for</span>
    <span>Gmail</span>
 </div>
             {/* </span> */}
      
            </div>
            <div className={Class.LeftNav}>
                
   <Headcomponent/>

            </div>

        <aside  ref={HumburgerRef} className={Class.Aisde}>
            <div className={Class.sidebarchild}>
             <div className={Class.sidebarchildElemnts}>

            <span className={Class.CloseBtn} onClick={sidebarClose}>

        <GrClose/>
            </span>
            {
                linkRoutes.filter((x)=>!x.image).map((x)=>(
                    <ul>
                        <li>{x.title}</li>
                    </ul>
                ))
            }

            

     
             </div>
            </div>
            

        </aside>
        </header>
        
    )
}

export default Header