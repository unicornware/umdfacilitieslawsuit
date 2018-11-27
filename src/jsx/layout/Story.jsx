// NOTICE: importing reactn instead of react
import React, { setGlobal } from 'reactn';

// data
import sections from '../../data/sections.json';

// components
import Section from '../components/Section';

/* eslint-disable space-before-function-paren */

export default class Story extends React.Component {
  render() {
    return (
      <div className='container'>
        {sections.map((s, i) => <Section {...s} key={`section-0${i}`} />)}
      </div>
    );
  }
}
