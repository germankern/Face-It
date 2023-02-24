import IconLogo from '../images/IconLogo.svg'
import Logo  from '../images/Logo.svg'
const Brand=()=>{

    return(
    <div style={{display:"flex",alignItems:"center"}}>
            <img style={{marginRight:"6px"}} src={IconLogo} alt="IconLogo"></img>
            <img src={Logo} alt="Logo"></img>
    </div>
    )
}

export default Brand