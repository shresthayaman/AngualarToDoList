"use strict";

// variable to add: todoInput, activeList, completedList

angular.module("todoList", []).component("todoList", {
  controller: TodoListController,
  contollerAs: "vm",
  template: "<h1>Hello world<h1>"
  //templateUrl: "todo-list/todo-list.template.html",
});

function TodoListController() {
  let vm = this;

  vn.name = "Yaman";

  // vm.activeList = [{task:"Sample Task", completed:false}];
  // vm.completedList = [];
  // vm.addToList = addToList;
  // vm.moveToComplete = moveToComplete;

  // function addToList()
  //   vm.activeList.push({title:vm.input, completed: false})
}
