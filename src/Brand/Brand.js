import React from 'react'
import './BrandStyle.css'
import {Link, withRouter} from 'react-router-dom'

const Brand = (props) => {
    const goHome = () => {
        props.history.push({
          pathname: '/brands'
        })
    }
    if(props.viewOnceData) {
      const resultItem = props.viewOnceData.find(item => item.slug === props.match.params.slug);
      return (
        <div className={'table'}>
          <ul>
             <li className={'titleName'}>{resultItem.title}</li>
             <li className={'id'}>{resultItem.id}</li>
          </ul>
          {
              resultItem.brand_logo_url ? <img 
              className={'images'} 
              src={resultItem.brand_logo_url} 
              alt={"img"}/> : null
          }
          <button onClick={goHome}>Back</button>
        </div>
      );
    } else {
      return (
        <Link to={`/brands/${props.slug}`} className={'table link'}>
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
      );
    }
}   

export default withRouter(Brand)