import React from 'react';
import UserContext from "../utils/UserContext";
// class component
class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            name:this.props.name,
            location:this.props.location,
            contact : this.props.contact
        }
    }
    //we can make component Did Mount async because it is handling side effect just (one time) after the component mounts. nothing else
    async componentDidMount(){
        let data = await fetch('https://api.github.com/users/ayushsaxena38');
        data = await data.json();
        console.log("data from the github api:-",data);
        this.setState({
            name:data.name,
            location:data.location,
            contact:`${data.login}@gmail.com`
        })
    }
    render(){
        console.log(`${this.props.child}'s Render`)
        const {name , location , contact} = this.state;
        return(
            <div className='user-card flex flex-col items-center justify-center bg-blue-200 p-4 border border-solid border-black rounded'>
                <UserContext.Consumer>
                    {
                        ({user})=>(
                            <h1 className='text-xl'>User : {user?.name}</h1>
                        )
                    }
                </UserContext.Consumer>
                <h2 className='text-xl'>Name : {name}</h2>
                <h3 className='text-xl'>Location : {location}</h3>
                <h4 className='text-xl'>Contact : {contact}</h4>
            </div>
        )
    }
}
export default UserClass