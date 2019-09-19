/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react';

function Login(props) {
  const { history } = props
  return (
    <div className="LoginWrapper" onClick={() => history.push('/app/home')}>
      login
    </div>
  );
}

export default Login;
