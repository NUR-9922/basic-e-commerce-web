import { useState } from 'react'
import {Tooltip, IconButton,} from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import Navbar from './components/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
function App() {

  return (
    <main className='bg-background '>
     <Navbar />
     <Outlet />
     <Footer />
    </main>
  )
}

export default App
