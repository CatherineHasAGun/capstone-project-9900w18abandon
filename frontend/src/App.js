import './App.css';
import React, {useState} from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import RegistrationForm from './pages/Register/Register';
import LoginForm from './pages/login/login';
import ForgetPasswordForm from './pages/ForgetPassword/ForgetPassword';
import Dashboard from './pages/Dashboard';
import Profile from './pages/Profile';
import Navbar from './components/Navbar';
import CoursePage from "./pages/CoursePage";
import CourseDetailPage from "./components/CourseDetailPage";

import courses,{myCourses} from './data/courses'; // 导入课程数据
const App = () => {
  const [myCoursesLocal, setMyCourses] = useState(myCourses);
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
        <Route path='/forget-password' element={<ForgetPasswordForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/courses" element={<CoursePage myCourses={myCoursesLocal}/>} />
        <Route path="/course/:courseId" element={<CourseDetailPage
            courses={courses}
            myCourses={myCoursesLocal}
            setMyCourses={setMyCourses}  />} />
        {/*<Route path="/projects" element={<ProjectPage />} />*/}
        {/*<Route path="/jobs" element={<JobPage />} />*/}
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;