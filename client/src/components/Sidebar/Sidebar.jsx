import {React,useEffect,useState} from 'react'
import CloseIcon from '@material-ui/icons/Close';
import "./Sidebar.css"

function Sidebar(props){
	const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
});

	const [pngFile,setPng] = useState(null);
	useEffect(()=>{
		props.item.png?toBase64(props.item.png).then((file)=>setPng(file)):setPng(null);
	},[props.item.png]);

	return(
		<div className="sidebar">
			{props.item.png&&<img className="image" src={pngFile} alt="img-png"/>}
			<CloseIcon className="close-icon" onClick={()=>props.setSelectedItem(null)}/>

			<div className="info-container">
			
				<div className="description">
					Description:
				</div>
				<div className="text-wrapper">
					<div className="text description-text">
						{props.item.desc}
					</div>
				</div>

				<div className="client">
					Client:
				</div>
				<div className="text-wrapper">
					<div className="text client-text">
						{props.item.client}
					</div>
				</div>

				<div className="address">
					Address:
				</div>
				<div className="text-wrapper">
					<div className="text address-text">
						{props.item.desc&&props.item.desc}
					</div>
				</div>

			</div>
		</div>
	)
}

export default Sidebar;