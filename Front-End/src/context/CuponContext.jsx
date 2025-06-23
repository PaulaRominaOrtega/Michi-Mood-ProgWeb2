import React, { createContext, useState } from 'react';

export const CuponContext = createContext();

export const CuponProvider = ({ children }) => {
  const [cuponActivo, setCuponActivo] = useState(null);

  const aplicarCupon = (cupon) => {
    setCuponActivo(cupon);
  };

  const quitarCupon = () => {
    setCuponActivo(null);
  };

  return (
    <CuponContext.Provider value={{ cuponActivo, aplicarCupon, quitarCupon }}>
      {children}
    </CuponContext.Provider>
  );
};