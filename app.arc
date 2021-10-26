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
post /code
post /codes
get  /conf/:view
get  /home/:view
post /home
post /links/:key
post /login
get  /modules/:type/:module
post /orders
get  /organizers/:key
get  /schedule
get  /social
get  /speakers
post /speakers
get  /speakers/:key
post /speakers/:key
get  /sponsors/:key
get  /tickets/:number
post /ticket
post /tickets
get /*

@tables
data
  scopeID *String
  dataID **String
  ttl TTL

@aws
runtime nodejs14.x

@events
ticket-shared