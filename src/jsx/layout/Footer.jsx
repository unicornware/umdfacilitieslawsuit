// react
import * as React from 'react';

// react router
import { NavLink, Link } from 'react-router-dom';

// test menu data
import footerMenu from '../../data/footer.json';
import stayConnected from '../../data/stay-connected.json';

/* eslint-disable space-before-function-paren */

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
      footerMenu: footerMenu.items,
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
    const { footerMenu, stayConnected } = this.state;

    return (
      <footer>
        <div className='container'>

          <p className='footer-title'>Enjoyed this story? Keep reading.</p>

          {/* categories */}
          <div className='categories'>
            {
              footerMenu.map((category, index) =>
                <ul
                  className='footer-column'
                  id={this.getColumnId(category.title)}
                  key={category.title.trim().toLowerCase()}
                >
                  <NavLink to={category.url} className={category.classes}>
                    {category.title}
                  </NavLink>
                  <React.Fragment>
                    {category.children.map(link =>
                      <li key={link.title.trim().toLowerCase()}>
                        <FooterLink {...link} />
                      </li>
                    )}
                  </React.Fragment>
                </ul>
              )
            }
          </div>

          {/* contact info */}
          <div className='contact'>
            <p className='contact-title-link'>
              Contact Us
            </p>

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

            <div className='copyright'>
              <Link
                to='http://www.dbknews.com/'
                className='copyright-lab'>
                &copy; 2018 The Diamondback
              </Link>

              <span className='copyright-lex'>
                Designed and Developed by&nbsp;
                <Link
                  to='http://lexusdrumgold.com/'
                >
                  Lexus Drumgold
                </Link>
              </span>
            </div>
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
