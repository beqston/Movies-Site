import "../assets/style/Login.scss"
import videoPlay from "../assets/Photos/side-bar/movie.png"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BookmarkContext, BookmarkContextType } from "../Context/BookmarkContext";
const Login = ()=> {

    const { isLogin, setIsLogin} = useContext(BookmarkContext) as BookmarkContextType;

    
    const [error, setError] = useState({
        emailError:false,
        passwordError: false,
    })
    const [formData, setFormData] = useState({
        email:"",
        password:"",
        rePassword:""
    })

    const [userValue, setUserValue] = useState({
        email:"",
        password:"",
    })
    
    useEffect(()=> {
        const saveUser = localStorage.getItem("formData")
        if(saveUser){
           setIsLogin(true)
        }
    }, [isLogin])


    const navigate = useNavigate()


    const handleLogin = (e:React.ChangeEvent<HTMLInputElement>)=> {
        setUserValue((prev)=> ({...prev, [e.target.name]: e.target.value}))
    }

    const handelSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();

        if(formData.email == "" || formData.password == "") return

        if(userValue.email !== formData.email){
            setError((prev)=> ({...prev, emailError: true}))
        }else{
            setError((prev)=> ({...prev, emailError: false}))
        }

        if(userValue.password !== formData.password){
            setError((prev)=> ({...prev, passwordError: true}))
        }else{
            setError((prev)=> ({...prev, passwordError: false}))
        }
        
        if (Object.values(error).every((error) => !error)){
            if(userValue.email == formData.email){
                if(userValue.password == formData.password){
                    if(userValue.password == formData.rePassword)
                    navigate("/")
                }
            }
        }
    }


    return(
        <main className="login-main-cnt">

            <div className="login-video-img">
                <img src={videoPlay} alt="Video Play" />
            </div>

            <form onSubmit={handelSubmit}>
                <div className="login-cnt">

                    <h2>Login</h2>

                    <div className="input-wrapper">
                        <input type="text" placeholder="Email address" value={userValue.email} onChange={handleLogin} name="email"  />
                        {
                           error.emailError  && <span>Can’t be empty</span>
                        }
                    </div>

                    <div className="input-wrapper">
                        <input type="password" placeholder="Password"  onChange={handleLogin} name="password"/>
                        {
                            error.passwordError && <span>Can’t be empty</span>
                        }
                    </div>

                    <div className="btn">
                        <button type="submit">
                          Login to your account
                        </button>
                    </div>

                    <div className="login-bottom-cnt">
                        <p>
                            Don’t have an account?
                        </p>

                        <Link to={"/register"}>Sing Up</Link>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Login;