import React from 'react'
import {Route, Routes} from "react-router-dom";
import {
  Filter,
  Footer,
  ForgotPassword,
  Login,
  RequireAuth,
  SideNav,
  Signup,
} from "..";
import {Bookmark, Comments, Explore, Home, HomePage, Profile} from "../../pages";
import Mockman from "../../MockAPI";


export const AllRoutes = () => {
  return (
    <>
    <Filter />
      <Routes>

        {/* <Route element={<RestrictAuth />}>
          <Route path="/" element={<HomePage />} />
        </Route> */}
        
        <Route path='/' element={<RequireAuth />}>
          <Route path="/" element={<Home />} />
            <Route path="/profile/:username" element={<Profile />} />
            <Route path="/comments/:postId" element={<Comments />} />
            <Route path='/explore' element={<Explore />} />
            <Route path='/bookmark' element={<Bookmark />} />
          {/* </Route> */}
        </Route>
  
        <Route path="/mockAPI" element={<Mockman />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
      </Routes>
      
      <SideNav />
      <Footer />
    </>
  )
}
