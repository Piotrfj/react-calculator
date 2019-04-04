import React from 'react';
import './ContactPage.css'

const ContactPage = (props) => {
    return (
        <div className="contact">
            <p className="contactTxt">If you want to contact me please use following email:</p>
            <p className="mail">
                piotr.fjj@gmail.com
                <a href="mailto:piotr.fjj@gmail.com" rel="noopener noreferrer" target="_blank"><i class="fas fa-envelope"></i></a>
            </p>
        </div>
    );
}

export default ContactPage;