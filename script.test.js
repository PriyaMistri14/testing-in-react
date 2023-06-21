const googleSearch = require('./script')

const testDB = [
    'dogpictures.com',
    'panipuri.com',
    'clothes.com',
    'clothespictures.com'
]


it("this is the first test", () => {
    expect("hello").toBe("hello")
})


describe("Google Search", () => {

    it("Google search test", () => {
        expect(googleSearch("test", testDB)).toEqual([])

    })
    it("Google search test clothes", () => {
        expect(googleSearch("clothes", testDB)).toEqual(['clothes.com',
            'clothespictures.com'])

    })
})



