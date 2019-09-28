import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';


import Vehicle from './Vehicle';
import Checkout from './Checkout'

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cars : [
                {
                    id: 0,
                    imgLink: 'https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/1f3585c2e226fb30f85664a669b8c2ee1fdc1703.png?-1503039545',
                    title: 'Maruti Swift',
                    seater: '5',
                    type: 'Manual',
                    bags: '2',
                    age: '18+',
                    distance: '3.5',
                    price: '3,500',
                    excess: '8'
                },
                {
                    id: 1,
                    imgLink: 'https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/8e78d99a6ddd6b6e6c858dad6f223fe74875e370.jpg?-1506410553',
                    title: 'Tata Tiago',
                    seater: '5',
                    type: 'Manual',
                    bags: '3',
                    age: '18+',
                    distance: '5.0',
                    price: '3,468',
                    excess: '8'
                },
                {
                    id: 2,
                    imgLink: 'https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/964a9433a21c9b95c25217ecdbe653abb658c9f1.png?-1521810661',
                    title: 'Maruti Swift AT',
                    seater: '5',
                    type: 'Automatic',
                    bags: '3',
                    age: '18+',
                    distance: '3.5',
                    price: '5,003',
                    excess: '11'
                },
                {
                    id: 3,
                    imgLink: 'https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/dc50c77aa094cf6a8795d35a0bf75db465d44152.png?-1530600432',
                    title: 'Ford Freestyle',
                    seater: '5',
                    type: 'Manual',
                    bags: '0',
                    age: '18+',
                    distance: '7.5',
                    price: '3,958',
                    excess: '10'
                },
                {
                    id: 4,
                    imgLink: 'https://s3-ap-southeast-1.amazonaws.com/zoomcar/pictures/original/b5cffd4b8ab18106411293b3666486a5bd691755.png?-1503044921',
                    title: 'Mahindra KUV 100',
                    seater: '5',
                    type: 'Manual',
                    bags: '3',
                    age: '18+',
                    distance: '2.0',
                    price: '3,250',
                    excess: '8'
                }
            ]
        }
    }

    handleCarSelection = (selected) => {
        let temp = this.state.cars[selected]
        console.log(temp);
        this.props.func(selected, temp);
    }

    render() {
        const carDetails = this.state.cars.map((ele, i) => <Vehicle data ={ele} id={i} func={(selected) => this.handleCarSelection(selected)} />)
        return (
            <div className='container'>
                {carDetails}
            </div>
        )
    }
}

export default SearchPage;