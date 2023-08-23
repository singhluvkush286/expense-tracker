import React from 'react'
import { styled } from 'styled-components'
import avatar from '../../img/avatar.png'
import { mmenuItems } from '../../utils/menuitems';
import { signout } from '../../utils/icons';


function Navigation() {
  return (
    <NavStyled>
        <div className='user-con'>
            <img src={avatar} alt='' />
            <div className='text'>
                <h2>Luvkush</h2>
                <p>Your Money</p>
            </div>
        </div>
        <ul className='menu-items'>
            {mmenuItems.map((item) => {
                return <li
                     key={item.id}
                     >
                        {item.icon}
                        <span>{item.title}</span>
                     </li>
            })}

        </ul>

        <div className='bottom-nav'>
            <li>
               {signout} sign  Out 
            </li>
        </div>
    </NavStyled>
  )
}

const NavStyled = styled.nav`
  
`;

export default Navigation
