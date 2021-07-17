import React, { useState } from "react"
import ListContainer from "./ListContainer/ListContainer"
import Sidebar from "./Sidebar/Sidebar"
import Login from "./Login/Login"
function App(){
	const [selectedItem, setSelectedItem] = useState(null)
	const [user,setUser] = useState(null);
	const [logged,setLogged] = useState(false);
	return(
		logged && user?
			<div>
				<ListContainer user={user} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
				{selectedItem && <Sidebar item={selectedItem} setSelectedItem={setSelectedItem}/>}
			</div>
		:
			<Login setUser={setUser} setLogged={setLogged}/>
	)
}

export default App;