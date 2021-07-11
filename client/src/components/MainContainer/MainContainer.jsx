import {React,useState} from 'react'
import InputFields from "./InputFields/InputFields"
import Item from "./Item/Item"

import "./MainContainer.css"

function MainContainer(props) {


	function appendToList(item){
		setItems(prev =>[item,...prev]);
	}
	const [items,setItems] = useState([]);
	return(
		<div className="main-container">
			<InputFields appendToList={appendToList}/>
			<div className="list-container">
				{items.map((item,index) =><Item key={index} item={item}/>)}
			</div>
		</div>
	)
}

export default MainContainer;