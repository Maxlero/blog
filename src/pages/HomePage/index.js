import React from 'react'
import ProductCard from "../../component/ProductCard"
import Grid from '@mui/material/Grid'
import { styled } from '@mui/material/styles'
import {Paper} from "@mui/material"

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export default function HomePage() {
    return (
        // <Box sx={{flexGrow: 1}}>
        <Grid container spacing={{xs: 2, md: 3}} columns={{xs: 4, sm: 8, md: 12}}>
            {Array.from(Array(6)).map((_, index) => (
                <Grid xs={2} sm={4} md={4} key={index} item={true}>
                    <Item>
                        <ProductCard/>
                    </Item>
                </Grid>
            ))}
        </Grid>
        // </Box>
    )
}

