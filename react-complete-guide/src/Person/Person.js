//usually function name start with lowercase
import React from 'react';

const person = (props) => { //props means all the property which we added to our component
    //component is a function which is returning some jsx
    return (
        <div>
            <p onClick={props.click}>I'm a {props.name} and I am {props.age} years old</p>
            <p>{props.children}</p>
        </div>
        //{props.children} will be null if we check it in console
        //this shows us that we can output dynamic content as part of our jsx content

    )
};

export default person;
