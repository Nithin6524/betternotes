import React,{useState} from "react"

export default class Home extends React.Component{
constructor(){
 super();
    this.state={
        isDark:false,
        img:"./light.png" 
    }
}
handler=()=>{
    this.setState(prevState=>{
    return{
        img:prevState.img==="./light.png"?"./dark.png":"./light.png" 
    }
    }
    )
}

    render(){
    return(
        <div style={{
            backgroundImage: `url(${this.state.img})`,
        
            width: "1350px",
            height: "1000px"
        }}>
        
            <button onClick={this.handler}>change</button>
       </div>
    )
}
}
