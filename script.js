const googleDB = [
    'cats.com',
    'catpictures.com',
    'dog.com',
    'sandwitch.com'

]

const googleSearch= (searchInput, db)=>{
    const matches = db.filter(web=> {return web.includes(searchInput)})

    return matches
}


console.log(googleSearch("cat", googleDB))


module.exports= googleSearch