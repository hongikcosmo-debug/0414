import React from 'react';
import menuData from '../../data/menuData.js';

/**
 * MegaMenu.js - ☰ 클릭 시 나타나는 드롭다운 메뉴
 * - 다른 메뉴 호버 드롭다운과 동일한 스타일
 * - 단, 클릭으로 열림/닫힘
 * - 내용: 모든 카테고리 + 책 목록을 그리드로 표시
 */
function MegaMenu({ onClose, onBookClick }) {
  return (
    <>
      {/* 외부 클릭 시 닫기용 투명 오버레이 */}
      <div className="megamenu-overlay" onClick={onClose} />

      {/* 드롭다운 본체: 다른 메뉴 드롭다운과 동일한 스타일 */}
      <div className="megamenu-dropdown">

        {/* 카테고리 그리드 */}
        <div className="megamenu-grid">
          {menuData.map((menu) => (
            <div key={menu.id} className="megamenu-category">

              {/* 카테고리 제목 */}
              <p className="megamenu-category-title">{menu.label}</p>

              {/* 책 목록 */}
              <ul className="megamenu-book-list">
                {menu.books.map((book) => (
                  <li
                    key={book.id}
                    className="megamenu-book-item"
                    onClick={() => { onBookClick(book); onClose(); }}
                  >
                    {book.title}
                  </li>
                ))}
              </ul>

            </div>
          ))}
        </div>

      </div>
    </>
  );
}

export default MegaMenu;
