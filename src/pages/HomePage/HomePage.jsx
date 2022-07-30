import { Box } from '@mui/material'
import React from 'react'
import { BsStars } from 'react-icons/bs'
import { AllPosts, NewPost } from '../../components'

export const HomePage = () => {
  return (
    <div className="home-container post-card-container col-6">
      <div className="home-trending">
        <h4>Home</h4>
        <BsStars size="25" />
      </div>
      <Box>
      <NewPost />
      <AllPosts />
      </Box>
    </div>
  )
}
