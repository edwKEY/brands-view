import React from 'react'
import './BrandStyle.css'
import {Link, withRouter} from 'react-router-dom'

const Brand = (props) => {
    const resultItem = props.data.find(item => item.slug === props.match.params.slug);
    console.log(resultItem)
    const viewOnceData = (
        <div className={'table'}>
          <ul>
             <li className={'titleName'}>{resultItem.title}</li>
             <li className={'id'}>{resultItem.id}</li>
          </ul>
          {
              props.link ? <img 
              className={'images'} 
              src={props.link} 
              alt={"img"}/> : null
          }
        </div>
    )
    const viewAllList = (
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

    return(
        <div>
            {
                resultItem ? viewOnceData : viewAllList
            }
        </div>
       

        // <div>
        //     <Link to={`/brands/${props.slug}`} className={'table'}>
        //         <ul>
        //             <li className={'titleName'}>{props.name}</li>
        //             <li className={'id'}>{props.id}</li>
        //         </ul>
        //         {
        //             props.link ? <img 
        //             className={'images'} 
        //             src={props.link} 
        //             alt={"img"}/> : null
        //         }
        //     </Link>  
        // </div> 
    )  
}   

export default withRouter(Brand)