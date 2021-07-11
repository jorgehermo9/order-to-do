import React, { useState } from "react"
import ListContainer from "./ListContainer/ListContainer"
import Sidebar from "./Sidebar/Sidebar"

function App(){
	const [selectedItem, setSelectedItem] = useState(null)
	return(
	<div>
		<ListContainer setSelectedItem={setSelectedItem}/>
		{selectedItem && <Sidebar item={selectedItem} setSelectedItem={setSelectedItem}/>}
	</div>
	);
}

export default App;