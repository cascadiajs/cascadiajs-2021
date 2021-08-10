@app
cascadiajs-2021

@static
folder public
fingerprint true

@views
src src/views

@shared
src src/shared

@http
get /changelog*
get /*

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
