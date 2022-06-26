// Terima props lalu tampilkan dalam Contact component
// Kalian bisa membuat CSS sendiri di src/components/Contact.css
import React from 'react';

const Contact = ({data}) => {
    const {name, phone, email, photo} = data
    return(
        <div className='Boxes'>
            <div>
                <img src={photo} alt='BrokenPicture' className='PhotoProfile'/>
            </div>
            <div className='DataContact'>
                <h2 className='name'>{name}</h2>
                <h3 className='phone'>{phone}</h3>
                <h3 className='email'>{email}</h3>
            </div>
        </div>
    
    )
} 

export default Contact;