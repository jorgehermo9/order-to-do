import {React,useState,useRef,useEffect} from 'react'
import "./InputFields.css"
import {  Add,  ClearAllRounded } from '@material-ui/icons';
function InputFields(props){
	const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
	});

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
			checked:false
		};
		if(props.editItem !==null){
			item._id=props.editItem._id;
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
						<div className="png-container">
							<label className="submit-button" htmlFor="pngInput">Choose png</label>
							<input className="input-file" type="file" accept=".jpg,.jpeg,.png" name="pngInput" id="pngInput"
								onChange=
								{event=>toBase64(event.target.files[0]).then(file =>
									setPng({file:file,name:event.target.files[0].name}))}/>
							{pngFile && <p>{pngFile.name}</p>}
								
						</div>

						<div className="svg-container">
							<label className="submit-button" htmlFor="svgInput">Choose svg</label>
							<input className="input-file" type="file" accept=".svg" name="svgInput" id="svgInput"
								onChange={
									event=>toBase64(event.target.files[0]).then(file =>
										setSvg({file:file,name:event.target.files[0].name}))}/>
							{svgFile && <p>{svgFile.name}</p>}

						</div>

						<div className="ngc-container">
							<label className="submit-button" htmlFor="ngcInput">Choose ngc</label>
							<input className="input-file" type="file" accept=".ngc" name="ngcInput" id="ngcInput"
								onChange={
									event=>toBase64(event.target.files[0]).then(file =>
										setNgc({file:file,name:event.target.files[0].name}))}/>
							{ngcFile && <p>{ngcFile.name}</p>}

						</div>
				</div>	
			</div>		

		</div>
	)
}
export default  InputFields;