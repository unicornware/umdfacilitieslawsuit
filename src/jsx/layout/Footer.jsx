/* eslint-disable space-before-function-paren */
/* eslint-disable camelcase */

// react
import * as React from 'react';

// react router
import { NavLink, Link } from 'react-router-dom';

// footer data
import footerMenu from '../../data/footer.json';
import stayConnected from '../../data/stay-connected.json';

/**
 * Footer class. Renders the footer The footer contains the mega menu (with
 * links to all categories), contact information, the stay connected menu, and
 * copyright.
 */
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerMenu: footerMenu.items,
      stayConnected: stayConnected.items
    };
  }

  componentDidMount() {
    const { footerMenu, stayConnected } = this.state;

    this.setState({
      footerMenu: this._sanitize(footerMenu),
      stayConnected: this._sanitize(stayConnected)
    });
  }

  /**
   * Renders the footer. The footer contains the mega menu (with links to all
   * categories), contact information, the stay connected menu, and copyright.
   */
  render() {
    const { footerMenu, stayConnected } = this.state;

    return (
      <footer className='sticky'>
        <div className='container'>
          <p className='footer-title'>Enjoyed this story? Keep reading.</p>

          {/* categories */}
          <div className='categories'>
            {
              footerMenu.map((category, index) =>
                <FooterColumn
                  {...category}
                  key={`footer-column-${category.id}`}
                />
              )
            }
          </div>

          {/* contact info */}
          <div className='contact-editors'>
            <div className='contact'>
              <p className='contact-title-link'>
                Contact Us
              </p>

              <dl className='contact-phone'>
                <dt>
                  <span>Newsroom</span>:{' '}
                  <Link to='tel:+3013148200'>301-314-8200</Link><br />
                </dt>
                <dd className='hours'>
                  (4:30 p.m. to midnight, Sundays through Thursdays)
                </dd>
              </dl>

              <dl className='contact-phone'>
                <dt>
                  <span>Advertising</span>:{' '}
                  <Link to='tel:+3013148000'>301-314-8000</Link><br />
                </dt>
                <dd>
                  <span className='hours'>
                    (normal business hours, Mondays through Fridays)
                  </span>
                </dd>
              </dl>
            </div>

            <div className='editors'>
              <span>Editors</span>

              <dl>
                <dt><span>Project Editor</span></dt>
                <dd>Christine Condon</dd>
              </dl>

              <dl>
                <dt><span>Copy Editors</span></dt>
                <dd>Jillian Atelsek, Daisy Grant, Arya Hodjat, Ryan Romano, Leah Brennan</dd>
              </dl>
            </div>
          </div>

          {/* social links and copyright */}
          <div className='stay-connected-copyright row'>
            <div className='stay-connected'>
              <p>Stay Connected</p>
              {stayConnected.map((link, i) => <FooterLink {...link} key={i} />)}
            </div>

            <div className='copyright'>
              <a
                href='http://www.dbknews.com/'
                target='_blank'
                rel='noopener noreferrer'
                className='copyright-lab'>
                &copy; 2018 The Diamondback
              </a>

              <a
                href='https://lexusdrumgold.design/'
                target='_blank'
                rel='noopener noreferrer'
                className='copyright-lex'
              >
                Designed and Developed by Lexus Drumgold
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
  }

  /**
   * This function takes an array of objects and santizes them - objects in this
   * array will definitely have an id, order, title, url, classes, and  children
   * property.
   *
* @param {object[]} arr array of objects to sanitize
* @return {object[]} array of sanitized objects.
    */
  _sanitize(arr) {
    // build sanitized url
    // urls shouldn't include /category or /category/other-links
    let sanitizied_url = object => {
      const { parent, title, url } = object;

      let sanitized = parent === 84
        ? title === 'GoCollegePark'
          ? 'http://gocollegepark.com/'
          : url.replace('/category/other-links', '')
        : url.replace('/category', '');

      sanitized = sanitized.substring(0, sanitized.length - 1);

      if (title !== 'GoCollegePark') {
        sanitized = `http://dbknews.com${sanitized}`;
      }

      return sanitized;
    };

    // build sanitized object
    let sanitized_object = object => {
      return {
        id: object.id,
        order: object.order,
        parent: object.parent,
        title: object.title,
        url: sanitizied_url(object),
        classes: object.classes,
        children: object.children ? this._sanitize(object.children) : null
      };
    };

    // return array of sanitized objects
    return arr.map(object => sanitized_object(object));
  }
}

/**
 * Footer column class. Renders a footer column. Category titles are red links,
 * with the list items being black and on hover turn red.
 *
 * @param {object} props column properties - id, url, classes, title, children
 * @return {HTMLUListElement} footer column
        */
const FooterColumn = (props) => {
  return (
    <ul
      className='footer-column'
      id={`footer-column-${props.id}`}
      key={`footer-column-${props.id}`}
    >
      <NavLink to={props.url} className={props.classes}>
        {props.title}
      </NavLink>
      <React.Fragment>
        {props.children.map(link =>
          <li
            id={`footer-link-${link.id}`}
            key={`footer-link-${link.id}`}
          >
            <FooterLink {...link} />
          </li>
        )}
      </React.Fragment>
    </ul>
  );
};

/**
 * Footer link class. Renders a footer link. Footer links, with the exception of
 * telephone links, are black. On hover, they are black and bold.
 *
* @param {object} props link properties - url, classes, and title
* @return {HTMLAnchorElement} footer link
  */
const FooterLink = (props) => {
  return (
    <a href={props.url} className={props.classes} target='_blank'>
      {props.title}
    </a>
  );
};
