import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useLocation } from 'react-router'
import { useState, useEffect } from 'react'
import { publicRequest } from "../requestMethods"

const Info = styled.div`
    opacity:0;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background:rgba(0, 0, 0, 0.2);
    z-index:2;
    display:flex;
    justify-content:center;
    align-items:center;
    transition:all 0.4s ease;
    cursor:pointer;
`

const Container = styled.div`
    display:flex;
    margin:5px;
    min-width:280px;
    height:350px;
    align-items:center;
    justify-content:center;
    background:#f5fbfd;
    position:relative;

    &:hover ${Info} {
        opacity:1;
    }
`

const Circle = styled.div`
    width:200px;
    height:200px;
    border-radius:50%;
    background:white;
    position:absolute;
`

const Image = styled.img`
    height:75%;
    z-index:2;
`

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background:white;
    display:flex;
    align-items:center;
    justify-content:center;
    margin:10px;
    transition:all 0.3s ease;

    &:hover {
        background:#e9f5f5;
        transform:scale(1.1)
    }
`

const Product = ({ item }) => {
    return (
        <Container>
            <Circle />
            <Image src={item.img} />
            <Info>
                <Icon>
                    <ShoppingCartOutlined />
                </Icon>
                <Icon>
                    <Link to={`/product/${item._id}`}>
                        <SearchOutlined />
                    </Link>
                </Icon>
                <Icon>
                    <FavoriteBorderOutlined />
                </Icon>
            </Info>
        </Container>
    )
}

export default Product
