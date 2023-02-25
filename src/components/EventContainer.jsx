import Event from "./Event";
import krossbar from "../images/krossbar-image.png"
import meet from "../images/meet-image.png"
import cofradia from "../images/cofradia-image.jpg"
import lagerhouse from "../images/lagerhouse-image.jpg"

const events=[
    {
        title:"Krossbar",
        image:krossbar,
        alt:"krossbar image"
    },
    {
        title:"Cofradía",
        image:cofradia,
        alt:"cofradia image"
    },
    {
        title:"Lagerhause",
        image:lagerhouse,
        alt:"lagerhause image"
    }
]
const copupleStyle={
    width:"358px",
    height:"150px",
    borderTopLeftRadius:"20px",
    overflow:"hidden", 
    position:"relative",
    margin:"0 auto"
}

const copupleStyle2={
    width:"100%",
    height:"100%",
    objectFit:"cover",
    objectPosition:"bottom -10px right 50%",
}

const titleStyle={
    position:"absolute",
    background:"rgba(255, 206, 0, 1)",
    width:"100%",
    height:"35px",
    top:"115px",
    textAlign:"center",
    fontWeight:"500",
    fontSize:"14px",
    lineHeight:"35px"
}




const EventContainer=()=>{
    return (
        <div className="event-container">
            <div className="couple-container" style={copupleStyle}>
                <img src={meet} alt="couple meeting" style={copupleStyle2}></img>
                <h2 style={titleStyle}>Conoce Nuestros Eventos e inscríbite</h2>
            </div>  

            {events.map( (item,index)=>(
                <Event key={index} title={item.title} image={item.image} alt={item.alt}></Event>
            ))}
        </div>
    )
}

export default EventContainer;