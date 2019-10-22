import React from 'react';
import PersonalInfo from './components/PersonalInfo';
import CreateMessage from './components/CreateMessage';
import DisplayMessage from './components/DisplayMessage';
import Friends from './components/Friends';
import './App.css';

class App extends React.Component
{
    state = {
        messageText: '',
        messages: [],
        btnText: 'Create',
        pos: 0,
        listFlag: false,
        friends: ["Shreya","Srishti","Monika","Aniket"],
        tagFriend: ["Shreya","Srishti","Monika","Aniket"]
    }


    inputHandler=(e)=>{
        console.log("this.state.friends", this.state.friends)
        if(e.target.value.includes("@")){
            this.setState({listFlag: true})
            let text = e.target.value.split("@")[1] ? e.target.value.split("@")[1].toUpperCase() : "";
            let filteredFriends = this.state.friends.filter(friend =>
                // console.log("friend",friend);
                // console.log("text",text);
                friend.toUpperCase().includes(text)
                // if(friend.includes(text)) {
                //     return friend;
                // }
            );
            this.setState({messageText:e.target.value, tagFriend: filteredFriends});
        }
        else{
            this.setState({messageText:e.target.value, listFlag: false})
        }

    };

    tagsHandler = (tag) => {
        let messageText = this.state.messageText;
        messageText = messageText.split('@')[0] + " " + tag + ",";
        this.setState({messageText, listFlag: false})
    }

    submitHandler=(event) => {

        event.preventDefault();
        if(this.state.messageText.trim() === '')
            return false;
        let messageArr = [...this.state.messages];
        if(this.state.btnText==='Create'){
            let d = new Date();
            let messageObj = {
                text: this.state.messageText,
                createdAt: d.getTime()
            }
            messageArr.unshift(messageObj);
        } else{
            messageArr[this.state.pos].text  = this.state.messageText;
        }
        this.setState({messages:messageArr, messageText: ' ',btnText: 'Create'});

    }

    editMessage=(index)=>{
        let messageText = this.state.messages[index].text
        this.setState({messageText, pos:index, btnText: 'Update'})
    }

    deleteMessage =(index)=>{
        let messageArr = this.state.messages
        messageArr.splice(index,1);
        this.setState({messages: messageArr})
    }

  render()
  {
      console.log("friend edited", this.state.tagFriend)

    return (
        <div className='App'>
          <div className="wrapper-class">
              <div className="personal-info">
                  <PersonalInfo/>
              </div>
              <div className="row">
                  <div className="col-lg-8">
                      <CreateMessage
                          inputHandler={(e)=>this.inputHandler(e)}
                          submit={this.submitHandler}
                          friends={this.state.friends}
                          messageText={this.state.messageText}
                          btnText={this.state.btnText}
                          tagsHandler = {(tag) => this.tagsHandler(tag)}
                          listFlag = {this.state.listFlag}
                          tagFriend = {this.state.tagFriend}
                      />
                      <DisplayMessage
                          messages={this.state.messages}
                          editMessage={(index) => this.editMessage(index)}
                          deleteMessage={(index) => this.deleteMessage(index)}
                      />
                  </div>
                  <div className="col-lg-4">
                      <Friends
                          friends={this.state.friends}
                          tagFriend = {this.state.tagFriend}
                      />
                  </div>
              </div>
          </div>
        </div>
    );
  }
};

export default App;
