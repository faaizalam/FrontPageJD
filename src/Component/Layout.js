import React from 'react'
import Classs from "../Component/Layout.module.scss"
import Header from './Header'
// import { Home } from '../Pages/Home'
const Layout = ({children}) => {
    // console.log(prop)
    return (
        <div className={Classs.main}>
      <Header/>
            <main>

          {children}
            </main>
            <footer>
                footer
            </footer>
        
       

    </div>


  )
}

export default Layout