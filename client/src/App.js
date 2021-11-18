import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Courses from './Components/Courses';
import CourseDetail from './Components/CourseDetail';
import UpdateCourse from './Components/UpdateCourse';
import UserSignIn from './Components/UserSignIn';
import UserSignUp from './Components/UserSignUp';

function App() {
  return (
    <div id="root">
      <main>
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/courses/:id" element={<CourseDetail id={1} />} />
          <Route path="/courses/:id/update" element={<UpdateCourse />} />
          <Route path="/signin" element={<UserSignIn />} />
          <Route path="/signup" element={<UserSignUp />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
