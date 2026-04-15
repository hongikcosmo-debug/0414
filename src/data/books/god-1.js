/**
 * god-1.js
 * 이병철회장의 24가지 질문
 * 각 질문별 chunkIndex 1~24
 */

const god1 = {
  id: 'god-1',
  title: '이병철회장의 24가지 질문',
  subtitle: '삼성그룹 창업자가 던진 신에 관한 24가지 질문',
  author: '이병철',
  publisher: '정법시대',
  publishDate: '2023년 01월 01일',
  isbn: '9788900000001',
  pages: 280,
  size: '135 * 205 mm',
  price: 18000,
  discountRate: 10,
  discountPrice: 16200,
  points: 900,
  cover: 'img/24question.png',
  badges: ['무료배송', '소득공제'],
  category: '국내도서 > 인문학 > 종교철학',

  intro: `삼성그룹 창업자 이병철 회장이 생의 마지막에 던진 24가지 신에 관한 질문을 담은 책입니다.\n\n죽음을 앞두고 인생의 근본적인 물음들을 탐구하며, 신의 존재, 인간의 본질, 삶의 의미에 대한 깊은 성찰을 담았습니다. 이 책은 가톨릭 신부와의 대화를 통해 24가지 질문에 대한 답을 찾아가는 여정을 담고 있습니다.`,

  authorInfo: '이병철 회장은 삼성그룹의 창업자로, 대한민국 경제 발전에 큰 공헌을 했습니다. 말년에 신의 존재와 삶의 의미에 대한 깊은 질문을 던지며 종교적 성찰을 이어갔습니다.',

  tocFull: [
    '들어가며',
    '',
    '1. 신의 존재를 어떻게 증명할 수 있나?',
    '   신은 왜 자신의 존재를 똑똑히 드러내 보이지 않는가?',
    '2. 신은 우주만물의 창조주라는데 무엇으로 증명할 수 있는가?',
    '3. 생물학자들은 인간도 오랜 진화과정의 산물이라고 하는데,',
    '   신의 인간창조와 어떻게 다른가?',
    '4. 과학이 끝없이 발달하면 신의 존재도 부인되는 것이 아닌가?',
    '5. 신은 인간을 사랑했다면, 왜 고통과 불행과 죽음을 주었는가?',
    '6. 신은 왜 악인을 만들었는가?',
    '7. 예수는 우리의 죄를 대신 속죄하기 위해 죽었다는데',
    '   우리의 죄란 무엇인가?',
    '8. 성경은 어떻게 만들어 졌는가?',
    '9. 종교란 무엇인가? 왜 인간에게 필요한가?',
    '10. 영혼이란 무엇인가?',
    '11. 종교의 종류와 특징은 무엇인가?',
    '12. 천주교를 믿지 않고는 천국에 갈 수 없는가?',
    '13. 왜 천주교만 제일이고, 다른 종교는 이단시하나?',
    '14. 인간이 죽은 후에 영혼은 천국이나 지옥으로 간다는 것을',
    '    어떻게 믿을 수 있나?',
    '15. 신앙이 없어도 부귀를 누리는 사람이 많은데,',
    '    신의 교훈은 무엇인가?',
    '16. 성경에서 부자가 천국에 가는 것을 바늘구멍에 비유했는데,',
    '    부자는 악인이란 말인가?',
    '17. 이태리 같은 나라는 국민의 99%가 천주교도인데,',
    '    사회혼란과 범죄가 왜 그리 많은가?',
    '18. 신앙인은 때때로 광인처럼 되는데,',
    '    공산당원이 공산주의에 미치는 것과 어떻게 다른가?',
    '19. 천주교도가 많은 나라들이 왜 공산국이 되었나?',
    '20. 우리나라는 교회가 많은데 사회 범죄와 시련이 왜 그리 많은가?',
    '21. 로마 교황의 결정에 잘못이 없다는데,',
    '    어떻게 그런 독선이 가능한가?',
    '22. 신부와 수녀는 어떤 사람인가? 왜 독신인가?',
    '23. 천주교 단체가 기업주를 착취자로 단정하는데,',
    '    자본주의를 부인하는 것인가?',
    '24. 지구의 종말은 오는가?',
    '',
    '에필로그',
  ],

  preview: `이 책은 삼성그룹 창업자 이병철 회장이 생의 마지막에 던진 24가지 신에 관한 질문을 담고 있습니다.\n\n한 시대를 풍미한 기업인이 죽음을 앞두고 신의 존재와 삶의 의미에 대해 진지하게 탐구한 내용은 많은 독자들에게 깊은 감동과 성찰을 안겨줍니다.`,

  previewChunks: [
    // chunkIndex 1
    `1. 신(하느님)의 존재를 어떻게 증명할 수 있나?\n신은 왜 자신의 존재를 똑똑히 드러내 보이지 않는가?\n\n우리가 하느님을 어떻게 증명하느냐? 하느님을 누가 이렇다 하니까 하느님이 그런 줄 알았던 거예요. 누가 이렇다고 한 것이지 하느님을 본 사람이 없습니다. 하느님을 본 사람은 없다는 거죠. 요런 느낌을 나는 하느님이라고 알고 있다, 요런 거지 하느님의 실체는 없습니다. 누구도 하느님의 실체를 본 자는 없다. 없습니다. 이거는 단호한 소리입니다.\n\n어떻게 말을 했든 그 말은 있을 수 있는데 하느님을 본 자는 없습니다. 왜 없느냐? 하느님의 존재를 내가 가르쳐 줄 테니까 그러면 왜 못 보았는지를 알게 된다.\n\n하느님의 존재는 뭐냐? 하느님은 스스로 계신다. 이 대자연에 에너지는 스스로 있다. 이것이 하느님이예요. 에너지다 이 말이죠. 하느님은 에너지이고, 인간 또한 에너지예요.\n\n[IMG:img/god1/fig1.png|그림 1 — 하느님은 대자연 전체의 에너지. 별·물·바람·불·인간 모두 그 안에 있다.]\n\n인간이 에너지인데 육기(肉氣)에너지가 있고, 인기(人氣)에너지가 있고. 인기도 에너지이고 육기도 에너지예요. 육신, 인신 이것도 에너지라는 얘기죠. 인신, 인기가 어디 들어가 있냐면, 이 육기 안에 지금 존재한다. 내가 이 육신 안에 있다 이 말이죠.\n\n헌데 언제 나를 볼 수 있느냐? 육신과 분리되고 나서 나를 볼 수 있습니다. 영혼이 되고 나서. 영혼신, 영혼기는 왜 영혼신 영혼기냐? 이 에너지가 육신에 들어와서 살아가면서 모든 걸 기억장치를 가지고 있다는 거죠. 살아가면서 기억장치가 있어가지고 이 기억장치가 이 에너지 영혼기에 잔재로 남아있다는 거죠. 잔재로 남아있기 때문에 영적인 데도 볼 수 있는 영이 되어있다는 거죠.\n\n그래서 우리가 꿈에 본다거나, 기도할 때 싹 나타나는 걸 본다거나, 신경을 우리가 놓았을 때 이때 살짝 보인다 말이죠.\n\n[IMG:img/god1/fig2.png|그림 2 — 살아있을 때는 영혼(인기)이 육신 안에 있다. 육신과 분리되면 영혼기(영혼)가 되어 영적으로 보인다.]\n\n허나 하느님은 볼 수 있느냐? 못 봅니다. 왜? 육신에 들어와서 집착한 게 없기 때문에 그 기운은 보이는 성격의 것이 될 수가 없다. 이 말이예요. 그런데 하느님은 존재 하느냐? 존재합니다.\n\n하느님이라는 용어를 어떻게 부르느냐를 인자 풀어봐야 될 겁니다. 서양에서 할 때에는 God, 유일신 God 요렇게 부르고, 알라라고 하기도 하고, 우리 한국으로 들어오게 되면 하느님이라고 부릅니다. 과거에는 한울님이라고도 하고, 천지신명이라고 이름을 붙여서 부르기도 했죠. 요래 되면 천지 에너지다 이 말이거든요. 천신이다. 이게 하느님입니다.\n\n하느님이 있냐? 없냐? 이걸 따지기 이전에 나는 누구인가를 찾아라. 인간은 나는 누구인가를 찾게 되면 이 대자연에 소속하고 있는 하나의 세포임을 알게 된다. 그러면 이 대자연의 에너지는 무엇이냐? 이래 들어가는 것이 인자 스스로 있는 에너지이다. 이것이 천신이요, 이것이 하느님이라고 우리가 부른다.\n\n그러면 하느님과 우리는 어떤 관계이고 하느님은 왜 나투시지 않는가? 몸이 없어 나투실 수 없고, 어떠한 홀로그램으로 안에 집착성을 가지고 있는 게 없어 나투실 수 없고, 우리가 쳐다보는 것은 우리가 아는 만큼 쳐다보는 겁니다.\n\n인간으로 살고 간 영혼은 영적으로 볼 수 있지만 하느님은 영적으로도 볼 수 없는 겁니다. 그러면 어떻게 알 수 있냐? 느낌으로 알 수 있다. 영이 맑은 사람들은 느낌으로 안다.\n\n모든 인간은 하느님을 느끼게 된다. 대자연의 기운을 항상 느끼기 때문이다.\n\n"네가 생각을 할 때, 뭔가를 원하지 않느냐? 이때 이 느낌이 하느님입니다. 너 인간이 뭔가에 매달리지 않느냐? 깨끗하게 매달릴 그때 그 기운을 느끼는 게 너의 하느님이니라. 천(天) · 지(地) · 인(人) — 너희들과 나는 둘이 아니요 하나니라."`,

    // chunkIndex 2
    `2. 신은 우주만물의 창조주라는데 무엇으로 증명할 수 있는가?\n\n우주의 정교한 질서와 법칙, 생명의 복잡성과 다양성, 자연의 아름다움과 조화로움은 우연의 산물이라고 보기 어렵습니다.\n\n물리학의 미세조정 논증에 따르면, 우주의 기본 상수들이 조금이라도 달랐다면 생명이 존재할 수 없었을 것입니다. 이러한 정밀함이 설계자, 즉 창조주의 존재를 암시한다고 볼 수 있습니다.`,

    // chunkIndex 3
    `3. 생물학자들은 인간도 오랜 진화과정의 산물이라고 하는데, 신의 인간창조와 어떻게 다른가?\n인간이나 생물도 진화의 산물 아닌가?\n\n `,

    // chunkIndex 4
    `4. 언젠가 생명의 합성, 무병장수의 시대도 가능할 것 같다.\n이처럼 과학이 끝없이 발달하면 신의 존재도 부인되는 것이 아닌가?\n\n `,

    // chunkIndex 5
    `5. 신은 인간을 사랑했다면, 왜 고통과 불행과 죽음을 주었는가?\n\n이 질문은 '악의 문제'로 신학에서 가장 오래된 논쟁 중 하나입니다.\n\n `,

    // chunkIndex 6
    `6. 신은 왜 악인을 만들었는가?\n예: 히틀러나 스탈린, 또는 갖가지 흉악범들\n\n`,

    // chunkIndex 7
    `7. 예수는 우리의 죄를 대신 속죄하기 위해 죽었다는데 우리의 죄란 무엇인가?\n왜 우리로 하여금 죄를 짓게 내버려 두었는가?\n\n`,

    // chunkIndex 8
    `8. 성경은 어떻게 만들어 졌는가?\n그것이 하느님의 말씀이라는 것을 어떻게 증명할 수 있나?\n\n`,

    // chunkIndex 9
    `9. 종교란 무엇인가? 왜 인간에게 필요한가?\n\n`,

    // chunkIndex 10
    `10. 영혼이란 무엇인가?\n\n`,

    // chunkIndex 11
    `11. 종교의 종류와 특징은 무엇인가?\n\n`,

    // chunkIndex 12
    `12. 천주교를 믿지 않고는 천국에 갈 수 없는가?\n무종교인, 무신론자, 타종교인들 중에도 착한 사람이 많은데, 이들은 죽어서 어디로 가는가?\n\n`,

    // chunkIndex 13
    `13. 종교의 목적은 모두 착하게 사는 것인데\n왜 천주교만 제일이고, 다른 종교는 이단시하나?\n\n`,

    // chunkIndex 14
    `14. 인간이 죽은 후에 영혼은 죽지 않고, 천국이나 지옥으로 간다는 것을 어떻게 믿을 수 있나?\n\n`,  

    // chunkIndex 15
    `15. 신앙이 없어도 부귀를 누리고, 악인 중에도 부귀와 안락을 누리는 사람이 많은데,\n신의 교훈은 무엇인가?\n\n`,

    // chunkIndex 16
    `16. 성경에 부자가 천국에 가는 것을 약대가 바늘구명에 들어가는 것에 비유했는데,\n부자는 악인이란 말인가?\n\n`,

    // chunkIndex 17
    `17. 이태리 같은 나라는 국민의 99%가 천주교도인데,\n사회혼란과 범죄가 왜 그리 많으며, 세계의 모범국이 되지 못하는가?\n\n`,

    // chunkIndex 18
    `18. 신앙인은 때때로 광인처럼 되는데,\n공산당원이 공산주의에 미치는 것과 어떻게 다른가?\n\n`,

    // chunkIndex 19
    `19. 천주교와 공산주의는 상극이라고 하는데,\n천주교도가 많은 나라들이 왜 공산국이 되었나?\n예: 폴란드 등 동구제국, 니카라과 등\n\n`,

    // chunkIndex 20
    `20. 우리나라는 두집 건너 교회가 있고, 신자도 많은데 사회 범죄와 시련이 왜그리 많은가?\n\n`,
    // chunkIndex 21
    `21. 로마 교황의 경정에 잘못이 없다는데, 그도 사람인데 어떻게 그런 독선이 가능한가?\n\n`,

    // chunkIndex 22
    `22. 신부는 어떤 사람인가? 왜 독신인가?\n수녀는 어떤 사람인가? 왜 독신인가?\n\n`,

    // chunkIndex 23
    `23. 천주교의 어떤 단체는 기업주를 착취자로, 근로자를 착취 당하는 자로 단정,\n기업의 분열과 파괴를 조장하는데 자본주의 체제와 미덕을 부인하는 것인가?\n\n`,

    // chunkIndex 24
    `24. 지구의 종말은 오는가?\n\n`,
  ],


  htmlChunks: {
    0: `
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600;700&family=Noto+Sans+KR:wght@300;400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
.wrap{max-width:680px;margin:0 auto;padding:0 0 4rem;font-family:'Noto Sans KR',sans-serif;color:var(--color-text-primary)}
.cover{background:#16120a;padding:3rem 2rem;text-align:left}
.cover-label{font-size:11px;letter-spacing:4px;color:#7a6020;margin-bottom:1rem}
.cover-line{width:40px;height:1px;background:#7a6020;margin:0 auto .8rem}
.cover-title{font-family:'Noto Serif KR',serif;font-size:2rem;font-weight:700;color:#f0d97a;line-height:1.4;margin-bottom:.4rem}
.cover-sub{font-size:.9rem;color:#9a7a30;margin-bottom:1.2rem}
.cover-info{font-size:11px;color:#5a4510;letter-spacing:1px}

.q-block{padding:2rem 1.6rem}
.q-num{display:inline-block;background:#16120a;color:#f0d97a;font-size:11px;font-weight:500;letter-spacing:2px;padding:4px 12px;border-radius:2px;margin-bottom:.8rem}
.q-title{font-family:'Noto Serif KR',serif;font-size:1.2rem;font-weight:700;color:var(--color-text-primary);line-height:1.5;margin-bottom:.5rem;border-left:3px solid #c4a84d;padding-left:.8rem}
.q-meta{font-size:12px;color:var(--color-text-tertiary);margin-bottom:1.4rem;padding-left:1.1rem}
.body{font-size:15px;line-height:2;color:var(--color-text-primary);margin-bottom:.9rem;word-break:keep-all}
.body b{color:#b38a20;font-weight:500}

.illus-wrap{margin:1.6rem 0;background:var(--color-background-secondary);border-radius:10px;padding:1.2rem 1rem .8rem;border:1px solid var(--color-border-tertiary)}
.illus-cap{font-size:11px;color:var(--color-text-tertiary);text-align:center;margin-top:.7rem;letter-spacing:.3px}

.divider{border:none;border-top:1px solid var(--color-border-tertiary);margin:0 1.6rem}

.key-quote{background:#FF11;border-radius:8px;padding:1.2rem 1.4rem;margin:1.2rem 0;border-left:3px solid #c4a84d}
.key-quote p{font-family:'Noto Serif KR',serif;font-size:.95rem;color:#494700;line-height:1.8}
</style>

<div class="wrap">

<div class="cover">
    
    <div class="cover-sub">첫번째 질문</div>
    <div class="cover-line"></div>
    <div class="cover-title">신(하느님)의 존재를 어떻게 증명할 수 있나? 신은 왜 자신의 존재를 똑똑히 드러내 보이지 않는가?</div>
    <div class="cover-label">삼성 故 이병철 회장이 생전에 남긴 질문들</div>
    <!--  <div class="cover-line"></div>
    <div class="cover-info">강의일 2025.01.18 · 천안</div>-->
</div>   

<!-- Q1 -->
<div class="q-block">
  <div class="q-num">질문 1</div>
  <div class="q-title">신(하느님)의 존재를 어떻게 증명할 수 있나?<br>신은 왜 자신의 존재를 똑똑히 드러내 보이지 않는가?</div>

  <p class="body">우리가 하느님을 어떻게 증명하느냐? 하느님을 누가 이렇다 하니까 하느님이 그런 줄 알았던 거예요. 누가 이렇다고 한 것이지 하느님을 본 사람이 없습니다. 하느님을 본 사람은 없다는 거죠. 요런 느낌을 나는 하느님이라고 알고 있다, 요런 거지 하느님의 실체는 없습니다. 누구도 하느님의 실체를 본 자는 없다. 없습니다. 이거는 단호한 소리입니다.</p>

  <p class="body">어떻게 말을 했든 그 말은 있을 수 있는데 하느님을 본 자는 없습니다. 왜 없느냐? 하느님의 존재를 내가 가르쳐 줄 테니까 그러면 왜 못 보았는지를 알게 된다.</p>

  <p class="body"><b>하느님의 존재는 뭐냐? 하느님은 스스로 계신다. 이 대자연에 에너지는 스스로 있다. 이것이 하느님이예요. 에너지다 이 말이죠. 하느님은 에너지이고, 인간 또한 에너지예요.</b></p>

  <!-- 그림 1: 하느님 = 에너지 -->
  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 220" role="img">
      <title>하느님은 에너지 — 대자연의 모든 것이 하나의 에너지</title>
      <desc>하느님이라는 거대한 에너지 안에 별, 물, 바람, 인간이 모두 포함된 그림</desc>
      <rect width="640" height="220" fill="none"/>
      <!-- 바깥 큰 원 = 하느님(대자연 에너지) -->
      <ellipse cx="320" cy="110" rx="290" ry="95" fill="none" stroke="#c4a84d" stroke-width="1.5" stroke-dasharray="6,4"/>
      <text x="320" y="22" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="13" fill="#c4a84d" font-weight="600">하느님 = 대자연의 에너지 (스스로 계심)</text>

      <!-- 별 -->
      <circle cx="120" cy="80" r="22" fill="#2a1f08" stroke="#f0d97a" stroke-width="1"/>
      <text x="120" y="75" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#f0d97a">⭐</text>
      <text x="120" y="91" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#c4a84d">별·우주</text>

      <!-- 물 -->
      <circle cx="210" cy="145" r="22" fill="#0a1a2a" stroke="#6ab0d4" stroke-width="1"/>
      <text x="210" y="140" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#6ab0d4">💧</text>
      <text x="210" y="156" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#6ab0d4">물·대지</text>

      <!-- 바람/공기 -->
      <circle cx="320" cy="75" r="22" fill="#0f1a10" stroke="#7abf7a" stroke-width="1"/>
      <text x="320" y="70" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#7abf7a">🌿</text>
      <text x="320" y="86" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#7abf7a">바람·기운</text>

      <!-- 불 -->
      <circle cx="430" cy="145" r="22" fill="#2a0f08" stroke="#e07a30" stroke-width="1"/>
      <text x="430" y="140" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#e07a30">🔥</text>
      <text x="430" y="156" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#e07a30">불·빛·열</text>

      <!-- 인간 -->
      <circle cx="520" cy="80" r="22" fill="#1a0a2a" stroke="#b070d4" stroke-width="1"/>
      <text x="520" y="75" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#b070d4">🧑</text>
      <text x="520" y="91" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#b070d4">인간·생명</text>

      <!-- 연결선 -->
      <line x1="142" y1="80" x2="208" y2="125" stroke="#c4a84d" stroke-width="0.6" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="232" y1="130" x2="298" y2="90" stroke="#c4a84d" stroke-width="0.6" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="342" y1="90" x2="408" y2="128" stroke="#c4a84d" stroke-width="0.6" stroke-dasharray="4,3" opacity="0.5"/>
      <line x1="452" y1="128" x2="498" y2="95" stroke="#c4a84d" stroke-width="0.6" stroke-dasharray="4,3" opacity="0.5"/>

      <text x="320" y="208" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#7a6020">모든 것은 하나의 에너지 안에 있다 — 이것이 하느님</text>
    </svg>
    <div class="illus-cap">그림 1 — 하느님은 대자연 전체의 에너지. 별·물·바람·불·인간 모두 그 안에 있다.</div>
  </div>

  <p class="body">인간이 에너지인데 육기(肉氣)에너지가 있고, 인기(人氣)에너지가 있고. 인기도 에너지이고 육기도 에너지예요. 육신, 인신 이것도 에너지라는 얘기죠. 인신, 인기가 어디 들어가 있냐면, 이 육기 안에 지금 존재한다. 내가 이 육신 안에 있다 이 말이죠.</p>

  <p class="body">헌데 언제 나를 볼 수 있느냐? 육신과 분리되고 나서 나를 볼 수 있습니다. 영혼이 되고 나서. 영혼신, 영혼기는 왜 영혼신 영혼기냐? 이 에너지가 육신에 들어와서 살아가면서 모든 걸 기억장치를 가지고 있다는 거죠. 살아가면서 기억장치가 있어가지고 이 기억장치가 이 에너지 영혼기에 잔재로 남아있다는 거죠. 잔재로 남아있기 때문에 영적인 데도 볼 수 있는 영이 되어있다는 거죠.</p>

  <p class="body">그래서 우리가 꿈에 본다거나, 기도할 때 싹 나타나는 걸 본다거나, 신경을 우리가 놓았을 때 이때 살짝 보인다 말이죠.</p>

  <!-- 그림 2: 육신과 인기/영혼 -->
  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 200" role="img">
      <title>육신 안의 인기(영혼)와 분리 과정</title>
      <desc>살아있을 때는 육신 안에 영혼이 들어있고, 죽으면 영혼이 분리되어 나온다</desc>
      <rect width="640" height="200" fill="none"/>
      <!-- 왼쪽: 살아있는 상태 -->
      <rect x="40" y="30" width="240" height="140" rx="8" fill="none" stroke="var(--color-border-tertiary)" stroke-width="1"/>
      <text x="160" y="52" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="var(--color-text-secondary)">살아있을 때</text>
      <!-- 육신 -->
      <ellipse cx="160" cy="115" rx="70" ry="55" fill="#2a1808" stroke="#c4a84d" stroke-width="1.2"/>
      <text x="160" y="108" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#c4a84d">육신(肉身)</text>
      <!-- 인기/영혼 = 안에 작은 원 -->
      <ellipse cx="160" cy="115" rx="30" ry="24" fill="#3a1a50" stroke="#b070d4" stroke-width="1.2"/>
      <text x="160" y="113" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="10" fill="#d4a0f0">인기</text>
      <text x="160" y="125" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#b070d4">(영혼)</text>
      <text x="160" y="185" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="var(--color-text-tertiary)">영혼이 육신 안에 있음</text>

      <!-- 화살표 -->
      <text x="320" y="118" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="22" fill="var(--color-text-tertiary)">→</text>
      <text x="320" y="138" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="var(--color-text-tertiary)">육신 분리</text>

      <!-- 오른쪽: 분리된 상태 -->
      <rect x="360" y="30" width="240" height="140" rx="8" fill="none" stroke="var(--color-border-tertiary)" stroke-width="1"/>
      <text x="480" y="52" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="var(--color-text-secondary)">육신과 분리 후</text>
      <!-- 빈 육신 -->
      <ellipse cx="430" cy="120" rx="45" ry="38" fill="#1a1208" stroke="#9a7a30" stroke-width="1" stroke-dasharray="4,3"/>
      <text x="430" y="124" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#7a6020">빈 육신</text>
      <!-- 분리된 영혼 -->
      <ellipse cx="530" cy="100" rx="35" ry="28" fill="#3a1a50" stroke="#b070d4" stroke-width="1.5"/>
      <text x="530" y="97" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#d4a0f0">영혼기</text>
      <text x="530" y="112" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#b070d4">(기억 보존)</text>
      <!-- 빛 효과 -->
      <line x1="510" y1="80" x2="495" y2="65" stroke="#d4a0f0" stroke-width="0.7" opacity="0.6"/>
      <line x1="530" y1="73" x2="530" y2="58" stroke="#d4a0f0" stroke-width="0.7" opacity="0.6"/>
      <line x1="550" y1="80" x2="565" y2="65" stroke="#d4a0f0" stroke-width="0.7" opacity="0.6"/>
      <text x="480" y="185" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="var(--color-text-tertiary)">영혼이 됨 — 비로소 보이기 시작</text>
    </svg>
    <div class="illus-cap">그림 2 — 살아있을 때는 영혼(인기)이 육신 안에 있다. 육신과 분리되면 영혼기(영혼)가 되어 영적으로 보인다.</div>
  </div>

  <p class="body">허나 하느님은 볼 수 있느냐? <b>못 봅니다. 왜? 육신에 들어와서 집착한 게 없기 때문에 그 기운은 보이는 성격의 것이 될 수가 없다.</b> 이 말이예요. 그런데 하느님은 존재 하느냐? 존재합니다.</p>

  <p class="body">하느님이라는 용어를 어떻게 부르느냐를 인자 풀어봐야 될 겁니다. 서양에서 할 때에는 God, 유일신 God 요렇게 부르고, 알라라고 하기도 하고, 우리 한국으로 들어오게 되면 하느님이라고 부릅니다. 과거에는 한울님이라고도 하고, 천지신명이라고 이름을 붙여서 부르기도 했죠. 요래 되면 천지 에너지다 이 말이거든요. 천신이다. 이게 하느님입니다.</p>

  <p class="body">그래서 <b>하느님이 있냐? 없냐? 이걸 따지기 이전에 나는 누구인가를 찾아라. 인간은 나는 누구인가를 찾게 되면 이 대자연에 소속하고 있는 하나의 세포임을 알게 된다.</b> 그러면 이 대자연의 에너지는 무엇이냐? 이래 들어가는 것이 인자 스스로 있는 에너지이다. 이것이 천신이요, 이것이 하느님이라고 우리가 부른다.</p>

  <p class="body">그러면 하느님과 우리는 어떤 관계이고 하느님은 왜 나투시지 않는가? 몸이 없어 나투실 수 없고, 어떠한 홀로그램으로 안에 집착성을 가지고 있는 게 없어 나투실 수 없고, 우리가 쳐다보는 것은 우리가 아는 만큼 쳐다보는 겁니다.</p>

  <p class="body">인간으로 살고 간 영혼은 영적으로 볼 수 있지만 하느님은 영적으로도 볼 수 없는 겁니다. 그러면 어떻게 알 수 있냐? <b>느낌으로 알 수 있다. 영이 맑은 사람들은 느낌으로 안다.</b> 그리고 또 어떻게 알 수 있냐? 모든 인간은 하느님을 느끼게 된다. 대자연의 기운을 항상 느끼기 때문이다.</p>

  <div class="key-quote">
    <p>"네가 생각을 할 때, 뭔가를 원하지 않느냐? 이때 이 느낌이 하느님입니다.<br>
    너 인간이 뭔가에 매달리지 않느냐? 깨끗하게 매달릴 그때 그 기운을 느끼는 게 너의 하느님이니라.<br><br>
    천(天) · 지(地) · 인(人) — 너희들과 나는 둘이 아니요 하나니라."</p>
  </div>
</div>

<hr class="divider">

<!-- Q2 -->
<div class="q-block">
  <div class="q-num">질문 2</div>
  <div class="q-title">하느님의 음성을 듣고, 하느님을 만났다는 사람들은 거짓말을 하는 것입니까?</div>

  <p class="body">그 사람이 거짓말을 하는 것이 아니고 그 사람은 무언가를 들은 것이지요. 이게 하느님 음성을 들었는지, 지금 역할하는 신들의 음성을 들었는지 들은 거는 분명하되, <b>영적으로 들은 겁니다.</b></p>

  <p class="body">우리가 영적으로 듣고 접한다고 해서 하느님을 접하고 있는 게 아니예요. 하느님이 운용하시는 이 차원계는 무수한 영을 운용을 한다. 이것이 어떠한 영이냐라고 할 때, 대신들이라고 하는데, 신들이라는 것을 알고 있다라는 거죠.</p>

  <!-- 그림 3: 하느님 → 대신 → 인간 전달 구조 -->
  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 230" role="img">
      <title>하느님의 말씀이 전달되는 구조</title>
      <desc>하느님이 대신(천사·신들)을 통해 인간에게 메시지를 전달하는 계층 구조</desc>
      <rect width="640" height="230" fill="none"/>

      <!-- 하느님 -->
      <ellipse cx="320" cy="55" rx="90" ry="38" fill="#16120a" stroke="#f0d97a" stroke-width="1.5"/>
      <text x="320" y="50" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="14" fill="#f0d97a" font-weight="600">하느님</text>
      <text x="320" y="67" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#9a7a30">(천지 에너지 · 형상 없음)</text>

      <!-- 화살표 하느님→대신 -->
      <line x1="260" y1="88" x2="200" y2="122" stroke="#c4a84d" stroke-width="1.2" marker-end="url(#a1)"/>
      <line x1="320" y1="93" x2="320" y2="120" stroke="#c4a84d" stroke-width="1.2" marker-end="url(#a1)"/>
      <line x1="380" y1="88" x2="440" y2="122" stroke="#c4a84d" stroke-width="1.2" marker-end="url(#a1)"/>
      <defs>
        <marker id="a1" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse">
          <path d="M2 1L8 5L2 9" fill="none" stroke="#c4a84d" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </marker>
      </defs>

      <!-- 대신들 3종류 -->
      <rect x="130" y="128" width="130" height="48" rx="6" fill="#1a1208" stroke="#c4a84d" stroke-width="1"/>
      <text x="195" y="148" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#f0d97a">대역 대신</text>
      <text x="195" y="164" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#9a7a30">하느님의 대변인</text>

      <rect x="255" y="128" width="130" height="48" rx="6" fill="#1a1208" stroke="#c4a84d" stroke-width="1"/>
      <text x="320" y="148" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#f0d97a">예수·싯다르타·</text>
      <text x="320" y="162" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#f0d97a">마리아 신</text>

      <rect x="380" y="128" width="130" height="48" rx="6" fill="#1a1208" stroke="#c4a84d" stroke-width="1"/>
      <text x="445" y="148" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#f0d97a">조상신·나라신·</text>
      <text x="445" y="163" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#f0d97a">천사 등</text>

      <!-- 대신→인간 -->
      <line x1="195" y1="176" x2="260" y2="200" stroke="#7a6020" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a1)"/>
      <line x1="320" y1="176" x2="320" y2="200" stroke="#7a6020" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a1)"/>
      <line x1="445" y1="176" x2="380" y2="200" stroke="#7a6020" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#a1)"/>

      <!-- 인간 -->
      <ellipse cx="320" cy="212" rx="100" ry="16" fill="#1a1208" stroke="#7a6020" stroke-width="1"/>
      <text x="320" y="216" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#c4a84d">인간 (영적으로 받음)</text>

      <text x="45" y="152" font-family="Noto Sans KR,sans-serif" font-size="10" fill="var(--color-text-tertiary)">천상계</text>
      <text x="45" y="212" font-family="Noto Sans KR,sans-serif" font-size="10" fill="var(--color-text-tertiary)">인간계</text>
    </svg>
    <div class="illus-cap">그림 3 — 하느님은 대신(대역신)을 통해 인간에게 메시지를 전달한다. 대통령이 직접 말하지 않고 대변인을 통하는 것과 같다.</div>
  </div>

  <p class="body">그러니까 특정한 자한테 하느님이 말씀해주시고 하시는데 일반 사람한테는 하느님이 말씀해주시지 않는다. <b>하느님은 누구를 상대하나? 최고를 상대합니다. 인간신 중에서도 최고들을 상대한다. 최고들을 나중에 내가 풀어주겠지만 그걸 단이라고 합니다. 단. 단이 최고의 신이예요.</b></p>

  <p class="body">이거 내가 다음에 다 풀어줄 거니까. 지금 풀면 혼란해져서 안 됩니다. 그러니까 인자 그런 데에 직접적인 교류를 하신다. 이때는 그러면 들릴 때 귀로 들리느냐? 아녜요. <b>그냥 자연의 소리로 내 몸 전체로 들린다.</b> 몸 전체로 들립니다.</p>

  <p class="body">하느님이 프랑스어로 하는 것도 아니고 한국말로 하는 것도 아녜요. <b>네가 알게 들려준다. 하느님은 네가 알게 들려주는 것이지 어떤 음향으로 들리는 게 아닙니다.</b> 그러면 내가 한국말로 들을 수 있는 사람일 때에는 한국말로 들어옵니다.</p>

  <p class="body">어떤 말로 해서 아는 것이 아니고 영은 접하는 것이다. 그래서 우리가 하느님이 말씀하심도 우리는 영으로 듣는 것이다. 그래서 영으로 듣는데, 이걸 들을 수 있는 자가 있고 이걸 들을 수 없는 자가 있다. 하느님은 지도자하고 말씀하신다. 그러니까 나투시고 안 나투시고 하시는 게 아니고 스스로 계신다. 그래서 나투실 수 없다.</p>
</div>

<hr class="divider">

<!-- Q3 -->
<div class="q-block">
  <div class="q-num">질문 3</div>
  <div class="q-title">신의 계시를 받으면서 몸에 어떤 떨림을 경험했다는 사람들은 하느님의 말씀을 들었다고 봐야 합니까?</div>

  <p class="body">아닙니다. 우리가 신들과 접신할 때 우리는 육신을 가지고 있는 동물이기 때문에, <b>신들과 접신할 때에는 이 동물의 피부가 떨리고 여러 가지 현상들이 일어납니다. 신과 접신할 때. 이거는 신과 접신한 것이지 하느님과 접신한 것이 아니다.</b></p>

  <p class="body">하느님은 너하고 항상 같이 있기 때문에 접신하고 말 게 없다 이 말이죠. 그러나 하느님이 너에게 느낌을 줄 때에는 네가 좀 다르지요. 느낌을 주는 게 있고, 접신하는 건 틀리지요. 우리는 하느님 기운 속에 있기 때문에 우리는 항상 같이 있는 겁니다.</p>

  <!-- 그림 4: 접신(떨림) vs 하느님 느낌 비교 -->
  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 190" role="img">
      <title>접신(신과 만남)과 하느님의 느낌 비교</title>
      <desc>왼쪽은 신과의 접신(떨림·이상 현상), 오른쪽은 하느님과 항상 함께 있음(평온한 느낌)</desc>
      <rect width="640" height="190" fill="none"/>

      <!-- 왼쪽: 접신 -->
      <rect x="30" y="20" width="270" height="150" rx="8" fill="none" stroke="#e07a30" stroke-width="1"/>
      <text x="165" y="44" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#e07a30" font-weight="600">신(神)과의 접신</text>
      <!-- 사람 -->
      <ellipse cx="165" cy="105" rx="28" ry="38" fill="#2a1808" stroke="#e07a30" stroke-width="1"/>
      <text x="165" y="109" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#e07a30">🧑</text>
      <!-- 떨림 선 -->
      <path d="M100 80 Q108 68 115 80 Q122 92 130 80 Q138 68 145 80" fill="none" stroke="#e07a30" stroke-width="1.5" opacity="0.7"/>
      <path d="M185 80 Q193 68 200 80 Q207 92 215 80 Q222 68 230 80" fill="none" stroke="#e07a30" stroke-width="1.5" opacity="0.7"/>
      <path d="M100 125 Q108 113 115 125 Q122 137 130 125 Q138 113 145 125" fill="none" stroke="#e07a30" stroke-width="1.5" opacity="0.7"/>
      <path d="M185 125 Q193 113 200 125 Q207 137 215 125 Q222 113 230 125" fill="none" stroke="#e07a30" stroke-width="1.5" opacity="0.7"/>
      <!-- 신 아이콘 -->
      <ellipse cx="165" cy="62" rx="18" ry="14" fill="#3a1a08" stroke="#e07a30" stroke-width="1"/>
      <text x="165" y="67" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#e07a30">대신</text>
      <line x1="165" y1="76" x2="165" y2="68" stroke="#e07a30" stroke-width="1" marker-end="url(#a1)"/>
      <text x="165" y="168" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#9a6030">몸 떨림·이상 현상 발생</text>

      <!-- 오른쪽: 하느님 느낌 -->
      <rect x="340" y="20" width="270" height="150" rx="8" fill="none" stroke="#6ab0d4" stroke-width="1"/>
      <text x="475" y="44" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#6ab0d4" font-weight="600">하느님과 항상 함께</text>
      <!-- 큰 원 = 하느님 기운 -->
      <ellipse cx="475" cy="105" rx="100" ry="55" fill="#0a1520" stroke="#6ab0d4" stroke-width="1" stroke-dasharray="5,4"/>
      <text x="475" y="66" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#4a90b4">하느님(천지 에너지)</text>
      <!-- 사람 안에 있음 -->
      <ellipse cx="475" cy="110" rx="28" ry="38" fill="#1a2030" stroke="#4a90b4" stroke-width="1"/>
      <text x="475" y="114" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#6ab0d4">🧑</text>
      <!-- 조용한 물결 -->
      <path d="M390 100 Q410 96 430 100 Q450 104 470 100" fill="none" stroke="#4a90b4" stroke-width="0.8" opacity="0.5"/>
      <path d="M390 118 Q410 114 430 118 Q450 122 470 118" fill="none" stroke="#4a90b4" stroke-width="0.8" opacity="0.5"/>
      <text x="475" y="168" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#4a7090">항상 함께 · 느낌으로 앎</text>
    </svg>
    <div class="illus-cap">그림 4 — 신(대신)과 접신하면 몸에 이상 현상이 생긴다. 그러나 하느님은 항상 우리 안에 있어 접신과 무관하다.</div>
  </div>

  <p class="body">그렇지만 차원세계와 차원세계가 틀린 영혼, 대신 이러한 신들을 접신할 때. 이거 접신할 때에는 우리가 이상 징후가 일어납니다. 몸에서. 갑자기 까무러치기도 하고, 막 떨리기도 하고 뭐가 나도 모르고 휘파람이 쌕 불기도 하고, 여러 가지 현상이 일어나, 눈물이 폭 쏟아지기도 하고. <b>이거는 영혼접신이다.</b></p>

  <p class="body">영혼이라 해서 무조건 낮은 게 아녜요. 하느님의 일을 하시는 모든 영혼 신들을 대신이라고 하는 겁니다. 대역대신이라 한다. 그렇게 해서 우리 인간들이 접신을 하면서 그쪽 라인에 메시지를 받아서 우리는 세상에서 또 행하고, 이런 것들이 세상에 이것을 전달해 놓아야 될 필요가 있을 때 그 대신이 와서 어떤 제자와 같이 접신을 해서 그 말을 남겨놓는다. 이거를 말로 해버리고 있는 자가 있고, 이걸 글로 또 기록을 해놓는 자도 있고. 이렇게 해서 기록해놓은 거는 이 세상에 남았고, 말로 하고 만 거는 소멸되었다.</p>
</div>

<hr class="divider">

<!-- Q4 -->
<div class="q-block">
  <div class="q-num">질문 4</div>
  <div class="q-title">기독교인들이 방언하는 것은 어떻게 봐야 하나요?</div>

  <p class="body">그것 또한 접신입니다. 접신은 오만 방법으로 한다. 내무부도 있고, 외무부도 있고, 총무부도 있고, 교육부도 있고 뭐가 많아요. <b>이런 신들하고 접신을 하는 겁니다.</b> 그래서 방언을 한다.</p>

  <p class="body">나한테 지금 전해는 주는데 내가 어떻게 쓰느냐 따라서 용도가 쓰이며 달라지는 거지. 분명히 나한테 전해서 세상에 내놓을 때에는 이유가 있고 뜻이 있다.</p>

  <div class="key-quote">
    <p>"나는 천신한테 받았다 이런 생각을 하려고 들지 말고. 도깨비한테 받았어도 이것이 세상에 필요해서 나오는 거니까.<br><br>
    어떤 메시지를 나한테 전했다면 이것이 세상에 잘 유용하게 쓰이게끔 하라. 잡신 또한 하느님의 일꾼이야. 세상에 모두가 운용하는 것은 하느님이 스스로 운용한다."</p>
  </div>
</div>

<hr class="divider">

<!-- Q5 -->
<div class="q-block">
  <div class="q-num">질문 5</div>
  <div class="q-title">인간이 죽으면 하느님을 만날 수 있는가요?</div>

  <p class="body">못 만납니다. 하느님은 니가 죽든 살든 같이 있는데 니가 직접 대면해서 모양으로 만나는 것은 아니라는 거죠. 하느님을 모양으로 만나는 게 아니고.</p>

  <p class="body">만일에 차원세계에 지옥이 형성되어 있다. <b>거기도 하느님의 몸 안에 있는 겁니다. 인간세계에서 뭐를 하고 있든 너는 하느님 몸 안이예요. 천지 대자연 기운 안이라는 겁니다.</b></p>

  <!-- 그림 5: 하느님 몸 안에 있는 모든 차원 -->
  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 240" role="img">
      <title>하느님 몸 안에 있는 모든 세계</title>
      <desc>하느님이라는 가장 큰 원 안에 천상계, 인간계, 지옥계가 모두 포함되어 있다</desc>
      <rect width="640" height="240" fill="none"/>
      <!-- 하느님 = 가장 큰 원 -->
      <ellipse cx="320" cy="118" rx="300" ry="108" fill="none" stroke="#f0d97a" stroke-width="1.5" stroke-dasharray="8,5"/>
      <text x="320" y="22" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="13" fill="#f0d97a" font-weight="600">하느님 (천지 대자연 기운)</text>

      <!-- 천상계 -->
      <ellipse cx="200" cy="90" rx="100" ry="55" fill="#16120a" stroke="#f0d97a" stroke-width="1"/>
      <text x="200" y="82" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#f0d97a">천상계</text>
      <text x="200" y="97" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#c4a84d">대신·영혼들</text>

      <!-- 인간계 -->
      <ellipse cx="390" cy="90" rx="100" ry="55" fill="#0f1a10" stroke="#7abf7a" stroke-width="1"/>
      <text x="390" y="82" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#7abf7a">인간계</text>
      <text x="390" y="97" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#5a9f5a">3차원 지구</text>

      <!-- 지옥계 -->
      <ellipse cx="295" cy="175" rx="100" ry="46" fill="#1a0808" stroke="#e05050" stroke-width="1"/>
      <text x="295" y="169" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#e05050">지옥계</text>
      <text x="295" y="184" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#a03030">방편으로 존재</text>

      <!-- 화살표 (삶→죽음→영계) -->
      <path d="M330 105 Q320 130 308 155" fill="none" stroke="#c4a84d" stroke-width="0.8" stroke-dasharray="4,3" marker-end="url(#a1)"/>
      <text x="345" y="128" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#9a7a30">사후</text>

      <text x="320" y="228" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#9a7a30">살아서도 죽어서도 — 모든 곳이 하느님 몸 안</text>
    </svg>
    <div class="illus-cap">그림 5 — 천상계, 인간계, 지옥계 모두 하느님의 몸 안에 있다. 어디에 있든 하느님과 분리될 수 없다.</div>
  </div>

  <p class="body">우리가 부처님 손바닥 안에 있다 그러지요? 부처님 손바닥 안에. 이게 무슨 소리냐면, 부처님은 누구냐? 스승이예요. 스승의 가르침을 받은 자는 스승 손바닥을 못 벗어난다는 소리를 하는 겁니다. <b>하느님 몸 속에서 니는 벗어날 수가 없는 것이다. 이 말이죠.</b></p>

  <p class="body">그러하듯이 우리는 하느님을 만나는 것이 아니고 스스로 하느님과 같이 있다. 너가 바르게 살지 못했다라는 걸 아르켜 주기 위해서 빚어놓은 것이 지옥이니. 지옥에 들어간다고 니가 타죽는 게 아니다 이 말이죠.</p>

  <div class="key-quote">
    <p>"오늘날 너희들이 지식이 갖추어졌으므로 뭐든지 분별할 수 있는 자가 되었다. 다 컸다.<br><br>
    너희들은 사람으로 살아나가는 시대를 열 것이니, 이제부터 이런 방편에 매이지 말라. 인자는 놓아라."</p>
  </div>
</div>

<hr class="divider">

<!-- Q6 -->
<div class="q-block">
  <div class="q-num">질문 6</div>
  <div class="q-title">천주교의 성부·성자·성신 삼위일체와 천지인(天地人)은 어떤 연관이 있는가요?</div>

  <p class="body">성부, 성자, 성신도 삼신사상에서 비로 나온 것이고, 이것이 어디서 나왔다 이런 걸 따지기 이전에, 어디가 우월하다 우수하다 이거를 놓아라. 인자부터는. 하느님의 계시를 바랄 뿐이지 어디에 나의 종교에서 나와야만 하느님의 계시다, 나의 단체에서 나와야만 하느님의 계시라는 것을 이러한 아닛된 생각을 놓아라. 그래야 하느님의 말씀을 들을 수 있느니라.</p>

  <!-- 그림 6: 천지인 = 삼위일체 = 불법승 같은 뿌리 -->
  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 210" role="img">
      <title>천지인, 삼위일체, 불법승은 같은 하나의 진리</title>
      <desc>중앙의 천지인 3기에서 기독교의 삼위일체, 불교의 불법승이 파생된 그림</desc>
      <rect width="640" height="210" fill="none"/>

      <!-- 중앙: 천지인 3기 -->
      <ellipse cx="320" cy="80" rx="95" ry="52" fill="#16120a" stroke="#f0d97a" stroke-width="1.5"/>
      <text x="320" y="72" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="13" fill="#f0d97a" font-weight="600">천(天) · 지(地) · 인(人)</text>
      <text x="320" y="90" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#c4a84d">3기 (三氣) — 하느님의 원 에너지</text>

      <!-- 왼쪽 화살표: 기독교 -->
      <line x1="228" y1="96" x2="165" y2="140" stroke="#c4a84d" stroke-width="1" marker-end="url(#a1)"/>

      <!-- 기독교 -->
      <rect x="50" y="145" width="220" height="52" rx="7" fill="#16120a" stroke="#6ab0d4" stroke-width="1"/>
      <text x="160" y="165" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#6ab0d4">성부 · 성자 · 성신</text>
      <text x="160" y="182" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#4a90b4">기독교·천주교 삼위일체</text>

      <!-- 오른쪽 화살표: 불교 -->
      <line x1="412" y1="96" x2="475" y2="140" stroke="#c4a84d" stroke-width="1" marker-end="url(#a1)"/>

      <!-- 불교 -->
      <rect x="370" y="145" width="220" height="52" rx="7" fill="#16120a" stroke="#7abf7a" stroke-width="1"/>
      <text x="480" y="165" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="11" fill="#7abf7a">불(佛) · 법(法) · 승(僧)</text>
      <text x="480" y="182" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#5a9f5a">불교 삼보(三寶)</text>

      <text x="320" y="198" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#9a7a30">같은 진리 — 각 문화권에서 다르게 표현되었을 뿐</text>
    </svg>
    <div class="illus-cap">그림 6 — 천지인(天地人) 3기가 뿌리. 기독교의 삼위일체, 불교의 불법승은 같은 진리를 각각의 방식으로 표현한 것이다.</div>
  </div>

  <p class="body"><b>성부, 성자, 성신. 이거는 천지인 이것이 똑같은 것을 어디에서 어떤 자들이 쓰기 좋게 만들은 것이고, 불법승 이것은 천라신 지라신 인니란 — 천지인을 풀어준 것이다.</b></p>

  <p class="body">그래서 하느님의 말씀하신 이 경이 있습니다. 이 경이 뭐냐? <b>천부경이다. 하느님이 말씀하신 경은 이 천부경 하나밖에 없습니다.</b> 이것이 이 땅에 태초로 온 지도자 혈통에게 내려준 경입니다. 이것이 81자로 되어 있는데 이것은 천지창조로부터 원시반본이 될 때까지 쓸 계율과 법칙이다. 너희들이 이 속에서 살면서 지켜야 될 법칙과 계율이 81자로 압축시켜 놓은 게 천부경. 이것이 하느님의 말씀 천부경입니다.</p>

  <p class="body">이 경을 풀 수 있는 사람은 하느님의 계시를 받고, 하느님의 명령을 받은 사람만이 푸는 겁니다. 이 경을 풀고 나면 인자 진짜 <b>인본시대(人本時代)</b>가 열리는 겁니다.</p>

  <div class="key-quote">
    <p>"하느님의 말씀은 사람의 입을 통해서 전할 것이다.<br>
    깨친 자가 나와서 전할 것이니라.<br>
    그 말은 그 사람이 하는 것이 아니요, 하느님의 계시를 전할 뿐이다."</p>
  </div>
</div>

</div>
`,

    1: `
<style>
@import url('https://fonts.googleapis.com/css2?family=Noto+Serif+KR:wght@400;600;700&family=Noto+Sans+KR:wght@300;400;500&display=swap');
*{box-sizing:border-box;margin:0;padding:0}
.bookdetail-html-chunk{
  --gold:#b8890a;
  --gold-dim:#9a7010;
  --gold-dark:#7a5808;
  --gold-deeper:#5a4006;
  --bg-deep:#fdf8ef;
  --bg-cover:#16120a;
  --text-body:#2a1e08;
  --text-secondary:#5a4418;
  --text-dim:#8a6828;
  --border:#e8dfc0;
  --border-light:#d8cfaa;
  --blue:#1a6090;
  --green:#2a7a3a;
  --purple:#7030a0;
  --red:#c03030;
  --orange:#c05a10;
}
.wrap{max-width:680px;margin:0 auto;padding:0 0 5rem;font-family:'Noto Sans KR',sans-serif;color:var(--text-body);background:#ffffff}

/* ── COVER ── */
.cover{
  background:var(--bg-cover);
  padding:4rem 2rem 3rem;
  text-align:center;
  border-bottom:1px solid var(--border-light);
  position:relative;
  overflow:hidden;
}
.cover::before{
  content:'';
  position:absolute;inset:0;
  background:radial-gradient(ellipse 60% 55% at 50% 80%,rgba(192,160,40,.08) 0%,transparent 70%);
  pointer-events:none;
}
.cover-eyebrow{font-size:10px;letter-spacing:5px;color:var(--gold-dim);margin-bottom:1.2rem;text-transform:uppercase}
.cover-deco{display:flex;align-items:center;justify-content:center;gap:.6rem;margin-bottom:1.4rem}
.cover-deco-line{flex:1;max-width:60px;height:1px;background:var(--gold-dim)}
.cover-deco-diamond{width:6px;height:6px;background:var(--gold-dim);transform:rotate(45deg)}
.cover-title{font-family:'Noto Serif KR',serif;font-size:2.2rem;font-weight:700;color:var(--gold);line-height:1.35;margin-bottom:.6rem}
.cover-subtitle{font-size:.95rem;color:var(--gold-dark);margin-bottom:.5rem}
.cover-desc{font-size:12px;color:var(--text-dim);line-height:1.8;max-width:380px;margin:.8rem auto 1.4rem}
.cover-info{font-size:11px;color:var(--text-dim);letter-spacing:1px}
.lecture-badge{display:inline-block;border:1px solid var(--gold-dim);color:var(--gold-dim);font-size:10px;letter-spacing:2px;padding:3px 10px;border-radius:2px;margin-bottom:1rem}

/* ── CHAPTER ── */
.ch-block{padding:2.2rem 1.8rem}
.ch-num{display:inline-block;background:var(--bg-deep);color:var(--gold);font-size:10px;font-weight:500;letter-spacing:3px;padding:4px 14px;border-radius:2px;margin-bottom:.9rem}
.ch-title{font-family:'Noto Serif KR',serif;font-size:1.25rem;font-weight:700;color:var(--text-body);line-height:1.5;margin-bottom:.4rem;border-left:3px solid var(--gold-dim);padding-left:.9rem}
.ch-src{font-size:11px;color:var(--text-dim);margin-bottom:1.5rem;padding-left:1.2rem;letter-spacing:.5px}
.body{font-size:15px;line-height:2.1;color:var(--text-body);margin-bottom:1rem;word-break:keep-all}
.body b{color:var(--gold-dim);font-weight:500}

/* ── ILLUSTRATION ── */
.illus-wrap{margin:1.8rem 0;background:#fdf9f0;border-radius:10px;padding:1.3rem 1rem .9rem;border:1px solid var(--border-light)}
.illus-cap{font-size:11px;color:var(--text-dim);text-align:center;margin-top:.8rem;letter-spacing:.3px;line-height:1.7}

/* ── DIVIDER ── */
.divider{border:none;border-top:1px solid var(--border);margin:0 1.8rem}
.section-divider{
  display:flex;align-items:center;justify-content:center;
  gap:.8rem;margin:0;padding:1.6rem 1.8rem;
}
.section-divider span{font-size:10px;letter-spacing:3px;color:var(--text-dim)}
.section-divider::before,.section-divider::after{content:'';flex:1;height:1px;background:#e8dfc0}

/* ── KEY QUOTE ── */
.key-quote{background:#fdf3d8;border-radius:8px;padding:1.3rem 1.5rem;margin:1.4rem 0;border-left:3px solid var(--gold-dim)}
.key-quote p{font-family:'Noto Serif KR',serif;font-size:.95rem;color:#5a3808;line-height:2}

/* ── CONCEPT BOX ── */
.concept-box{background:#f0f8f0;border:1px solid #b8d8b8;border-radius:8px;padding:1.2rem 1.4rem;margin:1.4rem 0}
.concept-box .label{font-size:10px;letter-spacing:3px;color:#2a6a3a;margin-bottom:.5rem}
.concept-box p{font-size:14px;color:#1a4a28;line-height:1.9}
</style>

<div class="wrap">

<!-- ══════════════════════════════════════════
     COVER
════════════════════════════════════════════ -->
<div class="cover">
    
    <div class="cover-sub">두번째 질문</div>
    <div class="cover-line"></div>
    <div class="cover-title">신은 우주만물의 창조주라는데</div>
    <div class="cover-title">무엇으로 증명할 수 있는가?</div>
    <div class="cover-label">삼성 故 이병철 회장이 생전에 남긴 질문들</div>
    <!--  <div class="cover-line"></div>
    <div class="cover-info">강의일 2025.01.18 · 천안</div>-->
</div>    


<!--
<div class="cover">
  <div class="cover-eyebrow">정법 강의록</div>
  <div class="lecture-badge">제 9426강 · 제 13918강</div>
  <div class="cover-deco">
    <div class="cover-deco-line"></div>
    <div class="cover-deco-diamond"></div>
    <div class="cover-deco-line"></div>
  </div>
  <div class="cover-title">천지창조와<br>신(神)의 본질</div>
  <div class="cover-subtitle">대자연은 어떻게 시작되었는가</div>
  <div class="cover-desc">태초의 공한(空寒)으로부터 빅뱅, 소우주의 탄생,<br>그리고 인간의 역할까지 — 창조의 전 과정을 밝힌다.</div>
  <div class="cover-deco">
    <div class="cover-deco-line"></div>
    <div class="cover-deco-diamond"></div>
    <div class="cover-deco-line"></div>
  </div>
  <div class="cover-info">천공 스승님 강의</div>
</div>-->


<!-- ══════════════════════════════════════════
     CHAPTER 1 — 태초의 공한
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 1 장</div>
  <div class="ch-title">태초의 공한(空寒) — 대우주의 시작</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">그 질문은 대자연의 천지창조를 풀어야 대답이 됩니다. 진화론이 있고 창조론이 있지요. 대자연이 어떻게 생겼는가부터 알아야 합니다.</p>

  <p class="body"><b>'원래 원 대자연은 공한(空寒)했다'</b> 이 공한한 대우주 상태일 때에는 우리 인간이 지구에 있었느냐? 없었어요. 공한할 때에는 대우주의 에너지가 둘로 분리되지 않았다는 말이죠.</p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 200" role="img">
      <title>태초의 공한 — 분리 이전의 대우주</title>
      <defs>
        <radialGradient id="voidGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#e8dfc0" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#f5f0e0" stop-opacity="0"/>
        </radialGradient>
        <filter id="glow">
          <feGaussianBlur stdDeviation="3" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>
      <rect width="640" height="200" fill="#ffffff"/>
      <!-- 별 점들 -->
      <circle cx="60" cy="30" r="1" fill="#f0d97a" opacity="0.3"/>
      <circle cx="180" cy="55" r="1.2" fill="#c4a84d" opacity="0.2"/>
      <circle cx="500" cy="20" r="1" fill="#f0d97a" opacity="0.25"/>
      <circle cx="580" cy="80" r="0.8" fill="#c4a84d" opacity="0.2"/>
      <circle cx="80" cy="160" r="1" fill="#f0d97a" opacity="0.15"/>
      <circle cx="400" cy="170" r="1.2" fill="#c4a84d" opacity="0.2"/>
      <circle cx="620" cy="150" r="0.8" fill="#f0d97a" opacity="0.18"/>
      <!-- 중심 원 = 공한한 대우주 -->
      <ellipse cx="320" cy="100" rx="260" ry="80" fill="url(#voidGrad)"/>
      <ellipse cx="320" cy="100" rx="260" ry="80" fill="none" stroke="#c8b870" stroke-width="1" stroke-dasharray="5,8"/>
      <!-- 중심 텍스트 -->
      <text x="320" y="88" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="17" fill="#c4a84d" font-weight="600" filter="url(#glow)">空 寒</text>
      <text x="320" y="108" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="14" fill="#6a5010">에너지가 분리되지 않은 상태</text>
      <text x="320" y="126" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="13" fill="#7a6030">하나의 대우주 — 비어 있으나 가득 찬</text>
      <!-- 하단 레이블 -->
      <text x="320" y="188" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#8a7040">인간도, 물질도 없고, 시.공간 분리도 없었다</text>
    </svg>
    <div class="illus-cap">그림 1 — 태초의 공한. 에너지는 하나로 있었고, 무한우주와 유한우주의 구분도 아직 없었다.</div>
  </div>

  <p class="body">그러면 지금 둘로 분리되었습니까? 하고 물어야 되는 건데, 이것도 지금 물을 줄도 모르지요? <b>지금 대자연에는 둘로 분리가 되어 있습니다.</b> 무한우주가 있고, 유한우주가 있어요.</p>
</div>

<hr class="divider">

<!-- ══════════════════════════════════════════
     CHAPTER 2 — 3:7의 법칙
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 2 장</div>
  <div class="ch-title">3:7의 법칙 — 무한우주와 유한우주</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">무한우주에 있는 에너지는 얼마나 있고 유한우주에 에너지가 얼마나 있느냐? <b>무한우주에 있는 에너지는 70%가 있고, 천지창조에 의해 따로 분리된 유한우주에는 30%가 있어요. 우주의 모든 것은 3:7의 법칙으로 운행됩니다.</b></p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 240" role="img">
      <title>3:7의 법칙 — 무한우주 70%, 유한우주 30%</title>
      <defs>
        <radialGradient id="infiniteGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f0e8d0"/>
          <stop offset="100%" stop-color="#f5f0e0"/>
        </radialGradient>
        <radialGradient id="finiteGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#f0e4c8"/>
          <stop offset="100%" stop-color="#0f0904"/>
        </radialGradient>
      </defs>
      <rect width="640" height="240" fill="#ffffff"/>
      <!-- 무한우주 큰 원 (70%) -->
      <ellipse cx="240" cy="120" rx="210" ry="100" fill="url(#infiniteGrad)" stroke="#c4a84d" stroke-width="1.5" stroke-dasharray="8,5"/>
      <text x="240" y="90" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="17" fill="#0ba6ee" font-weight="700">무한우주</text>
      <text x="240" y="120" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="28" fill="#c4a84d" font-weight="300">70%</text>
      <text x="240" y="152" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#6a5010">맑은 에너지</text>
      <!-- 유한우주 작은 원 (30%) -->
      <ellipse cx="520" cy="140" rx="100" ry="75" fill="url(#finiteGrad)" stroke="#e07a30" stroke-width="1.2"/>
      <text x="520" y="115" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="17" fill="#fdf908" font-weight="700">유한우주</text>
      <text x="520" y="148" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="28" fill="#c45a10" font-weight="300">30%</text>
      <text x="520" y="168" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#f74803">탁한 에너지 · 물질세계</text>
      <!-- 분리 화살표 -->
      <path d="M390 110 Q430 90 415 125" fill="none" stroke="#9a7a30" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#sep)"/>
      <defs>
        <marker id="sep" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#9a7a30"/>
        </marker>
      </defs>
      <!-- 비율 레이블 
      <text x="320" y="228" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#6a5010">에너지의 분리 — 이것이 천지창조의 근거가 되는 3:7의 법칙</text>-->
    </svg>
    <div class="illus-cap">그림 2 — 3:7의 법칙. 대우주 에너지의 70%는 무한우주(맑은 에너지), 30%는 유한우주(탁한 에너지·물질)로 나뉘었다.</div>
  </div>

  <p class="body">처음에는 공한했는데 두 개가 분리됩니다. 두개를 분리되게 한 장본인 바로 인간. 창조의 주인공들이 나오는 것이 바로 이 지점이에요. 우리 인간도 에너지입니다. 에너지인데 어떤 에너지냐? 인간의 몸 육신이라고 하는 육기(肉氣) 에너지가 있고, 그 안에 들어가 있는 <b>원소(元素)라는 에너지</b>가 있습니다.</p>

  <p class="body">적절한 단어가 없어서 '원소'라고 하겠습니다. 원소라는 이 에너지는 어떠한 에너지냐? <b>'대우주에 스스로 있는, 대우주 운용을 하고 있는 이 주체 에너지들이다'</b> 이 말이죠.</p>
</div>

<div class="section-divider"><span>억업죄</span></div>

<!-- ══════════════════════════════════════════
     CHAPTER 3 — 억업죄와 탁해짐
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 3 장</div>
  <div class="ch-title">억업죄(億業罪) — 원소의 탁해짐</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">대우주 에너지 안에 하나의 세포들이 있는데, 이 세포들이 스스로 운용을 하면서 이 대자연에서 움직입니다. 이것은 자동운용입니다. 자동운용인데, <b>이것이 서로 간에 조금씩 미세하게 역행하면서 크릭이 갑니다.</b></p>

  <p class="body">크릭이 이래 가면서 에너지에 조금씩 상처를 입고, 이것이 조금씩 조금씩 탁해져요. 억업년(億業年) — 말로 만들 수 없는 엄청난 시간에 걸쳐서. 이것을 보고 <b>억업죄(億業罪)를 지었다</b>고 이야기하는 겁니다.</p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 200" role="img">
      <title>원소 에너지가 억업년에 걸쳐 탁해지는 과정</title>
      <defs>
        <linearGradient id="clearToMurky" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#c4a84d" stop-opacity="0.9"/>
          <stop offset="50%" stop-color="#a07a20" stop-opacity="0.6"/>
          <stop offset="100%" stop-color="#3a2808" stop-opacity="1"/>
        </linearGradient>
      </defs>
      <rect width="640" height="200" fill="#ffffff"/>
      <!-- 타임라인 바 -->
      <rect x="60" y="90" width="520" height="14" rx="7" fill="url(#clearToMurky)"/>
      <!-- 단계 원 -->
      <circle cx="60" cy="97" r="40" fill="#fef6e8" stroke="#f0d97a" stroke-width="1.5"/>
      <text x="60" y="90" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="15" fill="#c4a84d">맑음</text>
      <text x="60" y="110" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#c4a84d">원소상태</text>

      <circle cx="250" cy="97" r="40" fill="#fdf5e8" stroke="#c4a84d" stroke-width="1.2"/>
      <text x="250" y="90" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="15" fill="#c4a84d">탁해짐</text>
      <text x="250" y="110" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#9a7a30">역행·상처</text>

      <circle cx="450" cy="97" r="40" fill="#fef4e8" stroke="#e07a30" stroke-width="1.2"/>
      <text x="450" y="90" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="15" fill="#e07a30">30%</text>
      <text x="450" y="110" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#b05a10">임계점</text>

      <circle cx="580" cy="97" r="42" fill="#2a1e08" stroke="#f0d97a" stroke-width="1.5"/>
      <text x="580" y="90" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="15" fill="#f0d97a">분리</text>
      <text x="580" y="110" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="15" fill="#f0d97a">시작</text>
      <text x="580" y="113" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="7" fill="#c4a84d"></text>

      <!-- 화살표 선 -->
      <text x="155" y="93" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="17" fill="#6a5010">→</text>
      <text x="350" y="93" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="17" fill="#6a5010">→</text>
      <text x="515" y="93" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="17" fill="#6a5010">→</text>

      <!-- 레이블 -->
      <text x="60" y="160" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#7a6030">태초</text>
      <text x="250" y="162" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#7a6030">억업년 경과</text>
      <text x="450" y="162" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#7a4010">30% 탁해짐</text>
      <text x="580" y="160" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#7a4010">천지창조</div>
       </svg>
    <div class="illus-cap">그림 3 — 원소 에너지가 서로 역행하며 억업년에 걸쳐 탁해지는 과정. 30%가 탁해지는 순간 물리현상이 발생한다.</div>
  </div>

  <p class="body">탁해진 분량, 에너지가 <b>30%가 정확하게 딱 차는 순간에 이것이 대자연에 물리현상이 일어납니다.</b> 탁한 것은 무거워서 아래로 쏠리고, 맑은 것은 가벼워서 떠오릅니다. 이것이 문리가 일어나 정리가 되어버리는 거죠.</p>

  <div class="key-quote">
    <p>"대자연에서 30%의 탁한 것이 아래로 모이게 되면 무게라는 것이 생겨요. 이것이 자동으로 딱 발아(發芽)가 되면서 툭 분리가 되버립니다."</p>
  </div>
</div>

<hr class="divider">

<!-- ══════════════════════════════════════════
     CHAPTER 4 — 빅뱅의 탄생
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 4 장</div>
  <div class="ch-title">빅뱅(Big Bang) — 대자연 최초의 섬광</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">30% 에너지들이 전부 다 일정한 곳으로 확 몰리고, 서로가 서로의 에너지를 당기기 시작하는 거죠. 에너지 법칙은 끼리끼리 놀게 되어 있어요. 탁한 것들이 전부 다 서로 힘을 당기기 시작하면서 밑에서도 오고, 위에서도 오고, 옆에서도 오고 — 일정한 곳으로 모이기 시작합니다.</p>

  <p class="body">이 에너지가 모이는 것이 시간이 갈수록 속도를 내면서 <b>가속이 붙습니다. 가속이 배가, 배가, 또 배가</b> — 이런 식으로 속도가 붙어 어마어마한 속도가 됩니다. 그러다 한 일점(一點)으로 쫙 모여들면서, <b>이것이 한점으로 딱 받치는 순간 어마어마한 폭팔이 일어납니다. 이것이 과학자들이 말하는 '빅뱅'이라는 거예요.</b></p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 260" role="img">
      <title>빅뱅 — 에너지가 한 점으로 모여 폭발하는 순간</title>
      <defs>
        <radialGradient id="bangGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stop-color="#fff8e0" stop-opacity="1"/>
          <stop offset="15%" stop-color="#f0d97a" stop-opacity="0.9"/>
          <stop offset="40%" stop-color="#c45a10" stop-opacity="0.6"/>
          <stop offset="70%" stop-color="#6a1a04" stop-opacity="0.3"/>
          <stop offset="100%" stop-color="#080604" stop-opacity="0"/>
        </radialGradient>
        <filter id="bigGlow">
          <feGaussianBlur stdDeviation="8" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <marker id="arr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#c4a84d" opacity="0.7"/>
        </marker>
      </defs>
      <rect width="640" height="260" fill="#ffffff"/>

      <!-- 수렴 화살표들 -->
      <line x1="60" y1="40" x2="300" y2="125" stroke="#c4a84d" stroke-width="0.7" stroke-dasharray="5,4" opacity="0.5" marker-end="url(#arr)"/>
      <line x1="320" y1="20" x2="320" y2="108" stroke="#c4a84d" stroke-width="0.7" stroke-dasharray="5,4" opacity="0.5" marker-end="url(#arr)"/>
      <line x1="580" y1="40" x2="340" y2="125" stroke="#c4a84d" stroke-width="0.7" stroke-dasharray="5,4" opacity="0.5" marker-end="url(#arr)"/>
      <line x1="60" y1="200" x2="300" y2="140" stroke="#c4a84d" stroke-width="0.7" stroke-dasharray="5,4" opacity="0.5" marker-end="url(#arr)"/>
      <line x1="580" y1="200" x2="340" y2="140" stroke="#c4a84d" stroke-width="0.7" stroke-dasharray="5,4" opacity="0.5" marker-end="url(#arr)"/>
      <line x1="160" y1="30" x2="308" y2="118" stroke="#e07a30" stroke-width="0.6" stroke-dasharray="4,4" opacity="0.4" marker-end="url(#arr)"/>
      <line x1="480" y1="30" x2="332" y2="118" stroke="#e07a30" stroke-width="0.6" stroke-dasharray="4,4" opacity="0.4" marker-end="url(#arr)"/>

      <!-- 빅뱅 중심 -->
      <circle cx="320" cy="130" r="95" fill="url(#bangGrad)" filter="url(#bigGlow)"/>
      <circle cx="320" cy="130" r="28" fill="#fff9e8" opacity="0.95"/>
      <text x="320" y="120" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="15" fill="#2a1e08" font-weight="700">빅뱅</text>
      <text x="320" y="140" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#5a4010">一點</text>

      <!-- 섬광 선들 -->
      <line x1="320" y1="108" x2="320" y2="50" stroke="#f0d97a" stroke-width="0.8" opacity="0.4"/>
      <line x1="338" y1="113" x2="390" y2="64" stroke="#f0d97a" stroke-width="0.8" opacity="0.35"/>
      <line x1="302" y1="113" x2="250" y2="64" stroke="#f0d97a" stroke-width="0.8" opacity="0.35"/>
      <line x1="342" y1="130" x2="405" y2="130" stroke="#f0d97a" stroke-width="0.8" opacity="0.3"/>
      <line x1="298" y1="130" x2="235" y2="130" stroke="#f0d97a" stroke-width="0.8" opacity="0.3"/>

      <text x="320" y="250" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#9a7a30">탁한 에너지가 한 점으로 모여 충돌 — 말할 수 없는 온도와 섬광이 일어난다</text>
    </svg>
    <div class="illus-cap">그림 4 — 빅뱅. 탁한 에너지가 배가(倍加)의 속도로 한 일점(一點)에 모여 충돌하면서 엄청난 섬광과 열이 발생한다.</div>
  </div>

  <p class="body">지금 과학으로 이야기하는 빅뱅의 섬광이라는 것이 이것입니다. 전부 다 한쪽에 모여가지고 어마어마한 속도로 비물질 에너지들이 한점으로 딱 받치는 순간에 엄청난 섬광이 일어나서 말할 수 없는 온도가 일어나요. 이것이 열처리가 되면서 <b>거대한 힘이 생기고, 모든 에너지가 열처리 되면서 밀어내기 시작합니다. 이 힘으로 — 열의 힘 때문에.</b></p>

  <p class="body">이것이 밀어내면서 팽창해요. 열로 해서 움직인다는 얘기지요. 이것이 지금 소우주(小宇宙)가 팽창하고 있다는 것입니다.</p>
</div>

<div class="section-divider"><span>소우주의 탄생</span></div>

<!-- ══════════════════════════════════════════
     CHAPTER 5 — 소우주의 팽창
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 5 장</div>
  <div class="ch-title">소우주(小宇宙)의 탄생과 팽창</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">이 30% 에너지가 열처리되면서 공간에서 아직도 팽창 중입니다. <b>아직까지 열처리가 일어나고 있기 때문이죠.</b> 이동해서 터지고, 모여서 또 이동해서 터지고 하는 열처리가 계속 일어나요.</p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 290" role="img">
      <title>무한우주 안에서 소우주(유한우주)가 팽창하는 구조</title>
      <defs>
        <!-- 무한우주: 밝고 따뜻한 황금빛 -->
        <radialGradient id="infUni5" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="#fff8e8"/>
          <stop offset="55%"  stop-color="#fef3d0"/>
          <stop offset="100%" stop-color="#f5e8b8"/>
        </radialGradient>
        <!-- 소우주: 하늘색 계열, 어둡게 -->
        <radialGradient id="finUni5" cx="50%" cy="45%" r="55%">
          <stop offset="0%"   stop-color="#1a3a5c"/>
          <stop offset="50%"  stop-color="#0d2640"/>
          <stop offset="100%" stop-color="#081828"/>
        </radialGradient>
        <!-- 태양 빛 -->
        <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="#fff5a0"/>
          <stop offset="60%"  stop-color="#f0c030"/>
          <stop offset="100%" stop-color="#c88010"/>
        </radialGradient>
        <!-- 지구 -->
        <radialGradient id="earthGrad" cx="40%" cy="35%" r="55%">
          <stop offset="0%"   stop-color="#60b8e0"/>
          <stop offset="45%"  stop-color="#2878b8"/>
          <stop offset="100%" stop-color="#104880"/>
        </radialGradient>
        <!-- 은하 -->
        <radialGradient id="galaxyGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%"   stop-color="#e8d8ff"/>
          <stop offset="50%"  stop-color="#a080e0"/>
          <stop offset="100%" stop-color="#503090"/>
        </radialGradient>
        <!-- 팽창 화살표 -->
        <marker id="expArr5" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#4a90c0"/>
        </marker>
        <!-- 별빛 필터 -->
        <filter id="starGlow5">
          <feGaussianBlur stdDeviation="1.5" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
        <filter id="sunGlow">
          <feGaussianBlur stdDeviation="4" result="blur"/>
          <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
        </filter>
      </defs>

      <rect width="640" height="290" fill="#f8f4ec"/>

      <!-- ① 무한우주 — 밝고 넓은 황금빛 타원 -->
      <ellipse cx="320" cy="148" rx="300" ry="128" fill="url(#infUni5)" stroke="#c8a030" stroke-width="1.8" stroke-dasharray="9,6"/>

      <!-- 무한우주 레이블 -->
      <text x="320" y="26" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="17" fill="#8a6010" font-weight="700">무한우주 (70%) — 맑고 밝은 에너지</text>

      <!-- ② 소우주 — 어두운 하늘색 타원 (무한우주 안에) -->
      <ellipse cx="320" cy="162" rx="188" ry="95" fill="url(#finUni5)" stroke="#4a90c0" stroke-width="2"/>

      <!-- 소우주 안 별들 (작은 흰 점) -->
      <circle cx="240" cy="130" r="1.2" fill="#ffffff" opacity="0.7" filter="url(#starGlow5)"/>
      <circle cx="280" cy="118" r="0.9" fill="#ffffff" opacity="0.6"/>
      <circle cx="370" cy="122" r="1.1" fill="#ffffff" opacity="0.7" filter="url(#starGlow5)"/>
      <circle cx="400" cy="140" r="0.8" fill="#ffffff" opacity="0.5"/>
      <circle cx="255" cy="168" r="0.8" fill="#ffffff" opacity="0.5"/>
      <circle cx="388" cy="175" r="1.0" fill="#ffffff" opacity="0.6"/>
      <circle cx="340" cy="108" r="0.7" fill="#ffffff" opacity="0.5"/>
      <circle cx="300" cy="195" r="0.8" fill="#ffffff" opacity="0.4"/>
      <circle cx="420" cy="160" r="0.9" fill="#ffffff" opacity="0.5"/>

      <!-- 은하 — 나선 모양 표현 -->
      <g transform="translate(248,178)">
        <ellipse cx="0" cy="0" rx="22" ry="10" fill="url(#galaxyGrad)" opacity="0.9" transform="rotate(-20)"/>
        <ellipse cx="0" cy="0" rx="14" ry="6" fill="#d0b8ff" opacity="0.6" transform="rotate(-20)"/>
        <circle  cx="0" cy="0" r="3.5" fill="#fff8ff" opacity="0.95" filter="url(#starGlow5)"/>
        <!-- 나선팔 암시 -->
        <path d="M3,-5 Q10,-12 18,-8" fill="none" stroke="#c0a0f0" stroke-width="1.2" opacity="0.6" transform="rotate(-20)"/>
        <path d="M-3,5 Q-10,12 -18,8" fill="none" stroke="#c0a0f0" stroke-width="1.2" opacity="0.6" transform="rotate(-20)"/>
      </g>
      <text x="248" y="200" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#d8c8ff" font-weight="500">은하</text>

      <!-- 태양 — 빛나는 노란 원 -->
      <g transform="translate(340,148)">
        <circle cx="0" cy="0" r="18" fill="#f5e080" opacity="0.35" filter="url(#sunGlow)"/>
        <circle cx="0" cy="0" r="13" fill="url(#sunGrad)" filter="url(#sunGlow)"/>
        <!-- 태양 코로나 빛살 -->
        <line x1="0" y1="-17" x2="0" y2="-22" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="12" y1="-12" x2="16" y2="-16" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="17" y1="0" x2="22" y2="0" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="12" y1="12" x2="16" y2="16" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="0" y1="17" x2="0" y2="22" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="-12" y1="12" x2="-16" y2="16" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="-17" y1="0" x2="-22" y2="0" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
        <line x1="-12" y1="-12" x2="-16" y2="-16" stroke="#f0c030" stroke-width="1.2" opacity="0.7"/>
      </g>
      <text x="340" y="176" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#f8e080" font-weight="500">태양</text>

      <!-- 지구 — 태양 주위 궤도 -->
      <ellipse cx="340" cy="148" rx="46" ry="14" fill="none" stroke="#4090c0" stroke-width="0.8" stroke-dasharray="3,3" opacity="0.5"/>
      <g transform="translate(384,155)">
        <circle cx="0" cy="0" r="8" fill="url(#earthGrad)"/>
        <!-- 대륙 암시 -->
        <ellipse cx="-2" cy="-1" rx="4" ry="3" fill="#4a9a40" opacity="0.7" transform="rotate(-15)"/>
        <ellipse cx="2" cy="2" rx="2.5" ry="2" fill="#4a9a40" opacity="0.6" transform="rotate(20)"/>
      </g>
      <text x="388" y="176" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#80d0ff" font-weight="500">지구</text>

      <!-- 소우주 레이블 (상단) -->
      <text x="320" y="95" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="17" fill="#a0d0f0" font-weight="700">소우주 · 유한우주 (30%)</text>
      <text x="320" y="120" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#6aa8d0">팽창 중인 물질 우주</text>

      <!-- 팽창 화살표 (소우주 바깥으로) -->
      <path d="M134 155 L78 145" fill="none" stroke="#4a90c0" stroke-width="1.2" stroke-dasharray="4,3" marker-end="url(#expArr5)" opacity="0.7"/>
      <path d="M506 155 L562 145" fill="none" stroke="#4a90c0" stroke-width="1.2" stroke-dasharray="4,3" marker-end="url(#expArr5)" opacity="0.7"/>
      <path d="M320 68 L320 30" fill="none" stroke="#4a90c0" stroke-width="1.2" stroke-dasharray="4,3" marker-end="url(#expArr5)" opacity="0.7"/>
      <text x="56" y="144" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="5" fill="#6a90b0">팽창</text>
      <text x="584" y="144" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="5" fill="#6a90b0">팽창</text>

      <!-- 하단 설명 -->
      <text x="320" y="272" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#6a5010">소우주는 무한우주 안 70% 선에 위치하며 아직도 팽창 중</text>
    </svg>
    <div class="illus-cap">그림 5 — 밝은 무한우주(70%) 안에 위치한 어두운 하늘빛 소우주(유한우주·30%). 소우주 안에는 은하·태양·지구가 존재하며, 지금도 팽창하고 있다.</div>
  </div>

  <p class="body">우주가 이만하다고 치면, 유한우주·물질우주는 요만하다고 치면 3:7의 법칙으로 70% 선에 있어야 될 겁니다. 이것이 아직까지 팽창을 하고 있는 중이에요. <b>조금씩 미세하게 하지만 이것도 아직도 팽창 중입니다.</b> 이 팽창하고 있는 것이 계속 내 공간을 더 늘려나간다라는 거죠.</p>
</div>

<hr class="divider">

<!-- ══════════════════════════════════════════
     CHAPTER 6 — 천지창조의 의미
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 6 장</div>
  <div class="ch-title">천지창조(天地創造)의 의미</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">그래서 여기에 무한우주, 여기에는 유한우주. 이렇게 해가지고 지금 천지창조라는 게 일어났다. 천지창조는 무엇을 이야기하느냐?</p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 200" role="img">
      <title>천지창조의 의미 — 천(天)과 지(地)의 정의</title>
      <rect width="640" height="200" fill="#ffffff"/>

      <!-- 왼쪽: 천(天) -->
      <rect x="30" y="30" width="265" height="140" rx="8" fill="#fdf8ef" stroke="#f0d97a" stroke-width="1.2"/>
      <text x="162" y="62" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="22" fill="#f0d97a" font-weight="700">天</text>
      <text x="162" y="84" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="17" fill="#c4a84d">무(無)의 에너지</text>
      <text x="162" y="103" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#9a7a30">무한우주 · 맑은 에너지</text>
      <text x="162" y="120" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#6a5010">깨끗한 에너지가 있는 곳</text>
      <text x="162" y="140" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#7a6030">천상(天上) · 정신세계</text>
      <text x="162" y="158" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#8a7040">= 70%의 에너지</text>

      <!-- 가운데 + -->
      <text x="320" y="108" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="28" fill="#6a5010">+</text>

      <!-- 오른쪽: 지(地) -->
      <rect x="345" y="30" width="265" height="140" rx="8" fill="#fef4e8" stroke="#e07a30" stroke-width="1.2"/>
      <text x="478" y="62" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="22" fill="#e07a30" font-weight="700">地</text>
      <text x="478" y="84" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="17" fill="#c47a30">유한우주 · 물질</text>
      <text x="478" y="103" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#9a5a20">탁한 에너지가 만들어진 곳</text>
      <text x="478" y="120" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#7a4010">지구 + 은하계 통합</text>
      <text x="478" y="140" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#5a3008">물질세계 · 현실</text>
      <text x="478" y="158" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="15" fill="#3a1804">= 30%의 에너지</text>

      
    </svg>
    <div class="illus-cap">그림 6 — 천지창조의 구조. 천(天)은 무한우주·맑은 에너지, 지(地)는 유한우주·탁한 에너지·물질세계. 이 둘이 창조를 이룬다.</div>
  </div>

  <p class="body"><b>무(無)의 에너지를 천이라 하고, 아직까지 천상 — 깨끗한 에너지가 그냥 있는 곳이다. 이게 천(天).</b> 그다음 유한우주, 물질이 있는 곳, 탁한 곳 — 탁한 곳이 만들어진 게 지(地). 지구와 은하계를 다 합해서 지라 한다. 천지창조 — 이렇게 일어나는 겁니다.</p>
</div>

<div class="section-divider"><span>창조물의 본질</span></div>

<!-- ══════════════════════════════════════════
     CHAPTER 7 — 창조물과 하느님의 몸
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 7 장</div>
  <div class="ch-title">창조된 모든 물질 — 하느님의 몸이 스스로 변한 것</div>
  <div class="ch-src">출처 · 제 9426강 · 제 13918강</div>

  <p class="body">우주 만물의 창조물이라고 하는데, 하느님 자체가 대자연의 에너지이기 때문에 스스로 만드는 거예요. 지금 창조라고 이야기하는 것은 물질을 이야기하는 겁니다. <b>에너지 갖고 물질로 변화시키는 것을 이야기하는 거예요.</b></p>

  <p class="body">그래서 우리 몸도 신께서 만들었다고 이야기하는 게 맞는 겁니다. 우리 육신은 신께서 만든 게 맞습니다. 무한한 변화 속에서 이 몸을 만들기 위한 세포까지도, 세포 안에 우리 미네랄까지도 신께서 만들었습니다. 이게 창조물이죠.</p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 220" role="img">
      <title>하느님의 몸이 에너지에서 물질로 변화하는 창조 과정</title>
      <defs>
        <linearGradient id="transGrad" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#c4a84d" stop-opacity="0.8"/>
          <stop offset="100%" stop-color="#e07a30" stop-opacity="0.8"/>
        </linearGradient>
        <marker id="transArr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#c4a84d"/>
        </marker>
      </defs>
      <rect width="640" height="220" fill="#ffffff"/>

      <!-- 단계 1: 대자연 에너지 -->
      <rect x="20" y="60" width="130" height="90" rx="8" fill="#fdf8ef" stroke="#c4a84d" stroke-width="1.2"/>
      <text x="85" y="98" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#f0d97a">대자연</text>
      <text x="85" y="114" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#f0d97a">에너지</text>
      <text x="85" y="132" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#9a7a30">하느님의 몸</text>

      <!-- 화살표 -->
      <line x1="155" y1="105" x2="195" y2="105" stroke="#c4a84d" stroke-width="1.2" marker-end="url(#transArr)"/>
      <text x="175" y="98" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#6a5010">변화</text>

      <!-- 단계 2: 행성/원소 -->
      <rect x="200" y="60" width="130" height="90" rx="8" fill="#f4f8f4" stroke="#7abf7a" stroke-width="1.2"/>
      <text x="265" y="95" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#7abf7a">행성·원소</text>
      <text x="265" y="113" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#5a9f5a">태양계·지구</text>
      <text x="265" y="130" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#3a6f3a">수억 년 작업</text>

      <!-- 화살표 -->
      <line x1="335" y1="105" x2="375" y2="105" stroke="#c4a84d" stroke-width="1.2" marker-end="url(#transArr)"/>
      <text x="355" y="98" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#6a5010">담금질</text>

      <!-- 단계 3: 생명 -->
      <rect x="380" y="60" width="130" height="90" rx="8" fill="#f0f4fa" stroke="#1a6090" stroke-width="1.2"/>
      <text x="445" y="95" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#6ab0d4">생명 잉태</text>
      <text x="445" y="113" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#4a90b4">세포·미네랄</text>
      <text x="445" y="130" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#2a6094">자연 진화</text>

      <!-- 화살표 -->
      <line x1="515" y1="105" x2="555" y2="105" stroke="#c4a84d" stroke-width="1.2" marker-end="url(#transArr)"/>
      <text x="535" y="98" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#6a5010">완성</text>

      <!-- 단계 4: 인간 -->
      <rect x="560" y="60" width="65" height="90" rx="8" fill="#f8f0fc" stroke="#b070d4" stroke-width="1.2"/>
      <text x="592" y="100" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="12" fill="#b070d4">인간</text>
      <text x="592" y="118" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#8040a4">창조물</text>
      <text x="592" y="134" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#6020a0">완성품</text>

      <!-- 하단 레이블 -->
      <text x="320" y="200" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#6a5010">에너지 → 물질 → 생명 → 인간 — 하느님 몸이 스스로 변하며 이루어지는 창조</text>
      <text x="320" y="215" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#7a6030">이것을 천지기운(天地氣運)이라 한다</text>
    </svg>
    <div class="illus-cap">그림 7 — 대자연 에너지(하느님의 몸)가 행성·원소·생명·인간으로 변화하는 창조 과정. 자연 진화도 하느님의 변화 속에서 일어난다.</div>
  </div>

  <p class="body">몇 십억 년 전에 우리 태양계를 만들 때까지 몇 백 년 동안 계속 물질을 생산하여, 이 물질들이 일로 모여들게 해서 여기서 태양계가 만들어졌고 지구가 만들어졌고, 지구를 두드리고 담금질을 해가지고 여기서 변화를 일으켜가지고 결국은 생명을 잉태했고, <b>생명 안에는 모든 이게 원소들이 들어가 있는 거죠.</b></p>

  <p class="body">이 육신을 하느님이 만드는 게 맞습니다. <b>자연 진화라고 하는 것이 이것이 전부 다 하느님의 변화 속에 일어나는 것이다. 하느님의 에너지가 변화하면서 일어나는 거예요. 그래서 만물 창조라는 게 하느님 몸이 스스로 변해가며 만들어지는 것이다.</b></p>

  <div class="key-quote">
    <p>"대자연의 에너지 자체가 만물 창조의 작품이다. 이것을 천지기운(天地氣運)이라 한다."</p>
  </div>
</div>

<hr class="divider">

<!-- ══════════════════════════════════════════
     CHAPTER 8 — 인기(人氣) — 천지인 삼기
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 8 장</div>
  <div class="ch-title">인기(人氣) — 천지인 삼기(三氣)의 완성체</div>
  <div class="ch-src">출처 · 제 9426강</div>

  <p class="body">천지기운 말고 하나의 에너지가 있습니다. 지금 우리가 붙여 놓은 이름 '인기(人氣)'라고 하는 거예요. <b>인기는 삼기(三氣)를 동시에 만들어서 해가지고 인기라고 되어 있는 거예요.</b></p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 230" role="img">
      <title>인기(人氣) = 천기(天氣) + 지기(地氣) + 인기(人氣) — 삼기의 합</title>
      <defs>
        <marker id="tArr" markerWidth="5" markerHeight="5" refX="2.5" refY="2.5" orient="auto">
          <path d="M0,0 L5,2.5 L0,5 Z" fill="#c4a84d"/>
        </marker>
      </defs>
      <rect width="640" height="230" fill="#ffffff"/>

      <!-- 천(天) -->
      <circle cx="200" cy="85" r="55" fill="#fdf8ef" stroke="#f0d97a" stroke-width="1.3"/>
      <text x="200" y="78" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="18" fill="#f0d97a" font-weight="700">天</text>
      <text x="200" y="97" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#c4a84d">천기</text>
      <text x="200" y="112" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#9a7a30">정신·무한</text>

      <!-- 지(地) -->
      <circle cx="440" cy="85" r="55" fill="#fef4e8" stroke="#e07a30" stroke-width="1.3"/>
      <text x="440" y="78" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="18" fill="#e07a30" font-weight="700">地</text>
      <text x="440" y="97" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#c47a30">지기</text>
      <text x="440" y="112" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#9a5a20">물질·유한</text>

      <!-- 합산 화살표 -->
      <line x1="258" y1="100" x2="295" y2="140" stroke="#c4a84d" stroke-width="1" marker-end="url(#tArr)" opacity="0.7"/>
      <line x1="382" y1="100" x2="345" y2="140" stroke="#c4a84d" stroke-width="1" marker-end="url(#tArr)" opacity="0.7"/>

      <!-- 원소 (위에서 내려옴) -->
      <line x1="320" y1="20" x2="320" y2="130" stroke="#b070d4" stroke-width="1" stroke-dasharray="4,3" marker-end="url(#tArr)" opacity="0.7"/>
      <text x="320" y="14" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#b070d4">원소 에너지</text>

      <!-- 인기(人氣) — 합 -->
      <ellipse cx="320" cy="168" rx="100" ry="44" fill="#f8f0fc" stroke="#b070d4" stroke-width="1.5"/>
      <text x="320" y="160" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="16" fill="#d4a0f0" font-weight="700">人氣 (인기)</text>
      <text x="320" y="178" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#9060c0">천·지·원소 삼기의 완성체</text>

      <text x="320" y="218" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#6a5010">천지기운 안에 원소가 들어와 이루어진 것 — 이것이 인신(人神)이다</text>
    </svg>
    <div class="illus-cap">그림 8 — 인기(人氣)의 구조. 천기(天氣)·지기(地氣)·원소가 어우러진 작품이 인기이며, 이것을 인신(人神)이라 한다.</div>
  </div>

  <p class="body">삼기 천·지·인 삼기가 어우러진 작품이 지금 인기라고 이야기하고 인신(人神)이라고 이야기하는 거예요. 사람의 신. 그러니까 천지기운이 다 들어가 있고, 원소가 이 안에 있기 때문에 이것이 하나의 작품이 되어 있는 거예요. 이것을 보고 인기라고 이야기하고 신이라고 이야기한다.</p>

  <p class="body">그 인신들이 진화를 하면서 윤회하면서 계속 진화를 해가지고 <b>인신이 제대로 전부 다 정리가 된 이때가 2012년 12월 22일까지입니다. 진화 끝! 인기의 완성품 진화가 끝나는 겁니다.</b></p>

  <div class="concept-box">
    <div class="label">다음 코스 · 우주</div>
    <p>인간이 진화가 끝나고 나면 우리는 어디로 달려가느냐 — 자연으로 달려가고, 우주로 나가려고 해요. 그다음 코스이기 때문입니다. 인간으로 땅에서 전부 다 완성되고 나면 그다음 코스를 가는 게 우주예요. <b>우리 대한민국 사람은 우주 공부를 해야만 되는 겁니다.</b></p>
  </div>
</div>

<div class="section-divider"><span>물질과 비물질</span></div>

<!-- ══════════════════════════════════════════
     CHAPTER 9 — 물질 에너지와 비물질 에너지
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 9 장</div>
  <div class="ch-title">물질 에너지와 비물질 에너지</div>
  <div class="ch-src">출처 · 제 13918강</div>

  <p class="body">모든 것을 창조한 것은 아닙니다. 물질로 갖고 변화 창조를 하는 거지, 그러면 신께서 — 하느님이 창조 못하는 게 딱 하나 있습니다. <b>신들이라고 이야기하는 내 자신. 개체 신. 영혼 신. 요거는 물질 에너지가 아니고 비물질 에너지라고 하는 거예요.</b></p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 220" role="img">
      <title>물질 에너지(하느님)와 비물질 에너지(원소·영혼신)의 구조</title>
      <rect width="640" height="220" fill="#ffffff"/>

      <!-- 물질 에너지 = 하느님 -->
      <rect x="30" y="40" width="270" height="140" rx="10" fill="#fdf8ef" stroke="#f0d97a" stroke-width="1.3"/>
      <text x="165" y="72" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="13" fill="#f0d97a" font-weight="700">물질 에너지</text>
      <text x="165" y="92" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#c4a84d">= 하느님</text>
      <text x="165" y="114" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#9a7a30">별·지구·은하·육신</text>
      <text x="165" y="132" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#6a5010">만물을 창조하고 운용</text>
      <text x="165" y="150" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#7a6030">천지 대자연 기운</text>
      <text x="165" y="168" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#8a7040">스스로 변화하며 만물을 빚음</text>

      <!-- 중간 vs -->
      <text x="320" y="118" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="14" fill="#6a5010">VS</text>

      <!-- 비물질 에너지 = 원소·영혼신 -->
      <rect x="340" y="40" width="270" height="140" rx="10" fill="#f8f0fc" stroke="#b070d4" stroke-width="1.3"/>
      <text x="475" y="72" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="13" fill="#b070d4" font-weight="700">비물질 에너지</text>
      <text x="475" y="92" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#9050c0">= 원소 · 영혼신</text>
      <text x="475" y="114" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#7040a0">개체 신 · 영혼</text>
      <text x="475" y="132" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#5030a0">하느님이 창조 못한 에너지</text>
      <text x="475" y="150" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#4020a0">말·지식·진리를 생산</text>
      <text x="475" y="168" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#301898">우주를 운용하는 주체</text>

      <!-- 하단 -->
      <text x="320" y="205" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="11" fill="#6a5010">두 에너지가 공동으로 작업하여 만물이 생산된다</text>
    </svg>
    <div class="illus-cap">그림 9 — 물질 에너지(하느님)와 비물질 에너지(원소·영혼신). 하느님은 만물을 창조하지만, 개체 신(영혼신)은 하느님이 창조하지 못한 별도의 에너지이다.</div>
  </div>

  <p class="body">비물질 에너지가 있고, 물질 에너지가 있는데, 물질 에너지는 하느님. 비물질 에너지는 개체 신들. 그러면 우리 인간은 물질을 덮어 쓴, 물질을 연장으로 쓰고 내가 지금 활동을 하고 있는 지구촌의 <b>비물질 에너지 개체 신. 그래서 영혼신이라고 해요.</b></p>

  <p class="body">그러면 이 비물질 에너지가 없으면 어떻게 되냐? <b>천지기운은 가만히 계시사 운용이 안 되고 그냥 있는 겁니다. 그러면 우리 비물질 에너지들이 활동 속에서 일으키는 이 말의 질량, 이것 때문에 대자연의 천지기운이 운용이 되고 있는 거예요. 우리가 이 우주를 움직이는 주체라는 거죠.</b></p>

  <div class="key-quote">
    <p>"말의 질량이 높아질 때 우주를 운행할 수 있어지는 겁니다. 우리가 한 말 에너지가 전부 다 비물질 에너지예요. 이걸 조금 더 이렇게 생산의 질량이 높아지니까 이걸 지식이라고 이야기하고, 질량이 더 높은 말을 하니까 이걸 진리라고 이야기한다."</p>
  </div>
</div>

<hr class="divider">

<!-- ══════════════════════════════════════════
     CHAPTER 10 — 지식의 주인은 인간이다
════════════════════════════════════════════ -->
<div class="ch-block">
  <div class="ch-num">제 10 장</div>
  <div class="ch-title">지식(知識)의 주인은 인간이다</div>
  <div class="ch-src">출처 · 제 9426강 · 제 13918강</div>

  <p class="body">그래서 모든 창조는 천지 대자연의 에너지가 하는 겁니다. 이것이 신이고, 그러니까 창조주가 맞는 거죠. <b>만물을 창조주는 하느님의 한 게 맞아요.</b></p>

  <p class="body">그러면 이게 창조주인데, 여기서 <b>지식주(知識主)는 누구일까? 지식의 주인, 하느님일까? 인간이에요. 지식의 주인은 인간이다. 영혼도 아니고 원소도 아니고 인간이에요. 지식은 인간이 배양하는 거예요.</b></p>

  <div class="illus-wrap">
    <svg width="100%" viewBox="0 0 640 230" role="img">
      <title>창조주(하느님)와 지식주(인간)의 역할 분담</title>
      <defs>
        <marker id="roleArr" markerWidth="6" markerHeight="6" refX="3" refY="3" orient="auto">
          <path d="M0,0 L6,3 L0,6 Z" fill="#c4a84d"/>
        </marker>
      </defs>
      <rect width="640" height="230" fill="#ffffff"/>

      <!-- 하느님 = 창조주 -->
      <ellipse cx="180" cy="110" rx="145" ry="75" fill="#fdf8ef" stroke="#f0d97a" stroke-width="1.5"/>
      <text x="180" y="85" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="14" fill="#f0d97a" font-weight="700">하느님</text>
      <text x="180" y="105" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#c4a84d">창조주(創造主)</text>
      <text x="180" y="125" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#9a7a30">물질 에너지로</text>
      <text x="180" y="142" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#6a5010">만물을 창조</text>

      <!-- 화살표 양쪽 -->
      <line x1="328" y1="95" x2="312" y2="95" stroke="#c4a84d" stroke-width="1" marker-end="url(#roleArr)"/>
      <line x1="312" y1="125" x2="328" y2="125" stroke="#c4a84d" stroke-width="1" marker-end="url(#roleArr)"/>
      <text x="320" y="108" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="9" fill="#6a5010">협력</text>

      <!-- 인간 = 지식주 -->
      <ellipse cx="460" cy="110" rx="145" ry="75" fill="#f8f0fc" stroke="#b070d4" stroke-width="1.5"/>
      <text x="460" y="85" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="14" fill="#b070d4" font-weight="700">인간</text>
      <text x="460" y="105" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="12" fill="#9050c0">지식주(知識主)</text>
      <text x="460" y="125" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#7040a0">비물질 에너지로</text>
      <text x="460" y="142" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#5030a0">지식과 진리를 배양</text>

      <!-- 하단 -->
      <text x="320" y="205" text-anchor="middle" font-family="Noto Serif KR,serif" font-size="13" fill="#c4a84d" font-weight="600">창조주는 하느님 · 지식주는 인간</text>
      <text x="320" y="222" text-anchor="middle" font-family="Noto Sans KR,sans-serif" font-size="10" fill="#6a5010">함께 창조하고 함께 우주를 운행한다</text>
    </svg>
    <div class="illus-cap">그림 10 — 창조주(하느님)와 지식주(인간)의 역할. 하느님은 물질 에너지로 만물을 창조하고, 인간은 비물질 에너지(말·지식·진리)로 우주를 운용한다.</div>
  </div>

  <p class="body">그래서 인간 육신이 필요했던 거예요. 육신은 하느님의 작품으로 필요했던 거고, 이 작품 속에 우리가 영혼이 들어가서 이걸 이제부터 발전을 시키는 거죠. 이래서 지식이 탄생을 합니다.</p>

  <p class="body">지식이 뭐냐면 이 컵의 이름을 만드는 게 지식이에요. 지식이 무르익고 나면 뭐든지 대상을 증명해요. 컵 중에서도 이것은 크리스털이라고 이름까지 붙여. <b>사람마다 이름을 만들고 사람마다 관리할 수 있는 이러한 공부도 하고 있고 그러면서 생각하는 거예요. 이런 모두 지식의 주인은 인간으로서 비롯되는 거죠.</b></p>

  <p class="body">인간들이 만들어 놓은 것은 하느님과 우리 원소가 같이 만든 작품이기 때문에 인간이에요 이게. 그럼 이 인간이 작품을 만들어서 <b>앞으로 미래의 우주를 통치한다. 우주를 운행한다.</b> 이 말이죠.</p>

  <div class="key-quote">
    <p>"창조물은 신의 몸으로 스스로 빚은 것이다.<br><br>
    그것을 가지고 우리는 같이 지금 쓰기 위해서 — 인간 육신 창조물까지 해놓은 것을 여기에 쫘악 들어와가지고, 우리는 같이 이 창조물을 쓰고 있는 거라.<br><br>
    이렇게 이해하면 됩니다."</p>
  </div>

  <p class="body">그렇게 해서 모든 게 앞으로는 이 세상에 인기들이 오면 육신을 쓰면 완성품으로 다 오는데, 이것이 어떤 역할을 하고 마무리를 할 거냐 — <b>지금 이 시대에 있는 것이다.</b></p>
</div>

<div class="section-divider"><span>◇</span></div>

</div>
`,
  },

  totalRating: 9,
  ratingCount: 5,
  reviews: [
    { id: 'r1', user: 'reader1***', date: '2024.03.15', rating: 5, tag: '추천해요', content: '깊은 성찰을 담은 책입니다. 신의 존재에 대해 진지하게 생각하게 됩니다.', type: '구매자' },
    { id: 'r2', user: 'book_lover**', date: '2024.01.20', rating: 4, tag: '도움돼요', content: '인생의 근본적인 질문들을 다루고 있어 인상적이었습니다.', type: '구매자' },
  ],
};

export default god1;