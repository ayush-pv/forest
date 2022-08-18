import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';
import './Footer.css';

function Footer() 
{
  return(
<div className='footer'>
    <div className='footer_main'>
        <p className ='footer_contact'>CONTACT US</p>
        <hr className = 'footer_line'/>
        <p className ='footer_copy'><CopyrightIcon/></p>
        <p className='footer_right'>Copyrights Reserved</p>
        <p className='footer_last'>Terms of Service - Privacy Policy</p>
    </div>
</div>
)
}

export default Footer;
