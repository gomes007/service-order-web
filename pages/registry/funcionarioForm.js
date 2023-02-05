import React, { useState } from 'react';
import axios from 'axios';

const FuncionarioForm = () => {
    const [nome, setNome] = useState('');
    const [localFoto, setLocalFoto] = useState('');
    const [foto, setFoto] = useState(null);
    const [preview, setPreview] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('nome', nome);
        formData.append('localFoto', localFoto);
        formData.append('foto', foto);

        try {
            const res = await axios.post('http://localhost:8080/funcionarios', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    };

    const handleFileChange = (e) => {
        setFoto(e.target.files[0]);
        setPreview(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="nome">Nome:</label>
                <input type="text" id="nome" value={nome} onChange={(e) => setNome(e.target.value)} />
            </div>
            <div>
                <label htmlFor="localFoto">Local da Foto:</label>
                <input type="text" id="localFoto" value={localFoto} onChange={(e) => setLocalFoto(e.target.value)} />
            </div>
            <div>
                <input type="file" onChange={handleFileChange} />
                {preview && <img src={preview} alt="Preview" />}
            </div>
            <button type="submit">Salvar</button>
        </form>
    );
};

export default FuncionarioForm;
