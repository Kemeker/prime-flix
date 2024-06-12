import {BrowserRouter, Routes, Route} from 'react-router-dom'

// import das paginas
import Home from './pages/Home/index'
import Filme from './pages/Filme/index'

// importando componentes
import Header from './components/Header'

function RoutesApp() {
    return(
        <BrowserRouter>
            <Header/>
            <Routes>

                <Route path='/' element={<Home/>} />
                <Route path='/filme/:id' element={<Filme/>} />
                

            </Routes>
        
        
        </BrowserRouter>
    )
}

export default RoutesApp