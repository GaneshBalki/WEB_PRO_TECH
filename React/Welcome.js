import React from 'react';

class Welcome extends React.Component{
    render(){
        return (<div>Hello Welcome this is my first class
            <form action="./hello.js">
                         <input type="text" placeholder='Enter Name'/>
                         <input type="submit" value="submit"/>
                         </form>
        </div>);
    }
}


export default Welcome;