import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Landing from './pages/Landing/Landing'
import Layout from './components/Layout/Layout'
import Store from './pages/store/Store'
import About from './pages/About/About'
import Product from './pages/Product/Product'
import Category from './pages/Category/Category'
function App() {

  return (
    <>
      <Layout>
        <Routes>
          <Route path='/' element={< Landing />}></Route>
          <Route path='/store' element={< Store />}></Route>
          <Route path='/about' element={< About />}></Route>
          <Route path='/product/:id' element={< Product />}></Route>
          <Route path='/category/:name' element={< Category />}></Route>
        </Routes>
      </Layout>
    </>
  )
}

export default App
