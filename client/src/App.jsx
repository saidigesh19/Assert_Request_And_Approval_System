import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssetRequest from './components/Employee/assetRequest';
import LoginPage from './components/Auth/login';
import Register from './components/Auth/register';
import MyRequest from './components/Employee/myRequests';
function App() {

return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/assetrequest" element={<AssetRequest/>} />
        <Route path="/myrequest" element={<MyRequest/>} />
        <Route path="/dashboard" element={<AdminDashboard/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
