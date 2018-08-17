import React from 'react';


export default function House(props){

    return(
        <div className="house_info_container">
            <div className="house_info">
                <h2>{props.propType}</h2>
                <h3>{props.propAdress}</h3>
                <h3>{props.pCity}</h3>
                <h3>{props.pState}</h3>
                <h3>{props.pZip}</h3>
                 <hr/>
            </div>
        </div>

    )


}