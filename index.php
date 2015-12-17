<!DOCTYPE html>
<html ng-app="myApp">
<head>
	<title></title>
</head>
<body>

<ul>
	<li><a ui-sref="home">Home</a></li>
	<li><a ui-sref="user">User</a></li>
</ul>

<div ui-view></div>


<script type="text/javascript" src="assets/js/libs/angular/angular.js"></script>
<script type="text/javascript" src="assets/js/libs/angular-ui-router/release/angular-ui-router.js"></script>
<script type="text/javascript" src="assets/js/app.js"></script>
</body>
</html>