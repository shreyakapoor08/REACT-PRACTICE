import React from 'react';

const PersonalInfo = () => (
    <div className="details">
        <div className="profilepic">
            <img src={require('./welcomeimg.jpg')} alt=""/>
        </div>
        <div className="namecontact">
            <h4>SHREYA KAPOOR</h4>
            <h4>shreyakapoor98@gmail.com</h4>
        </div>
        <div className="address">
            <h4>Hno. 12345 ABC vihar</h4>
            <h4>New Delhi 110087</h4>
            <h4>India</h4>
        </div>
        <div className="settings">
            <i  className="fas fa-cog"></i>
        </div>
    </div>
);

export default PersonalInfo;