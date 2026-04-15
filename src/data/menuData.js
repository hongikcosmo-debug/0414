const menuData = [
  {
    id: 'god',
    label: '종교',
    books: [
      { id: 'god-1', title: '이병철회장의 24가지 질문', author: '이병철', cover: '/img/24question.png' },
    ],
  },
  /*
  {
    id: 'human',
    label: '인간',
    books: [
      { id: 'human-1', title: '인간의 조건', author: '한나 아렌트', cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120&q=80' },
      { id: 'human-2', title: '이기적 유전자', author: '리처드 도킨스', cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=120&q=80' },
      { id: 'human-3', title: '사피엔스', author: '유발 하라리', cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=120&q=80' },
    ],
  },
  */
  {
    id: 'family',
    label: '가족',
    books: [
      { id: 'family-1', title: '82년생 김지영', author: '조남주', cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=120&q=80' },
      { id: 'family-new', title: '가족의 재발견', author: '전민재', cover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/480D241108120.jpg' },
    { id: 'family-2', title: '아버지와 나', author: '박완서', cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&q=80' },
    ],
  },
  {
    id: 'enterprise',
    label: '기업',
    books: [
      /* tocData의 'enterprise-new' key와 id가 일치해야 목차가 표시됨 */
      { id: 'enterprise-new', title: '신입사원을 위한 직장생활 지침서', author: '저자명', cover: '/img/company_employee.png' },
      { id: 'enterprise-labor', title: '노동개혁', author: '이천공', cover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189546533.jpg' },
    { id: 'enterprise-2', title: '제로 투 원', author: '피터 틸', cover: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=120&q=80' },
      { id: 'enterprise-3', title: '린 스타트업', author: '에릭 리스', cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120&q=80' },
    ],
  },
  {
    id: 'nation',
    label: '국가',
    books: [
      { id: 'nation-politics', title: '정치개혁', author: '이천공', cover: 'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9791189546526.jpg' },
    { id: 'nation-1', title: '국가론', author: '플라톤', cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=120&q=80' },
      { id: 'nation-2', title: '군주론', author: '마키아벨리', cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=120&q=80' },
    ],
  },
  /*
  {
    id: 'religion',
    label: '종교',
    books: [
      { id: 'religion-1', title: '종교의 미래', author: '카렌 암스트롱', cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=120&q=80' },
      { id: 'religion-2', title: '신은 위대하지 않다', author: '크리스토퍼 히친스', cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&q=80' },
    ],
  },
  */
  {
    id: 'economy',
    label: '경제',
    books: [
      { id: 'economy-1', title: '국부론', author: '애덤 스미스', cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=120&q=80' },
      { id: 'economy-2', title: '자본론', author: '카를 마르크스', cover: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=120&q=80' },
      { id: 'economy-3', title: '21세기 자본', author: '토마 피케티', cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120&q=80' },
    ],
  },
  {
    id: 'society',
    label: '사회',
    books: [
      { id: 'society-1', title: '사회계약론', author: '장 자크 루소', cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=120&q=80' },
      { id: 'society-2', title: '군중심리', author: '귀스타브 르봉', cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=120&q=80' },
    ],
  },
  {
    id: 'environment',
    label: '환경',
    books: [
      { id: 'environment-1', title: '침묵의 봄', author: '레이철 카슨', cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=120&q=80' },
      { id: 'environment-2', title: '6도의 악몽', author: '마크 라이너스', cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&q=80' },
    ],
  },
  {
    id: 'health',
    label: '체질',
    books: [
      { id: 'health-1', title: '몸의 일기', author: '다니엘 페나크', cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=120&q=80' },
      { id: 'health-2', title: '음식의 제국', author: '에릭 슐로서', cover: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=120&q=80' },
    ],
  },
  {
    id: 'universe',
    label: '우주',
    books: [
      { id: 'universe-1', title: '코스모스', author: '칼 세이건', cover: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=120&q=80' },
      { id: 'universe-2', title: '시간의 역사', author: '스티븐 호킹', cover: 'https://images.unsplash.com/photo-1532012197267-da84d127e765?w=120&q=80' },
      { id: 'universe-3', title: '엘러건트 유니버스', author: '브라이언 그린', cover: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=120&q=80' },
    ],
  },
  {
    id: 'science',
    label: '과학',
    books: [
      { id: 'science-1', title: '과학혁명의 구조', author: '토마스 쿤', cover: 'https://images.unsplash.com/photo-1516979187457-637abb4f9353?w=120&q=80' },
      { id: 'science-2', title: '부분과 전체', author: '베르너 하이젠베르크', cover: 'https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=120&q=80' },
    ],
  },
  {
    id: 'research',
    label: '연구',
    books: [
      { id: 'research-1', title: '총균쇠', author: '재레드 다이아몬드', cover: 'https://images.unsplash.com/photo-1507842217343-583bb7270b66?w=120&q=80' },
      { id: 'research-2', title: '생각에 관한 생각', author: '다니엘 카너먼', cover: 'https://images.unsplash.com/photo-1535905557558-afc4877a26fc?w=120&q=80' },
    ],
  },
];

export default menuData;
