import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { AppProvider, useApp } from './context/AppContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import PatientDashboard from './pages/PatientDashboard';
import DoctorDashboard from './pages/DoctorDashboard';
import SearchDoctors from './pages/SearchDoctors';
import BookAppointment from './pages/BookAppointment';
import Consultation from './pages/Consultation';
import Prescriptions from './pages/Prescriptions';
import UploadReports from './pages/UploadReports';
import { Toaster } from './components/ui/sonner';
import './App.css';

const Protected = ({ children, role }) => {
  const { user } = useApp();
  if (!user) return <Navigate to="/login" replace />;
  if (role && user.role !== role) return <Navigate to="/" replace />;
  return children;
};

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col bg-white">
    <Navbar />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

function App() {
  return (
    <AppProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/doctors" element={<SearchDoctors />} />
            <Route path="/book/:doctorId" element={<Protected role="patient"><BookAppointment /></Protected>} />
            <Route path="/patient/dashboard" element={<Protected role="patient"><PatientDashboard /></Protected>} />
            <Route path="/patient/prescriptions" element={<Protected role="patient"><Prescriptions /></Protected>} />
            <Route path="/patient/reports" element={<Protected role="patient"><UploadReports /></Protected>} />
            <Route path="/consultation/:appointmentId" element={<Protected><Consultation /></Protected>} />
            <Route path="/doctor/dashboard" element={<Protected role="doctor"><DoctorDashboard /></Protected>} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </Layout>
        <Toaster position="top-right" richColors />
      </BrowserRouter>
    </AppProvider>
  );
}

export default App;
