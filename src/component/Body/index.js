import { Box, CircularProgress, Container, Grid} from '@mui/material'
import React from 'react'
import CustomCard from '../Card/CustomCard'

function Body({movies}) {
 
    if(movies){

        return (

            <Container maxWidth="xl">   
            <Box sx={{padding:'10px'}}>
        
                    <Grid container spacing={1}>
                    {
                            movies.map(a =>{
                                return(
                                <React.Fragment key={a.id}>
                                <Grid item md={4} sm={6} xs={12}>
                                  <CustomCard 
                                    img={a.img.src}
                                    alt={a.img.alt}
                                    title={a.title}
                                    year={a.year}
                                    ranking={a.ranking}
                                    distributor={a.distributor}
                                    amount={a.amount}
                                  />
                                </Grid>
                                </React.Fragment>
                                    )
                            })
                       }
                    </Grid>
                        
            </Box>  
            </Container>
          )

    }

        return (
            <Box sx={{height:"90vh",display:"flex",justifyContent:"center",alignItems:"center"}}>
                <CircularProgress color="secondary" />
            </Box>
        )

 
}

export default Body