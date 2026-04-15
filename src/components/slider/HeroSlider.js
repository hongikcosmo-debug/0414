import React, { useState, useEffect, useCallback } from 'react';

/**
 * HeroSlider.js - 메인 슬라이더
 *
 * - 5개 슬라이드 (추후 sliderData 배열에 추가만 하면 됨)
 * - 3초마다 자동 전환
 * - 이전/다음 버튼
 * - 인디케이터 (●○○)
 * - 책 클릭 시 상세페이지로 이동
 */

// ── 슬라이드 데이터 (추후 여기에만 추가하면 됨) ──────────
const sliderData = [
  {
    id: 'god-1',
    menu: '신',
    title: '이병철회장의 24가지 질문',
    author: '이병철',
    publisher: 'hongethos',
    cover: 'img/24question.png',
    desc: '삼성그룹 창업자 이병철 회장이 생의 마지막에 던진 24가지 신에 관한 질문',
    bgColor: '#1a3a5c',
  },
  {
    id: 'enterprise-new',
    menu: '기업',
    title: '신입사원을 위한 직장생활 지침서',
    author: '황순임, 안국빈 외',
    publisher: 'hongethos',
    cover: 'img/company_employee.png',
    desc: '신입사원 & 사회 초년생들을 위한 직장생활 필독서',
    bgColor: '#1a4a3a',
  },
  {
    id: 'enterprise-labor',
    menu: '기업',
    title: '노동개혁',
    author: '이병철',
    publisher: 'hongethos',
    cover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189546533.jpg',
    desc: '새로운 시대를 위한 노동의 본질과 개혁 방향을 탐구한 책',
    bgColor: '#3a1a1a',
  },
  {
    id: 'nation-politics',
    menu: '국가',
    title: '정치개혁',
    author: '이병철',
    publisher: 'hongethos',
    cover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189546526.jpg',
    desc: '현대 정치의 문제점과 진정한 개혁의 방향을 제시하는 책',
    bgColor: '#1a1a4a',
  },
  {
    id: 'family-1',
    menu: '가족',
    title: '가족의 재발견',
    author: '전민재',
    publisher: '작가와',
    cover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/480D241108120.jpg',
    desc: '정법강의 기반, 현대사회 가족관계의 위기와 해결',
    bgColor: '#3a2a1a',
  },
];

function HeroSlider({ onBookClick }) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // 다음 슬라이드
  const nextSlide = useCallback(() => {
    setCurrent(prev => (prev + 1) % sliderData.length);
  }, []);

  // 이전 슬라이드
  const prevSlide = () => {
    setCurrent(prev => (prev - 1 + sliderData.length) % sliderData.length);
  };

  // 2초 자동 전환
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(nextSlide, 2000);
    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const slide = sliderData[current];

  return (
    <div
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* 배경 */}
      <div
        className="hero-slider-bg"
        style={{ backgroundColor: slide.bgColor }}
      />

      {/* 메뉴 태그 */}
      {/*<div className="hero-slider-menu-tag">{slide.menu}</div>*/}

      {/* 콘텐츠 */}
      <div className="hero-slider-content">

        {/* 책 표지 */}
        <div
          className="hero-slider-cover-wrap"
          onClick={() => onBookClick && onBookClick({ id: slide.id, title: slide.title, author: slide.author, cover: slide.cover })}
        >
          <img
            src={slide.cover}
            alt={slide.title}
            className="hero-slider-cover"
          />
        </div>

        {/* 책 정보 */}
        <div className="hero-slider-info">
          <p className="hero-slider-author">{slide.author} · {slide.publisher}</p>
          <h2
            className="hero-slider-title"
            onClick={() => onBookClick && onBookClick({ id: slide.id, title: slide.title, author: slide.author, cover: slide.cover })}
          >
            {slide.title}
          </h2>
          <p className="hero-slider-desc">{slide.desc}</p>
          <button
            className="hero-slider-btn"
            onClick={() => onBookClick && onBookClick({ id: slide.id, title: slide.title, author: slide.author, cover: slide.cover })}
          >
            자세히 보기 →
          </button>
        </div>

      </div>

      {/* 이전/다음 버튼 */}
      <button className="hero-slider-prev" onClick={prevSlide}>&#10094;</button>
      <button className="hero-slider-next" onClick={nextSlide}>&#10095;</button>

      {/* 인디케이터 */}
      <div className="hero-slider-indicators">
        {sliderData.map((_, idx) => (
          <button
            key={idx}
            className={`hero-slider-dot ${idx === current ? 'hero-slider-dot-active' : ''}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>

    </div>
  );
}

export default HeroSlider;
