import React from 'react';
import axios from 'axios';


class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            insult: ''
        }
        this.handleInputAndSubmit = this.handleInputAndSubmit.bind(this);
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

    saveInsultToDB() {
        let insultText = document.getElementById('insult').textContent;
        axios.post('/api/insults', {
            insult: insultText
        })
        .then(response => {
            console.log(response)
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
                <h3 id='insult'>{this.state.insult}</h3>
                <button>I LOVE IT!</button>
            </div>
        )
    }
}

export default App;

