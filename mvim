diff --git a/public/index.html b/public/index.html
index bb724c7..bcbbd7a 100644
--- a/public/index.html
+++ b/public/index.html
@@ -20,20 +20,15 @@
   <body>
     <main-nav></main-nav>
 
+    <div ng-controller="chooseSchoolModalCtrl">
+      <button id="chooseSchoolModalButton" style="display: none;" type="button" ng-click="open()"></button>
+    </div>
+
     <div class="container-fluid">
 
       <div class="row main-search">
         <div class="col-md-6 col-md-offset-3 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
 
-          <!-- <div class="pull-left"> -->
-          <!--     <select class="form-control"> -->
-          <!--       <option>1</option> -->
-          <!--       <option>2</option> -->
-          <!--       <option>3</option> -->
-          <!--       <option>4</option> -->
-          <!--       <option>5</option> -->
-          <!--     </select> -->
-          <!-- </div> -->
           <div class="input-group">
             <input type="text" class="form-control transparent-input" placeholder="For example: eecs 482">
             <span class="input-group-btn">
@@ -47,6 +42,8 @@
       </div><!-- /.row -->
 
 
+
+
     </div> <!-- end container -->
 
     <!-- jquery -->
@@ -56,13 +53,14 @@
     <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
     <!-- angular -->
     <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.4.8/angular.min.js"></script>
-
+    <script src="js/vendors/ui-bootstrap-tpls-1.1.0.min.js"></script>
     <script src="js/vendors/dropdownsEnhancement.js"></script>
 
     <!-- angular app js -->
     <script src="js/app.js"></script>
     <!-- angular controllers -->
     <script src="js/controllers/mainController.js"></script>
+    <script src="js/controllers/chooseSchoolModalCtrl.js"></script>
     <!-- angular directives -->
     <script src="js/directives/mainNav.js"></script>
 
diff --git a/public/js/app.js b/public/js/app.js
index d7e707c..706fca4 100644
--- a/public/js/app.js
+++ b/public/js/app.js
@@ -1,4 +1,4 @@
 // Create a app called scotchTodo
 // Create controllers under public/js/controllers/
 // Create directives under public/js/directives/
-var scotchTodoApp = angular.module("scotchTodoApp", []);
+var scotchTodoApp = angular.module("scotchTodoApp", ['ui.bootstrap']);
diff --git a/public/js/main.js b/public/js/main.js
index e1f442d..3ec7094 100644
--- a/public/js/main.js
+++ b/public/js/main.js
@@ -1,3 +1,9 @@
 // https://responsivedesign.is/resources/javascript-jquery/back-stretch
 $.backstretch("img/home_background.jpg", {speed: 150});
 
+$(document).ready(function() {
+
+  $('#chooseSchoolModalButton').click();
+
+});
+
