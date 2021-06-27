import "./Container.css";
import React, { useState } from "react"
import { useDropzone } from "react-dropzone"
import AddIcon from '@material-ui/icons/Add';
import Output from "./Output";
function Container() {
	const [files, setFiles] = useState([])

  const { getRootProps, getInputProps } = useDropzone({
  //  accept: "image/*,video/*",
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      )
    },
  })

  const images = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} style={{ width: "200px" }} alt="preview" />
      </div>
    </div>
  ))

	return (
		<>
		<div className="cont">
			<div {...getRootProps()} className="dnd">
					 <div >
					        <input {...getInputProps()} />
					       <div>
 								<h1>Drop a file</h1>

					       </div>
					       <div className="logo">
					        <p><span className="icon"><AddIcon  style={{ fontSize: 50 }}/></span></p>

					       </div>
					      </div>
			</div>
			
		</div>
		<Output image={images}/>
		</>
	)
}

export default Container