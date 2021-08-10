import React from 'react'

const TMItem = ({ item }) => {
    return (
        <div className='card'>
            <div className='card-inner'>
                <div className='card-front'>
                    <img src={item.images[2].url} alt='' />
                </div>
                <div className='card-back'>
                    <h1>{item.name}</h1>
                    <ul>
                        <li>
                            <strong>Date:</strong> {item.dates.start.localDate}
                        </li>
                        <li>
                            <strong>Time:</strong> {item.dates.start.localTime}
                        </li>
                        <li>
                            <strong>Venue:</strong> {item._embedded.venues[0].name}
                        </li>
                        <li>
                            <strong>Buy Tickets:</strong> {item.url}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default TMItem
