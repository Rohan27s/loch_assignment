import React from 'react'
import Card from './components/Card'

const Notification = () => {
    const data = [
        {
            icon: <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="bell">
                    <path id="Vector" d="M21 9.33301C21 7.47649 20.2625 5.69601 18.9497 4.38326C17.637 3.07051 15.8565 2.33301 14 2.33301C12.1435 2.33301 10.363 3.07051 9.05025 4.38326C7.7375 5.69601 7 7.47649 7 9.33301C7 17.4997 3.5 19.833 3.5 19.833H24.5C24.5 19.833 21 17.4997 21 9.33301Z" fill="#165DFF" fill-opacity="0.1" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    <path id="Vector_2" d="M16.0181 24.5C15.813 24.8536 15.5186 25.1471 15.1644 25.3511C14.8102 25.5551 14.4086 25.6625 13.9998 25.6625C13.591 25.6625 13.1894 25.5551 12.8352 25.3511C12.481 25.1471 12.1866 24.8536 11.9814 24.5" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </svg>,
            type: 'save',
            description: 'We’ll be sending notifications to you here',
            dropdownValues: [],
            dormant: false,
        },
        {
            icon: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="bar-chart-2">
                    <g id="Group 427319307">
                        <path id="Vector" d="M23.0996 25.9004V11.9004" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Vector_2" d="M14.7002 25.9V3.5" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                        <path id="Vector_3" d="M6.2998 25.9V17.5" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    </g>
                </g>
            </svg>
            ,
            type: 'dropdown',
            description: 'Notify me when any wallets move more than',
            dropdownValues: ['$ 1,000', '$ 2,500', '$ 5,000'],
            dormant: false,
        },
        {
            icon: <svg width="29" height="28" viewBox="0 0 29 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="clock">
                    <path id="Vector" d="M14.4001 25.6663C20.8434 25.6663 26.0667 20.443 26.0667 13.9997C26.0667 7.55635 20.8434 2.33301 14.4001 2.33301C7.95674 2.33301 2.7334 7.55635 2.7334 13.9997C2.7334 20.443 7.95674 25.6663 14.4001 25.6663Z" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                    <path id="Vector_2" d="M14.4004 7V14L19.0671 16.3333" stroke="black" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round" />
                </g>
            </svg>
            ,
            type: 'dropdown',
            description: 'Notify me when any wallet dormant for',
            dropdownValues: ['>30 Days', '>60 Days', '>3 Months'],
            dormant: true,
        },
    ];

    return (
        <div className='notification_container'>
            <span className="notification_content">
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Bell">
                        <path id="Vector" opacity="0.2" d="M25.9998 24H5.99984C5.82482 23.9989 5.65314 23.952 5.50195 23.8638C5.35077 23.7756 5.22539 23.6492 5.13833 23.4974C5.05127 23.3456 5.00559 23.1735 5.00586 22.9985C5.00613 22.8235 5.05233 22.6516 5.13984 22.5C5.96359 21.075 6.99984 17.4762 6.99984 13C6.99984 10.6131 7.94806 8.32387 9.63588 6.63604C11.3237 4.94821 13.6129 4 15.9998 4C18.3868 4 20.676 4.94821 22.3638 6.63604C24.0516 8.32387 24.9998 10.6131 24.9998 13C24.9998 17.4775 26.0373 21.075 26.8623 22.5C26.95 22.6518 26.9962 22.8239 26.9963 22.9991C26.9965 23.1744 26.9506 23.3466 26.8632 23.4985C26.7759 23.6504 26.6501 23.7767 26.4986 23.8647C26.3471 23.9527 26.1751 23.9994 25.9998 24Z" fill="white" />
                        <path id="Vector_2" d="M27.7245 21.9925C27.0308 20.7975 25.9995 17.4163 25.9995 13C25.9995 10.3478 24.946 7.8043 23.0706 5.92893C21.1952 4.05357 18.6517 3 15.9995 3C13.3474 3 10.8038 4.05357 8.92846 5.92893C7.0531 7.8043 5.99953 10.3478 5.99953 13C5.99953 17.4175 4.96703 20.7975 4.27328 21.9925C4.09612 22.2963 4.0022 22.6415 4.00099 22.9931C3.99978 23.3448 4.09133 23.6906 4.2664 23.9956C4.44147 24.3006 4.69388 24.5541 4.99816 24.7304C5.30244 24.9068 5.64784 24.9997 5.99953 25H11.1008C11.3315 26.1289 11.9451 27.1436 12.8377 27.8722C13.7303 28.6009 14.8472 28.9989 15.9995 28.9989C17.1518 28.9989 18.2687 28.6009 19.1614 27.8722C20.054 27.1436 20.6676 26.1289 20.8983 25H25.9995C26.3511 24.9995 26.6964 24.9064 27.0005 24.73C27.3046 24.5535 27.5568 24.3 27.7317 23.9951C27.9066 23.6901 27.9981 23.3444 27.9968 22.9928C27.9956 22.6412 27.9016 22.2962 27.7245 21.9925ZM15.9995 27C15.3793 26.9998 14.7744 26.8074 14.268 26.4492C13.7617 26.0911 13.3788 25.5848 13.172 25H18.827C18.6203 25.5848 18.2374 26.0911 17.731 26.4492C17.2247 26.8074 16.6198 26.9998 15.9995 27ZM5.99953 23C6.96203 21.345 7.99953 17.51 7.99953 13C7.99953 10.8783 8.84238 8.84344 10.3427 7.34315C11.843 5.84285 13.8778 5 15.9995 5C18.1213 5 20.1561 5.84285 21.6564 7.34315C23.1567 8.84344 23.9995 10.8783 23.9995 13C23.9995 17.5063 25.0345 21.3412 25.9995 23H5.99953Z" fill="white" />
                    </g>
                </svg>
                <h2>
                    Get notified when a highly correlated whale makes a move
                </h2>
                <p>Find out when a certain whale moves more than any preset amount on-chain or when a dormant whale you care about becomes active.</p>
            </span>
            <span className='notification_slider'>
                <span className="notification_cards">
                    {
                        data.map((item) => (
                            <>
                                <Card type={item.type} key={item.id} icon={item.icon} dropdownValues={item.dropdownValues} description={item.description} dormant={item.dormant} />
                            </>

                        ))
                    }
                </span>
            </span>
        </div>
    )
}

export default Notification