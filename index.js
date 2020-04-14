const express = require('express')
const app = express()
const port = 8080

app.get('/', (req, res) => res.send('Koji sam ja bog deploymentaaaa - kedmenecr@2020 !'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

