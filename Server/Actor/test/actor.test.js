process.env.NODE_ENV = 'test';

const query = require('../query');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should(); // eslint-disable-line
const testcoverage = require('../test-coverage/util');

chai.use(chaiHttp);

const getAll = () => {
    it('it should GET ALL the actors', done => {
        const record = {
            acId: 1,
            quantityPost: 0,
            acName: 'vuhoangha',
        };

        chai.request(server)
            .post('/actor')
            .send(record)
            .end((err, res) => {        // eslint-disable-line
                should.not.exist(err);
                if (!err) {
                    chai.request(server)
                        .get('/actor')
                        .end((err, res) => {        // eslint-disable-line
                            res.should.have.status(200);
                            console.log(res.body);
                            res.body.should.be.a('array');
                            res.body.length.should.be.eql(1);
                            done();
                        });
                }
            });
    });
};

const post = () => {
    it('it should POST a actor', done => {
        const record = {
            acId: 2,
            quantityPost: 20,
            acName: 'hoangthihuong',
        };

        chai.request(server)
            .post('/actor')
            .send(record)
            .end((err, res) => {        // eslint-disable-line
                res.should.have.status(200);
                res.text.should.be.a('string');
                res.text.should.equal('OK');
                done();
            });
    });
};

const put = () => {
    it('it should PUT actor', done => {
        const record = {
            acId: 3,
            quantityPost: 50,
            acName: 'vukhuongduy',
        };
        const key = {
            acId: 3,
        };

        chai.request(server)
            .post('/actor')
            .send(record)
            .end((err, res) => {        // eslint-disable-line
                should.not.exist(err);
                if (!err) {
                    chai.request(server)
                        .put(`/actor?key=${JSON.stringify(key)}`)
                        .send(record)
                        .end((err, res) => {        // eslint-disable-line
                            res.should.have.status(200);
                            res.text.should.be.a('string');
                            res.text.should.equal('OK');
                            done();
                        });
                }
            });
    });
};

const del = () => {
    it('it should DELETE actor', done => {
        const record = {
            acId: 4,
            quantityPost: 50,
            acName: 'vuvandoanh',
        };
        const key = {
            acId: 4,
        };

        chai.request(server)
            .post('/actor')
            .send(record)
            .end((err, res) => {        // eslint-disable-line
                should.not.exist(err);
                if (!err) {
                    chai.request(server)
                        .delete(`/actor?key=${JSON.stringify(key)}`)
                        .end((err, res) => {        // eslint-disable-line
                            res.should.have.status(200);
                            res.text.should.be.a('string');
                            res.text.should.equal('OK');
                            done();
                        });
                }
            });
    });
};

const coverage = () => {
    it('it test coverage code', () => {
        const sum1 = testcoverage.sum1(2, 1);
        const sum2 = testcoverage.sum2(2, 1);

        sum1.should.be.a('number');
        sum1.should.equal(3);
        sum2.should.be.a('object');
        sum2.should.have.property('tong').equal(3);
        sum2.should.have.property('hieu').equal(1);
    });
};

describe('\n\n\nActors Test API', () => {
    beforeEach(done => {
        query.deleteAll(done);
    });
    describe('\n\n/GET ALL actor', getAll);
    describe('\n\n/POST actor', post);
    describe('\n\n/PUT actor', put);
    describe('\n\n/DELETE actor', del);
});

describe('\n\n\nActors Test Function', () => {
    describe('\n\n/Coverage code', coverage);
});
