// NOTICE: importing reactn instead of react
import React, { setGlobal } from 'reactn';

/* eslint-disable space-before-function-paren */

export default class Loading extends React.Component {
  render() {
    return (
      <div className='loading'>
        <div className='container'>
          {/* loading */}
        </div>
      </div>
    );
  }
}
