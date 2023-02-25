import './Event.css'
const Event=(props)=>{
    
    return(
   
            <div className="event-image eventStyle" >
                <img src={props.image} alt={props.alt}></img>
                <h3>{props.title}</h3>
            </div>

    )
}

export default Event;