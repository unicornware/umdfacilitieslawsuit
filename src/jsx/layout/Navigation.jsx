import * as React from 'react';

import { NavHashLink as NavLink } from 'react-router-hash-link';

// jquery
import $ from 'jquery';

// sections
import sections from '../../data/sections.json';

/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */

export default class Navigation extends React.Component {
  render() {
    return (
      <nav className='navigation'>
        <div className='container'>
          {sections.map((s, i) =>
            <NavigationLink
              id={s.id} active={i === 0} line={i !== 6} index={i}
              key={s.id}
            />
          )}
        </div>
      </nav>
    );
  }
}

class NavigationLink extends React.Component {
  onClick = e => {
    e.preventDefault();

    let linkId = `${e.target.id}`;
    let links = document.querySelectorAll('.navigation-link-circle');

    links.forEach(link => {
      linkId === link.id
        ? $(`#${link.id}`).addClass('active')
        : $(`#${link.id}`).removeClass('active');
    });
  }

  render() {
    const { id, line } = this.props;

    return (
      <div
        className='navigation-link'
      >
        <NavLink
          className='navigation-link-circle'
          id={`navigation-link-${id}`}
          onClick={this.onClick}
          smooth
          to={`#${id}`}
        />
        <p>{`#${id.toUpperCase()}`}</p>
        {line ? <div className='navigation-link-line' /> : null}
      </div>
    );
  }
}
