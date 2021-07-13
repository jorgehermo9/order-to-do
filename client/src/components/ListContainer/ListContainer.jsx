import {React,useState} from 'react'
import InputFields from "./InputFields/InputFields"
import Item from "./Item/Item"

import "./ListContainer.css"

function ListContainer(props) {


	function appendToList(item){
		setItems(prev =>[item,...prev]);
	}
	function replaceItem(prevItem,newItem){
		setItems(prev =>{
			let newArray = prev.slice();
			newArray.splice(prev.indexOf(prevItem),1,newItem);
			return newArray;
		});
	}
	const [items,setItems] = useState([]);
	const [editItem,setEditItem] = useState(null);

	return(
		<div className="list-container">
			<InputFields editItem={editItem} setEditItem={setEditItem} appendToList={appendToList} replaceItem={replaceItem}/>
			<div className="items-container">
				{items.map((item,index) =>
				<Item 
					key={index} 
					item={item} 
					setSelectedItem={props.setSelectedItem}
					setEditItem={setEditItem}
					/>
				
				)}
			</div>
		</div>
	)
}

export default ListContainer;