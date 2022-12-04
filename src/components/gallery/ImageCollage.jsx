import * as React from "react";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

function srcset(image, size, rows = 1, cols = 1) {
    return {
        src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
        srcSet: `${image}?w=${size * cols}&h=${
        size * rows
        }&fit=crop&auto=format&dpr=2 2x`,
    };
}

export default function QuiltedImageList({setSelectedImg}) {
    return (
        <ImageList
        // sx={{ width: 300, height: '63%', marginLeft: 0.5 }}
        sx={{   width: { xl: '300px', lg: '30%', md: '93%', sm: '92%', xs: '100%'},
                height: { xl: '63%', lg: '43%', md: '29%', sm: '50%', xs: '37%'}, 
                marginLeft: { xl:'0.5rem', lg: '0.5rem', md: '0'},
                marginTop: { xl:'0', lg: '0', md: '-12rem', sm: '-5rem', xs: '-2rem'},
            }}
        variant="quilted"
        cols={4}
        rowHeight={121}
        >
        {itemData.map((item) => (
            <ImageListItem
            onClick={()=>setSelectedImg(item.img)}
            key={item.img}
            cols={item.cols || 1}
            rows={item.rows || 1}
            >
            <img
                {...srcset(item.img, 121, item.rows, item.cols)}
                alt={item.title}
                loading="lazy"
            />
            </ImageListItem>
        ))}
        </ImageList>
    );
}

const itemData = [
    {
        img: "https://helping-site-for-sonichevy.vercel.app/static/media/lightbox1.85b7946e5495f09806d9.jpeg",
        title: "Sonic 2018lt view from the hood",
        author: "Iuliia Polinovska",
        rows: 2,
        cols: 2,
    },
    {
        img: "https://helping-site-for-sonichevy.vercel.app/static/media/lightbox2.18d6d031fd2d6eff74e7.jpeg",
        title: "Sonic 2018lt view from the back",
        author: "Iuliia Polinovska",
    },
    {
        img: "https://helping-site-for-sonichevy.vercel.app/static/media/lightbox3.6b268a4e4f0f7156370d.jpeg",
        title: "Sonic 2018lt view from inside steering wheel",
        author: "Iuliia Polinovska",
    },
    {
        img: "https://helping-site-for-sonichevy.vercel.app/static/media/lightbox4.593f67c648233713e941.jpeg",
        title: "Sonic 2018lt view back seets",
        author: "Iuliia Polinovska",
        cols: 2,
    },
    {
        img: "https://helping-site-for-sonichevy.vercel.app/static/media/lightbox5.33a8ded6fc1f88e29b1e.jpeg",
        title: "Sonic 2018lt view ecotec engine view",
        author: "Iuliia Polinovska",
        cols: 2,
    },
    {
        img: 'https://helping-site-for-sonichevy.vercel.app/static/media/lightbox6.978622fddb69c0d08004.jpeg',
        title: "Sonic 2018lt view open hood and doors",
        author: "Iuliia Polinovska",
        rows: 2,
        cols: 2,
    },
    {
        img: "https://helping-site-for-sonichevy.vercel.app/static/media/lightbox7.57165bce27304ea02a41.jpeg",
        title: "Sonic 2018lt view from a side with passenger",
        author: "Iuliia Polinovska",
    },
    {
        img: "https://helping-site-for-sonichevy.vercel.app/static/media/lightbox8.899321a727e70a280efc.jpeg",
        title: "Sonic 2018lt view engine in different point of view",
        author: "Iuliia Polinovska",
    },
    {
        img: "https://helping-site-for-sonichevy.vercel.app/static/media/lightbox9.6cf83b7b1c04397ab0f8.jpeg",
        title: "Sonic 2018lt view and downtown Toronto",
        author: "Iuliia Polinovska",
        rows: 1,
        cols: 4,
    },
];