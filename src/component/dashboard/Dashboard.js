import React, {Component} from 'react';
import House from '../house/House';
import Button from '../Button/Button';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Dashboard extends Component {

    constructor(props){
        super(props)

        this.state = {
            housesToDisplay:[],
            proptype:'',
            propadress:'',
            pcity:'',
            pstate:'',
            pzip:''
        }

       
    }
    componentDidMount(){
        axios.get('/api/houses').then(response =>{
              this.setState({housesToDisplay:response.data})
           
        })

    }

    render(){

        const {housesToDisplay} = this.state;
        
            return(
               
                 
            <div>
                <h1>Dashboard</h1>
                <Link to="/wizard/stepone">
                    <Button>Add New Property</Button>
                </Link> 
                {
                   housesToDisplay.map(house => (
                        <House key={house.houseid}               
                        proptype= {house.proptype}
                        propadress={house.propadress}
                        pcity={house.pcity} 
                        pstate={house.pstate} 
                        pzip={house.pzip} 
                         />

                    )) 
                }
                   
            </div>
         )
    }
}

export default Dashboard