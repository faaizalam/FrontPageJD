import React from 'react'
import { Canvas } from "@react-three/fiber"
// import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei"
import ClassHome from "../Component/Homestyle/Sectionone.module.scss"
const Sectionone = () => {
    return (
        <>
            <section className={ClassHome.Sectiononeman}>
                    <div className={ClassHome.SeconeUptext}>

                        <h1>Get theGist of it</h1>
                        <p>Summarize any Slack channel or thread in one click</p>
                        <div>
                            <img src='./images/Btnslack.jpg' alt='Btn'></img>

                        </div>
                    </div>
                <div className={ClassHome.secOneSub}>
                    <div className={ClassHome.mainthreD} >
                        <div className={ClassHome.threeDanimdiv}>

                            {/* <Canvas>
                                <OrbitControls enableZoom={false} />
                                <ambientLight intensity={1.3} />
                                <directionalLight position={[3, 2, 1]} />
                                <Sphere args={[1, 650, 700]} scale={2.6}>

                                    <MeshDistortMaterial color="purple" attach="material" distort={0.5} speed={1} />
                                </Sphere>

                            </Canvas> */}
                            <div className={ClassHome.video3d}>
                           
                                <video autoPlay muted loop>
                                    <source src="./images/file.mp4" type="video/mp4" />
                                        {/* </source> */}
                                   
                                       
                                        </video>
                          <div className={ClassHome.productHuntimg}>
                            <img src='./images/Hunt.jpg' alt='producthunt'></img>
                          </div>
                            </div>

                            </div>
                            <div className={ClassHome.SvgSection}>
                                {/* <span> */}
                                <svg viewBox="0 0 100 100" width="200px" height="200px">
                                    <circle cx="50" cy="50" r="40" stroke="" stroke-width="4" fill="#AA336A" />
                                </svg>


                                <div className={ClassHome.SvgImgSect}>
                                    <img src='./images/Frame.jpg' alt='img'></img>
                                    <span>theGist for</span>
                                    <span>Gmail</span>
                                </div>
                                {/* </span> */}

                                {/* </div> */}
                            </div>



                        </div>

                    </div>





            </section>

            

        </>
    )
}

export default Sectionone