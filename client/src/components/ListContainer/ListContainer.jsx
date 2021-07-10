import {React,useState} from 'react'
import InputFields from "./InputFields/InputFields"
import Item from "./Item/Item"

import "./ListContainer.css"

function ListContainer(props) {


	function appendToList(item){
		setItems(prev =>[item,...prev]);
	}
	const [items,setItems] = useState([]);
	return(
		<div className="list-container">
			<InputFields appendToList={appendToList}/>
			<div className="main-container">
				{items.map((item,index) =><Item key={index} item={item}/>)}
			</div>
		</div>
	)
}

export default ListContainer;