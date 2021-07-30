import { Check, Create, DeleteForever, Receipt, SettingsBackupRestore } from '@material-ui/icons';
import {React} from 'react'
import "./Item.css"
function Item (props){

	return(
		<div className="item-wrapper">
			<div className="list-item">
				{props.item.desc} 
			</div>
			{props.item.pngUrl && <a className="png" download={props.item.pngUrl.name} href={props.item.pngUrl.file}>png</a>}
			{props.item.svgUrl && <a className="svg" download={props.item.svgUrl.name} href={props.item.svgUrl.file}>svg</a>}
			{props.item.ngcUrl && <a className="ngc" download={props.item.ngcUrl.name} href={props.item.ngcUrl.file}>ngc</a>}
			
			<button className="btn-icon info" onClick={()=>props.setSelectedItem(props.item)}><Receipt/></button>

			{props.checked?
				<button className="btn-icon delete" onClick={()=>props.removeItem(props.item)}>
					<DeleteForever/>
				</button>
			:			
				<button className="btn-icon edit" onClick={()=>props.setEditItem(props.item)}>
				<Create/>
				</button>
			}

			<button className="btn-icon check" onClick={()=>props.switchCheck(props.item)}>
				{props.checked?<SettingsBackupRestore/>:<Check/>}
			</button>					
				


		</div>

		)
	}


export default Item;