import React from 'react';
import './styles/Footer.css'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import ra from '../assets/ra.png'




function Footer() {
    return (
        <footer>
            <img className='footer-icon fb' src={fb} alt='footericon' />
            <img className='footer-icon ra' src={ra} alt='footericon' />
            <img className='footer-icon ig' src={ig} alt='footericon' />
        </footer>
    )
}

export default Footer