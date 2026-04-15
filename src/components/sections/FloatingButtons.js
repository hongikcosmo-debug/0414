import React from 'react';

/**
 * FloatingButtons.js - 오른쪽 버튼 열
 *
 * position: sticky → 스크롤해도 화면에 보임
 * 버튼 열(bookdetail-btn-col) 안에 있어서 글씨와 절대 안 겹침
 */
function FloatingButtons({ onHome }) {

  const handleTop = () => {
    const scrollContainer = document.querySelector('.right-side');
    if (scrollContainer) {
      scrollContainer.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    // sticky: 스크롤해도 버튼이 항상 화면에 보임
    <div className="floating-btns">

      <button
        className="floating-btn floating-btn-home"
        onClick={onHome}
        title="홈으로"
      >
        <span className="floating-btn-icon">∧</span>
        <span className="floating-btn-label">HOME</span>
      </button>

      <button
        className="floating-btn floating-btn-top"
        onClick={handleTop}
        title="맨 위로"
      >
        <span className="floating-btn-icon">∧</span>
        <span className="floating-btn-label">TOP</span>
      </button>

    </div>
  );
}

export default FloatingButtons;
