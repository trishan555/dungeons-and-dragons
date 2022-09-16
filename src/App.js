import Spells from './Components/Spells'
import Spell from './Components/Spells'
import { Routes, Route } from 'react-router-dom'

function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Spells />} />
                <Route path='/spell/:name' element={<Spell />} />
            </Routes>
        </div>
    )
}

export default App
