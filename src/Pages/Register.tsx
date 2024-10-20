import "../assets/style/register.scss"
import videoPlay from "../assets/Photos/side-bar/movie.png"
import { Link, useNavigate } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BookmarkContext, BookmarkContextType } from "../Context/BookmarkContext";


const Register = ()=> {
    const { isLogin, setIsLogin} = useContext(BookmarkContext) as BookmarkContextType;


    const [formData, setFormData] = useState({
        email:"",
        password: "",
        rePassword: ""
    })

    const [errorFormData, setErrorFormData] = useState({
        emailError:false,
        passwordError: false,
        repasswordError: false
    })


    useEffect(()=> {
        localStorage.setItem("formData", JSON.stringify(formData))
    }, [formData])

    useEffect(()=> {
        const saveUser = localStorage.getItem("formData")
        if(saveUser){
           setIsLogin(true)
        }
    }, [isLogin])



    const navigate = useNavigate()

    const submitValid = ()=> {
        if(formData.email === ""){
            setErrorFormData((prev)=> ({...prev, emailError: true}))
        } else{
            setErrorFormData((prev)=> ({...prev, emailError: false}))
        }

        if(formData.password === ""){
            setErrorFormData((prev)=> ({...prev, passwordError: true}))
        } else{
            setErrorFormData((prev)=> ({...prev, passwordError: false}))
        }

        if(formData.rePassword === ""){
            setErrorFormData((prev)=> ({...prev, repasswordError: true}))
        } else{
            setErrorFormData((prev)=> ({...prev, repasswordError: false}))
        }

        if(formData.rePassword !== formData.password){
            setErrorFormData((prev)=> ({...prev, repasswordError: true}))
        }else{
            setErrorFormData((prev)=> ({...prev, repasswordError: false}))
        }

    }

    useEffect(()=>{
        submitValid()
    }, [formData])

    const handelChange = (e:React.ChangeEvent<HTMLInputElement>)=> {
        setFormData((prev)=> ({...prev, [e.target.name]: e.target.value}))
        submitValid()
    }

    const handelSubmit = (e:React.FormEvent<HTMLFormElement>)=> {
        e.preventDefault();
        submitValid()

        if(Object.values(errorFormData).every((error)=> !error)){
            navigate("/")
        }
        
    }

    return(
        <main className="register-main-cnt">

            <div className="register-video-img">
                <img src={videoPlay} alt="Video Play" />
            </div>

            <form onSubmit={handelSubmit}>
                <div className="register-cnt">

                    <h2>Sign Up</h2>

                    <div className="input-wrapper">
                        <input type="email" name="email" value={formData.email} onChange={handelChange} placeholder="Email address" />
                        {
                            errorFormData.emailError && <span>Can’t be empty</span>
                        }
                    </div>

                    <div className="input-wrapper">
                        <input type="password" placeholder="Password" value={formData.password} onChange={handelChange} name="password" />
                        {
                            errorFormData.passwordError && <span>Can’t be empty</span>
                        }
                    </div>

                    <div className="input-wrapper">
                        <input type="password" placeholder="Reapeat Password" value={formData.rePassword} onChange={handelChange} name="rePassword"  />
                        {
                            errorFormData.repasswordError && <span>Can’t be empty</span>
                        }
                    </div>

                    <div className="btn">
                        <button type="submit">
                          Login to your account
                        </button>
                    </div>
                    

                    <div className="register-bottom-cnt">
                        <p>
                            Alread have an account?
                        </p>

                        <Link to={"/login"}>Login</Link>
                    </div>
                </div>
            </form>
        </main>
    )
}

export default Register;