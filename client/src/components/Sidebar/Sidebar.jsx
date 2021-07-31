import {React} from 'react'
import CloseIcon from '@material-ui/icons/Close';
import "./Sidebar.css"

function Sidebar(props){

	return(
		<div className="sidebar">
			<div className="top-container">
				<div className="image-container">
				{<img className="image" 
				src={props.item.pngUrl?props.item.pngUrl.file:"/assets/no-photos.svg"} alt="img-png"/>}
				</div>
				
				<div>
				<button className="close-icon" onClick={()=>props.setSelectedItem(null)}><CloseIcon/></button>
				</div>
			</div>

			<div className="info-container">
			
				<div className="description">
					Description
				</div>
				<div className="text-wrapper">
					<div className="text description-text">
						{props.item.desc}
					</div>
				</div>

				<div className="client">
					Client
				</div>
				<div className="text-wrapper">
					<div className="text client-text">
						{props.item.client}
					</div>
				</div>

				<div className="address">
					Address
				</div>
				<div className="text-wrapper">
					<div className="text address-text">
						{props.item.address&&props.item.address}
					</div>
				</div>

			</div>

			<div className="files-container">

					{props.item.pngUrl && <a className="png-info" download={props.item.pngUrl.name} href={props.item.pngUrl.file}>png</a>}
					{props.item.svgUrl && <a className="svg-info" download={props.item.svgUrl.name} href={props.item.svgUrl.file}>svg</a>}
					{props.item.ngcUrl && <a className="ngc-info" download={props.item.ngcUrl.name} href={props.item.ngcUrl.file}>ngc</a>}

			</div>

		</div>
	)
}

export default Sidebar;