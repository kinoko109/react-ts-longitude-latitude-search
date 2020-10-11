export const { API_KEY } = process.env;

export const GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';

// エラーメッセージ
export const errorMessage = {
  0: '結果がありません。',
  1: 'エラーが発生しました。',
  2: '通信エラー...',
  // eslint-disable-next-line no-undef
} as const;
