import React from 'react';

class LoginPage extends React.Component {
  state = { count: 1 };

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
    else if (counter === 2) return <div className='item-2'>2</div>;
    else if (counter === 3) return <div className='item-3'>3</div>;
  };

  ChangeCover = () => {
    var current = this.state.count;
    setTimeout(() => {
      current += 1;
      if (current === 4) {
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
              className='container__login-btn--login -active'
              style={{ fontSize: '1.2rem' }}
            >
              Login
            </button>
            <button
              className='container__login-btn--signup'
              style={{ fontSize: '1.2rem' }}
            >
              Signup
            </button>
          </div>
          <div className='container__login-form'>
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
          <div className='container__login-icon' />
        </div>
        <div className='container__cover'>
          <div className='container__cover__items'>
            {this.Cover(this.state.count)}
            {/* {this.ChangeCover()} */}
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
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPage;
