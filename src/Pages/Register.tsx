import "../assets/style/register.scss"
import videoPlay from "../assets/Photos/side-bar/movie.png"
import { Link } from "react-router-dom";


const Register = ()=> {


    const textErr = false;

    return(
        <main className="register-main-cnt">

            <div className="register-video-img">
                <img src={videoPlay} alt="Video Play" />
            </div>

            <form>
                <div className="register-cnt">

                    <h2>Sign Up</h2>

                    <div className="input-wrapper">
                        <input type="text" placeholder="Email address" />
                        {
                            textErr && <span>Can’t be empty</span>
                        }
                    </div>

                    <div className="input-wrapper">
                        <input type="password" placeholder="Password" />
                        {
                            textErr && <span>Can’t be empty</span>
                        }
                    </div>

                    <div className="input-wrapper">
                        <input type="password" placeholder="Reapeat Password" />
                        {
                            textErr && <span>Can’t be empty</span>
                        }
                    </div>

                    <div className="btn">
                        <button type="button">
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