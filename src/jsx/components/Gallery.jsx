/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable no-undef */
/* eslint-disable space-before-function-paren */

import * as React from 'react'

// jquery
import $ from 'jquery'

// components
import Image from './Image'

export default class Gallery extends React.Component {
  render = () => {
    const { images } = this.props

    return (
      <div className='gallery' id='gallery'>
        <div className='gallery-images'>
          {images.map((image, index) =>
            <GalleryImage image={image} index={index} key={index} />
          )}
        </div>
        <GalleryNavigation images={images} />
      </div >
    )
  }
}

class GalleryImage extends React.Component {
  render = () => {
    const { image, index } = this.props

    let id = index => `gallery-img-0${index}`

    return (
      <div
        className={`${index === 0 ? 'active ' : ''}gallery-img`}
        id={id(index + 1)}
      >
        <Image {...image} />
      </div>
    )
  }
}

class GalleryNavigation extends React.Component {
  render = () => {
    const { images } = this.props

    return (
      <div className='gallery-navigation'>
        {images.map(
          (img, i) =>
            <GalleryNavigationLink active={i === 0} index={i} key={i} />
        )}
      </div>
    )
  }
}

class GalleryNavigationLink extends React.Component {
  constructor(props) {
    super(props)
    this.state = { clicked: false }
  }

  onClick = e => {
    e.preventDefault()

    let active = {
      link: e.target.id,
      image: e.target.dataset.image
    }

    let links = document.querySelectorAll('.gallery-nav-link')
    let images = document.querySelectorAll('.gallery-img')

    links.forEach(link => {
      if (active.link === link.id) {
        $(`#${link.id}`).addClass('active')
      } else {
        $(`#${link.id}`).removeClass('active')
      }
    })

    images.forEach(image => {
      if (active.image === image.id) {
        console.log('fdf')
        $(`#${image.id}`).addClass('active')
      } else {
        $(`#${image.id}`).removeClass('active')
      }
    })
  }

  render = () => {
    const { active, index } = this.props
    const { clicked } = this.state

    let id = index => `gallery-img-0${index + 1}-link`
    let activeLink = active || clicked

    return (
      <a
        className={`${activeLink ? 'active ' : ''}gallery-nav-link`}
        data-image={`gallery-img-0${index + 1}`}
        id={id(index)}
        key={id(index)}
        onClick={this.onClick}
      />
    )
  }
}
