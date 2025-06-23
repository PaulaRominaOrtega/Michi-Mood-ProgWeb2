import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetalleCategoria = () => {
  const { id } = useParams(); 
  const [category, setCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get( `http://localhost:3001/api/categorias/${id}`)
      .then((res) => {
        setCategory(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error al obtener categoría:', err);
        setError('No se pudo cargar la categoría.');
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Cargando categoría...</p>;
  if (error) return <p>{error}</p>;
  if (!category) return <p>No se encontró la categoría.</p>;

  return (
    <div>
      <h1>{category.nombre_categoria}</h1>
      {category.imageUrl && (
        <img
          src={category.imageUrl}
          alt={category.nombre_categoria}
          style={{ maxWidth: '300px', borderRadius: '8px' }}
        />
      )}
    
    </div>
  );
};

export default DetalleCategoria;