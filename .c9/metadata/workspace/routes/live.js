{"changed":true,"filter":false,"title":"live.js","tooltip":"/routes/live.js","value":"\"use strict\";\nvar express = require('express');\nvar router = express.Router();\nvar request = require('request');\n\n/* GET home page. */\nrouter.get('/genre/:id', function(req, res, next) {\n  var id = req.params.id;\n  request(`https://us.api.iheart.com/api/v2/content/liveStations?countryCode=US&limit=10&genreId=${id}`, function(err,data) {\n    var dataArray = JSON.parse(data.body).hits;\n    var newArray = [];\n    for (let i = 0; i < dataArray.length; i++) {\n      let obj = {};\n      let key = dataArray[i];\n      obj.id = key.id;\n      obj.name = key.name;\n      obj.freq = key.freq;\n      obj.band = key.band;\n      obj.callLetters = key.callLetters;\n      obj.description = key.description;\n      obj.genre = key.genres[0].name;\n      if(key.markets[0].city === 'Digital') {\n        obj.location = 'Online Radio';\n      } else {\n        obj.location = `${key.markets[0].city}, ${key.markets[0].stateAbbreviation}`;\n      }\n      obj.logo = key.logo;\n      obj.website = key.website;\n      obj.stream = key.streams.hls_stream;\n      if (obj.website) {\n        if (obj.website.indexOf('www') > -1) {\n          obj.website = \"https://\" + obj.website;\n        } else {\n          obj.website = \"https://www.\" + obj.website;\n        }\n      }\n      newArray.push(obj);\n    }\n    res.render('browse', {stations:newArray});\n  });\n});\n\nrouter.get('/city/:id', function(req, res, next) {\n  var id = req.params.id;\n  request(`https://us.api.iheart.com/api/v2/content/liveStations?countryCode=US&limit=10&marketId=${id}`, function(err,data) {\n    var dataArray = JSON.parse(data.body).hits;\n    var newArray = [];\n    for (let i = 0; i < dataArray.length; i++) {\n      let obj = {};\n      let key = dataArray[i];\n      obj.id = key.id;\n      obj.name = key.name;\n      obj.freq = key.freq;\n      obj.band = key.band;\n      obj.callLetters = key.callLetters;\n      obj.description = key.description;\n      let allGenres = [];\n      for (let j = 0; j < key.genres.length; j++) {\n        allGenres.push(key.genres[j].name);\n      }\n      obj.genres = allGenres;\n      if(key.markets[0].city === 'Digital') {\n        obj.location = 'Online Radio';\n      } else {\n        obj.location = `${key.markets[0].city}, ${key.markets[0].stateAbbreviation}`;\n      }\n      obj.logo = key.logo;\n      obj.website = key.website;\n      obj.stream = key.streams.hls_stream;\n      if (obj.website) {\n        if (obj.website.indexOf('www') > -1) {\n          obj.website = \"https://\" + obj.website;\n        } else {\n          obj.website = \"https://www.\" + obj.website;\n        }\n      }\n      newArray.push(obj);\n    }\n    res.render('browse', {stations:newArray});\n  });\n});\n\nmodule.exports = router;\n","undoManager":{"mark":-2,"position":4,"stack":[[{"start":{"row":31,"column":29},"end":{"row":31,"column":30},"action":"insert","lines":["s"],"id":2}],[{"start":{"row":33,"column":29},"end":{"row":33,"column":30},"action":"insert","lines":["s"],"id":3}],[{"start":{"row":71,"column":29},"end":{"row":71,"column":30},"action":"insert","lines":["s"],"id":4}],[{"start":{"row":73,"column":29},"end":{"row":73,"column":30},"action":"insert","lines":["s"],"id":5}],[{"start":{"row":8,"column":88},"end":{"row":8,"column":89},"action":"remove","lines":["0"],"id":6},{"start":{"row":38,"column":8},"end":{"row":38,"column":9},"action":"remove","lines":["s"]},{"start":{"row":38,"column":8},"end":{"row":38,"column":9},"action":"insert","lines":["r"]},{"start":{"row":38,"column":12},"end":{"row":38,"column":14},"action":"insert","lines":["er"]},{"start":{"row":38,"column":15},"end":{"row":38,"column":35},"action":"insert","lines":["'browse', {stations:"]},{"start":{"row":38,"column":43},"end":{"row":38,"column":44},"action":"insert","lines":["}"]},{"start":{"row":44,"column":88},"end":{"row":44,"column":89},"action":"remove","lines":["0"]},{"start":{"row":78,"column":8},"end":{"row":78,"column":9},"action":"remove","lines":["s"]},{"start":{"row":78,"column":8},"end":{"row":78,"column":9},"action":"insert","lines":["r"]},{"start":{"row":78,"column":12},"end":{"row":78,"column":14},"action":"insert","lines":["er"]},{"start":{"row":78,"column":15},"end":{"row":78,"column":35},"action":"insert","lines":["'browse', {stations:"]},{"start":{"row":78,"column":43},"end":{"row":78,"column":44},"action":"insert","lines":["}"]}]]},"ace":{"folds":[],"scrolltop":1129,"scrollleft":0,"selection":{"start":{"row":73,"column":30},"end":{"row":73,"column":30},"isBackwards":false},"options":{"guessTabSize":true,"useWrapMode":false,"wrapToView":true},"firstLineState":0},"timestamp":1468674958711}