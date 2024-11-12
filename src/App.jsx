import { Button } from '@material-tailwind/react';
import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Pages/Home/Home';
import Blog from './Pages/Blog/Blog';
import AllBlogs from './Pages/AllBlogs/AllBlogs';
import BlogInfo from './Pages/BlogInfo/BlogInfo';
import AdminLogin from './Pages/Admin/AdminLogin/AdminLogin';
import Dashboard from './Pages/Admin/Dashboard/Dashboard';
import Nopage from './Pages/Nopage/Nopage';
import { Toaster } from "react-hot-toast";
import MyState from './context/data/myState';
import CreateBlog from './Pages/Admin/CreateBlog/CreateBlog';
import PrivateRoute from './Components/Routes/PrivateRoute';
const App = () => {
  return (
    <div>
      <MyState>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/allblogs" element={<AllBlogs />} />
            <Route path="/bloginfo/:id" element={<BlogInfo />} />
            <Route path="/adminlogin" element={<AdminLogin />} />
            <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />
            <Route path="/createblog" element={<PrivateRoute><CreateBlog /></PrivateRoute>} />
            <Route path="/*" element={<Nopage />} />
          </Routes>
          <Toaster />
        </Router>
      </MyState>
    </div>
  );
};

export default App;