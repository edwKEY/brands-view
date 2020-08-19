import React, { Component } from 'react'
import {Route,Switch, Link, BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import './Brand/BrandStyle.css'
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
    const data = this.state.brand;
    console.log(this.state.brand);
    return (
      <div >
          <Router>
            <nav className={'menu'}>
               <Link to='/brands' className={'link'}>Brands catalog:</Link>
            </nav>
            <hr/>
            <Switch>
              <Route path='/brands' exact component={ViewBrand} />
              <Route path="/brands/:slug" exact render={() => <Brand viewOnceData={data} />} />
              {/* <Route render={() => <h1 className={'fof'}>404 Not found</h1>} /> */}
            </Switch>
          </Router>
      </div>
    );
  }
}