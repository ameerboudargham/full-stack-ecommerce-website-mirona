import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} 
from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import "bootstrap/dist/css/bootstrap.min.css"
import App from './App'
import './index.css'
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { StoreProvider } from './store';

const router = createBrowserRouter(
  createRoutesFromElements(
<Route path="/" element={<App/>}>
  <Route index={true} element={<HomePage />} />
  <Route path='product/:slug' element={<ProductPage />} />
     {/* <Route path="dashboard" element={<Dashboard />} /> */}
    {}
    </Route>
));
const queryClient = new QueryClient()
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <StoreProvider>
    <HelmetProvider>
      <QueryClientProvider client={queryClient}>
      
   <RouterProvider router={router}/>
   <ReactQueryDevtools initialIsOpen ={false} />
   </QueryClientProvider>
   </HelmetProvider>
   </StoreProvider>
  </React.StrictMode>,
)
