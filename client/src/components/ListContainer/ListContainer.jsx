import {React,useState} from 'react'
import InputFields from "./InputFields/InputFields"
import Item from "./Item/Item"

import "./ListContainer.css"

function ListContainer(props) {


	function appendToList(item){
		setItems(prev =>[item,...prev]);
	}
	function replaceItem(prevItem,newItem){
		//Usar item.id para lo de abajo, recargar pestaña de info al editar
		/*if(props.selectedItem === item){
			props.setSelectedItem(item);
		}*/
		setItems(prev =>{
			let newArray = prev.slice();
			newArray.splice(prev.indexOf(prevItem),1,newItem);
			return newArray;
		});
	}
	function switchCheck(item){
		let newItem={...item};
		newItem.checked=!item.checked;
		replaceItem(item,newItem);
	}
	function removeItem(item){
		//Usar item.id para lo de abajo, evitar que siga pestaña de info al borrar
		/*if(props.selectedItem === item){
			props.setSelectedItem(null);
		}*/
		setItems(prev =>{
			let newArray = prev.slice();
			newArray.splice(prev.indexOf(item),1);
			return newArray;
		});
	}
	const [items,setItems] = useState([]);
	const [editItem,setEditItem] = useState(null);
	const [checked,setChecked] = useState(false);

	return(
		<div className="list-container">
			<InputFields editItem={editItem} setEditItem={setEditItem} appendToList={appendToList} replaceItem={replaceItem}/>
			<div className={`items-container ${checked?"items-checked":"items-not-checked"}`}>
				<div className="switch-checked" onClick={()=>setChecked(!checked)}>
				{checked?"Show not checked":"Show checked"}
				</div>
				{items.filter(item=> item.checked === checked).map((item,index) =>
				<Item 
					key={index} 
					item={item} 
					setSelectedItem={props.setSelectedItem}
					setEditItem={setEditItem}
					checked={checked}
					switchCheck={switchCheck}
					removeItem={removeItem}
					/>
				)}
			</div>
		</div>
	)
}

export default ListContainer;