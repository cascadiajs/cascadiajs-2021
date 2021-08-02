module.exports = function SocialLayout ({ header, image = '/images/heron-right.png', excerpt = '' }) {
  return /*html*/`
<!doctype html>
<html lang=en>
  <head>
    <meta charset=utf-8>
    <link rel="stylesheet" href="https://use.typekit.net/fro6sah.css">
    <link rel="stylesheet" href="/styles/normalize.css">
    <link rel="stylesheet" href="/styles/main.css">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <body>
    <div id="root">
      <div id="content">        
          <div id="social-share">
              <div id="social-image">
                <img src="${ image }" alt="foo"/>
              </div>
              <div id="social-info">
                  <div id="social-header">${ header }</div>
                  <div id="social-excerpt">${ excerpt }</div>
                  <div id="social-footer">
                    <div>
                      <img src="/images/logo-blue.svg" height="103" width="91" alt="logo"/>
                    </div>
                    <div id="social-event">
                          CascadiaJS<br/>
                          Nov 3-4, 2021<br/>
                          Online & In-Person
                    </div>
                  </div>
              </div>
          </div>
      </div>
    </div>
  </body>
</html>
`
}
