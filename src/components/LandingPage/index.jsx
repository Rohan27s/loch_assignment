import React, { useState } from 'react'
import Notification from './Notification/Notification'
import Promotion from './Promotion/Promotion'
import Testimonials from './Testimonials/Testimonials'

const LandingPage = () => {
    return (
        <div className='landing_page_container' >
            
            <Notification />
            <Promotion />
            <Testimonials />
        </div>
    )
}

export default LandingPage