import "../assets/style/Login.scss"
import videoPlay from "../assets/Photos/side-bar/movie.png"
import { Link } from "react-router-dom";
const Login = ()=> {

    const textErr = false;



    return(
        <main className="login-main-cnt">

            <div className="login-video-img">
                <img src={videoPlay} alt="Video Play" />
            </div>

            <form>
                <div className="login-cnt">

                    <h2>Login</h2>

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

                    <div className="btn">
                        <button type="button">
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