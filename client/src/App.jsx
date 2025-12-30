import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssetRequest from './components/assetRequest';
import LoginPage from './components/login';
import Register from './components/register';
function App() {

return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/assetrequest" element={<AssetRequest/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
