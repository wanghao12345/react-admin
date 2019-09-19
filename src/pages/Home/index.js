/**
 * Created by wanghao on 2019/9/14
 */
import React from 'react';

function Home(props) {
  return (
    <div className="HomeWrapper" onClick={() => props.history.push('/login')}>
      home
    </div>
  );
}

export default Home;
