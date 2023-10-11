import React, { useState } from 'react'
import PageTitle from '../PageTitle'
import Navbar from '../Navbar';
import CloseIcon from '@mui/icons-material/Close';


import img1 from '../assets/jay-wennington-N_Y88TWmGwA-unsplash.jpg';
import img2 from '../assets/photo-1502301103665-0b95cc738daf.jpg';
import img3 from '../assets/casey-lee-awj7sRviVXo-unsplash.jpg';
import img4 from '../assets/sebastian-coman-photography-eBmyH7oO5wY-unsplash.jpg';
import img5 from '../assets/kamil-kalbarczyk-19Ft3QfakMo-unsplash.jpg';
import img6 from '../assets/cala-w6ftFbPCs9I-unsplash.jpg';
import img7 from '../assets/brooke-lark--F_5g8EEHYE-unsplash.jpg';
import img8 from '../assets/mgg-vitchakorn-DDn9I5V1ubE-unsplash.jpg';
import img9 from '../assets/orkun-orcan-w0GyGNyGo6Y-unsplash.jpg';
import img10 from '../assets/01.jpg';

export default function GalleryScreen() {

    let data = [
        {
            id: 1,
            imgSrc: img1
        },
        {
            id: 2,
            imgSrc: img2
        },
        {
            id: 3,
            imgSrc: img3
        },
        {
            id: 4,
            imgSrc: img4
        },
        {
            id: 5,
            imgSrc: img5
        },
        {
            id: 6,
            imgSrc: img6
        },
        {
            id: 7,
            imgSrc: img7
        },
        {
            id: 8,
            imgSrc: img8
        },
        {
            id: 9,
            imgSrc: img9
        },
        {
            id: 10,
            imgSrc: img10
        },
    ]

    const [model, setModel] = useState(false);
    const [tempImgSrc, setTempImgSrc] = useState('');


    const getImage = (imgSrc) => {
        setTempImgSrc(imgSrc);
        setModel(true);
    }
    return (
        <>
            <div className="header-and-hero GalleryScreen">
                <Navbar />
                <PageTitle content="Gallery" />
            </div>
            <div className={model ? "model open" : "model"}>
                <img src={tempImgSrc} alt="inside of the restaurant" />
                <CloseIcon onClick={() => setModel(false)} />
            </div>
            <div className="Gallery mt1">

                {data.map((item, index) => {
                    return (
                        <div className="Gallery__images" key={index} onClick={() => getImage(item.imgSrc)}>
                            <img className="Gallery__img" src={item.imgSrc} alt="inside of the restaurant" />
                        </div>
                    )
                })}
            </div>

        </>
    )
}
