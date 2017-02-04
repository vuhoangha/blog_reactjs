const testcoverage = {};

testcoverage.sum1 = (a, b) => {
    return a + b;
};

testcoverage.sum2 = (a, b) => ({
    tong: a + b,
    hieu: a - b,
});

module.exports = testcoverage;
