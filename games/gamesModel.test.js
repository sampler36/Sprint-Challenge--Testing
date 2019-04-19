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
//     describe('delete', () => {
//         afterEach(async () => {
//             await db('games').truncate();
//     });
// 		it('should delete the given game out the db', async () => {
//             const newgame = await game.insert({ title: 'Lost Ark', genre:'Tactical RPG' });
//                // removes the added game 
//             const deleteGame = await game.remove(1);
            
//           //shows all the left out  games which is 0 
//             const games = await db('games');
           
//              //count the number of games and calculate the length
// 			expect(games).toHaveLength(0);
// 		});

// });
    
})
