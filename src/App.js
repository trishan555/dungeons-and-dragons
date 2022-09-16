import Spells from './Components/Spells'
import Spell from './Components/Spell'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Spells />} />
                    <Route path='/spell/:name' element={<Spell />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
