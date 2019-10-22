import React from 'react';

class CreateMessage extends React.Component {
    render() {
        console.log(" create message", this.props.tagFriend);
        return (
            <div className="messagearea">
                <div className="entertext">
                    <form onSubmit={(event) => this.props.submit(event)}>
                        <div className="writetext">
                            <h3>Enter Your Message here: </h3>
                            <input onChange={this.props.inputHandler} placeholder="What's in your mind?" type="text"
                                      className="textInput" value={this.props.messageText}/>
                            <ul>
                                {console.log("my tag frnds:",this.props.tagFriend)}
                                {this.props.tagFriend.map((tag,index) =>
                                    <li  className = {this.props.listFlag === true ? "clsTrue" : "clsFalse"}
                                         onClick = {() => this.props.tagsHandler(tag)}
                                         key = {index}>
                                        {tag}
                                    </li>)}
                            </ul>
                        </div>
                        <div className="createbutton">
                            <button>{this.props.btnText}</button>
                        </div>

                    </form>

                </div>
            </div>
        );
    }
};

export default CreateMessage;