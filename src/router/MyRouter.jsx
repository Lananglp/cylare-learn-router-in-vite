import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Blog from '../pages/Blog'
import Product from '../pages/Product'
import Layout from '../components/Layout'
import { AnimatePresence } from 'framer-motion'
import NotFoundPage from '../pages/NotFoundPage'
import ProductShow from '../pages/ProductShow'
import BlogShow from '../pages/BlogShow'

export const ListRoute = () => {

    const location = useLocation();
    const pathname = location.pathname;

    return (
        <AnimatePresence mode="wait">
            <Routes location={location} key={pathname}>
                <Route path='*' element={<NotFoundPage/>}/>
                <Route path='/' element={<Home/>}/>
                <Route path='/product' element={<Product/>}/>
                <Route path='/product/:productName' element={<ProductShow/>}/>
                <Route path='/blog' element={<Blog/>}/>
                <Route path='/blog/:title' element={<BlogShow/>}/>
                <Route path='/about' element={<About/>}/>
            </Routes>
        </AnimatePresence>
    )
}

function MyRouter() {

  return (
    <BrowserRouter>
        <Layout>
            <ListRoute/>
        </Layout>
    </BrowserRouter>
  )
}

export default MyRouter