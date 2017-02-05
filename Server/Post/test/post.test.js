process.env.NODE_ENV = 'test';

const query = require('../query');
const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');
const should = chai.should(); // eslint-disable-line
const testcoverage = require('../test-coverage/util');

chai.use(chaiHttp);

const getAll = () => {
    it('it should GET ALL the posts', done => {
        const record = {
            postId: 1,
            postTitle: 'Đội bóng của Công Vinh thiếu gì để thành công?',
            catId: 1,
            acId: 1,
            summary: '(Dân trí)',
            content: 'Sau 2 trận',
            quantityView: 0,
        };

        chai.request(server)
            .post('/post')
            .send(record)
            .end((err, res) => {        // eslint-disable-line
                should.not.exist(err);
                if (!err) {
                    chai.request(server)
                        .get('/post')
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
    it('it should POST a post', done => {
        const record = {
            postId: 2,
            postTitle: 'Đội bóng của Công Vinh thiếu gì để thành công?',
            catId: 1,
            acId: 1,
            summary: '(Dân trí)',
            content: 'Sau 2 trận',
            quantityView: 0,
        };

        chai.request(server)
            .post('/post')
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
    it('it should PUT post', done => {
        const record = {
            postId: 3,
            postTitle: 'Đội bóng của Công Vinh thiếu gì để thành công?',
            catId: 1,
            acId: 1,
            summary: '(Dân trí)',
            content: 'Sau 2 trận',
            quantityView: 0,
        };
        const key = {
            postId: 3,
        };

        chai.request(server)
            .post('/post')
            .send(record)
            .end((err, res) => {        // eslint-disable-line
                should.not.exist(err);
                if (!err) {
                    chai.request(server)
                        .put(`/post?key=${JSON.stringify(key)}`)
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
    it('it should DELETE post', done => {
        const record = {
            postId: 4,
            postTitle: 'Đội bóng của Công Vinh thiếu gì để thành công?',
            catId: 1,
            acId: 1,
            summary: '(Dân trí)',
            content: 'Sau 2 trận',
            quantityView: 0,
        };
        const key = {
            postId: 4,
        };

        chai.request(server)
            .post('/post')
            .send(record)
            .end((err, res) => {        // eslint-disable-line
                should.not.exist(err);
                if (!err) {
                    chai.request(server)
                        .delete(`/post?key=${JSON.stringify(key)}`)
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

describe('\n\n\nposts Test API', () => {
    beforeEach(done => {
        query.deleteAll(done);
    });
    describe('\n\n/GET ALL post', getAll);
    describe('\n\n/POST post', post);
    describe('\n\n/PUT post', put);
    describe('\n\n/DELETE post', del);
});

describe('\n\n\nposts Test Function', () => {
    describe('\n\n/Coverage code', coverage);
});
