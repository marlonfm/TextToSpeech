import React, {useCallback, useState} from 'react'; 
import './styles.css';
import {useDropzone} from 'react-dropzone';

import { FiUpload } from 'react-icons/fi';

const Dropzones = ({onFileUploaded}) =>  {

  const [SelectedFileUrl, setSelectedFileUrl] = useState('');

  

  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];

    const fileURL = URL.createObjectURL(file);

    console.log(file);

    console.log(fileURL);

    setSelectedFileUrl(fileURL);
    onFileUploaded(file);
}, [onFileUploaded])

const {getRootProps, getInputProps} = useDropzone({
    onDrop,
    accept: 'image/*'
})


return (
  <div className="dropzone" {...getRootProps()}>
    <input {...getInputProps()} accept="image/*"/>
    {
        SelectedFileUrl
          ?   <img src={SelectedFileUrl} alt="sla" width="90" height="50"/> 
          : (
              <p>
              
              Escolher arquivo
              <FiUpload className="iconUpload"/>
              </p>
          )
    }
  </div>
);

}

export default Dropzones;
