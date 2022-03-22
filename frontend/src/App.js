// General Imports
import { Routes, Route } from "react-router-dom";
import "./App.css";

// Pages Imports
import VideoPage from "./pages/VideoPage/VideoPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

// Component Imports
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import AddCommentForm from "./components/AddCommentForm/AddCommentForm";
import AddReplyForm from "./components/AddReplyForm/AddReplyForm";

// Util Imports
import PrivateRoute from "./utils/PrivateRoute";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/video" element={<VideoPage />} />
        <Route 
          path='/add_comment'
          element={
            <PrivateRoute>
              <AddCommentForm />
            </PrivateRoute>
          }
      />
        <Route 
          path='/add_reply' 
          element={
            <PrivateRoute>
              <AddReplyForm />
            </PrivateRoute>
          }
      />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
