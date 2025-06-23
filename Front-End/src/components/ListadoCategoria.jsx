import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListadoCategoria = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/api/categorias')
      .then(res => {
        // Asumo que res.data es un array
        setCategories(res.data);
      })
      .catch(err => console.error(err));
  }, []);

  if (!Array.isArray(categories)) {
    return <div>Error: categorías no es un arreglo</div>;
  }

  return (
    <div>
      {categories.length === 0 && <p>No hay categorías para mostrar.</p>}
      {categories.map(cat => (
        <div key={cat.id}>
          <h3>{cat.nombre_categoria || cat.nombre}</h3>
          <img src={cat.imagenUrl} alt={cat.nombre_categoria || cat.nombre} />
        </div>
      ))}
    </div>
  );
};

export default ListadoCategoria;