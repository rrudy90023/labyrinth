const path = require('path');
const express = require('express');
const app = express();
const socketIO = require('socket.io');
const PORT = process.env.PORT || 8080;

//here
const server = require('http').Server(app)
const io = require('socket.io').listen(server)

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/', function(request, response) {
  response.sendFile(path.resolve(__dirname + '/dist/index.html'));
});






// io.on('connection', (socket) => {
//   console.log('Client connected');
//   socket.on('disconnect', () => console.log('Client disconnected'));
// });

// setInterval(() => io.emit('time', new Date().toTimeString()), 1000);

io.on('connection', socket => {
	//console.log('Socket Loaded and Ready')
	socket.on('medellin', data => {
		console.log('server', data.cord);
		io.emit('loadx', data)
	})

	socket.on('splash', data => {
		io.emit('colorcatcher', data)
	})

	socket.on('boardon', data => {
		//io.emit('startpad', data)
		console.log(data)
	})

	socket.on('gamepad', data => {
		io.emit('initfloor', data)
		//console.log(data)
	})
})





server.listen(PORT, error => {
  error
  ? console.error(error)
  : console.info(`==> 🌎 Listening on port ${PORT}. Visit http://localhost:${PORT}/ in your browser.`)
});




