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
post /codes
post /login
get  /modules/:type/:module
post /orders
get  /speakers
post /speakers
get  /speakers/:key
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
