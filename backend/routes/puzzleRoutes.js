var express = require('express');
var router = express.Router();
var analysis = require('../analysis/puzzleGameAnalysis');

router.post('/getAccuracyRate', function (req, res) {
    var data = analysis.getAccuracyRate();
    res.send(data);
});

router.post('/getStarGrowthRate', function (req, res) {
    var data = analysis.getStarGrowthRate();
    res.send(data);
});

router.post('/getCurrStars', function (req, res) {
    var data = analysis.getCurrStars();
    res.send(data);
});

router.post('/getAverageSessionTime', function (req, res) {
    var data = analysis.getAverageSessionTime();
    res.json(data);
});

router.post('/getHints', function (req, res) {
    var data = analysis.getHints();
    res.send(data);
});

router.post('/getMostUsedWords', function (req, res) {
    var data = analysis.getWordsFreq();
    res.send(data);
})

router.post('/getRolls', function (req, res) {
    var data = analysis.getRolls();
    res.send(data);
})

router.post('/singleUserData',function (req, res) {
    var data = analysis.singleUserData();
    res.send(data);
})

module.exports = router;
