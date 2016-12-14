var express = require('express');
var app = express();
var PORT = process.env.PORT || 3000;
var todos = [{
	id: 1,
	description: 'Get job in a start up',
	completed: false
}, {
	id: 2,
	description: 'Learn new technologies',
	completed: false
}, {
	id: 3,
	description: 'Acheive success slowly',
	completed: true
}];

app.get('/', function(req,res) {
	res.send('Todo API Root');
});

//Get /todos
app.get('/todos', function(req, res){
	res.json(todos);
});

//Get /todos:id
app.get('/todos/:id', function (req, res) {

	var todoId = parseInt(req.params.id);
	var matchedTodo;
	todos.forEach(function (todo) {
		if(todoId === todo.id) {
			matchedTodo = todo;
			
		}
	});
	res.json(matchedTodo);
// res.josn(todos[0]);
	//res.send('Asking for todo with id of ' + todoId + matchedTodo);
});

app.listen(PORT, function () {
	console.log('Express listening on port ' + PORT + '!');
});