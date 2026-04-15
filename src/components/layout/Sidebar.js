import React from 'react';
import TOCTree from '../sidebar/TOCTree.js';

/**
 * Sidebar.js
 * Props:
 * - isOpen         : 열림 여부
 * - selectedBook   : 선택된 책
 * - onChapterClick : 목차 클릭 시 BookDetail 해당 섹션으로 이동
 */
function Sidebar({ isOpen, selectedBook, onChapterClick }) {
  if (!isOpen) return null;

  return (
    <div className="sidebar-content">
      {!selectedBook ? (
        <div className="sidebar-default">
          <div className="sidebar-image-wrap">
            <img
              src="https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&q=80"
              alt="온라인 인문학 소개 이미지"
              className="sidebar-image"
            />
          </div>
          <div className="sidebar-intro">
            <p className="sidebar-intro-desc">
              메뉴에서 책을 선택하면<br />
              목차가 이곳에 표시됩니다.
            </p>
          </div>
        </div>
      ) : (
        <TOCTree
          selectedBook={selectedBook}
          onChapterClick={onChapterClick}
        />
      )}
    </div>
  );
}

export default Sidebar;
