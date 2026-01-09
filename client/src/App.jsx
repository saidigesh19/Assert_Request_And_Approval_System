import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AssetRequest from './components/Employee/assetRequest';
import LoginPage from './components/Auth/login';
import Register from './components/Auth/register';
import MyRequest from './components/Employee/myRequests';
import AdminDashboard from './components/Admin/adminDashboard';
import ProtectedRoute from './components/protectedRoutes';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage/>} />
        <Route path="/register" element={<Register/>} />   
         {/* employee Routes */}
        <Route path="/assetrequest" element={
          <ProtectedRoute allowedRoles={["Employee"]}>
          <AssetRequest/>
          </ProtectedRoute>
          } />
        <Route path="/myrequest" element={
          <ProtectedRoute allowedRoles={["Employee"]}>
          <MyRequest/>
          </ProtectedRoute>
          } />
          {/* admin routes */}
        <Route path="/dashboard" element={
          <ProtectedRoute allowedRoles={["Admin"]}>
          <AdminDashboard/>
          </ProtectedRoute>
          } />
      </Routes>
    </BrowserRouter>
  )
}

export default App