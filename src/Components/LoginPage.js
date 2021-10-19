import React from 'react';

class LoginPage extends React.Component {
  state = { count: 1, dotSelect: 'counter--1' };

  Login = () => {
    return <div>Login</div>;
  };

  Selected = (select) => {
    const selected = document.querySelector(`#counter--1`);
    selected.style.backgroundColor = 'red';
  };

  Cover = (counter) => {
    if (counter === 2) return <div className='item-2'>2</div>;
    else if (counter === 3) return <div>3</div>;
    else if (counter === 1) return <div className='item-1'>1</div>;
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
                  autoComplete={false}
                  required={true}
                />
                <label for='email' className='form__label'>
                  Email
                </label>
              </div>
              <div className='form__group'>
                <input
                  type='password'
                  className='form__input'
                  placeholder='**********'
                  id='email'
                  autoComplete={false}
                  required={true}
                />
                <label for='email' className='form__label'>
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
            {/* <ul className='container__cover__items-list'>
              <li className='item-1'>HEY 1</li>
              <li className='item-2'>HEY 2</li>
              <li className='item-3'>HEY 3</li>
            </ul> */}
          </div>
          <div className='container__cover-counter'>
            <div
              className='counter counter--1'
              id='counter--1'
              onClick={() => this.setState({ count: 1 })}
              onClickCapture={
                ((e) => this.setState({ dotSelect: e.target.id }),
                this.Selected(this.state.dotSelect))
              }
              style={{ cursor: 'pointer' }}
            ></div>
            <div
              className='counter counter--2'
              id='counter--2'
              onClick={() => this.setState({ count: 2 })}
              style={{ cursor: 'pointer' }}
            ></div>
            <div
              className='counter counter--3'
              id='counter--3'
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
