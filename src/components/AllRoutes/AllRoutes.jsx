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
  ErrorPage
} from "..";
import {Bookmark, Comments, Explore, Home, HomePage, Profile} from "../../pages";
import Mockman from "../../MockAPI";


export const AllRoutes = () => {
  return (
    <>
    <Filter />
      <Routes>
        <Route path='/' element={<RequireAuth />}>
          <Route path='/' element={<Home />}>
            <Route path="profile/:username" element={<Profile />} />
            <Route path="comments/:postId" element={<Comments />} />
            <Route path='explore' element={<Explore />} />
            <Route path='bookmarks' element={<Bookmark />} />
          </Route>
        </Route>
  
        <Route path="/mockAPI" element={<Mockman />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/forgot-password"
          element={<ForgotPassword />}
        />
      </Routes>
      <Footer />
    </>
  )
}
