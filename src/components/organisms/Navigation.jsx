/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */

// NOTICE: importing reactn instead of react
import React from 'reactn'

// react router
import { NavHashLink as NavLink } from 'react-router-hash-link'

// jquery
import $ from 'jquery'

// comfig
import { BREAKPOINTS, COLORS } from '../../config/variables.config'

// sections
import sections from '../../data/sections.json'

export default class Navigation extends React.Component {
  render = () => {
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
                      heading={i === 1
                        ? '"Maryland has wrecked my life"' : s.heading}
                      active={i === 0}
                      line={i !== 6}
                      index={i}
                      key={s.id}
                    />
                  )
                } else {
                  return null
                }
              }
              )}
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

class NavigationLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: $(window).width() > BREAKPOINTS.schmedium
        ? props.heading : `#${props.id.toUpperCase().replace('-', ' ')}`
    }
  }

  componentDidMount = () => {
    const { id, heading } = this.props

    $(`#navigation-link-${id}`).hover(
      () => {
        if ($(window).width() > BREAKPOINTS.schmedium) {
          $(`#navigation-text-${id}`).css(({
            backgroundColor: COLORS.dark[0],
            height: 'auto',
            opacity: 1,
            padding: '.5em 1.5em'
          }))
        }
      },
      () => {
        if ($(window).width() > BREAKPOINTS.schmedium) {
          $('#navigation').css({ backgroundColor: 'transparent' })
          $(`#navigation-text-${id}`).css(({
            height: 0,
            opacity: 0,
            padding: 0
          }))
        }
      }
    )

    $(window).resize(() => {
      if ($(window).width() > BREAKPOINTS.schmedium) {
        this.setState({ text: heading })
      } else {
        this.setState({ text: `#${id.toUpperCase().replace('-', ' ')}` })
      }
    })
  }

  render() {
    const { text } = this.state
    const { id, line } = this.props

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
        <a href={`#${id}`} id={`navigation-text-${id}`}>
          {text}
        </a>
      </div>
    )
  }

  onClick = e => {
    // e.preventDefault();

    let linkId = `${e.target.id}`
    let links = document.querySelectorAll('.navigation-link-circle')

    links.forEach(link => {
      linkId === link.id
        ? $(`#${link.id}`).addClass('active')
        : $(`#${link.id}`).removeClass('active')
    })
  }
}
