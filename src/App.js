

// export default App;

import React from 'react';
import CryptidCard from './components/crytpid-file';
import { NewCryptidForm } from './components/new-cryptid-form';
import { cryptidService } from './rest/CryptidsApi2';
import '../node_modules/bootstrap/dist/css/bootstrap.css';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cryptids: []
    }

    this.addNewCryptid = this.addNewCryptid.bind(this);
    this.deleteCryptid = this.deleteCryptid.bind(this);
    this.updateCryptid = this.updateCryptid.bind(this);
  }

  render() {
    
    let CryptidsCards = this.state.cryptids.map(cryptid => {
      return <CryptidCard {...cryptid} key={cryptid._id} 
        deleteCryptid={this.deleteCryptid} 
        updateCryptid={this.updateCryptid} />
    });
        
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <h2>Add Cryptid</h2>
            <NewCryptidForm addNewCryptid={this.addNewCryptid} />
          </div>
          <div className="col">
            <h2>Cryptids</h2>
            {CryptidsCards}
          </div>
        </div>
      </div>
    );
  }

  _refreshData = async() => {
    const cryptids = await cryptidService.getAll();
    this.setState({ cryptids });
  }

  componentDidMount() {
    this._refreshData();
  }

  addNewCryptid = async(cryptid) => {
    await cryptidService.create(cryptid);
    this._refreshData();
  }

  updateCryptid = async(cryptid) => {
    await cryptidService.update(cryptid);
    this._refreshData();
  }

  deleteCryptid = async(id) => {
    await cryptidService.delete(id);
    this._refreshData();
  }
}
