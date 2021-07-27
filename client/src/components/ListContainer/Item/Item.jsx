import {React} from 'react'
import "./Item.css"
function Item (props){

	return(
		<div className="item-wrapper">
			<div className="list-item">
				{props.item.desc} 
			</div>
			{props.item.png && <a className="png" download={`${props.item.png.name}.png`} href={props.item.png.file}>png</a>}
			{props.item.svg && <a className="svg" download={`${props.item.svg.name}.svg`} href={props.item.svg.file}>svg</a>}
			{props.item.ngc && <a className="ngc" download={`${props.item.ngc.name}.ngc`} href={props.item.ngc.file}>ngc</a>}
			
			<div className="btn info" onClick={()=>props.setSelectedItem(props.item)}>
				info
			</div>

			{props.checked?
				<div className="btn edit" onClick={()=>props.removeItem(props.item)}>
					remove
				</div>
			:			
				<div className="btn edit" onClick={()=>props.setEditItem(props.item)}>
					edit
				</div>
			}

			<div className="btn check" onClick={()=>props.switchCheck(props.item)}>
				{props.checked?"uncheck":"check"}
			</div>					
				


		</div>

		)
	}


export default Item;