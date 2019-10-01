/* eslint-disable array-callback-return */
/* eslint-disable no-undef */

import * as React from 'react'

// components
import { Image } from '../atoms'
import { Gallery } from '../organisms'

export default class Section extends React.Component {
  render = () => {
    const { id, heading, content } = this.props

    return (
      <React.Fragment>
        <span className='spacer'>
          <br />
          <br />
        </span>
        <div className='section'>
          <p className='section-heading' id={id}>{heading}</p>
          <div className='section-content'>
            {content.map((c, i) => {
              if (c.p) {
                return (
                  <p
                    className='section-graf'
                    dangerouslySetInnerHTML={{ __html: c.p }}
                    key={`content-${i}`}
                  />
                )
              } else if (c.blockquote) {
                return (
                  <blockquote
                    className='section-pullquote'
                    dangerouslySetInnerHTML={{ __html: c.blockquote }}
                    key={`content-${i}`}
                  />
                )
              } else {
                if (c.img instanceof Array) {
                  return <Gallery images={c.img} key={`content-${i}`} />
                } else if (c.img instanceof Object) {
                  return <Image {...c.img} key={`content-${i}`} />
                }
              }
            })}
          </div>
        </div>
      </React.Fragment>
    )
  }
}
