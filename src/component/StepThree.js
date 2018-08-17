import React, { Component } from 'react';
import Button from './Button/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMortgage, updateRent } from '../ducks/reducer';

class StepThree extends Component {

    constructor(props) {
        super(props)

        this.state = {
            mortgage: '',
            rent: ''
        }
    }


    render() {

        return (

            <div>
                <input type="text" placeholder="Mortgage Amount" onChange={(e) => updateMortgage(e.target.value)}>Monthly Mortgage Amount</input>
                <input type="text" placeholder="Rent Amount" onChange={(e) => updateRent(e.target.value)}>Desired Monthly Rent</input>


                <Link to='steptwo'>
                    <Button >Previous Step</Button>
                </Link>
                <Link to="/" >
                    <Button >Complete</Button>
                </Link>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { mortgage, rent } = state;

    return {
        mortgage,
        rent
    };

}


export default connect(mapStateToProps, { updateMortgage, updateRent })(StepThree);