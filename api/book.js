export default async function handler(req, res) {
  const { query, sort, page, size } = req.query;

  const response = await fetch(
    `https://dapi.kakao.com/v3/search/book?query=${encodeURIComponent(query)}&sort=${sort || 'accuracy'}&page=${page || 1}&size=${size || 6}`,
    {
      headers: {
        Authorization: `KakaoAK ${process.env.VITE_KAKAO_API_KEY}`,
      },
    }
  );

  const data = await response.json();
  res.status(200).json(data);
}