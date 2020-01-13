const youtube = require('../youtube')
const searchText = 'surffing';

function checkIfTitleIncludes(title) {
    return title.includes(searchText);
}

describe('#getVideos() from youtube api', () => {
    it('should load videos', async () => {
        const data = await youtube.getVideos(searchText)
        expect(data).toBeDefined();
        expect(data.status.code).toEqual(200);
    })
    
    it(`should load videos related to ${searchText}`, async () => {
        const data = await youtube.getVideos(searchText)
        expect(data).toBeDefined();
        expect(data.status.code).toEqual(200);
        const titles = data.entity.items.map(item => item.snippet.title);
        let result = titles.some(checkIfTitleIncludes);
        expect(result).toBe(true)
    })
})