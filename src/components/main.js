import React from "react"
import HerProduct from "./HerProduct"

const Main =()=>{
    return(
        <div>
            <div className="row">
                <div className="col-lg-6">
                    {/* <HerCard /> */}
                    her card
                </div>
                <div className="col-lg-6">
                        <div className="row">
                            <div className="col-lg-6">
                                <HerProduct name="1" image="https://4.imimg.com/data4/MC/TT/MY-15394541/girl-t-shirt-250x250.jpg" link="https://getbootstrap.com/docs/4.5/getting-started/introduction/"/>
                            </div>
                            <div className="col-lg-6">
                                <HerProduct name="2" image="https://4.imimg.com/data4/MC/TT/MY-15394541/girl-t-shirt-250x250.jpg" link="https://getbootstrap.com/docs/4.5/getting-started/introduction/"/>                            
                            </div>
                            <div className="col-lg-6">
                                <HerProduct name="3" image="https://4.imimg.com/data4/MC/TT/MY-15394541/girl-t-shirt-250x250.jpg" link="https://getbootstrap.com/docs/4.5/getting-started/introduction/"/>                                
                            </div>
                            <div className="col-lg-6">
                                <HerProduct name="4" image="https://4.imimg.com/data4/MC/TT/MY-15394541/girl-t-shirt-250x250.jpg" link="https://getbootstrap.com/docs/4.5/getting-started/introduction/"/>                                
                            </div>
                        </div>
                </div>
            </div>            
        </div>
    )
}

export default Main;

