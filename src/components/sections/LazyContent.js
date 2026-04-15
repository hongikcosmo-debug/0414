import React, { useState, useEffect, useRef } from 'react';

/**
 * LazyContent.js - 화면에 보일 때만 렌더링하는 컴포넌트
 *
 * 동작:
 * - IntersectionObserver로 화면 진입 감지
 * - 화면에 보이면 → 실제 콘텐츠 렌더링
 * - 화면 밖이면 → 높이만 유지하는 빈 div (placeholder)
 *
 * Props:
 * - children  : 렌더링할 콘텐츠
 * - minHeight : placeholder 높이 (기본 200px)
 */
function LazyContent({ children, minHeight = 200 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 화면에 보이면 콘텐츠 로드
            setIsVisible(true);
            // 한 번 로드되면 더 이상 관찰 불필요
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '200px', // 화면 200px 전에 미리 로드
        threshold: 0,
      }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} style={{ minHeight: isVisible ? 'auto' : `${minHeight}px` }}>
      {isVisible ? children : (
        // placeholder: 높이만 유지, 로딩 표시
        <div style={{
          height: `${minHeight}px`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#ccc',
          fontSize: '13px',
        }}>
          로딩 중...
        </div>
      )}
    </div>
  );
}

export default LazyContent;
