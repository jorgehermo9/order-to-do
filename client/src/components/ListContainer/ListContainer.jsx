import {React,useState,useEffect} from 'react'
import InputFields from "./InputFields/InputFields"
import Item from "./Item/Item"

import "./ListContainer.css"

function ListContainer(props) {


	function appendToList(item){
		fetch("/api/add",{
			method:"POST",
			body:JSON.stringify({item:item}),
			headers:{"Content-type":"application/json"}
		})
		.then(response=>response.json())
		.then(item=>setItems(prev =>[item,...prev]))
	}

	function replaceItem(prevItem,newItem){
		if(props.selectedItem && props.selectedItem._id === prevItem._id){
			props.setSelectedItem(newItem);
		}
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

		fetch("/api/remove",{
			method:"POST",
			body:JSON.stringify({item:item}),
			headers:{"Content-type":"application/json"}
		})
		.then(response=>response.json())
		.then(recvItem => {
			let newItems = items.slice().filter(
				item => item._id !== recvItem._id)
			setItems(newItems);
			if(props.selectedItem && props.selectedItem._id === recvItem._id){
				props.setSelectedItem(null);
			}		
		})

		setItems(prev =>{
			let newArray = prev.slice();
			newArray.splice(prev.indexOf(item),1);
			return newArray;
		});
	}
	useEffect(()=>{
		fetch("/api/orders",{
			method:"POST",
			body:JSON.stringify({}),
			headers:{"Content-type":"application/json"}
		})
		.then(response=>response.json())
		.then(items=>setItems(items.reverse()))
	},[])
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