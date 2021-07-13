import {React,useState,useEffect} from 'react'
import "./Item.css"
function Item (props){
	const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

	const [pngFile,setPng] = useState(null);
	const [svgFile,setSvg] = useState(null);
	const [gncFile,setGnc] = useState(null);


	useEffect(()=>{
		props.item.png?toBase64(props.item.png).then((file)=>setPng(file)):setPng(null);
		props.item.svg?toBase64(props.item.svg).then((file)=>setSvg(file)):setSvg(null);
		props.item.gnc?toBase64(props.item.gnc).then((file)=>setGnc(file)):setGnc(null);
	},[props.item.png,props.item.svg,props.item.gnc]);

	return(
		<div className="item-wrapper">
			<div className="list-item">
				{props.item.desc} 
			</div>
			{props.item.png && <a className="png" download="image.png" href={pngFile}>png</a>}
			{props.item.svg && <a className="svg" download="image.svg" href={svgFile}>svg</a>}
			{props.item.gnc && <a className="gnc" download="image.gnc" href={gncFile}>gnc</a>}

			<div className="btn info" onClick={()=>props.setSelectedItem(props.item)}>
				info
			</div>
			<div className="btn edit" onClick={()=>props.setEditItem(props.item)}>
				edit
			</div>
			<div className="btn check">
				check
			</div>
		</div>

		)
	}


export default Item;