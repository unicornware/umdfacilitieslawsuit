// NOTICE: importing reactn instead of react
import React, { setGlobal } from 'reactn';

// components
import Gallery from './Gallery';
import Image from './Image';

/* eslint-disable space-before-function-paren */

export default class Section extends React.Component {
  render() {
    const { id, heading, content } = this.props;

    return (
      <React.Fragment>
        <span id={id} className='spacer'>
          <br />
          <br />
        </span>
        <div className='section' >
          <p className='section-heading'>{heading}</p>
          <div className='section-content'>
            {content.map((c, i) => {
              if (c.p) {
                return (
                  <p
                    className='section-graf'
                    dangerouslySetInnerHTML={{ __html: c.p }}
                    key={`content-${i}`}
                  />
                );
              } else if (c.img) {
                if (c.img instanceof Array) {
                  return <Gallery images={c.img} key={`content-${i}`} />;
                } else if (c.img instanceof Object) {
                  return <Image {...c.img} key={`content-${i}`} />;
                }
              }
            })}
          </div>
          <div className='section-divider'>
            {/* empty for now */}
          </div>
        </div>
      </React.Fragment>
    );
  }
}
