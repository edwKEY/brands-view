import React from 'react'
import './BrandStyle.css'
import {Link, withRouter} from 'react-router-dom'

const Brand = props => {
    console.log(props)
    return(
        <Link to={`/brands/${props.slug}`} className={'table'}>
            <ul>
                <li className={'titleName'}>{props.name}</li>
                <li className={'id'}>{props.id}</li>
            </ul>
            {
                props.link ? <img 
                className={'images'} 
                src={props.link} 
                alt={"img"}/> : null
            }
        </Link>     
    )
}

export default withRouter(Brand)