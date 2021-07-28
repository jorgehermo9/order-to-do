import { Check, Create, DeleteForever, Receipt, SettingsBackupRestore } from '@material-ui/icons';
import {React} from 'react'
import "./Item.css"
function Item (props){

	return(
		<div className="item-wrapper">
			<div className="list-item">
				{props.item.desc} 
			</div>
			{props.item.png && <a className="png" download={props.item.png.name} href={props.item.png.file}>png</a>}
			{props.item.svg && <a className="svg" download={props.item.svg.name} href={props.item.svg.file}>svg</a>}
			{props.item.ngc && <a className="ngc" download={props.item.ngc.name} href={props.item.ngc.file}>ngc</a>}
			
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