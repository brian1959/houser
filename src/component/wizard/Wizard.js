import React, {Component} from 'react';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';


class Wizard extends Component {



    render(){
       
        return(

            <div>

                <Link to="/">
                    <Button>Cancel</Button>
                </Link>

                 <Button action>Complete</Button>
            </div>
        )
    }
}

export default Wizard