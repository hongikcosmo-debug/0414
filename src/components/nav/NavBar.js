import React, { useState } from 'react';
import menuData from '../../data/menuData.js';
import NavDropdown from './NavDropdown.js';
import MegaMenu from './MegaMenu.js';

/**
 * NavBar - ☰ + 메뉴들만 (□버튼 없음, App.js 왼쪽 패널에 있음)
 */
function NavBar({ onBookClick }) {
  const [activeMenuId, setActiveMenuId] = useState(null);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);

  const handleMouseEnter = (menuId) => setActiveMenuId(menuId);
  const handleMouseLeave = () => setActiveMenuId(null);

  const handleBookClick = (book) => {
    setActiveMenuId(null);
    setIsMegaMenuOpen(false);
    onBookClick(book);
  };

  return (
    <nav className="navbar">
      <ul className="navbar-menu">

        {/* ☰ 메가메뉴 버튼 */}
        <li className="navbar-toggle-item">
          <button
            className={`navbar-mega-btn ${isMegaMenuOpen ? 'active' : ''}`}
            onClick={() => setIsMegaMenuOpen(prev => !prev)}
            title="분야보기"
          >
            &#9776;
          </button>
        </li>

        {/* 메뉴 항목들 */}
        {menuData.map((menu) => (
          <li
            key={menu.id}
            className={`navbar-item ${activeMenuId === menu.id ? 'navbar-item-active' : ''}`}
            onMouseEnter={() => handleMouseEnter(menu.id)}
            onMouseLeave={handleMouseLeave}
          >
            <span className="navbar-label">{menu.label}</span>
            {activeMenuId === menu.id && (
              <NavDropdown
                books={menu.books}
                onBookClick={handleBookClick}
                onMouseLeave={handleMouseLeave}
              />
            )}
          </li>
        ))}
      </ul>

      {isMegaMenuOpen && (
        <MegaMenu
          onClose={() => setIsMegaMenuOpen(false)}
          onBookClick={handleBookClick}
        />
      )}
    </nav>
  );
}

export default NavBar;
