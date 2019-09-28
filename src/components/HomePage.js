import React from 'react';
import {Link} from 'react-router-dom'

import BasicCard from './BasicCard'

class HomePage extends React.Component {
    constructor() {
        super();
        this.workingDetails = [
            {
                imgLink: 'https://www.zoomcar.com/build/img/book.f804056bb2429eeabf95836bdf8865e1.svg',
                title: 'BOOK',
                text: 'Search for and book a car on our site!',
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/dl.99966c7703663379725f13d45663b372.svg',
                title: 'FILL DETAILS',
                text: "Upload your driver’s license, and pay a small security deposit.",
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/zoom.db4f328f3f4b83596bb3f2aefd04a864.svg',
                title: 'VROOM VROOM',
                text: 'Fill the start checklist in the app. Grab the keys from the glove-box and drive.'
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/return.c50e35f6ae4b2891e95c121082d968f0.svg',
                title: 'RETURN',
                text: 'Return the car to the same location and fill the end checklist to end your trip.'
            }
        ]
        this.stats = [
            {
                imgLink: 'https://www.zoomcar.com/build/img/steering-wheel.121c23ffa50aa2da7a1e1f829048dd90.svg',
                title: '3,000+',
                text: 'Rides Daily'
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/happy.c650409b5435456374eca19943b697f0.svg',
                title: '48,00,000+',
                text: 'Happy users'
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/kms.4dc69060e383492afc70514e93ca766c.svg',
                title: '3,60,00,000+',
                text: 'Km Travelled'
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/cars.fcc55acb001edaad3d14055517a1e1b4.svg',
                title: '6,500+',
                text: 'Number of Cars'
            },
            {
                imgLink: 'https://www.zoomcar.com/build/img/star_rating.5999c91406d9adad8f35df39ef055ec5.svg',
                title: 'Rating 4.7/5.0',
                text: 'Rated by 3,00,000+ customers'
            }
        ]    
    }
    render() {
        const howItWorks = this.workingDetails.map(ele => <BasicCard data={ele} />)
        const statistics = this.stats.map(ele => <BasicCard data={ele} />)
        return (
            <div>
                <div className='container'>
                    <div className='card text-white'>
                        <img src='https://www.zoomcar.com/build/img/intro_bg.59b15d84c75cf310e76cc40155b90dc6.jpg' style={{width:'100%'}}></img>
                        <div className='card-img-overlay text-center mt-5'>
                            <h1 className='card-title mt-4'>Car Rentals</h1>
                            <h4>DRIVE IN THE CITY & OUTSTATION</h4>
                            <Link to='/search' className='text-white btn btn-primary mt-5' style={{width: '70%'}}>Start</Link>
                        </div>
                    </div>
                    <div className='row'>
                        {howItWorks}
                    </div>
                    <div className='row'>
                        {statistics}
                    </div>
                </div>
            </div>
            
        )
    }
}

export default HomePage;