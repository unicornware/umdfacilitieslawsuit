/* eslint-disable space-before-function-paren */

import * as React from 'react';

export default class Image extends React.Component {
  render() {
    const { url, caption, credit } = this.props;

    if (url) {
      const id = url.replace('/assets/images/', '').replace('.jpg', '');

      return (
        <figure id={id} className='section-img'>
          <img src={url} alt={caption} />
          <figcaption>
            <p
              className='caption'
              dangerouslySetInnerHTML={{ __html: caption }}
            />
            <p
              className='credit'
              dangerouslySetInnerHTML={{ __html: `Photo by ${credit}` }}
            />
          </figcaption>
        </figure>
      );
    } else {
      return null;
    }
  }
}
