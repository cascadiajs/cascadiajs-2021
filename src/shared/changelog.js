let join = require('path').join
let fs = require('fs')
let readDir = fs.readdirSync
let readFile = fs.readFileSync
let fm = require('front-matter')

module.exports = function () {
    let path = join(process.cwd(), 'node_modules', '@architect', 'views', 'content', 'changelog')
    let files = readDir(path)
    return files
        .map(file => {
            let doc = readFile(`${path}/${file}`).toString()
            let { attributes } = fm(doc)
            let stub = file.split('.')[0]
            return { file, stub, ...attributes }
        })
        .filter(post => post.published)
}
