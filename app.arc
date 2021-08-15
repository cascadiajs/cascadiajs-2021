@app
cascadiajs-2021

@static
folder public
fingerprint true

@views
src src/views

@http
get /changelog
get /admin
post /login
post /upload
get /*

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
