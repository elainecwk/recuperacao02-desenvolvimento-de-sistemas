'use client';

import axios from 'axios';
import './home.css';
import { useEffect, useState } from 'react';
import { TextField } from '@mui/material';
import { text } from 'stream/consumers';

type Dev = {
  id: string;
  name: string;
  tech: string[];
  description: string;
  avatarUrl: string;
  githubUrl: string;
};

export default function Page() {
  const [developers, setDevelopers] = useState<Dev[]>([]);

  const loadDevelopers = async () => {
    const response = await axios.get('/developers');
    setDevelopers(response.data);
  };

  useEffect(() => {
    loadDevelopers();
  }, []);

  const addDeveloper = (newDev: Dev) => {
    setDevelopers(prev => [...prev, newDev]);
  };

  const deleteDeveloper = async (id: string) => {
    await axios.delete(`/developers/${id}`);
    setDevelopers(prev => prev.filter(dev => dev.id !== id));
  };

  const handleDeleteDev = (id: string) => {
    deleteDeveloper(id);
  };

  return (
    <div className={styles.container}>
    <h1>Lista de Compras</h1>
    <div className={styles.add}>
      <TextField
        label="Item"
        variant="outlined"
        color="info"
        value={text}
        onChange={(event: { target: { value: string; }; }) => setText(event.target.value)}
      />
      <button onClick={handleAddItem}>+</button>
    </div>
    {developers.map((item) => (
      <developer={item} key={item.id} id={item.id} handleRemoveItem={handleRemoveItem} handleUpdateItem={handleUpdateItem} />
    ))}
  </div>
);
}






 

 



    
    
    
  


function setProduct(data: any) {
  throw new Error("Function not implemented.");
}
function loadItens() {
  throw new Error("Function not implemented.");
}

function setText(arg0: string) {
  throw new Error("Function not implemented.");
}

function onAdd(data: any) {
  throw new Error("Function not implemented.");
}

function setDev(arg0: { nome: string; tecnologias: string; biografia: string; github: string; imagem: string; }) {
  throw new Error("Function not implemented.");
}

function setDevelopers(arg0: any) {
  throw new Error("Function not implemented.");
}

