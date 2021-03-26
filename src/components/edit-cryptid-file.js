import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default class EditCryptidForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.name,
            description: props.description,
            otherName: props.otherName,
            lastSeen: props.lastSeen,
            _id: props._id
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        this.props.updateCryptid(this.state);
        event.preventDefault();
    }
//to work on hidden edit file
    // onClick() {
    //     this.myForm.className='hidden';
    // }

    render() {
        return (
            <div>
            {/*for furture style*/}
            {/* <h6 onClick={this.onClick.bind(this)}>Edit Cryptid</h6> */}
            {/* <form onSubmit={this.handleSubmit} ref={ref => {this.myForm=ref;}} > */}
            <form onSubmit={this.handleSubmit} ref={ref => {this.myForm=ref;}} >
                <div className="form-group">
                    <label htmlFor="nameInput">Cryptid's name</label>
                    <input name="name" value={this.state.name} type="text" className="form-control" id="nameInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="descriptionInput">Description</label>
                        <input name="description" value={this.state.description} type="text" className="form-control" id="descriptionInput" onChange={this.handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="otherNameInput">Other Known Names</label>
                    <input name="otherName" value={this.state.otherName} type="text" className="form-control" id="otherNameInput" onChange={this.handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="lastSeentInput">Last Seen</label>
                    <input name="lastSeen" value={this.state.lastSeen} type="text" className="form-control" id="lastSeenInput" onChange={this.handleChange} />
                </div>
                <button type="submit" className="btn btn-primary">Update File</button>
            </form>
            </div>
        );
    }
}