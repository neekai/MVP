import React from 'react';

let MyInsults = ({ myInsult, deleteFromDB, index }) => (
    <div>
        { myInsult }
      <br/>
      <button class="tiny ui inverted blue button" onClick={() => deleteFromDB(index)}>I HATE IT NOW!</button>
      <br/>
    </div>
)

export default MyInsults;