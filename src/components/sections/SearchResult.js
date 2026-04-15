import React, { useMemo } from 'react';

// 모든 책 데이터 import
import booksData from '../../data/booksData.js';
import enterpriseNew from '../../data/books/enterprise-new.js';
import god1 from '../../data/books/god-1.js';

// 검색 대상 책 목록
const allBooks = {
  ...booksData,
  'enterprise-new': enterpriseNew,
  'god-1': god1,
};

// 검색어 주변 텍스트 미리보기 생성
const getPreview = (text, words) => {
  const firstWord = words.find(w => text.toLowerCase().includes(w.toLowerCase()));
  if (!firstWord) return text.slice(0, 200) + '...';
  const idx = text.toLowerCase().indexOf(firstWord.toLowerCase());
  const start = Math.max(0, idx - 80);
  const end = Math.min(text.length, idx + 120);
  return (start > 0 ? '...' : '') + text.slice(start, end) + (end < text.length ? '...' : '');
};

/**
 * 텍스트에서 검색어 하이라이트
 */
function HighlightText({ text, words }) {
  if (!text || !words.length) return <span>{text}</span>;

  const pattern = new RegExp(`(${words.map(w => w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|')})`, 'gi');
  const parts = text.split(pattern);

  return (
    <span>
      {parts.map((part, i) =>
        words.some(w => part.toLowerCase() === w.toLowerCase())
          ? <mark key={i} className="search-highlight">{part}</mark>
          : <span key={i}>{part}</span>
      )}
    </span>
  );
}

/**
 * 누락된 검색어 표시 (구글 스타일)
 */
function MissingWords({ missing }) {
  if (!missing.length) return null;
  return (
    <div className="search-missing">
      <span className="search-missing-label">누락된 검색어: </span>
      {missing.map((w, i) => (
        <span key={i}>
          <s className="search-missing-word">{w}</s>
          <span className="search-missing-required"> | 필수 포함 항목: {w}</span>
          {i < missing.length - 1 && ' '}
        </span>
      ))}
    </div>
  );
}

/**
 * 검색 결과 컴포넌트
 */
function SearchResult({ query, onBookClick }) {
  const words = useMemo(() =>
    query.trim().split(/\s+/).filter(Boolean),
    [query]
  );

  const results = useMemo(() => {
    if (!words.length) return [];

    const found = [];

    Object.values(allBooks).forEach(book => {
      if (!book || !book.previewChunks) return;

      book.previewChunks.forEach((chunk, idx) => {
        const text = chunk.toLowerCase();

        const foundWords = words.filter(w => text.includes(w.toLowerCase()));
        const missingWords = words.filter(w => !text.includes(w.toLowerCase()));

        // 하나도 없으면 제외
        if (foundWords.length === 0) return;

        // 검색어 주변 텍스트로 미리보기
        const preview = getPreview(chunk, foundWords);

        found.push({
          bookId: book.id,
          bookTitle: book.title,
          bookCover: book.cover,
          bookAuthor: book.author,
          chunkIndex: idx + 1,
          preview,
          foundWords,
          missingWords,
          score: foundWords.length,
        });
      });

      // intro도 검색
      if (book.intro) {
        const text = book.intro.toLowerCase();
        const foundWords = words.filter(w => text.includes(w.toLowerCase()));
        const missingWords = words.filter(w => !text.includes(w.toLowerCase()));

        if (foundWords.length > 0) {
          found.push({
            bookId: book.id,
            bookTitle: book.title,
            bookCover: book.cover,
            bookAuthor: book.author,
            chunkIndex: 0,
            preview: getPreview(book.intro, foundWords),
            foundWords,
            missingWords,
            score: foundWords.length,
          });
        }
      }
    });

    return found.sort((a, b) => b.score - a.score);
  }, [words]);

  if (!query.trim()) return null;

  return (
    <div className="search-result-wrap">
      <div className="search-result-header">
        <span className="search-result-query">"{query}"</span>
        <span className="search-result-count"> 검색 결과 {results.length}건</span>
      </div>

      {results.length === 0 ? (
        <div className="search-result-empty">
          <p>검색 결과가 없습니다.</p>
          <p className="search-result-empty-sub">다른 검색어를 입력해보세요.</p>
        </div>
      ) : (
        <div className="search-result-list">
          {results.map((item, i) => (
            <div
              key={i}
              className="search-result-item"
              onClick={() => onBookClick && onBookClick({
                id: item.bookId,
                title: item.bookTitle,
                author: item.bookAuthor,
                cover: item.bookCover,
              }, item.chunkIndex)}
            >
              <div className="search-result-book-info">
                <img
                  src={item.bookCover}
                  alt={item.bookTitle}
                  className="search-result-cover"
                />
                <div>
                  <p className="search-result-book-title">{item.bookTitle}</p>
                  <p className="search-result-book-author">{item.bookAuthor}</p>
                </div>
              </div>

              {item.missingWords.length > 0 && (
                <MissingWords missing={item.missingWords} />
              )}

              <p className="search-result-preview">
                <HighlightText text={item.preview} words={item.foundWords} />
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SearchResult;