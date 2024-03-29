import React from 'react';

const CheckoutCard = (props) => {
    console.log(props)
    return (
        <div className='card text-center m-3'>
            <img src={props.data.imgLink} className='my-3'></img>
            <div className='card-body'>
                <h5>{props.data.title}</h5>
                <p>Rs. {props.data.price} / Day</p>
            </div>
        </div>
    )
}

export default CheckoutCard;