import { Card, CardActionArea, CardActions, CardContent, CardMedia, Fab, IconButton, Typography,Box } from '@mui/material';
import { Stack } from '@mui/system';
import React,{useState} from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
// import second from ''



const CustomCard = ({img,alt,title,distributor,year,ranking,amount}) => {

    const [like, setlike] = useState(false);



    console.log(img)
    return (
        <Card sx={{border:"none",boxShadow:"0px 0px 100px 1px rgba(0,0,0,0.1)",}}>
            {/* <img src={img}  alt="ss"/> */}
            <CardActionArea>
                <CardMedia
                    component="img"
                    src={img}
                    alt={alt}
                    height="200px"
                />
                <CardContent>
                    <Stack direction={"row"} alignItems="center" spacing={1}>
                    <Typography sx={{fontWeight:"800",fontSize:"20px"}}>{title}</Typography>
                    <Typography>({year})</Typography>
                    </Stack>
                    <Typography sx={{fontWeight:"500",color:"gray"}}><span>Ranking : </span>{ranking}</Typography>
                    <Typography sx={{color:"#1F2E3D",fontSize:"9px"}}>{distributor}</Typography>
                </CardContent>
             
            </CardActionArea>
            <CardActions sx={{display:"flex"}}>
                <Fab variant="extended" size='small'   sx={{boxShadow:"none",background:"#72C560",color:"white",'&.MuiFab-root:hover':{color:"black"}}}>
                   Budget    {amount}
                </Fab>
                <Box sx={{flexGrow:1}}></Box>
                <IconButton onClick={()=>{setlike(!like)}} sx={{color:(like)?"red" : ""}}>
                    {
                        (like)?
                        <FavoriteIcon/>
                        :
                        <FavoriteBorderIcon/>

                    }
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default CustomCard;
