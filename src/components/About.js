import {Component} from 'react';
import User from "./User";
import UserClass from './UserClass';

class About extends Component{
    constructor(props){
        super(props)
    }
    componentDidMount(){
    }
    render(){
        return(
            <div className='p-4 text-center'>
                <h1 className='text-xl'>About Us Page</h1>
                <p className='text-lg p-4'>This is the about us page. It tells us about the app</p>
                {/* <User name = {"Ayush"} location = {"Bareilly"} contact = {"ayushsaxena38@gmail.com"} /> */}
                <UserClass child={1} name = {"Ayush"} location = {"Bareilly"} contact = {"ayushsaxena38@gmail.com"} />
            </div>
        )
    }
}

// const About = ()=>{
//     return(
//         <div>
//             <h1>About Us Page</h1>
//             <p>This is the about us page. It tells us about the app</p>
//             <User name = {"Ayush"} location = {"Bareilly"} contact = {"ayushsaxena38@gmail.com"} />
//             <UserClass name = {"Ayush"} location = {"Bareilly"} contact = {"ayushsaxena38@gmail.com"} />
//         </div>
//     )
// }

export default About;