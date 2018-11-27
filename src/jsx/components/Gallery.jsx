// NOTICE: importing reactn instead of react
import React, { setGlobal } from 'reactn';

// jquery
import $ from 'jquery';

// components
import Image from './Image';

/* eslint-disable space-before-function-paren */

export default class Gallery extends React.Component {
  render() {
    const { images } = this.props;

    return (
      <div className='gallery' id='gallery'>
        <div className='gallery-images'>
          {images.map((image, index) =>
            <div
              id={`gallery-img-0${index + 1}`}
              className={`${index === 0 ? 'active ' : ''}gallery-img`}
            >
              <Image {...image} />
            </div>
          )}
        </div>
        <GalleryNavigation images={images} />
      </div >
    );
  }
}

class GalleryNavigation extends React.Component {
  componentDidMount() {
    const { images } = this.props;
  }

  onClick(e) {
    let linkId = e.target.id;
    let imgId = e.target.dataset.image;

    let siblings = {
      link: Object.values($(`#${linkId}`).addClass('active').siblings()),
      img: Object.values($(`#${imgId}`).addClass('active').siblings())
    };

    siblings.link.forEach(s => $(`#${s.id}`).removeClass('active'));
    siblings.img.forEach(s => $(`#${s.id}`).removeClass('active'));
  }

  render() {
    const { images } = this.props;

    return (
      <div className='gallery-navigation'>
        {images.map((i, index) =>
          <a
            id={`gallery-img-0${index + 1}-link`}
            className={`${index === 0 ? 'active ' : ''} gallery-nav-link`}
            data-image={`gallery-img-0${index + 1}`}
            onClick={this.onClick}
          />
        )}
      </div>
    );
  }
}
