import {React,useState,useRef,useEffect} from 'react'
import AddCircleRoundedIcon from '@material-ui/icons/AddCircleRounded';
import "./InputFields.css"
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
		pngRef.current.value="";
		svgRef.current.value="";
		ngcRef.current.value="";
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
		if(props.editItem !==null)
			props.replaceItem(props.editItem,item);
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
	//Cambiar setFile en vez de fila a string base 64
	
	const pngRef=useRef();
	const svgRef=useRef();
	const ngcRef=useRef();

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
			<div className="text-container">
				<input className = "input-item" type="text" onChange={e => setItemDesc(e.target.value)} value={itemDesc} placeholder="Description"/>
				<input className = "input-item" type="text" onChange={e => setItemClient(e.target.value)} value={itemClient} placeholder="Client"/>
				<input className = "input-item" type="text" onChange={e => setItemAddress(e.target.value)} value={itemAddress} placeholder="Address (optional)"/>
			</div>
			
			<div className="buttons">
				<AddCircleRoundedIcon className="submmit" onClick={handleSubmmit}/>
				<div className="clear" onClick={reset}>
					Clear
				</div>
			</div>

			<div className="png-container">
				<label htmlFor="pngInput">Choose png</label>
				<input className="input-file" type="file" accept=".jpg,.jpeg,.png" name="pngInput" id="pngInput"
					onChange={event=>toBase64(event.target.files[0]).then(file =>setPng(file))} ref={pngRef}/>
					
			</div>

			<div className="svg-container">
				<label htmlFor="svgInput">Choose svg</label>
				<input className="input-file" type="file" accept=".svg" name="svgInput" id="svgInput"
					onChange={event=>toBase64(event.target.files[0]).then(file =>setSvg(file))} ref={svgRef} />
			</div>

			<div className="ngc-container">
				<label htmlFor="ngcInput">Choose ngc</label>
				<input className="input-file" type="file" accept=".ngc" name="ngcInput" id="ngcInput"
					onChange={event=>toBase64(event.target.files[0]).then(file =>setNgc(file))} ref={ngcRef}/>
			</div>

		</div>
	)
}
export default  InputFields;