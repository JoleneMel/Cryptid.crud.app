import React from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';
import EditCryptidForm from './edit-cryptid-file';

export default class CryptidCard extends React.Component {
    constructor(props) {
        super(props);

        this.handleDeleteClick = this.handleDeleteClick.bind(this);
        this.updateCryptid = this.updateCryptid.bind(this);
    }

    handleDeleteClick() {
        this.props.deleteCryptid(this.props._id);
    }

    updateCryptid(cryptid) {
        this.props.updateCryptid(cryptid);
    }

    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">The {this.props.name}, looks like {this.props.description}</h5>
                    <p className="card-text">Also known as {this.props.otherName} last seen in {this.props.lastSeen}</p>
                    
                    <EditCryptidForm {...this.props} updateCryptid={this.props.updateCryptid} />
                </div>
                <div className="card-footer">
                    <button className="btn btn-danger" onClick={this.handleDeleteClick}>Delete</button>
                </div>
            </div>
        );
    }
}

