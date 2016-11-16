function chatCtrl() {
    var vm=this;

    vm.test = 'TEST';
}
angular.module('cbsChat')
.controller('chatCtrl',[chatCtrl]);