import React from 'react';
import TOCNode from './TOCNode.js';
import tocData from '../../data/tocData.js';
import enterpriseNewToc from '../../data/books/enterprise-new-toc.js';
import god1Toc from '../../data/books/god-1-toc.js';

// 책 ID별 목차 데이터 매핑
const tocMap = {
  'enterprise-new': enterpriseNewToc,
  'god-1': god1Toc,
};

function TOCTree({ selectedBook, onChapterClick }) {
  // 개별 파일이 있으면 우선 사용, 없으면 기존 tocData 사용
  const toc = tocMap[selectedBook.id] || tocData[selectedBook.id];

  return (
    <div className="toc-tree">
      {/* 책 정보 헤더 */}
      <div className="toc-book-header">
        <img src={selectedBook.cover} alt={selectedBook.title} className="toc-book-cover" />
        <div className="toc-book-info">
          <p className="toc-book-title">{selectedBook.title}</p>
          <p className="toc-book-author">{selectedBook.author}</p>
        </div>
      </div>

      {/* 목차 */}
      {toc ? (
        <div className="toc-list">
          <p className="toc-section-label">목차</p>
          {toc.chapters.map((chapter) => (
            <TOCNode
              key={chapter.id}
              chapter={chapter}
              onChapterClick={onChapterClick}
            />
          ))}
        </div>
      ) : (
        <div className="toc-empty">
          <p>목차 준비 중입니다.</p>
        </div>
      )}
    </div>
  );
}

export default TOCTree;
