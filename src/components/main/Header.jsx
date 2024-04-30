import React, { useState } from 'react';
import './Header.css'


const items = [
    { id: 1, name: 'Home', subItems: [] },
    { id: 2, name: 'About', subItems: [{ id: 3, name: 'About Us' }, { id: 4, name: 'Contact' }] },
    { id: 5, name: 'Services', subItems: [{ id: 6, name: 'Service A' }, { id: 7, name: 'Service B' }] },
    { id: 8, name: 'Blog', subItems: [] },
  ];

const Header = () => {
    const [activeItem, setActiveItem] = useState(null);

  return (
    <>
    {/* header 로고및 로그인 회원가입 Link 확인추가 */}

    <ul className="main-menu">
      {items.map((item) => (
        <li key={item.id} className={activeItem === item.id ? 'active' : ''}>
          <a href="#" onClick={() => setActiveItem(item.id)}>{item.name}</a>
          {item.subItems.length > 0 && (
            <ul className="sub-menu" style={{ display: activeItem === item.id ? 'block' : 'none' }}>
              {item.subItems.map((subItem) => (
                <li key={subItem.id}>
                  <a href="#">{subItem.name}</a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
    </>
  );
};


export default Header;