const fs = require('fs')

const request = (url) => new Promise((resolve, reject) => {
    fs.readFile(`./src/api/__mockData__/videos.json`, 'utf8', (err, data) => {
        if (err) reject(err)
        resolve({ entity: JSON.parse(data), status: { code: 200 } })
    })
})

export default request