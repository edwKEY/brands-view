import React, {Component} from 'react'
import Brand from './Brand'
import brands from '../json/brands.json'


export default class ViewBrand extends Component {
    constructor(props){
        super(props);
    
        this.state = {
          brand: brands
        }
    }
    render() {
        console.log(this.props)
        return(
            this.state.brand.map((item, index) => {
                return(
                    <Brand 
                    name={item.title} 
                    id={item.id} 
                    key={index} 
                    link={item.brand_logo_url} 
                    slug={item.slug} />
                )
            })
        )
     
    }   
}