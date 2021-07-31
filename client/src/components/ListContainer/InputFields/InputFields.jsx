import {React,useState,useEffect} from 'react'
import "./InputFields.css"
import {  Add,  ClearAllRounded } from '@material-ui/icons';
import FileInput from "./FileInput/FileInput"
function InputFields(props){
	function reset(){
		setItemDesc("");
		setItemClient("");
		setItemAddress("");
		setPng(null);
		setSvg(null);
		setNgc(null);
		if(props.editItem !== null){
			props.setEditItem(null);
		}
	}
	function handleSubmmit(){
		if(itemDesc.length === 0 || itemClient.length === 0) return;
		let item = {
			desc: itemDesc,
			client:itemClient,
			address:itemAddress,
			png:pngFile,
			svg:svgFile,
			ngc:ngcFile,
			checked:false,
			state:"pending"
		};
		if(props.editItem !==null){
			//Add default editItem fields
			item = {...props.editItem,...item};
			props.replaceItem(item);
		}
		else
			props.appendToList(item);

		reset();
	}

	const [itemDesc,setItemDesc] = useState("");
	const [itemClient,setItemClient] = useState("");
	const [itemAddress,setItemAddress] = useState("");

	const [pngFile,setPng] = useState(null);
	const [svgFile,setSvg] = useState(null);
	const [ngcFile,setNgc] = useState(null);

	useEffect(()=>{
		if(props.editItem){
			setItemDesc(props.editItem.desc);
			setItemClient(props.editItem.client);
			setItemAddress(props.editItem.address);
			setPng(props.editItem.png);
			setSvg(props.editItem.svg);
			setNgc(props.editItem.ngc);
		}
	},[props.editItem])
	return(
		<div className="input-container">
		 	<div className="input-upper">
			 	<div className="input-boxes">
					<div className="text-container">
						<input className = "input-item" type="text" onChange={e => setItemDesc(e.target.value)} value={itemDesc} placeholder="Description"/>
						<input className = "input-item" type="text" onChange={e => setItemClient(e.target.value)} value={itemClient} placeholder="Client"/>
						<input className = "input-item" type="text" onChange={e => setItemAddress(e.target.value)} value={itemAddress} placeholder="Address (optional)"/>
					</div>
					<div className="input-changer">
						<div className="buttons">
						  <button className="submmit" onClick={handleSubmmit}><Add/></button>
						  <button className="clear" onClick={reset}><ClearAllRounded/></button>
						</div>
					</div>
				</div>	
			</div>

			<div className="input-lower">
				<div className="input-buttons">
					<FileInput className="png-container" type="png" 
						accept=".jpg,.jpeg,.png" setFile={setPng} file={pngFile}
						defaultName={(props.editItem && props.editItem.pngUrl)?
							props.editItem.pngUrl.name:""}
						/>
					<FileInput className="svg-container" type="svg" 
						accept=".svg" setFile={setSvg} file={svgFile}
						defaultName={(props.editItem && props.editItem.svgUrl)?
							props.editItem.svgUrl.name:""}
						/>
					<FileInput className="ngc-container" type="ngc" 
						accept=".ngc" setFile={setNgc} file={ngcFile}
						defaultName={(props.editItem && props.editItem.ngcUrl)?
							props.editItem.ngcUrl.name:""}
						/>
				</div>	
			</div>		

		</div>
	)
}
export default  InputFields;