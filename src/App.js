
import './App.css'; 
import Layout from './Components/Layout/Layout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './pages/Home/Home';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { Provider, useDispatch } from 'react-redux';
import { store } from './store/Stores';
import WhoAreWe from './pages/WhoAreWe/WhoAreWe';
import OurServices from './pages/OurServices/OurServices';
import OurPartners from './pages/OurPartners/OurPartners';
import Blog from './pages/Blog/Blog';
import ContactUs from './pages/ContactUs/ContactUs';
import Blog1 from './pages/Blog/Blog1';
import Blog2 from './pages/Blog/Blog2';
import Blog3 from './pages/Blog/Blog3';
import Blog4 from './pages/Blog/Blog4';
import Blog5 from './pages/Blog/Blog5';
import Blog6 from './pages/Blog/Blog6';
import Blog7 from './pages/Blog/Blog7';
import Orgchart from './pages/Orgchart/Orgchart';
import OurProjects from './pages/OurProjects/OurProjects';
import Project1 from './pages/OurProjects/Project1';
import Project2 from './pages/OurProjects/Project2';
import Project3 from './pages/OurProjects/Project3';
import Project4 from './pages/OurProjects/Project4';
import Project5 from './pages/OurProjects/Project5';
import Project6 from './pages/OurProjects/Project6';
import { useEffect } from 'react';
import { toggleLanguage, toggleLanguage2 } from './store/LanguageSlice';
import MaintenanceWork from './pages/MaintenanceWork/MaintenanceWork';
import ColdStorageRooms from './pages/ColdStorageRooms/ColdStorageRooms';
function App() {
  const dispatch = useDispatch();

useEffect(()=>{
  let x= localStorage.getItem('i18nextLng')
  console.log(x);
 dispatch(toggleLanguage2(x))
},[])

  let router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, path: "", element: <Home /> },

        {path: "/WhoAreWe", element: <WhoAreWe />},
        {path: "/ourServices", element: <OurServices />},
        {path: "/OurPartners", element: <OurPartners />},
        {path: "/Blog", element: <Blog />},
        {path: "/ContactUs", element: <ContactUs />},
        {path: "/Blog1", element: <Blog1 />},
        {path: "/Blog2", element: <Blog2 />},
        {path: "/Blog3", element: <Blog3 />},
        {path: "/Blog4", element: <Blog4 />},
        {path: "/Blog5", element: <Blog5 />},
        {path: "/Blog6", element: <Blog6 />},

        {path: "/Blog7", element: <Blog7 />},
        {path: "/Orgchart", element: <Orgchart />},
        {path: "/OurProjects", element: <OurProjects />},
        {path: "/Project1", element: <Project1 />},
        {path: "/Project2", element: <Project2 />},
        {path: "/Project3", element: <Project3 />},
        {path: "/Project4", element: <Project4 />},
        {path: "/Project5", element: <Project5 />},
        {path: "/Project6", element: <Project6 />},
        {path: "/MaintenanceWork", element: <MaintenanceWork />},
        {path: "/ColdStorageRooms", element: <ColdStorageRooms />}

        
        


        
        

        
        
        ,]}]);
  return (


    <div>
      <RouterProvider router={router} />

    </div>
  
  );
}

export default App
