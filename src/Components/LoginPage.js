import React from 'react';
import item2 from '../img/icon_item-2.png';
import item31 from '../img/icon1_item-3.png';
import item32 from '../img/icon2_item-3.png';
import item33 from '../img/icon3_item-3.png';
import item4 from '../img/icon_item-4.png';
import user1 from '../img/user1_item-5.jpg';
import user2 from '../img/user2_item-5.jpg';

class LoginPage extends React.Component {
  state = { count: 1, current: 'login' };

  Login = () => {
    return <div>Login</div>;
  };
  Cover = (counter) => {
    if (counter === 1)
      return (
        <div className='item-1'>
          <div className='item-1--heading'>AthleteGO</div>
          <div className='item-1--subhead'>
            Your one stop plan to achieve big
          </div>
        </div>
      );
    else if (counter === 2)
      return (
        <div className='item-2'>
          <div className='item-2--title'>Why Us?</div>
          <div className='item-2--icons'>
            <img className='item-2--icons' src={item2} alt='item 2 pic' />
          </div>
          <p className='item-2--p'>
            Our Site provides a very effective and effecient Diet plan for
            Athletes and people who have interest at staying fit.
          </p>
        </div>
      );
    else if (counter === 3)
      return (
        <div className='item-3'>
          <div className='item-3--title'>How We Work!</div>
          <div className='item-3--icons'>
            <img src={item31} alt='item 3 1' />
            <img src={item32} alt='item 3 2' />
            <img src={item33} alt='item 3 3' />
          </div>
          <p className='item-3--p'>
            We Provide a diet chart to our clients which is made by our expert
            dietitians.
          </p>
        </div>
      );
    else if (counter === 4)
      return (
        <div className='item-4'>
          <div className='item-4--title'>Who we are?</div>
          <div className='item-4--icons'>
            <img src={item4} alt='item 4' className='item-4--icons' />
          </div>

          <p className='item-4--p'>
            We are team of expert dietitian our ditetians has helped many
            athelets in achieivng their goals and helped them in maintaining
            their BMI by giving them best diet plan according to their food
            preferences and body needs.
          </p>
        </div>
      );
    else if (counter === 5)
      return (
        <div className='item-5'>
          <div className='item-5--title'>Our Testimonies</div>
          <div className='item-5--user-reviews'>
            <figure className='review'>
              <blockquote className='review__text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi, totam, itaque officia ex.
              </blockquote>
              <figcaption className='review__user'>
                <img src={user1} className='review__photo' alt='User 1' />
                <div className='review__user-box'>
                  <p className='review__user-name'>Nick Smith</p>
                  <p className='review__user-date'>Feb 23rd, 2021</p>
                </div>
                <div className='review__rating'>7.8</div>
              </figcaption>
            </figure>

            <figure className='review'>
              <blockquote className='review__text'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fuga
                doloremque architecto dicta animi.
              </blockquote>
              <figcaption className='review__user'>
                <img src={user2} className='review__photo' alt='User 2' />
                <div className='review__user-box'>
                  <p className='review__user-name'>Marry Thomas</p>
                  <p className='review__user-date'>Sept 1st, 2021</p>
                </div>
                <div className='review__rating'>9.3</div>
              </figcaption>
            </figure>
          </div>
        </div>
      );
  };

  renderForm = (current) => {
    console.log(current);
    if (current === 'login') {
      return (
        <div className='container__login-formlogin'>
          <form className='form'>
            <div className='form__group'>
              <input
                type='email'
                className='form__input'
                placeholder='Email'
                id='email'
                autoComplete='false'
                required={true}
              />
              <label htmlfor='email' className='form__label'>
                Email
              </label>
            </div>
            <div className='form__group'>
              <input
                type='password'
                className='form__input'
                placeholder='**********'
                id='email'
                autoComplete='false'
                required={true}
              />
              <label htmlfor='password' className='form__label'>
                Password
              </label>
            </div>
            <div className='form__group'>
              <button className='form__login-btn'>&rarr;</button>
            </div>
          </form>
        </div>
      );
    } else if (current === 'signup') {
      return (
        <div className='container__login-formsignup'>
          <form className='form'>
            <div className='form__group'>
              <input
                type='name'
                className='form__input'
                placeholder='Name'
                id='name'
                autoComplete='false'
                required={true}
              />
              <label htmlfor='email' className='form__label'>
                Name
              </label>
            </div>
            <div className='form__group'>
              <input
                type='email'
                className='form__input'
                placeholder='Email'
                id='emailReq'
                autoComplete='false'
                required={true}
              />
              <label htmlfor='email' className='form__label'>
                Email
              </label>
            </div>
            <div className='form__group'>
              <input
                type='email'
                className='form__input'
                placeholder='Confirm Email'
                id='emailConf'
                autoComplete='false'
                required={true}
              />
              <label htmlfor='email' className='form__label'>
                Confirm Email
              </label>
            </div>
            <div className='form__group'>
              <input
                type='password'
                className='form__input'
                placeholder='**********'
                id='email'
                autoComplete='false'
                required={true}
              />
              <label htmlfor='password' className='form__label'>
                Password
              </label>
            </div>

            <div className='form__group'>
              <button className='form__login-btn'>&rarr;</button>
            </div>
          </form>
        </div>
      );
    }
  };

  loginIcon = (current) => {
    if (current === 'login') return { display: 'block' };
    else return { display: 'none' };
  };

  ChangeCover = () => {
    var current = this.state.count;
    setTimeout(() => {
      current += 1;
      if (current === 6) {
        return () => clearTimeout(current);
      } else {
        this.setState({ count: current });
      }
    }, 5000);
  };

  render() {
    return (
      <div className='section__login'>
        <div className='container__login'>
          <div className='container__login-btn'>
            <button
              onClick={() => {
                this.setState({ current: 'login' });
              }}
              className={`container__login-btn--login ${
                this.state.current === 'login' ? '-active' : ''
              }`}
              style={{ fontSize: '1.2rem' }}
            >
              Login
            </button>
            <button
              className={`container__login-btn--signup ${
                this.state.current === 'signup' ? '-active' : ''
              } `}
              style={{ fontSize: '1.2rem' }}
              onClick={() => {
                this.setState({ current: 'signup' });
              }}
            >
              Signup
            </button>
          </div>
          {/* Renders current form */}
          {this.renderForm(this.state.current)}

          <div
            className='container__login-icon'
            style={this.loginIcon(this.state.current)}
          />
        </div>
        <div className='container__cover'>
          <div className='container__cover__items'>
            {this.Cover(this.state.count)}
            {this.ChangeCover()}
          </div>
          <div className='container__cover-counter'>
            <div
              className={`counter counter--1 ${
                this.state.count === 1 ? '-active' : ''
              }`}
              onClick={() => this.setState({ count: 1 })}
              style={{ cursor: 'pointer' }}
            ></div>
            <div
              className={`counter counter--2 ${
                this.state.count === 2 ? '-active' : ''
              }`}
              onClick={() => this.setState({ count: 2 })}
              style={{ cursor: 'pointer' }}
            ></div>
            <div
              className={`counter counter--3 ${
                this.state.count === 3 ? '-active' : ''
              }`}
              onClick={() => this.setState({ count: 3 })}
              style={{ cursor: 'pointer' }}
            ></div>
            <div
              className={`counter counter--4 ${
                this.state.count === 4 ? '-active' : ''
              }`}
              onClick={() => this.setState({ count: 4 })}
              style={{ cursor: 'pointer' }}
            ></div>
            <div
              className={`counter counter--5 ${
                this.state.count === 5 ? '-active' : ''
              }`}
              onClick={() => this.setState({ count: 5 })}
              style={{ cursor: 'pointer' }}
            ></div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
