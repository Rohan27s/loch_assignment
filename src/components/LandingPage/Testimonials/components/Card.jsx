import React from 'react'

const Card = ({ data }) => {
    return (
        <div className='testimonial_card'>
            <div className='testimonial_card_topbar'>
                <p className='head'>{data.name}</p>
                <p className='subtitle'>{data.designation}</p>
            </div>
            <p>{data.description}</p>
        </div>
    )
}

export default Card