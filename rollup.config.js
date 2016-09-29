import buble from 'rollup-plugin-buble';

export default {
  dest: './dist/api-codec-preset.js',
  entry: 'index.js',
  format: 'cjs',
  external: [
    '@scola/api-codec',
    '@scola/api-codec-deflate',
    '@scola/api-codec-form-data',
    '@scola/api-codec-gzip',
    '@scola/api-codec-json',
    '@scola/api-codec-msgpack',
    '@scola/api-codec-octet-stream',
    '@scola/api-codec-url-encoded'
  ],
  plugins: [
    buble()
  ]
};
