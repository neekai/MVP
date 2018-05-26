import React from 'react';
import axios from 'axios';
import Insult from './Insult.jsx';
import MyInsults from './MyInsults.jsx';



class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            insult: '',
            myInsults: []
        }
        this.handleInputAndSubmit = this.handleInputAndSubmit.bind(this);
        this.saveInsultToDB = this.saveInsultToDB.bind(this);
        this.fetchInsultsFromDB = this.fetchInsultsFromDB.bind(this);
        this.deleteInsultFromDB = this.deleteInsultFromDB.bind(this);
    }

    componentDidMount() {
        this.fetchInsultsFromDB();
    }

    handleInputAndSubmit(e) {
        e.preventDefault();
        let name = document.getElementById('name').value;
        axios.get('/api/punch', {
            params: {
                who: name
            }
        })
          .then(response => {
            this.setState({
            insult: response.data
          })
      })
          .catch(error => {throw error; console.log('There was an error getting insult back from punchLineController')})
        e.target.reset();
  }

    fetchInsultsFromDB() {
        axios.get('/api/insults')
          .then(response => {
            const InsultsArr = [];
            response.data.forEach(insult => InsultsArr.push(insult.punchLine));
            this.setState({
                myInsults: [...InsultsArr]
            });
          })
          .catch(err => {throw err; console.log('There was an error fetching from db..', err)});
    }

    saveInsultToDB() {
        let insultText = document.getElementById('insult').textContent;
        axios.post('/api/insults', {
            insult: insultText
        })
        .then(response => {
            this.fetchInsultsFromDB();
        })
        .catch(err => {
            throw err;
            console.log('There was an err saving to db', err);
        })
    }

    deleteInsultFromDB(index){
        let deleteInsult = this.state.myInsults[index];
        // console.log('this.state.myinsult..', this.state.myInsults)
        // console.log('this is index..')
        let insultsAfterDelete = this.state.myInsults;
        insultsAfterDelete.splice(index, 1);
        axios.delete('/api/insults', {
            params: {
                insultToDelete: deleteInsult
            }
        })
        .then((data) => {
            this.setState({
                myInsults: insultsAfterDelete
            })
        })
        .catch((err) => {
            throw err;
            console.log('There was an error deleting..', err)
        })
    }

    render() {
        return (
            <div id="main">
                <h1>I HATE YOU.</h1>
                <form id='form' onSubmit= {e => this.handleInputAndSubmit(e)} >
                    <div class="ui right labeled input">
                      <input type="text" id = 'name' placeholder="AHHHHHHHHHH!" required/>
                        <div class="ui basic label">
                          >:(
                        </div>
                    </div>
                    <button id ="screw" class="ui negative inverted huge red button"> Screw You! </button>
                </form>
                <br/>
                {this.state.insult && <Insult insult={this.state.insult} saveInsultToDB={this.saveInsultToDB}/>}
                <br/>
                {this.state.myInsults.length === 0 ? null : <h2>My Insults</h2> } 
                {this.state.myInsults.map((myInsult, index) => <MyInsults myInsult={myInsult} index={index} key={index} deleteFromDB={this.deleteInsultFromDB}/>)}
            </div>
        )
    }
}

export default App;