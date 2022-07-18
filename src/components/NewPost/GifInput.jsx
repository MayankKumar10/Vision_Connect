import {CloseRounded, GifRounded, Image } from '@mui/icons-material'
import {Button, Divider, Grid, IconButton, ImageList, ImageListItem, Input, InputBase, Modal, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useDebounceHook } from '../../hooks';
import SearchIcon from '@mui/icons-material/Search';
import { gifClicked } from '../../Redux';
import ReactLoading from 'react-loading';

export const GifInput = ({imageSelected}) => {
  const [open, setOpen] = useState(false);
  const [images, setImages] = useState();
  const [searchText, setSearchText] = useState('');
  const [searchStarted, setSearchStarted] = useState(false);
  const dispatch = useDispatch();
  const [gifsLoading, setGifsLoading] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const key = process.env.REACT_APP_GIPHY_API_KEY

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: '#f7f7f7',
    border: '1px solid #000',
    borderRadius: '1rem',
    boxShadow: 24,
    p: 4,
  };


  const getTrendingGif = () => {
    let url = `https://api.giphy.com/v1/gifs/trending?api_key=${key}&limit=6`;
    fetch(url)
    .then((res)=> res.json())
    .then((content)=>{
      setImages(content.data.map((gif)=> gif.images.downsized));
    })
    .catch((err)=>console.log(err));
  }

useEffect(()=>{
  getTrendingGif();
},[open]);

const getGif = () =>{
let url = `https://api.giphy.com/v1/gifs/search?q=${searchText}&rating=q&api_key=${process.env.REACT_APP_GIPHY_API_KEY}&limit=6`;
fetch(url)
.then((res)=>res.json())
.then((content)=>{
  if(searchStarted)
  setImages(content.data.map((gif)=>gif.images.downsized));
  setGifsLoading(false);
})
.catch((err)=>{
  console.log(err)
 setGifsLoading(false);
})
};

const debounceSearch = useDebounceHook(searchText, 1000);
useEffect(()=>{
  setGifsLoading(true);
  getGif();
},[debounceSearch])

  return (
    <>
      <IconButton color="primary" aria-label="upload picture" component="span">
        {imageSelected ? (
          <GifRounded 
          sx={{color:'gray',
          cursor:'not-allowed'}}
          />)
          :
          (<GifRounded onClick={handleOpen} />)}
      </IconButton>
      
      <Modal
        keepMounted
        isOpen={open}
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style} m='auto'>
        <Grid container
              direction="column"
              alignItems="center"
              justifyContent="center">
        <Paper
          component="form"
          sx={{ p: '2px 4px', 
          display: 'flex', 
          alignItems: 'center', 
          width: 400 }}
        >
          
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Gifs."
            value={searchText}
            inputProps={{ 'aria-label': 'search gifs' }}
            onChange= {(e)=>{
              setSearchText(e.target.value)
              if(searchText===''){
                setSearchStarted(false);
              }else{
                setSearchStarted(true);
              }
            }}
              />
              <IconButton type="submit" 
              sx={{ p: '10px' }} 
              aria-label="search">
                
                {searchText.length? 
                <CloseRounded 
                onClick={()=>setSearchText('')} 
                /> : 
                <SearchIcon /> }
              </IconButton>

              <Divider 
              sx={{ height: 28, m: 0.5 }} 
              orientation="vertical" />
            </Paper>
            </Grid>

            {gifsLoading? (
              <Grid 
              container
              direction="column"
              alignItems="center"
              justifyContent="center"
              >
              <ReactLoading type='spinningBubbles' color={'black'} height={'20%'} width={'20%'} />
              </Grid>
            )
            :
            ( <ImageList variant="masonry" cols={3} gap={8}>
              {images?.map((gif, index) => (
                <ImageListItem key={index}
                onClick={()=>{
                  dispatch(gifClicked(gif.url));
                  setOpen(false);
                  setSearchText('')
                }}
                >
                  <img
                    src={`${gif.url}?w=248&fit=crop&auto=format`}
                    srcSet={`${gif.url}?w=248&fit=crop&auto=format&dpr=2 2x`}
                    alt={gif.url}
                    loading="lazy"
                  />
                </ImageListItem>
              ))}
            </ImageList>
            )

            }
        </Box>
      </Modal>


    </>
  )
}
