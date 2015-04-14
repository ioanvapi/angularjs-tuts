


## Lesson 1 - Directives I
---

Here's an AngularJS app for a mobile app store:

* In the controller **MainController.js**, there are three objects `$scope.move`, `$scope.shutterbugg`, and `$scope.gameboard` that each contain info about an app,
like its `title` and `price`.
* In the view **index.html** in the `.main` section, each app is displayed inside a `.card` div.

But looking at the view, the same code is written over and over again to display each app. This is repetitive and error-prone. Let's fix this.

1. In the new file **js/directives/appInfo.js**, type in this code:


    ```
    app.directive('appInfo', function() {
      return {
        restrict: 'E',
        scope: {
          info: '='
        },
        templateUrl: 'js/directives/appInfo.html'
      };
    });
    ```

2. Include this new JavaScript file in **index.html** in line 48 as a `<script>` element.
3. In the new file **js/directives/appInfo.html**. Type in this HTML to display an app's info:


    ```
    <img class="icon" ng-src="{{ info.icon }}">
    <h2 class="title">{{ info.title }}</h2>
    <p class="developer">{{ info.developer }}</p>
    <p class="price">{{ info.price | currency }}</p>
    ```

4. In **index.html**, replace the contents of the first `.card` div with the new `<app-info>` element:


    ```
    <div class="card">
      <app-info info="move"></app-info>
    </div>
    ```

5. Do the same for the second and third `.card` divs. Replace their contents with
    `<app-info info="shutterbugg"></app-info>` and `<app-info info="gameboard"></app-info>`

## Lesson 2 - Directives II
---

What did we just do? We wrote code to teach the browser a new HTML element `<app-info>`, and used it in the view to display each app's details.

First in **js/directives/appInfo.js**, we made a new directive. We used `app.directive` to create a new directive named 'appInfo'. It returns an object with three options:

* `restrict` - specifies how the directive will be used in the view. The 'E' means it will be used as a new HTML element.
* `scope` specifies that we will pass information into this directive through an attribute named info.
The `=` tells the directive to look for an attribute named `info` in the `<app-info>` element, like this:
 `<app-info info="shutterbugg"></app-info>`
The data in `info` becomes available to use in the template given by templateURL.
* `templateUrl` specifies the HTML to use in order to display the data in `scope.info`. Here we use the HTML in **js/directives/appInfo.html**.
Looking at **js/directives/appInfo.html**, we define the HTML to display details about an app, like its `title` and `price`.
We use expressions and filters to display the data.

Then in **index.html** we use the new directive as the HTML element `<app-info>`.
We pass in objects from the controller's scope ($scope.shutterbugg) into the `<app-info>` element's `info` attribute so that it displays.

## Lesson 3 - Directives III
---

Why is creating your own directives useful?

* **Readability**. Directives let you write expressive HTML. Looking at **index.html** you can understand the app's behavior just by reading the HTML.
* **Reusability**. Directives let you create self-contained units of functionality.
We could easily plug in this directive into another AngularJS app and avoid writing a lot of repetitive HTML.

1. In the controller, there is a new property `$scope.forecast`.
Display this property in the view by creating another `<div class="card">` element containing an `<app-info>` element.


## Lesson 3 - Built-in and Custom Directives
---

We know that AngularJS comes with a few built-in directives like `ng-repeat` and `ng-click`.

We've seen that AngularJS makes it possible to create your own custom directives, such as `<app-info>`.

We can use Angular's built-in directives together with custom directives to create more readable apps.

For reference, here's how to use `ng-repeat`:


    ```
    <div ng-repeat="product in products">
      <img ng-src="{{ product.cover }}">
      <p class="title">{{ product.name }}</p>
    </div>
    ```

1. In the controller, create a new property `$scope.apps`. Set it equal to an array of objects:


    ```
    [
      {
        icon: 'img/move.jpg',
        title: 'MOVE',
        developer: 'MOVE, Inc.',
        price: 0.99
      },
      {
        icon: 'img/shutterbugg.jpg',
        title: 'Shutterbugg',
        developer: 'Chico Dusty',
        price: 2.99
      }
    ]
    ```

2. Add two more objects to the array describing your favorite apps. Make sure to define the four properties for each app.
3. In the view, use `ng-repeat` to loop through `$scope.apps` and display each element.
To do this, add `ng-repeat` to a `<div class="card">`, and then use the custom directive `<app-info>` to display each element.


## Lesson 4 - installApp I
---

Directives are a core feature of AngularJS. So far we've used custom directives to simply display static content, but they can do more than this.
It's possible to bake interactivity into directives.

Let's start creating another directive that reacts to a user's click.

1. In the new file **js/directives/installApp.js**, create a new directive named `installApp`. Refer to the `appInfo` directive for an example:

* use `app.directive` to create a new directive named installApp
* use the `restrict` option to create a new Element
* set the `scope` option to an empty object {}
* use the `templateUrl` option to tell this directive to use the **js/directives/installApp.html** file

2. Include this new JavaScript file in **index.html** as a `<script>` element.
3. In the `installApp` directive, add a fourth option named `link`, and type in the following function:


    ```
    function(scope, element, attrs) {
      scope.buttonText = "Install",
      scope.installed = false,

      scope.download = function() {
        element.toggleClass('btn-active');
        if(scope.installed) {
          scope.buttonText = "Install";
          scope.installed = false;
        } else {
          scope.buttonText = "Uninstall";
    ```

## Lesson 5 - installApp II
---

We used `app.directive` to create a new directive named 'installApp'.

* The directive contains the three options `restrict`, `scope`, and `templateUrl` that we saw before in the 'appInfo' directive.
* It also contains a fourth option `link`. The `link` is used to create interactive directives that respond to user actions.

The link function takes three inputs:

1. `scope` refers to the directive's scope. Any new properties attached to `$scope` will become available to use in the directive's template.
2. `element` refers to the directive's HTML element.
3. `attrs` contains the element's attributes.

Inside the `link` function, there are two properties `buttonText` and `installed`, and the function `download()`.
We'll use these in the directive's template next.

1. Next, write the directive's template:

In the new file js/directives/installApp.html. Type in the following HTML:

    ```
    <button class="btn btn-active" ng-click="download()">
      {{ buttonText }}
    </button>
    ```

## Lesson 6 - installApp III
---

The template uses Angular's built-in `ng-click` directive. When the button is clicked, `ng-click` will tell AngularJS to run the `download()` function in the directive.

The `download()` function uses the `scope.installed` property to check if an app is installed. When an app is installed, `download()` does three things:

* toggles the `.btn-active` class
* changes the button text to "Uninstall"
* changes `scope.installed` to true

1. Finally, use the new directive in the view:
In **index.html**, add the new `<install-app>` element inside the `.card` div under the `<app-info>` element.
2. View the AngularJS app in the browser.

## Generalizations
---

Well done! An "Install" button now shows up under each app. When you click the button, it changes to an "Uninstall" button.
When you click it again, it changes back to an "Install" button.

What can we generalize so far?

Directives are a powerful way to create self-contained, interactive components.
Unlike jQuery which adds interactivity as a layer on top of HTML, AngularJS treats interactivity as a native component of HTML.
