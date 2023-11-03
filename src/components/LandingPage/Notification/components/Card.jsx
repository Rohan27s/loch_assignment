import React from 'react'

const Card = ({ type, icon, dropdownValues, description, dormant }) => {
    return (
        <div className='notification_card'>
            <span className='notification_card_top'>

                {icon}
                {type === "save" &&
                    <span className='card_save_btn'>Save</span>
                }
                {type === "dropdown" &&
                    <input type="checkbox" name="check" id="" />
                }
            </span>
            <p className='notification_card_description'>
                {description}
            </p>
            {type === "save" &&
                <input type="email" placeholder='' />

            }
            {type === "dropdown" &&
                <select name="drop" id="">
                    {dropdownValues.map((item, index) => (<option value={item} key={index}>{item}</option>))}
                </select>
            }
            {dormant && <p className='notification_card_description'>becomes active</p>}

        </div>
    )
}

export default Card