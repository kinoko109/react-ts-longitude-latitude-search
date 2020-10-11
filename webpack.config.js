module.exports = {
  mode: 'development',
  // エントリーポイント
  entry: './src/index.jsx',
  // 出力設定
  output: {
    // ディレクトリ名
    path: `${__dirname}/dist`,
    // ファイル名
    filename: 'main.js',
  },
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
