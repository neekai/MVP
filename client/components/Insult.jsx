import React from 'react';

let Insult = ({ insult, saveInsultToDB }) => (
    <div>
      <h3 id='insult'>{insult}</h3>
      
      <button class="ui inverted green icon button" onClick={ () => saveInsultToDB() }><i class="heart icon"></i>I LOVE IT!</button>
    </div>
);

export default Insult;