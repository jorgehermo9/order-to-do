import {React,useState} from 'react'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import "./InputFields.css"
function InputFields(props){
	function handleSubmmit(){
		let item = {desc: itemDesc};
		props.appendToList(item);
		setItemDesc("");
	}
	const [itemDesc,setItemDesc] = useState("");
	return(
		<div className="input-container">
			<input className = "input-item" type="text" onChange={e => setItemDesc(e.target.value)} value={itemDesc}/>
			<AddCircleRoundedIcon className="submmit" onClick={handleSubmmit}/>
		</div>
	)
}
export default  InputFields;