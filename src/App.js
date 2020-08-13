import React, { Component } from 'react'
import {Route, Link, BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import brands from './json/brands.json'
import Brand from './Brand/Brand'
import ViewBrand from './Brand/ViewBrand'


export default class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      brand: brands,
    }
  }

  render() {
    console.log(this.state.brand);
    return (
      <div>
          <Router>
            <Link to='/brands'>Brands catalog: </Link>
            <Route path='/brands' exact component={ViewBrand} />
            <Route path="/brands/:slug" exact component={Brand} />
          </Router>
      </div>

    );
  }
}
