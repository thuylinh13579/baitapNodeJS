const mw = require('./my-middleware.js')

app.use(mw({ option1: '1', option2: '2' }))