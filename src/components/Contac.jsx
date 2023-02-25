import "./Contact.css"
import Correo from '../images/Correo.svg'
import Whatssap from '../images/Whatssap.svg'
const Contact=()=>{
    return(
        <div className="contact-container">
            <p className="title">Contacto</p>
            <img src={Correo} alt="Correo"></img>
            <p className="correo">info@faceitcitasrapidas</p>
            <img src={Whatssap} alt="Whatssap"></img>
            <p className="whatssap">011 11 1111-1111</p>
        </div>
    )
}

export default Contact