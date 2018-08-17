import React, {Component} from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { updatePropertyType, updateAddress, updateCity, updateState, updateZip} from '../../ducks/reducer';

class StepOne extends Component{



    render(){
        const {updatePropertyType, updateAddress, updateCity, updateState, updateZip} = this.props;

        return(

            <div>
                <input type="text" placeholder="Property Type" onChange={(e)=> updatePropertyType(e.target.value)}/>
                <input type="text" placeholder="Address" onChange= {(e) => updateAddress(e.target.value)}/>
                <input type="text" placeholder="City" onChange={(e) => updateCity(e.target.value)}/>
                <input type="text" placeholder="State" onChange={(e) => updateState(e.target.value)}/>
                <input type="text" placeholder="Zip" onChange={(e) => updateZip(e.target.value)}/>

                <Link to='/'>
                    <Button >Return to Dashboard</Button>
                </Link>
                <Link to='/wizard/steptwo'>
                    <Button >Next Step</Button>
                </Link>
            </div>
        )
    }
}


function mapStateToProps(state){
const {proptype, propadress, pcity, pstate, pzip} = state;

return{
    proptype,
    propadress,
    pcity,
    pstate,
    pzip   
};

}


export default connect (mapStateToProps,{updatePropertyType, updateAddress, updateCity, updateState, updateZip}) (StepOne);