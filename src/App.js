import Spells from './Components/Spells'
import SpellDetailed from './Components/SpellDetailed'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Favourite from './Components/Favourite'
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
