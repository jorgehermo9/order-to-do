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

	useEffect(()=>{
		props.item.png?toBase64(props.item.png).then((file)=>setPng(file)):setPng(null);
		props.item.svg?toBase64(props.item.svg).then((file)=>setSvg(file)):setSvg(null);

	},[props.item.png,props.item.svg]);

	return(
		<li>
			{props.item.desc} 
			{props.item.png && <a download="image.png" href={pngFile}>png</a>}
			{props.item.svg && <a download="image.svg" href={svgFile}>svg</a>}
		</li>
		)
	}


export default Item;