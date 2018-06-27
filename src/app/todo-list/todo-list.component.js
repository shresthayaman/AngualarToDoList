"use strict";

// variable to add: todoInput, activeList, completedList

angular.module("todoList", []).component("todoList", {
  bindings: {},
  controller: TodoListController,
  templateUrl: "todo-list/todo-list.template.html",
  controllerAs: "vm"
});

function TodoListController($http) {
  let vm = this;

  vm.currentInput = "";
  vm.activeList = [{ task: "Sample Task", completed: false }];
  vm.completedList = [];
  vm.addToList = addToList;
  vm.moveToComplete = moveToComplete;

  function addToList() {
    vm.activeList.push({ task: vm.currentInput, completed: false });
    vm.currentInput = "";
  }

  function moveToComplete() {
    vm.completedList = vm.activeList.filter(function(task) {
      if (task.completed === true) {
        return task;
      }
    });

    vm.activeList = vm.activeList.filter(function(task) {
      if (task.completed !== true) {
        return task;
      }
    });
  }

  TodoListController.$inject = ["$http"];
}
