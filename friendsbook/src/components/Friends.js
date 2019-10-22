import React from 'react';

class Friends extends React.Component{
    state = {
        flag:false,
        friendText: ''
    }

    inputHandler=(e)=>{
        this.setState({friendText:e.target.value});
    }

    submitHandler=(event)=> {
        event.preventDefault();
        if(this.state.friendText.trim() === '')
            return false;
        let friendArr = this.props.friends;
        friendArr.push(this.state.friendText);

        let tagFriendArr = this.props.tagFriend;
        tagFriendArr.push(this.state.friendText);

        this.setState({friends:friendArr, friendText: ' ',tagFriend:tagFriendArr});
        console.log("friends", this.props.friends);
        console.log("tagFriend", this.props.tagFriend)
    }

    clickHandler = () =>{
        this.setState({flag:true})
    }

    render(){
        let friendArr = this.props.friends.map((val,key)=>{
            return <li key={key}>{val}</li>
        })
        let modalfriend = <div>
            <input type="text" placeholder="Add friend" value={this.state.friendText} onChange={this.inputHandler}/>
            <button className="addfrndbtn" onClick={(event)=>  this.submitHandler(event)}>Add new friend</button>
                 </div>
            return(
            <div className='myfriends'>
                <h2>MY FRIENDS</h2>
                <button className="addfrnd" onClick={this.clickHandler}>Add Friends</button>
                {this.state.flag && modalfriend}
                <ul>
                    {friendArr}
                </ul>
            </div>
        );
    }
}
;
export default Friends