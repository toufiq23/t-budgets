import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';

export const LoginPage = ({ startLogin }) => (
  <div className="box-layout">
    <div className="box-layout__box">
		<img id="tcup" src='/images/t-cup.jpeg'/>
      <h1 className="box-layout__title">T-Budgets App</h1>
      <p className="intro">This is a budgeting app. In this app you can record your expenses in our database and then access it by logging in and logging out. Thanks for joining our vast database.</p>
      <button className="button" onClick={startLogin}>Login with Google</button>
    </div>
		<div>
			<h2>Made by M Toufiq ELAHI</h2>
			<img className="portrait" src="/images/me.jpg" />
		</div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  startLogin: () => dispatch(startLogin())
});

export default connect(undefined, mapDispatchToProps)(LoginPage);
