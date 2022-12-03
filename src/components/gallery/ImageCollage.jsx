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
        img: "http://chevysonic.volodymyrdc.ca/images/lightbox1.jpg",
        title: "Sonic 2018lt view from the hood",
        rows: 2,
        cols: 2,
    },
    {
        img: "http://chevysonic.volodymyrdc.ca/images/lightbox2.jpg",
        title: "Sonic 2018lt view from the back",
    },
    {
        img: "http://chevysonic.volodymyrdc.ca/images/lightbox3.jpg",
        title: "Sonic 2018lt view from inside steering wheel",
    },
    {
        img: "http://chevysonic.volodymyrdc.ca/images/lightbox4.jpg",
        title: "Coffee",
        cols: 2,
    },
    {
        img: "http://chevysonic.volodymyrdc.ca/images/lightbox5.jpg",
        title: "Hats",
        cols: 2,
    },
    {
        img: "http://chevysonic.volodymyrdc.ca/images/lightbox6.jpg",
        title: "Honey",
        author: "@arwinneil",
        rows: 2,
        cols: 2,
    },
    {
        img: "http://chevysonic.volodymyrdc.ca/images/lightbox7.jpg",
        title: "Basketball",
    },
    {
        img: "http://chevysonic.volodymyrdc.ca/images/lightbox8.jpg",
        title: "Fern",
    },
    {
        img: "http://chevysonic.volodymyrdc.ca/images/lightbox9.jpg",
        title: "Fern",
        rows: 1,
        cols: 4,
    },
];