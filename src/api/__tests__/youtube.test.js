const youtube = require('../youtube')

describe('#getVideos() from youtube api', () => {
    it('should load videos', async () => {
        const data = await youtube.getVideos('surffing')
        console.log('=================== data ==============');
        // console.log(data.entity);
        // console.log(data.entity.items[0].snippet.title);
        expect(data).toBeDefined();
        expect(data.status.code).toEqual(200);
        // expect(data.entity.items[0].snippet.title).toMatch(/surffing/i)
    })
})