import {Component} from 'react';
import User from "./User";
import UserClass from './UserClass';
const Contact = () =>{
    return(
        <div className='p-4 text-center'>
                <h1 className='text-xl'>Contact Us Page</h1>
                <p className='text-lg p-4'>This is the Contact us page.</p>
                {/* <User name = {"Ayush"} location = {"Bareilly"} contact = {"ayushsaxena38@gmail.com"} /> */}
                <UserClass child={1} name = {"Ayush"} location = {"Bareilly"} contact = {"ayushsaxena38@gmail.com"} />
        </div>
    )
}
export default Contact;