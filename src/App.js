import React, { useState, useRef } from 'react';
import Sidebar from './components/layout/Sidebar.js';
import MainFrame from './components/layout/MainFrame.js';
import NavBar from './components/nav/NavBar.js';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');   // ← 추가
  const [activeQuery, setActiveQuery] = useState('');   // ← 추가
  const bookDetailRef = useRef(null);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);

  const handleBookClick = (book) => {
    setSelectedBook(book);
    setActiveQuery('');      // ← 추가
    setSearchQuery('');      // ← 추가    
    if (!isSidebarOpen) setIsSidebarOpen(true);
    const scrollContainer = document.querySelector('.right-side');
    if (scrollContainer) scrollContainer.scrollTo({ top: 0 });
  };

  const handleHome = () => {
    setSelectedBook(null);
    setActiveQuery('');      // ← 추가
    setSearchQuery('');      // ← 추가    
    const scrollContainer = document.querySelector('.right-side');
    if (scrollContainer) scrollContainer.scrollTo({ top: 0 });
  };

  const handleChapterClick = (chunkIndex) => {
    if (bookDetailRef.current) {
      bookDetailRef.current(chunkIndex);
    }
  };

  return (
    <div className="app-wrapper">
      <div className="app-layout">

        {/* 왼쪽 */}
        <div className={`left-side ${isSidebarOpen ? 'left-side-open' : 'left-side-closed'}`}>
          <div className="left-header">
            {isSidebarOpen && (
              <span
                className="sidebar-site-title"
                onClick={handleHome}
                style={{ cursor: 'pointer' }}
              >
                온라인 인문학
              </span>
            )}
            <button className="sidebar-toggle-btn" onClick={toggleSidebar}>
              {isSidebarOpen ? '◧' : '◨'}
            </button>
          </div>
          <Sidebar
            isOpen={isSidebarOpen}
            selectedBook={selectedBook}
            onChapterClick={handleChapterClick}
          />
        </div>

        {/* 오른쪽 */}
        <div className="right-side">
          <NavBar onBookClick={handleBookClick} />
          <MainFrame
            selectedBook={selectedBook}
            onHome={handleHome}
            bookDetailRef={bookDetailRef}
            onBookClick={handleBookClick}
            searchQuery={searchQuery}          // ← 추가
            setSearchQuery={setSearchQuery}    // ← 추가
            activeQuery={activeQuery}          // ← 추가
            setActiveQuery={setActiveQuery}    // ← 추가
          />
        </div>

      </div>
    </div>
  );
}

export default App;
