import {React,useState} from 'react'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import "./InputFields.css"
function InputFields(props){
	function handleSubmmit(){
		if(itemDesc.length ===0) return;

		let item = {desc: itemDesc};
		props.appendToList(item);
		setItemDesc("");
	}
	const [itemDesc,setItemDesc] = useState("");
	return(
		<div className="input-container">
			<input className = "input-item" type="text" onChange={e => setItemDesc(e.target.value)} value={itemDesc}/>
			<AddCircleRoundedIcon className="submmit" onClick={handleSubmmit}/>
			<div>
				<label for="pngInput">Choose png</label>
				<input className="input-file" type="file" accept=".jpg .jpeg .png" name="pngInput" id="pngInput"/>
			</div>
			<div>
				<label for="svgInput">Choose svg</label>
				<input className="input-file" type="file" accept=".svg" name="svgInput" id="svgInput"/>
			</div>

		</div>
	)
}
export default  InputFields;