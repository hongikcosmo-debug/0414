import React, { useState, useEffect } from 'react';

/**
 * KakaoBookSections.js - 카카오 책 검색 API 연동
 *
 * 섹션:
 * 1. HOT BOOK - 베스트셀러
 * 2. 이번 주 신작 - 최신순
 * 3. 21세기 최고의 책 - 인문학 키워드 검색
 */

const KAKAO_API_KEY = import.meta.env.VITE_KAKAO_API_KEY;
//const BASE_URL = 'https://dapi.kakao.com/v3/search/book';
const BASE_URL = '/api/books';

/* 카카오 책 검색 함수
const fetchBooks = async (params) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}?${query}`, {
    headers: { Authorization: `KakaoAK ${KAKAO_API_KEY}` },
  });
  if (!res.ok) throw new Error('API 오류');
  const data = await res.json();
  return data.documents || [];
};
*/

const fetchBooks = async (params) => {
  const query = new URLSearchParams(params).toString();
  const res = await fetch(`${BASE_URL}?${query}`);
  if (!res.ok) throw new Error('API 오류');
  const data = await res.json();
  return data.documents || [];
};

// ── 책 카드 컴포넌트 ──────────────────────────────────
function BookCard({ book, onClick }) {
  return (
    <div className="kakao-book-card" onClick={() => onClick && onClick(book)}>
      <div className="kakao-book-cover-wrap">
        {book.thumbnail ? (
          <img src={book.thumbnail} alt={book.title} className="kakao-book-cover" />
        ) : (
          <div className="kakao-book-cover-empty">📚</div>
        )}
      </div>
      <div className="kakao-book-info">
        <p className="kakao-book-title">{book.title}</p>
        <p className="kakao-book-author">{book.authors?.join(', ')}</p>
        <p className="kakao-book-publisher">{book.publisher}</p>
        {book.sale_price > 0 && (
          <p className="kakao-book-price">{book.sale_price.toLocaleString()}원</p>
        )}
      </div>
    </div>
  );
}

// ── HOT BOOK 섹션 ─────────────────────────────────────
function HotBookSection({ onBookClick }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks({ query: '베스트셀러', sort: 'accuracy', size: 6 })
      .then(setBooks)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="kakao-section">
      <h2 className="kakao-section-title">🔥 HOT BOOK</h2>
      {loading ? (
        <div className="kakao-loading">로딩 중...</div>
      ) : (
        <div className="kakao-book-grid">
          {books.map((book, i) => (
            <BookCard key={i} book={book} onClick={onBookClick} />
          ))}
        </div>
      )}
    </section>
  );
}

// ── 이번 주 신작 섹션 ─────────────────────────────────
function NewBookSection({ onBookClick }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBooks({ query: '인문학', sort: 'latest', size: 6 })
      .then(setBooks)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="kakao-section">
      <h2 className="kakao-section-title">🆕 이번 주 신작</h2>
      {loading ? (
        <div className="kakao-loading">로딩 중...</div>
      ) : (
        <div className="kakao-book-grid">
          {books.map((book, i) => (
            <BookCard key={i} book={book} onClick={onBookClick} />
          ))}
        </div>
      )}
    </section>
  );
}

// ── 21세기 최고의 책 섹션 ─────────────────────────────
function BestBookSection({ onBookClick }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //fetchBooks({ query: '21세기 고전 필독서', sort: 'accuracy', size: 6 })
    // 수정 후 (아래 중 하나 시도)
    fetchBooks({ query: '고전', sort: 'accuracy', size: 6 })
    // 또는
    fetchBooks({ query: '인문학 필독서', sort: 'accuracy', size: 6 })
    // 또는
    fetchBooks({ query: '세계 명작', sort: 'accuracy', size: 6 })
      .then(setBooks)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="kakao-section">
      <h2 className="kakao-section-title">🏆 21세기 최고의 책</h2>
      {loading ? (
        <div className="kakao-loading">로딩 중...</div>
      ) : (
        <div className="kakao-book-grid">
          {books.map((book, i) => (
            <BookCard key={i} book={book} onClick={onBookClick} />
          ))}
        </div>
      )}
    </section>
  );
}

// ── 인기 검색어 섹션 ──────────────────────────────────
function PopularKeywords({ onSearch }) {
  const keywords = [
    '인문학', '철학', '자기계발', '경제경영',
    '역사', '과학', '사회', '심리학',
  ];

  return (
    <section className="kakao-section">
      <h2 className="kakao-section-title">🔍 인기 검색어</h2>
      <div className="kakao-keywords">
        {keywords.map((kw, i) => (
          <button
            key={i}
            className="kakao-keyword-btn"
            onClick={() => onSearch && onSearch(kw)}
          >
            {i + 1}. {kw}
          </button>
        ))}
      </div>
    </section>
  );
}

// ── 검색 결과 섹션 ────────────────────────────────────
function SearchResultSection({ keyword, onBookClick }) {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!keyword) return;
    setLoading(true);
    fetchBooks({ query: keyword, sort: 'accuracy', size: 6 })
      .then(setBooks)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [keyword]);

  if (!keyword) return null;

  return (
    <section className="kakao-section">
      {/* <h2 className="kakao-section-title">🔎 "{keyword}" 검색 결과</h2> */}
      {loading ? (
        <div className="kakao-loading">로딩 중...</div>
      ) : (
        <div className="kakao-book-grid">
          {books.map((book, i) => (
            <BookCard key={i} book={book} onClick={onBookClick} />
          ))}
        </div>
      )}
    </section>
  );
}

// ── 메인 컴포넌트 ─────────────────────────────────────
function KakaoBookSections({ onBookClick }) {
  const [searchKeyword, setSearchKeyword] = useState('인문학');

  // 카카오 책 클릭 시 외부 링크로 이동
  const handleBookClick = (book) => {
    if (book.url) {
      window.open(book.url, '_blank');
    }
  };

  return (
    <div className="kakao-sections-wrap">
      <HotBookSection onBookClick={handleBookClick} />
      <PopularKeywords onSearch={setSearchKeyword} />
      {searchKeyword && (
        <SearchResultSection keyword={searchKeyword} onBookClick={handleBookClick} />
      )}
      <NewBookSection onBookClick={handleBookClick} />
      <BestBookSection onBookClick={handleBookClick} />
    </div>
  );
}

export default KakaoBookSections;
