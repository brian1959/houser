import React from 'react';


export default function House(props){

    return(
        <div className="house_info_container">
            <div className="house_info">
                <h2>{props.proptype}</h2>
                <h3>{props.propadress}</h3>
                <h3>{props.pcity}</h3>
                <h3>{props.pstate}</h3>
                <h3>{props.pzip}</h3>
                 <hr/>
            </div>
        </div>

    )


}