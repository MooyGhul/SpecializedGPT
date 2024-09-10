interface LoginProps {
  onLogin: () => void;
}

function Login({ onLogin }: LoginProps){
    return (
        <div className="login">
          <h1>Login</h1>
          <button onClick={onLogin}>Login</button>
        </div>
    );
}

export default Login;