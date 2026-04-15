/**
 * enterprise-new 목차 데이터
 * 대제목, 중간제목, 소제목 각각 고유 chunkIndex 보유
 */

const enterpriseNewToc = {
  bookId: 'enterprise-new',
  bookTitle: '신입사원을 위한 직장생활 지침서',
  chapters: [

    // ── Ⅰ. 직장이란? ──────────────────────────────
    {
      id: 'ch1', title: 'Ⅰ. 직장이란?', chunkIndex: 1,
      sections: [
        {
          id: 'ch1-1', title: '  1. 청춘은 갖추는 시기', chunkIndex: 1,
          subsections: [
            { id: 'ch1-1-1', title: '    1) 젊음이 아름다운 이유', chunkIndex: 1 },
            { id: 'ch1-1-2', title: '    2) 즐거우니 청춘이다.',   chunkIndex: 2 },
          ]
        },
        {
          id: 'ch1-2', title: '  2. 직장은 사회 학교, 월급은 학비', chunkIndex: 3,
          subsections: [
            { id: 'ch1-2-1', title: '    1) 직장의 시대적 변화',    chunkIndex: 3 },
            { id: 'ch1-2-2', title: '    2) 사회에 진입하는 자세',  chunkIndex: 4 },
            { id: 'ch1-2-3', title: '    3) 직장은 사회 학교',      chunkIndex: 5 },
            { id: 'ch1-2-4', title: '    4) 월급은 학비',           chunkIndex: 6 },
          ]
        },
      ]
    },

    // ── Ⅱ. 직장 구성원이 가져야 할 마인드 ───────────
    {
      id: 'ch2', title: 'Ⅱ. 직장 구성원이 가져야 할 마인드', chunkIndex: 7,
      sections: [
        {
          id: 'ch2-1', title: '  1. 컵원리', chunkIndex: 7,
          subsections: [
            { id: 'ch2-1-1', title: '    1) 컵원리',               chunkIndex: 8 },
            { id: 'ch2-1-2', title: '    2) 컵원리가 삶에 미치는 영향', chunkIndex: 9 },
          ]
        },
        {
          id: 'ch2-2', title: '  2. 노동자에서 연구원으로', chunkIndex: 10,
          subsections: [
            { id: 'ch2-2-1', title: '    1) 노동을 하면 힘든 이유',   chunkIndex: 10 },
            { id: 'ch2-2-2', title: '    2) 노동자와 연구원의 차이',  chunkIndex: 11 },
            { id: 'ch2-2-3', title: '    3) 연구를 해야 하는 이유',   chunkIndex: 12 },
          ]
        },
        {
          id: 'ch2-3', title: '  3. 기업이념', chunkIndex: 13,
          subsections: [
            { id: 'ch2-3-1', title: '    1) 이념 있는 직장', chunkIndex: 13 },
          ]
        },
      ]
    },

    // ── Ⅲ. 슬기로운 직장생활 (업무편) ──────────────
    {
      id: 'ch3', title: 'Ⅲ. 슬기로운 직장생활 (업무편)', chunkIndex: 14,
      sections: [
        {
          id: 'ch3-1', title: '  1. 입사 초년생의 역할', chunkIndex: 14,
          subsections: [
            { id: 'ch3-1-1', title: '    1) 신입사원의 바른 자세',     chunkIndex: 14 },
            { id: 'ch3-1-2', title: '    2) 공부하는 신입사원의 자세', chunkIndex: 15 },
          ]
        },
        {
          id: 'ch3-2', title: '  2. 회사에서는 회사 일을', chunkIndex: 16,
          subsections: [
            { id: 'ch3-2-1', title: '    1) 업무시간에는 업무만',    chunkIndex: 16 },
            { id: 'ch3-2-2', title: '    2) 동료들간의 소통은 기본', chunkIndex: 17 },
            { id: 'ch3-2-3', title: '    3) 여성의 업무 집중도',    chunkIndex: 18 },
          ]
        },
        {
          id: 'ch3-3', title: '  3. 효율적인 업무처리 방법', chunkIndex: 19,
          subsections: [
            { id: 'ch3-3-1', title: '    1) 신입사원의 효율적인 업무처리 방법', chunkIndex: 19 },
            { id: 'ch3-3-2', title: '    2) 신입사원의 회사생활',              chunkIndex: 20 },
          ]
        },
      ]
    },

    // ── Ⅳ. 슬기로운 직장생활 (인간관계 편) ──────────
    {
      id: 'ch4', title: 'Ⅳ. 슬기로운 직장생활 (인간관계 편)', chunkIndex: 21,
      sections: [
        {
          id: 'ch4-1', title: '  1. 운용의 시대, 소통의 중요성', chunkIndex: 21,
          subsections: []
        },
        {
          id: 'ch4-2', title: '  2. 직장에서 소통을 잘하려면 - 갑을관계 이해', chunkIndex: 22,
          subsections: [
            { id: 'ch4-2-1', title: '    1) 갑과 을의 관계 이해', chunkIndex: 22 },
            { id: 'ch4-2-2', title: '    2) 갑의 역할',           chunkIndex: 23 },
            { id: 'ch4-2-3', title: '    3) 을의 역할',           chunkIndex: 24 },
          ]
        },
        {
          id: 'ch4-3', title: '  3. 효과적인 의사표현을 하려면', chunkIndex: 25,
          subsections: [
            { id: 'ch4-3-1', title: '    1) 소통이란?',                   chunkIndex: 25 },
            { id: 'ch4-3-2', title: '    2) 경청',                        chunkIndex: 26 },
            { id: 'ch4-3-3', title: '    3) 상대가 물은 크기만큼 대답할 것', chunkIndex: 27 },
            { id: 'ch4-3-4', title: '    4) 상대가 이해되게 말할 것',       chunkIndex: 28 },
            { id: 'ch4-3-5', title: '    5) 겸손',                        chunkIndex: 29 },
          ]
        },
        {
          id: 'ch4-4', title: '  4. 상대를 이해하는 TIP (체질)', chunkIndex: 30,
          subsections: [
            { id: 'ch4-4-1', title: '    1) 체질에 따른 팀구성의 중요성', chunkIndex: 30 },
            { id: 'ch4-4-2', title: '    2) 체질별 특성',                chunkIndex: 31 },
          ]
        },
      ]
    },

    // ── Ⅴ. 슬기로운 직장생활 (급여와 자기 관리 편) ──
    {
      id: 'ch5', title: 'Ⅴ. 슬기로운 직장생활 (급여와 자기 관리 편)', chunkIndex: 32,
      sections: [
        {
          id: 'ch5-1', title: '  1. 급여 사용법', chunkIndex: 32,
          subsections: [
            { id: 'ch5-1-1', title: '    1) 신개념 저축법 - 나를 갖추어야 한다', chunkIndex: 32 },
            { id: 'ch5-1-2', title: '    2) 바른 주식 투자법 - 30% 투자법',    chunkIndex: 33 },
          ]
        },
        {
          id: 'ch5-2', title: '  2. 직장인의 재테크 - 논문 작성', chunkIndex: 34,
          subsections: []
        },
        {
          id: 'ch5-3', title: '  3. 연봉 협상 해야할까?', chunkIndex: 35,
          subsections: []
        },
        {
          id: 'ch5-4', title: '  4. 직장인의 자기 관리법', chunkIndex: 36,
          subsections: [
            { id: 'ch5-4-1', title: '    1) 시간 관리 - 24시간 활용법', chunkIndex: 36 },
            { id: 'ch5-4-2', title: '    2) 스트레스 관리법',           chunkIndex: 37 },
            { id: 'ch5-4-3', title: '    3) 직장인의 옷차림',           chunkIndex: 38 },
          ]
        },
      ]
    },

    // ── Ⅵ. 직장 내 갈등 해결 ────────────────────────
    {
      id: 'ch6', title: 'Ⅵ. 직장 내 갈등 해결', chunkIndex: 39,
      sections: [
        {
          id: 'ch6-1', title: '  1. 직장 내 의견 충돌 이유', chunkIndex: 39,
          subsections: [
            { id: 'ch6-1-1', title: '    1) 실력차이로 인한 불통', chunkIndex: 39 },
            { id: 'ch6-1-2', title: '    2) 갑을관계의 오해',      chunkIndex: 40 },
          ]
        },
        {
          id: 'ch6-2', title: '  2. 직장 내 갈등 해결 핵심', chunkIndex: 41,
          subsections: [
            { id: 'ch6-2-1', title: '    1) 실력차이를 극복하려면', chunkIndex: 41 },
            { id: 'ch6-2-2', title: '    2) 월권행위를 했을때',    chunkIndex: 42 },
            { id: 'ch6-2-3', title: '    3) 의논하라',             chunkIndex: 43 },
          ]
        },
        {
          id: 'ch6-3', title: '  3. 직장 내 갈등사례 해결법', chunkIndex: 44,
          subsections: [
            { id: 'ch6-3-1', title: '    1) 상사의 불합리한 요구 대처법',         chunkIndex: 44 },
            { id: 'ch6-3-2', title: '    2) 실력 없는 상사와 충돌 시',           chunkIndex: 45 },
            { id: 'ch6-3-3', title: '    3) 화내는 상사 대처법',                chunkIndex: 46 },
            { id: 'ch6-3-4', title: '    4) 지속적으로 자존감을 떨어뜨리는 상사', chunkIndex: 47 },
            { id: 'ch6-3-5', title: '    5) 잘난체하는 직원을 대하는 법',        chunkIndex: 48 },
            { id: 'ch6-3-6', title: '    6) 독고다이 회사생활',                 chunkIndex: 49 },
            { id: 'ch6-3-7', title: '    7) 상대의 말을 자주 끊는 사람 대처법',   chunkIndex: 50 },
            { id: 'ch6-3-8', title: '    8) 노조 가입해야 하나?',               chunkIndex: 51 },
          ]
        },
      ]
    },

    // ── Ⅶ. 이직과 퇴사 ──────────────────────────────
    {
      id: 'ch7', title: 'Ⅶ. 이직과 퇴사', chunkIndex: 52,
      sections: [
        {
          id: 'ch7-1', title: '  1. 이직을 원하는 이유', chunkIndex: 52,
          subsections: []
        },
        {
          id: 'ch7-2', title: '  2. 바른 이직 방법', chunkIndex: 53,
          subsections: [
            { id: 'ch7-2-1', title: '    1) 이직할 때 마음가짐',  chunkIndex: 53 },
            { id: 'ch7-2-2', title: '    2) 바른 이직의 조건',   chunkIndex: 54 },
          ]
        },
        {
          id: 'ch7-3', title: '  3. 나에게 맞는 일과 조직 찾는 법', chunkIndex: 55,
          subsections: [
            { id: 'ch7-3-1', title: '    1) 적성에 맞지 않는 일을 할 때',            chunkIndex: 55 },
            { id: 'ch7-3-2', title: '    2) 나에게 맞는 일을 찾아 재밌게 회사 다니기', chunkIndex: 56 },
          ]
        },
        {
          id: 'ch7-4', title: '  4. 퇴사', chunkIndex: 57,
          subsections: []
        },
        {
          id: 'ch7-5', title: '  5. 이직을 고려 중이라면…', chunkIndex: 58,
          subsections: []
        },
      ]
    },

    // ── Ⅷ. 성공적인 직장생활을 위하여 ──────────────
    {
      id: 'ch8', title: 'Ⅷ. 성공적인 직장생활을 위하여', chunkIndex: 59,
      sections: [
        {
          id: 'ch8-1', title: '  1. 승진을 잘하려면?', chunkIndex: 59,
          subsections: []
        },
        {
          id: 'ch8-2', title: '  2. 자리가 사람을 만든다?', chunkIndex: 60,
          subsections: []
        },
        {
          id: 'ch8-3', title: '  3. 스펙! 어디까지 쌓아야 하나?', chunkIndex: 61,
          subsections: []
        },
        {
          id: 'ch8-4', title: '  4. 사회를 위한 삶', chunkIndex: 62,
          subsections: [
            { id: 'ch8-4-1', title: '    1) 성공의 기준을 다시 묻다',             chunkIndex: 62 },
            { id: 'ch8-4-2', title: '    2) 직장은 배움의 현장',                 chunkIndex: 63 },
            { id: 'ch8-4-3', title: '    3) 진로의 본질은 사회적 책임, 이념을 세워라', chunkIndex: 64 },
            { id: 'ch8-4-4', title: '    4) 사회를 위한 삶',                     chunkIndex: 65 },
          ]
        },
      ]
    },

  ],
};

export default enterpriseNewToc;
