import Hamburger from './Hamburger'
import Brand from './Brand'
const Navbar=()=>{
    return (
    <div style={{background:"black",display:"flex",alignItems:"center",height:"56px"}}>
    
    <Hamburger/>  
    <Brand/> 
    </div>
    )
}

export default Navbar