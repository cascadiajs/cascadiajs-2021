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
post /speakers/:key
get /*

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

@aws
runtime nodejs14.x
# memory 1152
# timeout 30
# concurrency 1
