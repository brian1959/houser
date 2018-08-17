import React, { Component } from 'react';
import Button from './Button/Button';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateImage } from '../ducks/reducer';

class StepTwo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            pImage: ''
        }
    }

    render() {

        return (

            <div>
                <input type="text" placeholder="Image URL " onChange={(e) => updateImage(e.target.value)}>Add Image URL</input>
                />
    
            <Link to="/stepone">
                    <Button action>Previous Step</Button>
                </Link>
            <Link to="/stepthree">
                    <Button action>Next Step</Button>
                </Link>

            </div>
        )
    }
}

function mapStateToProps(state) {
    const { pImage } = state;

    return {
        pImage
    };

}


export default connect(mapStateToProps, { updateImage })(StepTwo);