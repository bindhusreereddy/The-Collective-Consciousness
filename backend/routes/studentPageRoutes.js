var express = require('express');
var router = express.Router();

var monthData = './Dataset/data.json';
const fs = require('fs')

router.post('/month', function (req, res) {
    var data = [
        {
          "Month": 1,
          "value": 0.812
        },
        {
          "Month": 2,
          "value": 0.543
        },
        {
          "Month": 3,
          "value": 0.555
        },
        {
          "Month": 4,
          "value": 0.667
        },
        {
          "Month": 5,
          "value": 0.689
        },
        {
          "Month": 6,
          "value": 0.89
        },
        {
          "Month": 7,
          "value": 0.7
        },
        {
          "Month": 8,
          "value": 0.75
        },
        {
          "Month": 9,
          "value": 0.899
        },
        {
          "Month": 10,
          "value": 0.634
        },
        {
          "Month": 11,
          "value": 0.522
        },
        {
          "Month": 12,
          "value": 0.563
        },
        {
          "Month": 13,
          "value": 0.678
        },
        {
          "Month": 14,
          "value": 0.779
        },
        {
          "Month": 15,
          "value": 0.834
        },
        {
          "Month": 16,
          "value": 0.856
        },
        {
          "Month": 17,
          "value": 0.898
        },
        {
          "Month": 18,
          "value": 0.672
        },
        {
          "Month": 19,
          "value": 0.899
        },
        {
          "Month": 20,
          "value": 0.901
        },
        {
          "Month": 21,
          "value": 0.934
        },
        {
          "Month": 22,
          "value": 0.966
        },
        {
          "Month": 23,
          "value": 0.796
        },
        {
          "Month": 24,
          "value": 0.853
        },
        {
          "Month": 25,
          "value": 0.789
        },
        {
          "Month": 26,
          "value": 0.923
        },
        {
          "Month": 27,
          "value": 0.966
        },
        {
          "Month": 28,
          "value": 0.823
        },
        {
          "Month": 29,
          "value": 0.856
        },
        {
          "Month": 30,
          "value": 0.911
        },
        {
          "Month": 31,
          "value": 0.656
        },
        {
          "Month": 32,
          "value": 0.514
        },
        {
          "Month": 33,
          "value": 0.756
        },
        {
          "Month": 34,
          "value": 0.749
        },
        {
          "Month": 35,
          "value": 0.823
        },
        {
          "Month": 36,
          "value": 0.86
        },
        {
          "Month": 37,
          "value": 0.923
        },
        {
          "Month": 38,
          "value": 0.965
        },
        {
          "Month": 39,
          "value": 0.782
        },
        {
          "Month": 40,
          "value": 0.911
        }
      ];
    res.send(data);
})

router.post('/accuracy', function (req, res) {
    var data = [
        { "id": 1, "value":0.02198621},{ "id": 2, "value":0.08895936},{ "id": 3, "value":0.09901178},{ "id": 4, "value":0.13266398},{ "id": 5, "value":0.19829157},{ "id": 6, "value":0.28352921},{ "id": 7, "value":0.28352921},{ "id": 8, "value":0.3162881},{ "id": 9, "value":0.3289843},{ "id": 10, "value":0.50747183},
        { "id": 11, "value":0.54961495},{ "id": 12, "value":0.56543448},{ "id": 13, "value":0.67789103},{ "id": 14, "value":0.67789103},{ "id": 15, "value":0.67789103},{ "id": 16, "value":0.71154304},{ "id": 17, "value":0.71154304},{ "id": 18, "value":0.79984084},{ "id": 19, "value":0.83689696},{ "id": 20, "value":0.84401255},
        { "id": 21, "value":0.84401255},{ "id": 22, "value":0.87136611},{ "id": 23, "value":0.90279595},{ "id": 24, "value":0.91115744},{ "id": 25, "value":0.91115744},{ "id": 26, "value":0.9136093},{ "id": 27, "value":0.9548788},{ "id": 28, "value":0.96131084},{ "id": 29, "value":0.96307807},{ "id": 30, "value":0.97480549},
        { "id": 31, "value":0.98753643},{ "id": 32, "value":1.00100944},{ "id": 33, "value":1.00329349},{ "id": 34, "value":1.0069054},{ "id": 35, "value":1.0069054},{ "id": 36, "value":1.0069054},{ "id": 37, "value":1.0069054},{ "id": 38, "value":1.00783866},{ "id": 39, "value":1.00783866},{ "id": 40, "value":1.00785817},
        { "id": 41, "value":1.00785817},{ "id": 42, "value":1.00169266},{ "id": 43, "value":1.00169266},{ "id": 44, "value":0.99495104},{ "id": 45, "value":0.99495104},{ "id": 46, "value":0.99152426},{ "id": 47, "value":0.99042085},{ "id": 48, "value":0.98438755},{ "id": 49, "value":0.96304157},{ "id": 50, "value":0.94049629},
        { "id": 51, "value":0.94049629},{ "id": 52, "value":0.9195728},{ "id": 53, "value":0.9082117},{ "id": 54, "value":0.88381623},{ "id": 55, "value":0.85046178},{ "id": 56, "value":0.85046178},{ "id": 57, "value":0.84040439},{ "id": 58, "value":0.83734476},{ "id": 59, "value":0.81434399},{ "id": 60, "value":0.77592768},
        { "id": 61, "value":0.76402576},{ "id": 62, "value":0.76059692},{ "id": 63, "value":0.73569001},{ "id": 64, "value":0.68567566},{ "id": 65, "value":0.68567566},{ "id": 66, "value":0.60880365},{ "id": 67, "value":0.60880365},{ "id": 68, "value":0.59654421},{ "id": 69, "value":0.59286824},{ "id": 70, "value":0.52356042},
        { "id": 71, "value":0.5109778},{ "id": 72, "value":0.48194999},{ "id": 73, "value":0.48194999},{ "id": 74, "value":0.4494584},{ "id": 75, "value":0.36497998},{ "id": 76, "value":0.36497998},{ "id": 77, "value":0.32941643},{ "id": 78, "value":0.18324418},{ "id": 79, "value":0.16493453},{ "id": 80, "value":0.15629272}
    ];
    res.send(data);
})

router.post('/percentile', function(req, res) {
    var data = [
        {
            "percentile": "25th",
            "val":7.0
        },
        {
            "percentile": "50th",
            "val":9.5
        },    
        {
            "percentile": "75th",
            "val":10.75
        },
        {
            "percentile": "90th",
            "val":12.0
        },
        {
            "percentile": "99th",
            "val":12.0
        }
    ];
    res.send(data);
})

module.exports = router;