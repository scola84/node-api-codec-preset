const codec = require('@scola/api-codec');
const deflate = require('@scola/api-codec-deflate');
const gzip = require('@scola/api-codec-gzip');
const json = require('@scola/api-codec-json');
const octetStream = require('@scola/api-codec-octet-stream');
const urlEncoded = require('@scola/api-codec-url-encoded');

function requestEncodings() {
  return codec.request.encodings(
    gzip,
    deflate
  );
}

function requestMediaTypes() {
  return codec.request.mediaTypes(
    json,
    urlEncoded,
    octetStream
  );
}

function responseEncodings() {
  return codec.response.encodings(
    gzip,
    deflate
  );
}

function responseMediaTypes() {
  return codec.response.mediaTypes(
    json,
    urlEncoded,
    octetStream
  );
}

module.exports = {
  base: codec,
  encodings: {
    deflate,
    gzip
  },
  mediaTypes: {
    json,
    octetStream,
    urlEncoded
  },
  request: {
    encodings: requestEncodings,
    mediaTypes: requestMediaTypes
  },
  response: {
    encodings: responseEncodings,
    mediaTypes: responseMediaTypes
  }
};
