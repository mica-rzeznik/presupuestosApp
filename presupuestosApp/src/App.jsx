import { useState } from 'react'
import './App.css'
import Formulario from './components/Formulario'
import { Link, Navigate, Route, Routes } from 'react-router-dom'
import { Tab, TabList, Tabs } from '@chakra-ui/react'
import Ensayos from './components/Ensayos'

function App() {


  return (
    <div className="App">
      <div>
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            <Link to="/">
              <Tab as='b'>Datos</Tab>
            </Link>
            <Link to="/ensayos">
              <Tab as='b'>Ensayos</Tab>
            </Link>
            <Link to="/presupuesto">
              <Tab as='b'>Presupuesto</Tab>
            </Link>
          </TabList>
        </Tabs>
      </div>
      
      <Routes>
        <Route path="/" element={<Formulario/>}/>
        <Route path="/ensayos" element={<Ensayos/>}/>
        <Route path="/presupuesto" element={<p>hola</p>}/>
      </Routes>
      
    </div>
  )
}

export default App
