import {React,useState} from 'react'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import "./InputFields.css"
function InputFields(props){
	function handleSubmmit(){
		if(itemDesc.length ===0) return;
		let item = {
			desc: itemDesc,
			png:pngFile,
			svg:svgFile
		};
		props.appendToList(item);

		setItemDesc("");
		setPng(null);
		setSvg(null);
	}

	const [itemDesc,setItemDesc] = useState("");
	const [pngFile,setPng] = useState(null);
	const [svgFile,setSvg] = useState(null);

	return(
		<div className="input-container">
			<input className = "input-item" type="text" onChange={e => setItemDesc(e.target.value)} value={itemDesc}/>
			<AddCircleRoundedIcon className="submmit" onClick={handleSubmmit}/>

			<div>
				<label htmlFor="pngInput">Choose png</label>
				<input className="input-file" type="file" accept=".jpg .jpeg .png" name="pngInput" id="pngInput"
					onChange={event=>setPng(event.target.files[0])}
				/>
			</div>

			<div>
				<label htmlFor="svgInput">Choose svg</label>
				<input className="input-file" type="file" accept=".svg" name="svgInput" id="svgInput"
					onChange={event=>setSvg(event.target.files[0])}
				/>
			</div>

		</div>
	)
}
export default  InputFields;