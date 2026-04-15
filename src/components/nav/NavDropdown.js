import React from 'react';

/**
 * NavDropdown.js - 메뉴 호버 시 나타나는 드롭다운
 *
 * Props:
 * - books        {array}    : 하위메뉴 책 목록 (menuData의 books 배열)
 * - onBookClick  {function} : 책 클릭 시 호출 → App.js의 selectedBook 업데이트
 * - onMouseLeave {function} : 드롭다운 영역 마우스 떠날 때 → 드롭다운 닫힘
 *
 * 동작:
 * - 부모(NavBar)에서 isOpen=true일 때 렌더링
 * - 책 클릭 → onBookClick(book) 호출 → 사이드바에 목차 표시 (3단계)
 */
function NavDropdown({ books, onBookClick, onMouseLeave }) {
  return (
    // 드롭다운 컨테이너: 절대 위치로 메뉴 아래에 표시
    <div
      className="nav-dropdown"
      onMouseLeave={onMouseLeave}  // 마우스가 드롭다운을 벗어나면 닫힘
    >
      {/* 책 목록을 그리드로 표시 */}
      <ul className="nav-dropdown-list">
        {books.map((book) => (
          <li
            key={book.id}
            className="nav-dropdown-item"
            onClick={() => onBookClick(book)}  // 책 클릭 → 사이드바에 목차 표시
          >
            {/* 책 표지 이미지 */}
            <img
              src={book.cover}
              alt={book.title}
              className="nav-dropdown-cover"
            />
            {/* 책 제목 + 저자 */}
            <div className="nav-dropdown-info">
              <span className="nav-dropdown-title">{book.title}</span>
              <span className="nav-dropdown-author">{book.author}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavDropdown;
