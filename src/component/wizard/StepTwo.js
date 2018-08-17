import React, { Component } from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage } from '../../ducks/reducer';

class StepTwo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pimage: ''
        }
    }

    render() {

        return (

            <div>
                <input type="text" placeholder="Image URL " onChange={(e) => updateImage(e.target.value)}/>
    
            <Link to="/wizard/stepone">
                    <Button >Previous Step</Button>
                </Link>
            <Link to="/wizard/stepthree">
                    <Button >Next Step</Button>
                </Link>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { pimage } = state;

    return {
        pimage
    };

}


export default connect(mapStateToProps, { updateImage })(StepTwo);