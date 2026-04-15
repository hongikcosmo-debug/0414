import React from 'react';
import BookDetail from '../sections/BookDetail.js';
import FloatingButtons from '../sections/FloatingButtons.js';
import HeroSlider from '../slider/HeroSlider.js';
import KakaoBookSections from '../sections/KakaoBookSections.js';
import SearchResult from '../sections/SearchResult.js';

function MainFrame({ selectedBook, onHome, bookDetailRef, onBookClick,
  searchQuery, setSearchQuery, activeQuery, setActiveQuery  // ← 추가
}) {


  // 검색 실행
  const handleSearch = () => {
    setActiveQuery(searchQuery);
  };

  // 엔터키 검색
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  // 검색 결과에서 책 클릭 시 해당 내용으로 이동
  const handleSearchBookClick = (book, chunkIndex) => {
    onBookClick && onBookClick(book);
    setActiveQuery('');
    setSearchQuery('');
    // 약간 딜레이 후 해당 청크로 스크롤
    if (chunkIndex > 0 && bookDetailRef?.current) {
      setTimeout(() => {
        bookDetailRef.current(chunkIndex);
      }, 300);
    }
  };

  return (
    <main className="main-frame">

      {/* 검색바 */}
      <div className="main-search-wrap">
        <div className="main-search-bar">
          <select className="search-type-select">
            <option>통합검색</option>
            <option>제목</option>
            <option>저자</option>
          </select>
          <div className="search-divider" />
          <input
            type="text"
            className="main-search-input"
            placeholder="검색어를 입력하세요"
            value={searchQuery}
            onChange={e => setSearchQuery(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button className="main-search-btn" onClick={handleSearch}>
            &#128269;
          </button>
        </div>
      </div>

      {/* 검색 결과 */}
      {activeQuery ? (
        <SearchResult
          query={activeQuery}
          onBookClick={handleSearchBookClick}
        />
      ) : selectedBook ? (
        /* 책 선택: 상세페이지 */
        <div className="bookdetail-layout">
          <div className="bookdetail-content">
            <BookDetail
              selectedBook={selectedBook}
              bookDetailRef={bookDetailRef}
            />
          </div>
          <div className="bookdetail-btn-col">
            <FloatingButtons onHome={onHome} />
          </div>
        </div>
      ) : (
        /* 홈화면 */
        <>
          <HeroSlider onBookClick={onBookClick} />
          <KakaoBookSections onBookClick={onBookClick} />
        </>
      )}

    </main>
  );
}

export default MainFrame;
