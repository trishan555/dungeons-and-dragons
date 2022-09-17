import Spells from './Pages/Spells'
import SpellDetailed from './Pages/SpellDetailed'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favourite from './Pages/Favourite'
import Header from './Components/Header'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path='/' element={<Spells />} />
                    <Route path='/spell/:name' element={<SpellDetailed />} />
                    <Route path='/favourite' element={<Favourite />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
