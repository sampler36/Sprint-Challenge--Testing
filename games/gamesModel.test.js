const db = require('../data/dbConfig');
const game = require('./gamesModel')

describe(' model', () => {
    beforeEach(async () => {
        await db('games').truncate();
    })
    describe('insert()', () => {
        it('should insert new game into the db', async () => {
            await game.insert({title:'Sonic', genre: 'Arcade' });
            await game.insert({title:'GTAV', genre: 'Console' });
            await game.insert({title:'The Simms', genre: 'Lifestyle' });
            const games = await db('games')
            expect(games).toHaveLength(3);
        })

    })

})