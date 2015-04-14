## Lesson 1 - Routing I
---

So far we've made AngularJS apps that display data in a single view **index.html**.

But what happens when the app grows and needs to display more information? Stuffing more code to a single view will quickly make things messy.

A better solution is to use multiple templates that display different pieces of data based on the URL that the user is visiting.
We can do this with Angular's application routes.

1. In **index.html** under the `.header` section, type in the code exactly as you see here:


    ```
    <div ng-view></div>
    ```

2. View the AngularJS app in the browser by typing http://localhost:8000/.
3. In **app.js** under the `angular.module`, type in this code:


    ```
    app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          controller: 'HomeController',
          templateUrl: 'views/home.html'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
    ```

## Lesson 2 - Routing II
---

Great! A gallery of images shows up. How does it work?

* In **app.js** inside the `app.config()` method, we use Angular's `$routeProvider` to define the application routes.
* We used `.when()` to map the URL `/` to to the controller `HomeController` and the template `home.html`.
The `HomeController` uses the service **js/services/photos.js** to fetch the array of all photos from
http://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json and stores it into `$scope.photos`.
The **home.html** uses `ng-repeat` to loop through each item in the photos array and display each photo.
* Otherwise if a user accidentally visits a URL other than /, we just redirect to / using `.otherwise()`.
* Now when a user visits /, a view will be constructed by injecting `home.html` into the `<div ng-view></div>` in **index.html**.

1. In **app.js** between the `.when()` and `.otherwise()`, add another `.when()` that maps the URL `/photos/:id` to the controller `PhotoController`
and the template **views/photo.html**.
2. Visit http://localhost:8000/ and click on a photo. A detail page about that photo should appear.

## Lesson 3 - Routing III
---

What did we just do?

* In **app.js**, we mapped a URL to `PhotoController` and **photo.html**.
We added a variable part named `id` to the URL, like this: `/photos/:id`.
* In `PhotoController`, we used Angular's `$routeParams` to retrieve `id` from the URL by using `$routeParams.id`.
Notice that we injected both `$routeParams` and the `photos` service into the `PhotoController` dependency array to make them available to use inside the controller.
* Then to fetch an individual photo, we first used the `photos` service to fetch the array of photos from the server,
and then used `$routeParams.id` to access the specific photo by its index.
* As before, any properties attached to `$scope` become available to use in the view. This means in **photo.html**,
we can display the photo's detail using expressions as done before.

Notice that when you click on links, the app doesn't do a full reload. Only the part of the view specified by `<div ng-view></div>` changes.

1. Finish the template so that it displays a photo's details.
First, in the browser, visit http://s3.amazonaws.com/codecademy-content/courses/ltp4/photos-api/photos.json.
Looking at the format of the data in the array, each photo has six pieces of data - `title`, `author`, `url`, `pubdate`, `upvotes`, and `views`.
2. In the template **photo.html**, display a photo's remaining five pieces of data.
3. Use the `number` filter to format the `views` and `upvotes`.
4. Use the `date` filter to format the `pubdate`.
5. Visit http://localhost:8000/ and click on a photo. A detail page about that photo should appear.

## Generalizations
---

Why are routes useful? Instead of filling a single view with more code than needed, routes let us map URLs to self-contained controllers and templates.
Furthermore, now that the app has URLs, users can easily bookmark and share the app's pages.

What can we generalize so far?

* Directives are a way to make standalone UI components, like `<app-info>`
* Services are a way to make standalone communication logic, like forecast which fetches weather data from a server
* Routes are a way to manage apps containing more views.

Practice what you learned in this section with three real-world projects:

* [Outbox](http://www.codecademy.com/en/practice/learn-angularjs/topics/routing/projects/angularjs_outbox-2)
* [Calendar](http://www.codecademy.com/en/practice/learn-angularjs/topics/routing/projects/angularjs_calendar)
* [Reader](http://www.codecademy.com/en/practice/learn-angularjs/topics/routing/projects/angularjs_reader)

Then take what you learned in this course and put it all together with these projects:

* [NearMe pt1](http://www.codecademy.com/en/practice/learn-angularjs/topics/angularjs_piat/projects/angularjs_nearme-1)
* [NearMe pt2](http://www.codecademy.com/en/practice/learn-angularjs/topics/angularjs_piat/projects/angularjs_nearme-2)
* [NearMe pt3](http://www.codecademy.com/en/practice/learn-angularjs/topics/angularjs_piat/projects/angularjs_nearme-3)
