import React from 'react';

let MyInsults = ({ myInsult, deleteFromDB, index }) => (
    <div>
        { myInsult }
      <br/>
      <button onClick={() => deleteFromDB(index)}>I HATE IT NOW!</button>
      <br/>
    </div>
)

export default MyInsults;