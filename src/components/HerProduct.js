import React from 'react'

const HerProduct =(props)=>{
    return(
        <div >
            
            <p> name: {props.name} </p>
            <img src={props.image} height="150px"></img>
            <a href={props.link} >view product</a>
        </div>
    )
}
export default HerProduct;