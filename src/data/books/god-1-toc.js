/**
 * god-1-toc.js
 * 이병철회장의 24가지 질문 목차
 * 각 질문별 고유 chunkIndex (1~24)
 */

const god1Toc = {
  bookId: 'god-1',
  bookTitle: '이병철회장의 24가지 질문',
  chapters: [

    // ── 1부. 신과 우주 (1~4번) ──────────────────────
    {
      id: 'ch1', title: '1. 신의 존재를 어떻게 증명할 수 있나?', chunkIndex: 1,
    },
    {
      id: 'ch2', title: '2. 신은 우주만물의 창조주라는데?', chunkIndex: 2,
    },
    {
      id: 'ch3', title: '3. 인간도 진화과정의 산물인가?', chunkIndex: 3,
    },
    {
      id: 'ch4', title: '4. 과학이 발달하면 신이 부인되는가?', chunkIndex: 4,
    }, 
    {
      id: 'ch5', title: '5. 신은 왜 고통과 불행을 주었는가?', chunkIndex: 5,
    },
    {
      id: 'ch6', title: '6. 신은 왜 악인을 만들었는가?', chunkIndex: 6,
    },
    {
      id: 'ch7', title: '7. 예수는 왜 죽었는가?', chunkIndex: 7,
    },
    {
      id: 'ch8', title: '8. 성경은 어떻게 만들어 졌는가?', chunkIndex: 8,
    },
    {
      id: 'ch9', title: '9. 종교란 무엇인가?', chunkIndex: 9,
    }, 
    {
      id: 'ch10', title: '5. 신은 왜 고통과 불행을 주었는가?', chunkIndex: 10,
    },
    {
      id: 'ch11', title: '11. 종교의 종류와 특징은?', chunkIndex: 11,
    },
    {
      id: 'ch12', title: '12. 천주교 외에도 천국에 갈 수 있나?', chunkIndex: 12,
    },
    {
      id: 'ch13', title: '13. 왜 천주교만 제일인가?', chunkIndex: 13,
    },
    {
      id: 'ch14', title: '14. 천국과 지옥을 어떻게 믿는가?', chunkIndex: 14,
    }, 
    {
      id: 'ch15', title: '15. 악인도 부귀를 누리는데 신의 교훈은?', chunkIndex: 15,
    },
    {
      id: 'ch16', title: '16. 부자는 악인인가?', chunkIndex: 16,
    },
    {
      id: 'ch17', title: '17. 이태리는 왜 모범국이 못되나?', chunkIndex: 17,
    },
    {
      id: 'ch18', title: '18. 신앙인이 광인처럼 되는 것은?', chunkIndex: 18,
    },
    {
      id: 'ch19', title: '19. 천주교 국가가 왜 공산국이 되었나?', chunkIndex: 19,
    }, 
    {
      id: 'ch20', title: '20. 한국은 왜 범죄가 많은가?', chunkIndex: 20,
    },

    // ── 5부. 교회와 종말 (21~24번) ──────────────────
    {
      id: 'ch21', title: '21. 교황의 독선이 어떻게 가능한가?', chunkIndex: 21,
    },
    {
      id: 'ch22', title: '22. 신부와 수녀는 왜 독신인가?', chunkIndex: 22,
    },
    {
      id: 'ch23', title: '23. 천주교 단체가 자본주의를 부인하는가?', chunkIndex: 23,
    },
    {
      id: 'ch24', title: '24. 지구의 종말은 오는가?', chunkIndex: 24,
    } 

   
    /*   
    // ── 1부. 신과 우주 (1~4번) ────────────────────── 
    {
      id: 'ch1', title: '1부. 신과 우주 (1~4번)', chunkIndex: 1,
      sections: [
        { id: 'ch1-1', title: '  1. 신의 존재를 어떻게 증명할 수 있나?', chunkIndex: 1, subsections: [] },
        { id: 'ch1-2', title: '  2. 신은 우주만물의 창조주라는데?', chunkIndex: 2, subsections: [] },
        { id: 'ch1-3', title: '  3. 인간도 진화과정의 산물인가?', chunkIndex: 3, subsections: [] },
        { id: 'ch1-4', title: '  4. 과학이 발달하면 신이 부인되는가?', chunkIndex: 4, subsections: [] },
      ]
    },

    // ── 2부. 신과 인간 (5~9번) ──────────────────────
    {
      id: 'ch2', title: '2부. 신과 인간 (5~9번)', chunkIndex: 5,
      sections: [
        { id: 'ch2-1', title: '  5. 신은 왜 고통과 불행을 주었는가?', chunkIndex: 5, subsections: [] },
        { id: 'ch2-2', title: '  6. 신은 왜 악인을 만들었는가?', chunkIndex: 6, subsections: [] },
        { id: 'ch2-3', title: '  7. 예수는 왜 죽었는가?', chunkIndex: 7, subsections: [] },
        { id: 'ch2-4', title: '  8. 성경은 어떻게 만들어 졌는가?', chunkIndex: 8, subsections: [] },
        { id: 'ch2-5', title: '  9. 종교란 무엇인가?', chunkIndex: 9, subsections: [] },
      ]
    },

    // ── 3부. 영혼과 내세 (10~14번) ──────────────────
    {
      id: 'ch3', title: '3부. 영혼과 내세 (10~14번)', chunkIndex: 10,
      sections: [
        { id: 'ch3-1', title: '  10. 영혼이란 무엇인가?', chunkIndex: 10, subsections: [] },
        { id: 'ch3-2', title: '  11. 종교의 종류와 특징은?', chunkIndex: 11, subsections: [] },
        { id: 'ch3-3', title: '  12. 천주교 외에도 천국에 갈 수 있나?', chunkIndex: 12, subsections: [] },
        { id: 'ch3-4', title: '  13. 왜 천주교만 제일인가?', chunkIndex: 13, subsections: [] },
        { id: 'ch3-5', title: '  14. 천국과 지옥을 어떻게 믿는가?', chunkIndex: 14, subsections: [] },
      ]
    },

    // ── 4부. 신앙과 사회 (15~20번) ──────────────────
    {
      id: 'ch4', title: '4부. 신앙과 사회 (15~20번)', chunkIndex: 15,
      sections: [
        { id: 'ch4-1', title: '  15. 악인도 부귀를 누리는데 신의 교훈은?', chunkIndex: 15, subsections: [] },
        { id: 'ch4-2', title: '  16. 부자는 악인인가?', chunkIndex: 16, subsections: [] },
        { id: 'ch4-3', title: '  17. 이태리는 왜 모범국이 못되나?', chunkIndex: 17, subsections: [] },
        { id: 'ch4-4', title: '  18. 신앙인이 광인처럼 되는 것은?', chunkIndex: 18, subsections: [] },
        { id: 'ch4-5', title: '  19. 천주교 국가가 왜 공산국이 되었나?', chunkIndex: 19, subsections: [] },
        { id: 'ch4-6', title: '  20. 한국은 왜 범죄가 많은가?', chunkIndex: 20, subsections: [] },
      ]
    },

    // ── 5부. 교회와 종말 (21~24번) ──────────────────
    {
      id: 'ch5', title: '5부. 교회와 종말 (21~24번)', chunkIndex: 21,
      sections: [
        { id: 'ch5-1', title: '  21. 교황의 독선이 어떻게 가능한가?', chunkIndex: 21, subsections: [] },
        { id: 'ch5-2', title: '  22. 신부와 수녀는 왜 독신인가?', chunkIndex: 22, subsections: [] },
        { id: 'ch5-3', title: '  23. 천주교 단체가 자본주의를 부인하는가?', chunkIndex: 23, subsections: [] },
        { id: 'ch5-4', title: '  24. 지구의 종말은 오는가?', chunkIndex: 24, subsections: [] },
      ]
    },
    */

  ],
};

export default god1Toc;
