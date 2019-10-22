import React, {Component} from 'react';
import '../App.css'
class Note extends Component{
    render() {
        return(
        //    this return will hold every single note that we add
            <div className="note">
                {this.props.index+1 + " - "+ this.props.text}
                <div style={{float: 'right', cursor: "pointer"}}>
                    <i className = "fas fa-trash" onClick = {this.props.deleteNote}></i>
                    <i className = "fas fa-edit"  onClick = {this.props.editNoteText}></i>
                </div>
            </div>
        );
    }
};

export default Note;