import { BrowserRouter, Router, Routes, Route } from 'react-router-dom'
import Login from '../screens/auth/LoginScreen'

export function MisRutas(){
    return(
    <Router>
        <Routes>
            <Route path='/'/>
        </Routes>
    </Router>
    )
}