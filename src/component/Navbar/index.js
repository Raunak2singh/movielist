import { AppBar,Icon,Toolbar, Typography } from '@mui/material'
import React from 'react'
import LiveTvIcon from '@mui/icons-material/LiveTv';
import { Stack } from '@mui/system';

function Navbar() {
  return (
    <AppBar position='static' sx={{boxShadow:"0px 0px 100px 1px rgba(0,0,0,0.1)"}}>
            <Toolbar sx={{background:"white",padding:"20px"}}>
              <Stack alignItems="center">
                <Icon sx={{color:"red",fontSzie:"50px"}}>
                    <LiveTvIcon/> 
                </Icon>
                <Typography sx={{color:"red"}}>
                  Movies
                </Typography>
              </Stack>

            </Toolbar>
    </AppBar>
  )
}

export default Navbar