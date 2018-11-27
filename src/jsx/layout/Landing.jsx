import * as React from 'react';

/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */

export default class Landing extends React.Component {
  render() {
    return (
      <div className='landing' id='landing'>
        <div className='container'>
          <div className='blurb'>
            <p>
              This story is an in-depth feature on two electricians — DuRay Jones and Michael Bell — who are suing UMD for racial discrimination.
            </p>

            <p>
              They filed their lawsuit in federal court last summer, but besides an initial story with the basic facts from the court documents, no one has really reported on what drove them to file or what the process has been like for them.
            </p>

            <p>
              The project is both a close look at their case and a narrative about how the stress of it has affected their home lives and mental health.
            </p>
          </div>

          <div className='title'>
            <h1>Racial Discrimination</h1>
            <h2>University of Maryland</h2>
          </div>

          <div className='credit'>
            <p>
              Presented by&nbsp;
              <a href='http://www.dbknews.com/'
                target='_blank'
                rel='noopener noreferrer'>
                The Diamondback
              </a>
            </p>
            <p>
              Story by&nbsp;
              <a href='http://www.dbknews.com/author/jatelsek/'
                target='_blank'
                rel='noopener noreferrer'>
                Jillian Atelsek
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
