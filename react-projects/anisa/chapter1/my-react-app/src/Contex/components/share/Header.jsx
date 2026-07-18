import React, { useState, useContext } from 'react';
import { ThemContex } from '../../App';
import UserConytext from '../../context/UserContext';
import { Link, useLocation } from 'react-router-dom';

const Header = (props) => {
  const theme = useContext(ThemContex);
  // const {user , isLogin , isLoading , logout} = useContext(UserConytext)
  const location = useLocation()

  return (

    <UserConytext.Consumer>

      {({ user, isLogin, isLoading, logout }) => (
        <div style={{opacity:'0.8'}}>
          <div className='box header' style={props.them || theme}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <h3>Header</h3>
              <div>
                {isLoading ? (
                  'loading ...'
                ) :
                  isLogin ? (<span>{user.name}<span style={{
                    margin: '0.5rem',
                    color: 'red',
                    cursor: 'pointer'
                  }} onClick={logout}>logout</span> </span>) : (<span style={{ cursor: 'pointer' }}>
                    <Link to={'/login'} state={{ from: location.pathname }}>Login</Link>
                  </span>)}
                {/* {isLogin ? <p style={{ color: "green" }}>Hello {name}</p> : <p>pleas login</p>} */}

              </div>
            </div>
          </div>
        </div>
      )}
    </UserConytext.Consumer>
  );
};

export default Header;

// <div className='box header' style={props.them || theme}>
//   <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//     <h3>Header</h3>
//     <div>
//       <span style={{ cursor: 'pointer' }} onClick={clickHandler}>
//         Login
//       </span>
//       {isLogin ? <p style={{color : "green"}}>Hello {name}</p> : <p>pleas login</p>}

//     </div>
//   </div>
// </div>