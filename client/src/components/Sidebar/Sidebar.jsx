import {React} from 'react'
import CloseIcon from '@material-ui/icons/Close';
import "./Sidebar.css"

function Sidebar(props){

	return(
		<div className="sidebar">
			{props.item.pngUrl&&<img className="image" src={props.item.pngUrl.file} alt="img-png"/>}
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
					{props.item.pngUrl && <a className="png" download={props.item.pngUrl.name} href={props.item.pngUrl.file}>png</a>}
				</div>
				<div className="svg-container">
					{props.item.svgUrl && <a className="svg" download={props.item.svgUrl.name} href={props.item.svgUrl.file}>svg</a>}
				</div>
				<div className="ngc-container">
					{props.item.ngcUrl && <a className="ngc" download={props.item.ngcUrl.name} href={props.item.ngcUrl.file}>ngc</a>}
				</div>
			</div>

		</div>
	)
}

export default Sidebar;