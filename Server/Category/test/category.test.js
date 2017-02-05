process.env.NODE_ENV = 'test';

const query = require('../query');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should(); // eslint-disable-line
const testcoverage = require('../test-coverage/util');

chai.use(chaiHttp);

const getAll = () => {
    it('it should GET ALL the category', done => {
        const record = {
            catId: 1,
            quantityPost: 0,
            catName: 'Thể Thao',
        };

        chai.request(server)
            .post('/category')
            .send(record)
            .end((err, res) => {        // eslint-disable-line
                should.not.exist(err);
                if (!err) {
                    chai.request(server)
                        .get('/category')
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
    it('it should POST a category', done => {
        const record = {
            catId: 2,
            quantityPost: 0,
            catName: 'Thể Thao',
        };

        chai.request(server)
            .post('/category')
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
    it('it should PUT category', done => {
        const record = {
            catId: 3,
            quantityPost: 0,
            catName: 'Thể Thao',
        };
        const key = {
            catId: 3,
        };

        chai.request(server)
            .post('/category')
            .send(record)
            .end((err, res) => {        // eslint-disable-line
                should.not.exist(err);
                if (!err) {
                    chai.request(server)
                        .put(`/category?key=${JSON.stringify(key)}`)
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
    it('it should DELETE category', done => {
        const record = {
            catId: 4,
            quantityPost: 0,
            catName: 'Thể Thao',
        };
        const key = {
            catId: 4,
        };

        chai.request(server)
            .post('/category')
            .send(record)
            .end((err, res) => {        // eslint-disable-line
                should.not.exist(err);
                if (!err) {
                    chai.request(server)
                        .delete(`/category?key=${JSON.stringify(key)}`)
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

describe('\n\n\nCategory Test API', () => {
    beforeEach(done => {
        query.deleteAll(done);
    });
    describe('\n\n/GET ALL category', getAll);
    describe('\n\n/POST category', post);
    describe('\n\n/PUT category', put);
    describe('\n\n/DELETE category', del);
});

describe('\n\n\nCategory Test Function', () => {
    describe('\n\n/Coverage code', coverage);
});
