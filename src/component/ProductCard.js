import logo from '../static/logo192.png'
import React from 'react'
import {Badge, Button, ButtonGroup} from "@mui/material"
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

function Buttons({count, setCount}) {
    if (count) {
        return <ButtonGroup>
            <Button
                aria-label="reduce"
                onClick={() => {
                    setCount(Math.max(count - 1, 0))
                }}
            >
                <RemoveIcon fontSize="small"/>
            </Button>
            <Button
                aria-label="increase"
                onClick={() => {
                    setCount(count + 1)
                }}
            >
                <AddIcon fontSize="small"/>
            </Button>
        </ButtonGroup>
    }
    return <Button
        variant="contained"
        onClick={() => {
            setCount(count + 1)
        }}>
        Добавить
    </Button>
}

function ProductCard(props) {

    const [count, setCount] = React.useState(0)

    return (
        <div>
            <Badge color="secondary" badgeContent={count}>
                <img src={logo} alt="logo" width="200" height="200"/>
            </Badge>
            <p>
                React $10.50
            </p>
            <Buttons count={count} setCount={setCount}/>
        </div>
    )
}

export default ProductCard
