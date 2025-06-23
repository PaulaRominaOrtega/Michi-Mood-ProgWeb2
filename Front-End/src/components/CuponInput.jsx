import React, { useState, useContext } from 'react';
import axios from 'axios';
import { CuponContext } from '../context/CuponContext';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const CuponInput = () => {
  const [codigo, setCodigo] = useState('');
  const [mensaje, setMensaje] = useState('');
  const { cuponActivo, aplicarCupon, quitarCupon } = useContext(CuponContext);

  const handleAplicar = async () => {
    if (!codigo.trim()) {
      setMensaje('Por favor ingresa un código.');
      return;
    }

    try {
      const res = await axios.get(`http://localhost:3001/api/cupones/validar/${codigo.trim()}`);

      if (res.data && res.data.activo) {
        aplicarCupon(res.data);
        setMensaje(`Cupón "${res.data.nombreCupon}" (${res.data.porcentajeDescuento}%) aplicado con éxito.`);
      } else {
        quitarCupon();
        setMensaje('El código de cupón ingresado no es válido o ha expirado.');
      }
    
    } catch (error) {
      quitarCupon();
      setMensaje('Error al validar el cupón. Intente más tarde.');
    }
  };

  const handleQuitar = () => {
    quitarCupon();
    setMensaje('Cupón removido.');
    setCodigo('');
  };

  return (
    <Box sx={{ mb: 3, textAlign: 'center', backgroundColor: "info.main", pt:2, pb:2}}>
      <TextField
        label="Código de cupón"
        value={codigo}
        onChange={(e) => setCodigo(e.target.value)}
        size="small"
        sx={{ mr: 1, width: '200px' }}
      />
      <Button variant="contained" onClick={handleAplicar} sx={{ mr: 1 }}>
        Aplicar Cupón
      </Button>
      {cuponActivo && (
        <Button variant="outlined" color="error" onClick={handleQuitar}>
          Quitar Cupón
        </Button>
      )}
      {mensaje && (
        <Typography variant="body2" color={cuponActivo ? 'success.main' : 'error.main'} sx={{ mt: 1 }}>
          {mensaje}
        </Typography>
      )}
    </Box>
  );
};

export default CuponInput;