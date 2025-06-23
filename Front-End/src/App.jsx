import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Header from './components/Header';
import Banner from './components/Banner';
import FilterBar from './components/FilterBar';
import ProductList from './components/ProductList';
import Hero from './components/Hero';
import Footer from './components/Footer';


// Nuevos componentes para categorías
import ListadoCategoria from './components/ListadoCategoria';
import DetalleCategoria from './components/DetalleCategoria';
import CuponInput from './components/CuponInput';
import { CuponProvider } from './context/CuponContext';

function App() {
  return ( 
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <Link to="/" className="text-xl font-bold">Simulacro Examen</Link>
          <div>
            <Link to="/categorias" className="hover:bg-blue-700 px-3 py-2 rounded">Categorías</Link>
          </div>
        </div>
      </nav>

      <main className="container mx-auto px-4 py-6">
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <CuponProvider>
                <Banner />
                <FilterBar />
                <CuponInput/>
                <ProductList />
                <Hero />
              </CuponProvider>
            }
          />
          <Route path="/categorias" element={<ListadoCategoria />} />
          <Route path="/categoria/:id" element={<DetalleCategoria />} />
        </Routes>

        <Footer />
      </main>
    </div>
  );
}

export default App;
