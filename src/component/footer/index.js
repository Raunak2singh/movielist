import { Box, Typography } from '@mui/material'
import React from 'react'

function Footer({value}) {
  return (
    <Box sx={{padding:'10px',display:"flex",justifyContent:"center",alignItems:"center"}}>
        <Typography sx={{fontSize:"10px",fontWeight:"600",color:"gray"}}>
            Copyright © 2021-2022 MOVIES {value}
        </Typography>
    </Box>
  )
}

export default Footer