import { StrictMode,useContext,createContext } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { UserDetailProvider } from "./context/UserDetailContext";
import { BrowserRouter } from 'react-router-dom';



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UserDetailProvider>
      <BrowserRouter>
        
        <App />
      </BrowserRouter>
    </UserDetailProvider>
  </StrictMode>
);
