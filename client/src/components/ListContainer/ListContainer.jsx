import {React,useState,useEffect} from 'react'
import InputFields from "./InputFields/InputFields"
import Item from "./Item/Item"

import "./ListContainer.css"

function ListContainer(props) {


	function appendToList(item){
		fetch("/api/add",{
			method:"POST",
			body:JSON.stringify({user:props.user,item:item}),
			headers:{"Content-type":"application/json"}
		})
		.then(response=>response.json())
		.then(item=>setItems(prev =>[item,...prev]))
	}

	function replaceItem(newItem){
		fetch("/api/edit",{
			method:"POST",
			body:JSON.stringify({user:props.user,item:newItem}),
			headers:{"Content-type":"application/json"}
		})
		.then(response=>response.json())
		.then(newItem=>{
			let newArray = items.slice();
			newArray.splice(newArray.findIndex(item=>item._id === newItem._id),1,newItem);
			setItems(newArray);
			if(props.selectedItem && props.selectedItem._id === newItem._id){
				props.setSelectedItem(newItem);
			}
		})
	}
	function switchCheck(item){
		let newItem={...item};
		if(newItem.checked) newItem.state="pending";
		newItem.checked=!item.checked;
		replaceItem(newItem);
	}

	function setState(item,state){
		let newItem={...item};
		newItem.state=state;
		replaceItem(newItem);
	
	}
	function removeItem(item){
		//optimize remove with sending only item id
		fetch("/api/remove",{
			method:"POST",
			body:JSON.stringify({user:props.user,item:item}),
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
	}

	useEffect(()=>{
		fetch("/api/orders",{
			method:"POST",
			body:JSON.stringify({user:props.user}),
			headers:{"Content-type":"application/json"}
		})
		.then(response=>response.json())
		.then(items=>setItems(items.reverse()))
	},[props.user])
	const [items,setItems] = useState([]);
	const [editItem,setEditItem] = useState(null);
	const [checked,setChecked] = useState(false);

	return(
            <div className="list-container">
                <InputFields editItem={editItem} setEditItem={setEditItem} appendToList={appendToList} replaceItem={replaceItem}/>

                <div className="items-container">
                <label class="label" >				
                    <div className="toggle"> 
                        <input class="toggle-state" type="checkbox" name="check" value="check" onClick={()=>setChecked(!checked)} />
                        <div class="indicator"></div>
                    </div>
                </label>	

                    {items.filter(item=> item.checked === checked).map((item,index) =>
                    <Item 
                        key={index} 
                        item={item} 
                        setSelectedItem={props.setSelectedItem}
                        setEditItem={setEditItem}
                        checked={checked}
                        switchCheck={switchCheck}
                        removeItem={removeItem}
                        setState={setState}
                        />
                    )}
                </div>
            </div>
	)
}

export default ListContainer;