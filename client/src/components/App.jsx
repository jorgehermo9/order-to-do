import React, { useState } from "react"
import ListContainer from "./ListContainer/ListContainer"
import Sidebar from "./Sidebar/Sidebar"
import Login from "./Login/Login"
import ExitToAppOutlinedIcon from '@material-ui/icons/ExitToAppOutlined';
import "./App.css"
function App(){
    const reset = ()=>{
        setUser(null);
        setLogged(false);
        setSelectedItem(null);
    }
	const [selectedItem, setSelectedItem] = useState(null)
	const [user,setUser] = useState(null);
	const [logged,setLogged] = useState(false);
	return(
		logged && user?
            <div className="app-container">
                <div className="top-bar">
                    <button className="topbar-btn-icon" onClick={reset}><ExitToAppOutlinedIcon/></button>
                </div>
                <ListContainer user={user} selectedItem={selectedItem} setSelectedItem={setSelectedItem}/>
                {selectedItem && <Sidebar item={selectedItem} setSelectedItem={setSelectedItem}/>}
			</div>
		:
			<Login setUser={setUser} setLogged={setLogged}/>
	)
}

export default App;