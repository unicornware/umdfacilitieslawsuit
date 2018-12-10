import * as React from 'react';

// react router
import { NavHashLink as NavLink } from 'react-router-hash-link';

// jquery
import $ from 'jquery';

// comfig
import { BREAKPOINTS, COLORS } from '../../config/variables.config';

// sections
import sections from '../../data/sections.json';

/* eslint-disable space-before-function-paren */
/* eslint-disable no-undef */

export default class Navigation extends React.Component {
  render() {
    return (
      <div id='navigation'>
        <div className='container'>
          <nav className='navigation'>
            <div className='container'>
              <NavLink smooth to='#landing'>
                <i className='far fa-location-arrow' />
              </NavLink>
              {sections.map((s, i) => {
                if (i > 0) {
                  return (
                    <NavigationLink
                      id={s.id}
                      active={i === 0}
                      line={i !== 6}
                      index={i}
                      key={s.id}
                    />
                  );
                } else {
                  return null;
                }
              }
              )}
            </div>
          </nav>
        </div>
      </div>
    );
  }
}

class NavigationLink extends React.Component {
  componentDidMount() {
    const { id } = this.props;

    $(`#navigation-link-${id}`).hover(
      () => {
        if ($(window).width() > BREAKPOINTS.schmedium) {
          $('#navigation').css({ backgroundColor: COLORS.dark[1] });
          $(`#navigation-text-${id}`).css(({ height: 'auto', opacity: 1 }));
        }
      },
      () => {
        if ($(window).width() > BREAKPOINTS.schmedium) {
          $('#navigation').css({ backgroundColor: 'transparent' });
          $(`#navigation-text-${id}`).css(({ height: 0, opacity: 0 }));
        }
      }
    );
  }

  render() {
    const { id, line } = this.props;

    return (
      <div
        className='navigation-link'
      >
        <div>
          <NavLink
            className='navigation-link-circle'
            id={`navigation-link-${id}`}
            onClick={this.onClick}
            smooth
            to={`#${id}`}
          />

          {line ? <div className='navigation-link-line' /> : null}
        </div>
        <p id={`navigation-text-${id}`}>
          {`#${id.toUpperCase()}`}
        </p>
      </div>
    );
  }

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
}
