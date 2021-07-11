import {React,useState} from 'react'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import "./InputFields.css"
function InputFields(props){
	function handleSubmmit(){
		if(itemDesc.length === 0 || itemClient.length === 0) return;
		let item = {
			desc: itemDesc,
			client:itemClient,
			address:itemAddress,
			png:pngFile,
			svg:svgFile,
			gcode:gcodeFile
		};
		props.appendToList(item);

		setItemDesc("");
		SetItemClient("");
		setItemAdress("");
		setPng(null);
		setSvg(null);
		setGcode(null);

	}

	const [itemDesc,setItemDesc] = useState("");
	const [itemClient,SetItemClient] = useState("");
	const [itemAddress,setItemAdress] = useState("");

	const [pngFile,setPng] = useState(null);
	const [svgFile,setSvg] = useState(null);
	const [gcodeFile,setGcode] = useState(null);


	return(
		<div className="input-container">
			<div className="text-container">
				<input className = "input-item" type="text" onChange={e => setItemDesc(e.target.value)} value={itemDesc} placeholder="Description"/>
				<input className = "input-item" type="text" onChange={e => SetItemClient(e.target.value)} value={itemClient} placeholder="Client"/>
				<input className = "input-item" type="text" onChange={e => setItemAdress(e.target.value)} value={itemAddress} placeholder="Address (optional)"/>
			</div>
			
			<AddCircleRoundedIcon className="submmit" onClick={handleSubmmit}/>

			<div className="png-container">
				<label htmlFor="pngInput">Choose png</label>
				<input className="input-file" type="file" accept=".jpg,.jpeg,.png" name="pngInput" id="pngInput"
					onChange={event=>setPng(event.target.files[0])}/>
			</div>

			<div className="svg-container">
				<label htmlFor="svgInput">Choose svg</label>
				<input className="input-file" type="file" accept=".svg" name="svgInput" id="svgInput"
					onChange={event=>setSvg(event.target.files[0])}/>
			</div>

			<div className="gcode-container">
				<label htmlFor="gcodeInput">Choose gcode</label>
				<input className="input-file" type="file" accept=".gnc" name="gcodeInput" id="gcodeInput"
					onChange={event=>setGcode(event.target.files[0])}/>
			</div>

		</div>
	)
}
export default  InputFields;