import { loginUrl } from "./Spotify";

const Login = () => {
  return <div>
    <h1>Login Page</h1>
    <a href={loginUrl}><button>Login</button></a>
  </div>
};

export default Login;
