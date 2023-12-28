import React,{useState} from "react"

export default class Home extends React.Component{
constructor(){
 super();
    this.state={
        isMode:"Light",
        img:"./light.png" ,
        color:"Black",
        background:"White",
        color2:"#070420",
        left:"410px"
    }
}
handler=()=>{
    this.setState(prevState=>{
    return{
        img:prevState.img==="./light.png"?"./dark.png":"./light.png",
        isMode:prevState.isMode==="Light"?"Dark":"Light",
        color:prevState.color==="Black"?"White":"Black",
        background:prevState.background==="White"?"Black":"White",
        color2:prevState.color2==="#070420"?"#DDEEEE":"#070420",
        left:prevState.left==="410px"?"435px":"410px"
    }
    } 
    )
}

    render(){
    return(
        <div>
            <h1 className="home-title" style={{
                color:`${this.state.color2}`,
                left:`${this.state.left}`
            }}>Better  Notes</h1>
        <div style={{
            backgroundImage: `url(${this.state.img})` ,
            backgroundSize: "cover",
            height:"1000px"
        }}>
            <button className="mode" onClick={this.handler}
            style={{
                backgroundColor:`${this.state.background}`,
                color:`${this.state.color}`,
                border:`3px solid ${this.state.color}`,
                fontSize:"15px",
            }}>{this.state.isMode} Mode</button>
       </div>
       
       </div>
    )
}
}
