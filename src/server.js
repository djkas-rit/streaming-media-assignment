const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const mediaHandler = require('./mediaResponses.js');

const port = process.env.PORT || process.env.NODE_PORT || 3000;

const onRequest = (request, response) => {
  switch (request.url) {
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/client2':
      htmlHandler.getIndex2(request, response);
      break;
    case '/party.mp4':
      mediaHandler.getMedia(request, response, '../client/party.mp4', 'video/mp4');
      break;
    case '/bling.mp3':
      mediaHandler.getMedia(request, response, '../client/bling.mp3', 'audio/mpeg');
      break;
    case '/bird.mp4':
      mediaHandler.getMedia(request, response, '../client/bird.mp4', 'video/mp4');
      break;
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

http.createServer(onRequest).listen(port);
