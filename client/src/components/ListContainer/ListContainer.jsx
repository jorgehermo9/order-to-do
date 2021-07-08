import {React,useState} from 'react'
import InputFields from "./InputFields/InputFields"
import "./ListContainer.css"

function ListContainer(props) {
	function appendToList(item){
		setItems(prev =>[...prev,item]);
	}
	const [items,setItems] = useState([]);
	return(
		<div className="list-container">
			<InputFields appendToList={appendToList}/>
			<div className="main-container">
				<ul>
					{items.map(item =><li>{item.desc}</li>)}
				</ul>
			</div>
		</div>
	)
}

export default ListContainer;