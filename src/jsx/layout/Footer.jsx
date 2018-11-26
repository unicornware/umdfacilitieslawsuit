// react
import * as React from 'react';

// react router
import { NavLink, Link } from 'react-router-dom';

// test menu data
import megaMenu from '../../config/mega-menu.json';
import stayConnected from '../../config/stay-connected.json';

/* eslint-disable space-before-function-paren */
/* eslint-disable prefer-promise-reject-errors */
/* eslint-disable no-unused-vars */

/**
 * Footer class. Renders the footer The footer contains the mega menu (with
 * links to all categories), contact information, the stay connected menu, and
 * copyright.
 */
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuTypes: ['mega', 'stay-connected'],
      megaMenu: megaMenu.items,
      stayConnected: stayConnected.items
    };
  }

  /**
   * This function takes a category title as an argument and returns it
   * lowercase with spaces replaced by dashes.
   *
   * ex: Other Links will becomes other-links.
   *
   * @param {string} title category title
   * @return {string} category title lowercase with spaces replaced by dashes
   */
  getColumnId(title) {
    return `footer-column-${title.toLowerCase().replace(' ', '-')}`;
  }

  /**
   * Renders the footer. The footer contains the mega menu (with links to all
   * categories), contact information, the stay connected menu, and copyright.
   */
  render() {
    const { megaMenu, stayConnected } = this.state;

    return (
      <footer>
        <div className='container'>
          {/* categories */}
          <p className='footer-title'>Categories</p>
          <div className='categories row'>
            {
              megaMenu.map((category, index) =>
                <ul
                  className='footer-column'
                  id={this.getColumnId(category.title)}
                  key={category.title.trim().toLowerCase()}
                >
                  <NavLink to={category.url} className={category.classes}>
                    {category.title}
                  </NavLink>
                  <div className='sub-links'>
                    {category.children.map(link =>
                      <li key={link.title.trim().toLowerCase()}>
                        <FooterLink {...link} />
                      </li>
                    )}
                  </div>
                </ul>
              )
            }
          </div>
          <hr class='horizontalrule' />
          {/* contact info */}
          <div className='contact'>
            <p className='title-link'>
              Contact Us
            </p>
            <address>
              3150 South Campus Dining Hall<br />
              University of Maryland<br />
              College Park, MD 20742<br />
            </address>
            <br />

            <p className='contact-phone'>
              <span>Newsroom</span>:{' '}
              <Link to='tel:+3013148200'>301-314-8200</Link><br />
              <span className='hours'>
                (4:30 p.m. to midnight, Sundays through Thursdays)
              </span>
            </p>

            <p className='contact-phone'>
              <span>Advertising</span>:{' '}
              <Link to='tel:+3013148000'>301-314-8000</Link><br />
              <span className='hours'>
                (normal business hours, Mondays through Fridays)
              </span>
            </p>
          </div>

          {/* social links and copyright */}
          <div className='stay-connected-copyright row'>
            <div className='stay-connected'>
              <p>Stay Connected</p>
              {stayConnected.map(link => <FooterLink {...link} />)}
            </div>

            <Link
              to='http://www.dbknews.com/'
              className='copyright'>
              &copy; 2018 The Diamondback
            </Link>
          </div>
        </div>
      </footer>
    );
  }
}

/**
 * Footer link class. Renders a footer link. Footer links, with the exception of
 * telephone links, are black. On hover, they are black and bold.
 *
 * @param {object} props link properties - url, classes, and title
 * @return {Link} footer link
 */
const FooterLink = (props) => {
  return (
    <Link to={props.url} className={props.classes}>{props.title}</Link>
  );
};
