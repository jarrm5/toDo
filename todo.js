var angularTodo = angular.module('angularTodo', []);

angularTodo.controller('angularTodoC', ['$scope', function ($scope) {
    // define list of items
    $scope.items = [new ListItem('item1'),new ListItem('item2'),new ListItem('item3'),new ListItem('item4')];

    // Write code to push new item
    $scope.submitNewItem = function (item) {
        $scope.items.push(new ListItem(item));
    };

    // Write code to complete item
    $scope.completeItem = function (index) {
        $scope.items[index].completed = true;
    };

    // Write code to delete item
    $scope.deleteItem = function (index) {
        $scope.items.splice(index, 1);
    };

    $scope.bindEnterKey = function(keyEvent) {
        if (keyEvent.which === 13)
          $scope.submitNewItem($scope.inputValue);
    }

}]);

function ListItem(task) {
    this.task = task;
    this.completed = false;
}