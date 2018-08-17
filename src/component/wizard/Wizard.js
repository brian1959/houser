import React, {Component} from 'react';
import {Switch, Route} from 'react-router-dom';
import Button from '../Button/Button';
import { Link } from 'react-router-dom';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree';


class Wizard extends Component {

    constructor(props){
        super(props)

        this.state = {
            housesToDisplay:[],
            propType:'',
            propAdress:'',
            ppCity:'',
            pState:'',
            pZip:''
        }
    }



    render(){
       
        return(

            <div>
                <Switch>
                    <Route  path='/wizard/stepone' component={StepOne} />
                    <Route  path='/wizard/steptwo' component={StepTwo} />
                    <Route  path='/wizard/stepthree' component={StepThree} />
                </Switch>


                <Link to="/">
                    <Button>Cancel</Button>
                </Link>

            </div>
        )
    }
}




export default Wizard;
