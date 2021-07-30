import React from 'react'
import "./FileInput.css"

function FileInput(props){
	const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = error => reject(error);
	});

	return(
		<div className={props.className}>
			<div className="input-container">
				<label className="submit-button" htmlFor={`${props.type}Input`} >Choose {props.type}</label>
				<input className="input-file" type="file" accept={props.accept} name={`${props.type}Input`} id={`${props.type}Input`}
					onChange=
					{event=>toBase64(event.target.files[0]).then(file =>
						props.setFile({file:file,name:event.target.files[0].name}))}/>
				{props.file && <p className="filename">{props.file.name}</p>}
			</div>
		</div>
		);
}

export default FileInput;