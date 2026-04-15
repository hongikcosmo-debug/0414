import React, { useState } from 'react';

/**
 * TOCNode.js - 목차 노드
 * 대제목 → 중간제목 → 소제목 3단계 계층 구조
 * 각 제목마다 고유 chunkIndex → 클릭 시 해당 내용으로 이동
 */
function TOCNode({ chapter, onChapterClick }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleChapterClick = () => {
    setIsOpen(prev => !prev);
    if (onChapterClick && chapter.chunkIndex !== undefined) {
      onChapterClick(chapter.chunkIndex);
    }
  };

  return (
    <div className="toc-node">
      {/* 대제목 */}
      <div
        className={`toc-chapter ${isOpen ? 'toc-chapter-open' : ''}`}
        onClick={handleChapterClick}
      >
        <span className="toc-arrow">{isOpen ? '▼' : '▶'}</span>
        <span className="toc-chapter-title">{chapter.title}</span>
      </div>

      {/* 중간제목 (sections) */}
      {isOpen && chapter.sections && chapter.sections.map((section) => (
        <TOCSectionNode
          key={section.id}
          section={section}
          onChapterClick={onChapterClick}
        />
      ))}
    </div>
  );
}

/**
 * 중간제목 노드
 */
function TOCSectionNode({ section, onChapterClick }) {
  const [isOpen, setIsOpen] = useState(false);
  const hasSubsections = section.subsections && section.subsections.length > 0;

  const handleClick = () => {
    if (hasSubsections) setIsOpen(prev => !prev);
    if (onChapterClick && section.chunkIndex !== undefined) {
      onChapterClick(section.chunkIndex);
    }
  };

  return (
    <div className="toc-section-node">
      {/* 중간제목 */}
      <div className="toc-section-item" onClick={handleClick}>
        {hasSubsections && (
          <span className="toc-section-arrow">{isOpen ? '▾' : '▸'}</span>
        )}
        <span className="toc-section-title">{section.title}</span>
      </div>

      {/* 소제목 (subsections) */}
      {isOpen && hasSubsections && section.subsections.map((sub) => (
        <div
          key={sub.id}
          className="toc-subsection-item"
          onClick={() => onChapterClick && onChapterClick(sub.chunkIndex)}
        >
          {sub.title}
        </div>
      ))}
    </div>
  );
}

export default TOCNode;
