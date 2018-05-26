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
            console.log('This is the response data..', response.data)
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

    render() {
        return (
            <div>
                <h1>I HATE YOU.</h1>
                <form onSubmit= {e => this.handleInputAndSubmit(e)} >
                    I HATE YOU: <input type="text" id='name'/>
                    <button> Screw You! </button>
                </form>
                <br/>
                {this.state.insult && <Insult insult={this.state.insult} saveInsultToDB={this.saveInsultToDB}/>}
                <br/>
                {this.state.myInsults.map((myInsult, index) => <MyInsults myInsult={myInsult} index={index} />)}
            </div>
        )
    }
}

export default App;