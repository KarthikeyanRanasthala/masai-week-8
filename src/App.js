import React from 'react';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import NavBar from './components/NavBar'
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import Checkout from './components/Checkout';
import Invoice from './components/Invoice';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            selectedCarDetails : [],
            userData: ''
        }
    }

    getSelectedCar = (selection, details) => {
        console.log(selection + 'complete');
        this.setState({selectedCarDetails: details});
    }

    genrateInvoice = (data) => {
        this.setState({userData: data})
    }

    render() {
        return (
            <BrowserRouter>
                <NavBar />
                <Route path='/' exact component={HomePage} />
                <Route path ='/search' exact render={() => <SearchPage func={(selection, details) => this.getSelectedCar(selection, details)}/>} />
                <Route path='/checkout' exact render={() => <Checkout data={this.state.selectedCarDetails} func={(data) => this.genrateInvoice(data)} />} />
                <Route path='/invoice' exact render={() => <Invoice data={this.state.userData} carInfo={this.state.selectedCarDetails} />} /> 
            </BrowserRouter>
        )
    }
}

export default App;