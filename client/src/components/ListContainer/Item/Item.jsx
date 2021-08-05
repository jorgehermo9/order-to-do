import { Check, Create, DeleteForever, LocalShippingOutlined, Receipt, SettingsBackupRestore,CheckCircleOutlineOutlined } from '@material-ui/icons';
import React from 'react'
import "./Item.css"
function Item (props){
	return(
		<div className="item-wrapper">
			<div className="list-item">
				<div className="text-item">{props.item.desc} </div>
			</div>

			{props.checked?
				<div className={`state-info ${props.item.state}`} ></div>
				:
				<div></div>	
			}
			{props.item.pngUrl && <a className="png" download={props.item.pngUrl.name} href={props.item.pngUrl.file}>png</a>}
			{props.item.svgUrl && <a className="svg" download={props.item.svgUrl.name} href={props.item.svgUrl.file}>svg</a>}
			{props.item.ngcUrl && <a className="ngc" download={props.item.ngcUrl.name} href={props.item.ngcUrl.file}>ngc</a>}
			
			{props.checked?
					{
						pending: 
							<button className="btn-icon state" onClick={()=>props.setState(props.item,"shipped")}>
								<LocalShippingOutlined/>
							</button>,
						shipped:
							<button className="btn-icon state" onClick={()=>props.setState(props.item,"completed")}>
								<CheckCircleOutlineOutlined/>
							</button>,
						completed:<div></div>
					}[props.item.state]
				:
				<div></div>	
			}

			<button className="btn-icon info" onClick={()=>props.setSelectedItem(props.item)}><Receipt/></button>

			{props.checked?
				<button className="btn-icon delete" onClick={()=>props.removeItem(props.item)}>
					<DeleteForever/>
				</button>
			:			
				<button className="btn-icon edit" onClick={()=>{
					window.scrollTo({top:0,behavior:"smooth"})
					props.setEditItem(props.item)
					}}>
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