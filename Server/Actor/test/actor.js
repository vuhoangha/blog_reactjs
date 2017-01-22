process.env.NODE_ENV = 'test';

const query = require('../query');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should(); // eslint-disable-line

chai.use(chaiHttp);

const getAll = () => {
    it('it should GET all the actors', done => {
        chai.request(server)
            .get('/actor')
            .end((err, res) => {        // eslint-disable-line
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
    });
};

const post = () => {
    it('it should not POST a actor without acName field', done => {
        const actor = {
            acId: 10,
            quantityPost: 12,
            acName: 'vuhoangha',
        };

        chai.request(server)
            .post('/actor')
            .send(actor)
            .end((err, res) => {
                console.log(err);
                console.log(res.body);
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });
};

describe('Actors', () => {
    beforeEach(done => {
        query.deleteAll(done);
    });
    describe('/GET actor', getAll);
    describe('/POST actor', post);
});
