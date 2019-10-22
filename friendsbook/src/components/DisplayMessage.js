import React from 'react';


class DisplayMessage extends React.Component{
    render(){
        let data = this.props.messages.map((val,index)=>{
            return <div key={index} className="messageinorder">
                {val.text}
                <i className="fas fa-trash" style={{float: 'right', cursor: 'pointer'}} onClick={() => this.props.deleteMessage(index)} ></i>
                <i className="fas fa-edit" style={{float: 'right', cursor: 'pointer'}} onClick={() => this.props.editMessage(index)}></i>
                <br/>
                <br/>
                <p className="datedisp" style={{float: 'right'}}>{new Date(val.createdAt).toLocaleString()}</p>
                <br/>

            </div>

        })
        return(
            <div className="yourmessages">
                {data}
            </div>
        );
    }
}

export default DisplayMessage;