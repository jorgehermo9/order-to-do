import {React} from 'react'
import CloseIcon from '@material-ui/icons/Close';
import "./Sidebar.css"

function Sidebar(props){

	return(
		<div className="sidebar">
			{props.item.png&&<img className="image" src={props.item.png.file} alt="img-png"/>}
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
						{props.item.address&&props.item.address}
					</div>
				</div>

			</div>

			<div className="files-container">
				<div className="png-container">
					{props.item.png && <a className="png" download={props.item.png.name} href={props.item.png.file}>png</a>}
				</div>
				<div className="svg-container">
					{props.item.svg && <a className="svg" download={props.item.svg.name} href={props.item.svg.file}>svg</a>}
				</div>
				<div className="ngc-container">
					{props.item.ngc && <a className="ngc" download={props.item.ngc.name} href={props.item.ngc.file}>ngc</a>}
				</div>
			</div>

		</div>
	)
}

export default Sidebar;