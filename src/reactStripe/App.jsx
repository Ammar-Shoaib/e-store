import React from 'react'
import Pay from './Pay'
import Success from './Success'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path='/pay' element={<Pay />} />
                <Route path='/success' element={<Success />} />
            </Routes>
        </Router>
    )
}

export default App
