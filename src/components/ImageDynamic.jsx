import bannerDesktop from "../assets/images/banner.jpg"
import bannerMobile from "../assets/images/banner-mobile.jpg"
import bannerTablette from "../assets/images/banner-tablette.jpg"
import { useMediaQuery } from 'react-responsive';
import React, {useState, useEffect} from 'react';


function ImageDynamic () {
        const [imageURL, setImageURL] = useState(bannerDesktop);
        const isMobile = useMediaQuery({maxWidth: 768});
        const isTablette = useMediaQuery({minWidth: 769, maxWidth: 992});
    
        useEffect(() => {
            if (isMobile) {
                setImageURL(bannerMobile);
            } else if (isTablette) {
                setImageURL(bannerTablette);
            } else {
                setImageURL(bannerDesktop);
            }
        }, [isMobile, isTablette]);
    
        return (
            <img src={imageURL} alt="bannière" />
        );
    }
    
export default ImageDynamic;