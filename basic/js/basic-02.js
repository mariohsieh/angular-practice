function TodoCtrl($scope) {
	$scope.todos = [
		{text: 'learn angular', done:true},
		{text:'build an angular app', done:false}];

	$scope.addTodo = function() {
		$scope.todos.push({text:$scope.todoText, done:false});	//adds a new todo that's not checked off
		$scope.todoText = '';	//blank until user input
	};

	$scope.remaining = function() {
		var count = 0;
		angular.forEach($scope.todos, function(todo) {
			count += todo.done ? 0 : 1;	//one line if-statement, add to count if not checked off
		});
		return count;
	};

	$scope.archive = function() {
		var oldTodos = $scope.todos;
		$scope.todos = [];	//empty array
		angular.forEach(oldTodos, function(todo) {	//add todos back to array if not checked off
			if (!todo.done) $scope.todos.push(todo);
		});
	};
}
