import {
  requestEncodings as codecRequestEncodings,
  requestMediaTypes as codecRequestMediaTypes,
  responseEncodings as codecResponseEncodings,
  responseMediaTypes as codecResponseMediaTypes
} from '@scola/api-codec';

import {
  decoder as deflateDecoder,
  encoder as deflateEncoder
} from '@scola/api-codec-deflate';

import {
  decoder as formDataDecoder
} from '@scola/api-codec-form-data';

import {
  decoder as gzipDecoder,
  encoder as gzipEncoder
} from '@scola/api-codec-gzip';

import {
  decoder as jsonDecoder,
  encoder as jsonEncoder
} from '@scola/api-codec-json';

import {
  decoder as octetStreamDecoder,
  encoder as octetStreamEncoder
} from '@scola/api-codec-octet-stream';

import {
  decoder as urlEncodedDecoder
} from '@scola/api-codec-url-encoded';

export function requestEncodings(...codecs) {
  return codecRequestEncodings(
    gzipDecoder(),
    deflateDecoder(),
    ...codecs
  );
}

export function requestMediaTypes(...codecs) {
  return codecRequestMediaTypes(
    formDataDecoder(),
    jsonDecoder(),
    urlEncodedDecoder(),
    octetStreamDecoder(),
    ...codecs
  );
}

export function responseEncodings(...codecs) {
  return codecResponseEncodings(
    gzipEncoder(),
    deflateEncoder(),
    ...codecs
  );
}

export function responseMediaTypes(...codecs) {
  return codecResponseMediaTypes(
    jsonEncoder(),
    octetStreamEncoder(),
    ...codecs
  );
}
