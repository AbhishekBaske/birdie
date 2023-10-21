import App from "./App"
import { BrowserRouter,Routes, Route } from "react-router-dom"
import Login from "./components/Login"
import Register from "./components/Register"
export default function Home() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </BrowserRouter>
    )
}
