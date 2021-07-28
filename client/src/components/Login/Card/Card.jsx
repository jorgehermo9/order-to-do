import {React,useState} from 'react'
import "./Card.css"

function Card(props){
	const [username,setUserName]= useState("");
	const [password,setPassword] = useState("");
	const regex = /^[a-zA-Z0-9!@#$%^&*]{0,16}$/;
	function submit(event){
		event.preventDefault();
		const regexPasswd= /^[a-zA-Z0-9!@#$%^&*]{6,16}$/;
		const regexUser = /^[a-zA-Z0-9!@#$%^&*]{3,16}$/
		if(regexPasswd.test(password) && 
			regexUser.test(username)){
			let user ={username:username,password:password}
			props.action(user);
			setUserName("");
			setPassword("");
		}	
	}
	return(
		<div className= {`${props.className} container`}>
			<div className= "title-container">
				<h2 className="title-text">{props.title}</h2>
			</div>
			<form className="form-container">
				<input className="username-input input" type="text" inputmode="verbatim" value={username} 
				placeholder={"Username (3-16 alphanumeric)"} 
				onChange={(e)=>regex.test(e.target.value) && setUserName(e.target.value)}/>
				
				<input className="password-input input" type="password" inputmode="verbatim" value={password} 
				placeholder={"Password (6-16 alphanumeric)"} 
				onChange={(e)=>regex.test(e.target.value) && setPassword(e.target.value)}/>
				
				<input type="submit" value={props.title} className="submit" onClick={submit}/>
			</form>
</div>
	)
}

export default Card;