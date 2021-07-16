import {React} from 'react'
import "./Item.css"
function Item (props){

	return(
		<div className="item-wrapper">
			<div className="list-item">
				{props.item.desc} 
			</div>
			{props.item.png && <a className="png" download="image.png" href={props.item.png}>png</a>}
			{props.item.svg && <a className="svg" download="image.svg" href={props.item.svg}>svg</a>}
			{props.item.ngc && <a className="ngc" download="image.ngc" href={props.item.ngc}>ngc</a>}
			
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