import React, { Component } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateMortgage, updateRent } from '../../ducks/reducer';
import axios from 'axios';

class StepThree extends Component {

    constructor(props) {
        super(props)


    }
    onClickComplete(){
            let newHouse = {
                proptype: this.state.ptype,
                propadress: this.state.propadress,
                pcity: this.state.pcity,
                pstate: this.state.pstate,
                pzip: this.state.pzip,
                pimage: this.state.pimage,
                mortgage: this.state.mortgage,
                rent: this.state.rent 
            };
    
            axios
                .post('/api/house', newHouse)
                .then( (response) => {
                    this.setState({housesToDisplay:response.data, proptype:'', propadress: '', pcity: '', pstate: 'UT',
                        pzip: '', pimage: '', mortgage: 0, rent: 0
                    })
                })
                .catch((err) => {
     
                })
            
    
        }   
  

    render() {
        const {updateMortgage, updateRent} = this.props;

        return (

            <div>
                <input type="text" placeholder="Mortgage Amount" onChange={(e) => updateMortgage(e.target.value)}/>
                <input type="text" placeholder="Rent Amount" onChange={(e) => updateRent(e.target.value)}/>


                <Link to='wizard/steptwo'>
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