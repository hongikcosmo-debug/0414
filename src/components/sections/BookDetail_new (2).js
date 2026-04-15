import React, { useState, useRef, useEffect, useCallback } from 'react';
import LazyContent from './LazyContent.js';
import booksData from '../../data/booksData.js';
import enterpriseNew from '../../data/books/enterprise-new.js';
import god1 from '../../data/books/god-1.js';

// 개별 파일 우선 사용
const bookDataMap = {
  'enterprise-new': enterpriseNew,
  'god-1': god1,
};

// 줄 종류 판별 함수
const getLineClass = (line) => {
  if (!line.trim()) return 'chunk-body';
  if (/^[ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩ]/.test(line)) return 'chunk-title-1';
  if (/^\d+\./.test(line.trim())) return 'chunk-title-2';
  if (/^\d+\)/.test(line.trim())) return 'chunk-title-3';
  return 'chunk-body';
};

// 줄 렌더링 - [IMG:경로|캡션] 마커 지원   <==여기추가
const renderLine = (line, i) => {
  const imgMatch = line.match(/^\[IMG:([^\|]+)\|?([^\]]*)\]$/);
  if (imgMatch) {
    const [, src, caption] = imgMatch;
    return (
      <span key={i} className="chunk-img-wrap">
        <img src={src} alt={caption} className="chunk-img" />
        {caption && <span className="chunk-img-caption">{caption}</span>}
      </span>
    );
  }
  return <span key={i} className={getLineClass(line)}>{line}<br /></span>;
};

function BookDetail({ selectedBook, bookDetailRef }) {
  const book = bookDataMap[selectedBook.id] || booksData[selectedBook.id];

  const [activeTab, setActiveTab] = useState('소개');
  const [isTocOpen, setIsTocOpen] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  const [forceLoad, setForceLoad] = useState(0);

  // 리뷰 state
  const [userReviews, setUserReviews] = useState(() => {
    try {
      const saved = localStorage.getItem(`reviews_${selectedBook.id}`);
      return saved ? JSON.parse(saved) : [];
    } catch { return []; }
  });
  const [reviewText, setReviewText] = useState('');
  const [reviewRating, setReviewRating] = useState(5);
  const [reviewTag, setReviewTag] = useState('추천해요');

  // 책 바뀌면 리뷰 다시 로드
  useEffect(() => {
    try {
      const saved = localStorage.getItem(`reviews_${selectedBook.id}`);
      setUserReviews(saved ? JSON.parse(saved) : []);
    } catch { setUserReviews([]); }
  }, [selectedBook.id]);

  // 리뷰 저장
  const saveReviews = (reviews) => {
    localStorage.setItem(`reviews_${selectedBook.id}`, JSON.stringify(reviews));
    setUserReviews(reviews);
  };

  // 리뷰 등록
  const handleReviewSubmit = () => {
    if (!reviewText.trim()) return alert('리뷰 내용을 입력해주세요.');
    const newReview = {
      id: `user_${Date.now()}`,
      user: '나',
      date: new Date().toLocaleDateString('ko-KR').replace(/\. /g, '.').replace('.', ''),
      rating: reviewRating,
      tag: reviewTag,
      content: reviewText.trim(),
      type: '작성자',
      isOwn: true,
    };
    saveReviews([newReview, ...userReviews]);
    setReviewText('');
  };

  // 리뷰 삭제
  const handleReviewDelete = (id) => {
    if (!window.confirm('리뷰를 삭제하시겠습니까?')) return;
    saveReviews(userReviews.filter(r => r.id !== id));
  };

  const introRef   = useRef(null);
  const tocRef     = useRef(null);
  const previewRef = useRef(null);
  const chunkRefs  = useRef([]);
  const isTabClicking = useRef(false);
  const prevTab = useRef('소개');
  const pendingChunkIndex = useRef(null);

  // 스크롤 함수
  const scrollToRef = useCallback((target) => {
    const scrollContainer = document.querySelector('.right-side');
    if (!scrollContainer || !target?.current) return;
    const containerTop = scrollContainer.getBoundingClientRect().top;
    const targetTop = target.current.getBoundingClientRect().top;
    const scrollTarget = scrollContainer.scrollTop + (targetTop - containerTop) - 53;
    scrollContainer.scrollTo({ top: scrollTarget, behavior: 'smooth' });
  }, []);

  // 탭 클릭
  const handleTabClick = (tab) => {
    prevTab.current = activeTab;
    setActiveTab(tab);

    // ← 이 줄 추가: 책속으로 탭 클릭 시 접힌 상태로 초기화
    if (tab === '책속으로') setIsPreviewOpen(false);

    isTabClicking.current = true;
    setTimeout(() => { isTabClicking.current = false; }, 1000);

    if (tab === '리뷰') return;

    const refMap = {
      '소개':    introRef,
      '목차':    tocRef,
      '책속으로': previewRef,
    };

    if (prevTab.current === '리뷰') {
      setTimeout(() => scrollToRef(refMap[tab]), 50);
    } else {
      scrollToRef(refMap[tab]);
    }
  };

  // 목차 클릭 → forceLoad 후 pendingChunkIndex 저장
const handleChapterClick = useCallback((chunkIndex) => {
    console.log('chunkIndex:', chunkIndex); // ← 추가
  pendingChunkIndex.current = chunkIndex;
  setIsPreviewOpen(true);
  prevTab.current = activeTab;
  setActiveTab('책속으로');
  setForceLoad(prev => prev + 1);
}, [activeTab]);

  // forceLoad + activeTab 변경 후 DOM 업데이트 완료되면 스크롤
useEffect(() => {
    if (pendingChunkIndex.current === null) return;
    const chunkIndex = pendingChunkIndex.current;
    pendingChunkIndex.current = null;

    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
        const scrollContainer = document.querySelector('.right-side');
        if (!scrollContainer) return;
        let target = null;
        if (chunkIndex === 0) {
            target = previewRef.current;
        } else if (chunkRefs.current[chunkIndex - 1]) {
            target = chunkRefs.current[chunkIndex - 1];
        }
        if (target) {
            const containerTop = scrollContainer.getBoundingClientRect().top;
            const targetTop = target.getBoundingClientRect().top;
            const scrollTarget = scrollContainer.scrollTop
            + (targetTop - containerTop)
            - 53;
            scrollContainer.scrollTo({ top: scrollTarget, behavior: 'smooth' });
        }
        });
    });
}, [forceLoad]);

  // 스크롤에 따라 활성 탭 자동 변경
  useEffect(() => {
    const scrollContainer = document.querySelector('.right-side');
    if (!scrollContainer) return;

    const handleScroll = () => {
      if (isTabClicking.current) return;
      if (activeTab === '리뷰') return;

      const refs = [
        { tab: '소개',    ref: introRef },
        { tab: '목차',    ref: tocRef },
        { tab: '책속으로', ref: previewRef },
      ];
      let current = '소개';
      refs.forEach(({ tab, ref }) => {
        if (ref.current) {
          const top = ref.current.getBoundingClientRect().top;
          if (top < 120) current = tab;
        }
      });
      setActiveTab(current);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, [activeTab]);

  // bookDetailRef 등록
  useEffect(() => {
    if (bookDetailRef) bookDetailRef.current = handleChapterClick;
  }, [handleChapterClick]);

  if (!book) {
    return (
      <div className="bookdetail-empty">
        <img src={selectedBook.cover} alt={selectedBook.title} className="bookdetail-empty-cover" />
        <p className="bookdetail-empty-title">{selectedBook.title}</p>
        <p className="bookdetail-empty-msg">상세 정보를 준비 중입니다.</p>
      </div>
    );
  }

  return (
    <div className="bookdetail-wrap">

      {/* 표지 + 가격 */}
      <section className="bookdetail-hero">
        <div className="bookdetail-cover-wrap">
          <img src={book.cover} alt={book.title} className="bookdetail-cover" />
        </div>
        <div className="bookdetail-purchase">
          <div className="bookdetail-badges">
            {book.badges.map((badge, i) => (
              <span key={i} className="bookdetail-badge">{badge}</span>
            ))}
          </div>
          <div className="bookdetail-price-wrap">
            <span className="bookdetail-discount-rate">{book.discountRate}%</span>
            <span className="bookdetail-price">{book.discountPrice.toLocaleString()}원</span>
            <span className="bookdetail-original-price">{book.price.toLocaleString()}원</span>
          </div>
          <div className="bookdetail-points">
            <span className="bookdetail-points-label">적립/혜택</span>
            <span className="bookdetail-points-value">{book.points.toLocaleString()}P</span>
          </div>
          <div className="bookdetail-delivery">
            <span className="bookdetail-delivery-label">배송안내</span>
            <span className="bookdetail-delivery-value">무료배송</span>
          </div>
          <div className="bookdetail-btns">
            <button className="bookdetail-btn-buy">구매하기</button>
            <button className="bookdetail-btn-cart">장바구니</button>
            <button className="bookdetail-btn-wish">알림신청</button>
          </div>
        </div>
      </section>

      {/* 제목 */}
      <section className="bookdetail-title-section">
        <h1 className="bookdetail-title">{book.title}</h1>
        <p className="bookdetail-subtitle">{book.subtitle}</p>
        <p className="bookdetail-author-line">저자: {book.author} | 출판사: {book.publisher}</p>
        <p className="bookdetail-category">{book.category}</p>
      </section>

      {/* 탭 */}
      <div className="bookdetail-tabs">
        {['소개', '목차', '책속으로', `리뷰 (${book.ratingCount})`].map((label) => {
          const key = label.split(' ')[0];
          return (
            <button
              key={label}
              className={`bookdetail-tab ${activeTab === key ? 'bookdetail-tab-active' : ''}`}
              onClick={() => handleTabClick(key)}
            >
              {label}
            </button>
          );
        })}
      </div>

      {/* 리뷰 탭 */}
      {activeTab === '리뷰' ? (
        <section className="bookdetail-block">
          <h2 className="bookdetail-block-title">
            리뷰 ({(book.reviews?.length || 0) + userReviews.length})
          </h2>

          {/* 별점 요약 */}
          <div className="bookdetail-rating-summary">
            <div className="bookdetail-rating-score">
              <span className="bookdetail-rating-num">{book.totalRating}</span>
              <span className="bookdetail-rating-max">/10</span>
            </div>
            <p className="bookdetail-rating-label">사용자 총점</p>
          </div>

          {/* 리뷰 작성 폼 */}
          <div className="review-form">
            <h3 className="review-form-title">리뷰 작성</h3>

            {/* 별점 */}
            <div className="review-form-row">
              <label className="review-form-label">별점</label>
              <div className="review-stars">
                {[1,2,3,4,5].map(star => (
                  <span
                    key={star}
                    className={`review-star ${star <= reviewRating ? 'active' : ''}`}
                    onClick={() => setReviewRating(star)}
                  >★</span>
                ))}
                <span className="review-rating-text">{reviewRating}점</span>
              </div>
            </div>

            {/* 태그 */}
            <div className="review-form-row">
              <label className="review-form-label">태그</label>
              <div className="review-tags">
                {['추천해요', '도움돼요', '집중돼요', '쉬웠어요', '최고예요'].map(tag => (
                  <button
                    key={tag}
                    className={`review-tag-btn ${reviewTag === tag ? 'active' : ''}`}
                    onClick={() => setReviewTag(tag)}
                  >{tag}</button>
                ))}
              </div>
            </div>

            {/* 내용 입력 */}
            <textarea
              className="review-textarea"
              placeholder="리뷰 내용을 입력해주세요 (최소 10자)"
              value={reviewText}
              onChange={e => setReviewText(e.target.value)}
              rows={4}
            />
            <div className="review-form-footer">
              <span className="review-char-count">{reviewText.length}자</span>
              <button
                className="review-submit-btn"
                onClick={handleReviewSubmit}
              >등록</button>
            </div>
          </div>

          {/* 내가 쓴 리뷰 */}
          {userReviews.length > 0 && (
            <div className="bookdetail-reviews">
              <h3 className="review-section-label">내가 쓴 리뷰</h3>
              {userReviews.map((review) => (
                <div key={review.id} className="bookdetail-review-item review-own">
                  <div className="bookdetail-review-header">
                    <span className="bookdetail-review-type">{review.type}</span>
                    <span className="bookdetail-review-user">{review.user}</span>
                    <span className="bookdetail-review-date">{review.date}</span>
                    <span className="bookdetail-review-tag">{review.tag}</span>
                    <span className="review-stars-small">
                      {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}
                    </span>
                    <button
                      className="review-delete-btn"
                      onClick={() => handleReviewDelete(review.id)}
                    >삭제</button>
                  </div>
                  <p className="bookdetail-review-content">{review.content}</p>
                </div>
              ))}
            </div>
          )}

          {/* 기존 리뷰 */}
          <div className="bookdetail-reviews">
            {userReviews.length > 0 && (
              <h3 className="review-section-label">전체 리뷰</h3>
            )}
            {book.reviews?.map((review) => (
              <div key={review.id} className="bookdetail-review-item">
                <div className="bookdetail-review-header">
                  <span className="bookdetail-review-type">{review.type}</span>
                  <span className="bookdetail-review-user">{review.user}</span>
                  <span className="bookdetail-review-date">{review.date}</span>
                  <span className="bookdetail-review-tag">{review.tag}</span>
                </div>
                <p className="bookdetail-review-content">{review.content}</p>
              </div>
            ))}
          </div>
        </section>

      ) : (
        <>
          {/* 소개 */}
          <section ref={introRef} className="bookdetail-block">
            <h2 className="bookdetail-block-title">책 소개</h2>
            <p className="bookdetail-category-path">{book.category}</p>
            <p className="bookdetail-intro-text">
              {book.intro.split('\n').map((line, i) => (
                <span key={i}>{line}<br /></span>
              ))}
            </p>
            <div className="bookdetail-author-card" style={{ marginTop: '24px' }}>
              <div className="bookdetail-author-avatar">{book.author.charAt(0)}</div>
              <div className="bookdetail-author-info">
                <p className="bookdetail-author-name">{book.author}</p>
                <span className="bookdetail-author-role">저자</span>
                <p className="bookdetail-author-desc">{book.authorInfo}</p>
              </div>
            </div>
          </section>

          {/* 목차 */}
          <section ref={tocRef} className="bookdetail-block">
            <h2 className="bookdetail-block-title">목차</h2>
            <div className="bookdetail-toc-preview">
              {book.tocFull && book.tocFull.slice(0, 8).map((line, i) => (
                <p key={i} className={`bookdetail-toc-line ${
                  line.startsWith('Ⅰ')||line.startsWith('Ⅱ')||line.startsWith('Ⅲ')||
                  line.startsWith('Ⅳ')||line.startsWith('Ⅴ')||line.startsWith('Ⅵ')||
                  line.startsWith('Ⅶ') ? 'bookdetail-toc-part' : ''}`}>
                  {line || '\u00A0'}
                </p>
              ))}
            </div>
            {isTocOpen && (
              <LazyContent minHeight={300}>
                <div className="bookdetail-toc-full">
                  {book.tocFull && book.tocFull.slice(8).map((line, i) => (
                    <p key={i} className={`bookdetail-toc-line ${
                      line.startsWith('Ⅰ')||line.startsWith('Ⅱ')||line.startsWith('Ⅲ')||
                      line.startsWith('Ⅳ')||line.startsWith('Ⅴ')||line.startsWith('Ⅵ')||
                      line.startsWith('Ⅶ') ? 'bookdetail-toc-part' : ''}`}>
                      {line || '\u00A0'}
                    </p>
                  ))}
                </div>
              </LazyContent>
            )}
            <button className="bookdetail-expand-btn" onClick={() => setIsTocOpen(prev => !prev)}>
              {isTocOpen ? '접기 ∧' : '펼치기 ∨'}
            </button>
          </section>

          {/* 책 속으로 */}
          <section ref={previewRef} className="bookdetail-block">
            <h2 className="bookdetail-block-title">책 속으로</h2>

            {/* 펼치기 전: previewChunks[0]의 첫 7줄만 표시 */}
            {!isPreviewOpen && book.previewChunks && (
              <p className="bookdetail-preview-text">
                {book.previewChunks[0].split('\n').slice(0, 7).map((line, i) => renderLine(line, i))}
                <span className="preview-fade">...</span>
              </p>
            )}

            {/* 펼치기 후: 전체 청크 표시 */}
            {isPreviewOpen && book.previewChunks && book.previewChunks.map((chunk, idx) => (
              <div key={idx} ref={el => chunkRefs.current[idx] = el}>
                {/* htmlChunks 있으면 HTML로 렌더링, 없으면 텍스트로 */}
                {book.htmlChunks && book.htmlChunks[idx] ? (
                  <div
                    className="bookdetail-preview-chunk bookdetail-html-chunk"
                    dangerouslySetInnerHTML={{ __html: book.htmlChunks[idx] }}
                  />
                ) : forceLoad > 0 ? (
                  <div className="bookdetail-preview-chunk">
                    <p className="bookdetail-preview-text">
                      {chunk.split('\n').map((line, i) => renderLine(line, i))}
                    </p>
                  </div>
                ) : (
                  <LazyContent minHeight={150}>
                    <div className="bookdetail-preview-chunk">
                      <p className="bookdetail-preview-text">
                        {chunk.split('\n').map((line, i) => renderLine(line, i))}
                      </p>
                    </div>
                  </LazyContent>
                )}
              </div>
            ))}

            <button className="bookdetail-expand-btn" onClick={() => setIsPreviewOpen(prev => !prev)}>
              {isPreviewOpen ? '접기 ∧' : '펼치기 ∨'}
            </button>

            {/* 기본 정보 */}
            <div style={{ marginTop: '32px', borderTop: '1px solid #eee', paddingTop: '24px' }}>
              <h2 className="bookdetail-block-title">기본정보</h2>
              <table className="bookdetail-info-table">
                <tbody>
                  <tr><td>ISBN</td><td>{book.isbn}</td></tr>
                  <tr><td>발행(출시)일자</td><td>{book.publishDate}</td></tr>
                  <tr><td>쪽수</td><td>{book.pages}쪽</td></tr>
                  <tr><td>크기</td><td>{book.size}</td></tr>
                  <tr><td>총권수</td><td>1권</td></tr>
                </tbody>
              </table>
            </div>
          </section>
        </>
      )}

    </div>
  );
}

export default BookDetail;