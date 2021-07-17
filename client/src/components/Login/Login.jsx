import React from 'react'
import "./Login.css"
import Card from "./Card/Card"

function Login(props){
	function register(user){
		fetch("/api/register",{
			method:"POST",
			body:JSON.stringify({"user":user}),
			headers:{"Content-type":"application/json"}
		})
		.then(response=>response.json())
		.then(response=>console.log(response));
	}
	function auth(user){
		fetch("/api/login",{
			method:"POST",
			body:JSON.stringify({"user":user}),
			headers:{"Content-type":"application/json"}
		})
		.then(response=>response.json())
		.then(data => {
			if(data.login){
				props.setLogged(true);
				props.setUser(user)
			}
		});
	}
	return(
		<div className="main-container">
			<div className="auth-container">
				<Card className="login" title="Login" action={auth}/>
				<Card className="register" title="Register" action={register}/>
			</div>
		</div>
	)
}


export default Login;