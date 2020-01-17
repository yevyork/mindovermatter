import React from 'react';
import './styles/Footer.css'
import fb from '../assets/fb.png'
import ig from '../assets/ig.png'
import ra from '../assets/ra.png'




function Footer() {
    return (
        <footer>
            <div className='footer-right'>
            <a href='https://www.facebook.com/mindmatterofc/' target='_blank' rel="noopener noreferrer"><img className='footer-icon fb' src={fb} alt='footericon' /></a>
            <a href='https://www.residentadvisor.net/promoter.aspx?id=89893' target='_blank' rel="noopener noreferrer"><img className='footer-icon ra' src={ra} alt='footericon' /></a>
            <a href='https://www.instagram.com/mindmatterofc/' target='_blank' rel="noopener noreferrer"><img className='footer-icon ig' src={ig} alt='footericon' /></a>
            </div>
        </footer>
    )
}

export default Footer