import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import LocalOfferIcon from '@mui/icons-material/LocalOffer'; 

const products = [
  {
    id: 1,
    nombre: 'Michi Agenda',
    precio: 12000,
    imagen: '/images/cuaderno.jpg',
    oferta: true,
    descuento: 20,
  },
  {
    id: 2,
    nombre: 'Taza Michi Mood',
    precio: 13000,
    imagen: '/images/taza.jpg',
    oferta: false,
    descuento: 0,
  },
  {
    id: 3,
    nombre: 'Portallaves',
    precio: 15000,
    imagen: '/images/portallave.jpg',
    oferta: true,
    descuento: 15,
  },
  {
    id: 4,
    nombre: 'Pines x5',
    precio: 10000,
    imagen: '/images/pines.jpg',
    oferta: false,
    descuento: 0,
  },
  {
    id: 5,
    nombre: 'Llavero',
    precio: 6000,
    imagen: '/images/llavero.jpg',
    oferta: true,
    descuento: 10,
  },
  {
    id: 6,
    nombre: 'Lámpara',
    precio: 17000,
    imagen: '/images/lampara.jpg',
    oferta: false,
    descuento: 0,
  },
  {
    id: 7,
    nombre: 'Mochila',
    precio: 27000,
    imagen: '/images/mochila.jpg',
    oferta: true,
    descuento: 25,
  },
  {
    id: 8,
    nombre: 'Lapicera',
    precio: 5000,
    imagen: '/images/lapicera.jpg',
    oferta: false,
    descuento: 0,
  },
  {
    id: 9,
    nombre: 'Pantuflas',
    precio: 16000,
    imagen: '/images/pantufla.jpg',
    oferta: true,
    descuento: 30,
  },
  {
    id: 10,
    nombre: 'Medias',
    precio: 9000,
    imagen: '/images/medias.jpg',
    oferta: false,
    descuento: 0,
  },
];

const ProductList = () => {
  return (
    <Box sx={{ padding: 4 }}>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
            lg: 'repeat(5, 1fr)',
          },
          gap: 3,
        }}
      >
        {products.map((product) => {
          const tieneOferta = product.oferta === true;
          const tieneDescuento = tieneOferta && product.descuento > 0;
          const precioConDescuento = tieneDescuento
            ? product.precio - (product.precio * product.descuento) / 100
            : product.precio;

          return (
            <Card
              key={product.id}
              sx={{
                height: '100%',
                border: tieneOferta ? '2px solid #f50057' : '1px solid #e0e0e0',
                position: 'relative',
              }}
            >
              {tieneOferta && (
                <Chip
                  icon={<LocalOfferIcon />}
                  label="¡Oferta!"
                  color="secondary"
                  size="small"
                  sx={{
                    position: 'absolute',
                    top: 8,
                    left: 8,
                    zIndex: 1,
                  }}
                />
              )}

              <CardMedia
                component="img"
                image={product.imagen}
                alt={product.nombre}
                sx={{ height: 200, objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="h6">{product.nombre}</Typography>

                {tieneDescuento ? (
                  <>
                    <Typography
                      sx={{ textDecoration: 'line-through', color: 'gray' }}
                    >
                      ${product.precio.toLocaleString()}
                    </Typography>
                    <Typography
                      sx={{ color: 'red', fontWeight: 'bold' }}
                    >
                      ${precioConDescuento.toLocaleString()} ({product.descuento}% OFF)
                    </Typography>
                  </>
                ) : (
                  <Typography>${product.precio.toLocaleString()}</Typography>
                )}
              </CardContent>
              <CardActions>
                <Button size="small" variant="contained" color="primary">
                  Agregar al carrito
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default ProductList;
