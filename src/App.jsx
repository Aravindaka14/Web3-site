
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import Swap from "./components/swap";


function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/swap" element={<Swap />} />
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;