const codec = require('@scola/api-codec');
const deflate = require('@scola/api-codec-deflate');
const formData = require('@scola/api-codec-form-data');
const gzip = require('@scola/api-codec-gzip');
const json = require('@scola/api-codec-json');
const octetStream = require('@scola/api-codec-octet-stream');
const urlEncoded = require('@scola/api-codec-url-encoded');

function requestEncodings(...codecs) {
  return codec.request.encodings(
    gzip.decoder(),
    deflate.decoder(),
    ...codecs
  );
}

function requestMediaTypes(...codecs) {
  return codec.request.mediaTypes(
    formData.decoder(),
    json.decoder(),
    urlEncoded.decoder(),
    octetStream.decoder(),
    ...codecs
  );
}

function responseEncodings(...codecs) {
  return codec.response.encodings(
    gzip.encoder(),
    deflate.encoder(),
    ...codecs
  );
}

function responseMediaTypes(...codecs) {
  return codec.response.mediaTypes(
    json.encoder(),
    octetStream.encoder(),
    ...codecs
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
