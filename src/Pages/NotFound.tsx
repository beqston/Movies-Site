import { Link } from "react-router-dom";

const NotFound = ()=> {
    return(
        <div style={{
            width:"100%",
            display:"flex",
            justifyContent:"center",
            alignItems:"center",
            flexDirection:"column",
            rowGap:"2rem"
        }}>
           <h1 style={{
            fontSize:"48px",
            marginTop:"4rem",
            color:"red",
          
        }}>Page Not Found</h1>
        
        <Link to={"/"} style={{
            textDecoration:"none",
            fontSize:"2rem",
        }}>Go To Home Page</Link>
        </div>
     
    )
}
export default NotFound;