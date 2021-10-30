import { expect } from 'chai';
import config from 'config';
import request from 'supertest';
import server from '../../src/index';
import game from '../../src/models/game';

describe('Chess Main Route', () => {
  it('GET /chess/newGame return 200 success code', async () => {
    const response = await request(server).get('/chess/newGame');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an.instanceOf(game);
  });

  it('GET /chess/games return games', async () => {
    const response = await request(server).get('/chess/games');
    expect(response.status).to.equal(200);
    expect(response.body).to.be.an('array').that.contains.something.that.is.instanceOf(game);
  });
});
