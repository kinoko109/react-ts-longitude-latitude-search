const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  // エントリーポイント
  entry: './src/index.tsx',
  // 出力設定
  output: {
    // ディレクトリ名
    path: `${__dirname}/dist`,
    // ファイル名
    filename: 'main.js',
  },
  plugins: [new Dotenv({ systemvars: true })],
  module: {
    rules: [
      {
        // .ts、.tsx
        test: /\.tsx?$/,
        // TypeScriptコンパイル
        use: 'ts-loader',
      },
    ],
  },
  // import 文で .ts や .tsx ファイルを解決するため
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.json'],
  },
};
