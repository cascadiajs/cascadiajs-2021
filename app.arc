@app
cascadiajs-2021

@static
folder public
fingerprint true

@views
src src/views

@http
get  /admin
get  /changelog
get  /modules/:type/:module
get  /speakers
get  /speakers/:key
post /login
post /speakers
get /*

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
