import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = () => {
    const [arquivo, setArquivo] = useState(null);

    const handleFileChange = (e) => {
        setArquivo(e.target.files[0]);
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('arquivo', arquivo);
        console.log(formData);

        try {
            const response = await axios.post('http://localhost:8080/arquivos', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <form onSubmit={handleUpload}>
            <input type="file" onChange={handleFileChange} />
            <button type="submit">Upload</button>
        </form>
    );
};

export default FileUpload;
