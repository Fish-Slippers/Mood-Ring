// jest testing for pg calls
const request = require('supertest');
const babelPolyfill = require('babel-polyfill');
const app = 'localhost:3000//';


const { Pool } = require('pg');
const { PG_URI } = process.env;

const pool = new Pool({
  connectionString: PG_URI,
});

beforeAll((done) => {
    done();
  });
  
  afterAll((done) => {
    pool.end();
    done();
  });


// /*
// ****************************************
// * should have a table users
// * should have id, username, hash, oauth_id columns
// * username and password should be required
// * should store new entry upon POST req to user/register
// * stored hash should not equal inputted plain test password
// * should find user by username upon POST req to user/login
// ****************************************
// */


describe('/GET', () => {
  it('should return 200', async (done) => {
    const result = await request(app).get('/test');
    expect(result.status).toBe(200);
    done();
  });
});



// // 
// // 
// // * should have a table calendar
// // * should have an id, date, mood, user_id columns
// // * should store new entry upon POST req to user/mood
// // * should retreive all dates and moods for requested user_id
