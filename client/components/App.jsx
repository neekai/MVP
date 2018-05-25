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
        axios.get('/api/punch')
          .then(response => {
            this.setState({
            insult: response.data
          })
      })
          .catch(error => {throw error; console.log('There was an error getting insult back from punchLineController')})
        e.target.reset();
  }

 








    render() {
        return (
            <div>
                <h1>I HATE YOU.</h1>
                <form onClick= {e => this.handleInputAndSubmit(e)} >
                    I HATE YOU: <input type="text"/>
                    <button> Screw You! </button>
                </form>
            </div>
        )
    }
}

export default App;