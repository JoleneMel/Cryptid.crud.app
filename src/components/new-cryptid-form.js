  
import React, { useState } from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.css';


export const NewCryptidForm = (props) => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [otherName, setOtherName] = useState('');
    const [lastSeen, setLastSeen] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.addNewCryptid({name, description, otherName, lastSeen});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="nameInput">Cryptid's name</label>
                <input name="name" value={name} type="text" className="form-control" id="nameInput" 
                    onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="form-group">
                <div className="form-group">
                    <label htmlFor="descriptionInput">Description</label>
                    <input name="description" value={description} type="text" className="form-control" id="descriptionInput" 
                    onChange={(e) => setDescription(e.target.value)} />
                </div>
            </div>
            <div className="form-group">
                <label htmlFor="otherNameInput">Other Known Names</label>
                <input name="otherName" type="text" value={otherName} className="form-control" id="otherNameInput" 
                    onChange={(e) => setOtherName(e.target.value)} />
            </div>
            <div className="form-group">
                <label htmlFor="lastSeenInput">Last Seen</label>
                <input name="lastSeen" type="text" value={lastSeen} className="form-control" id="lastSeenInput" 
                    onChange={(e) => setLastSeen(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Add Cryptid</button>
        </form>
    );
}