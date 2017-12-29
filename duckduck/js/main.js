var app = angular.module('browserApp', []);

app.controller('browserAppController', function($scope) {
    console.log("hello");

    $scope.details = [
   { "aref": "Google" },
   { "desc": "Search the world's information, including webpages, images, videos and more. Google has many special features to help you find exactly what you're looking for." },
   { "aref": "Gmail" },
   { "desc": "Gmail is email that's intuitive, efficient, and useful. 15 GB of storage, less spam, and mobile access." },
   { "aref": "Google | Facebook"},
   {"desc": "Google, Mountain View, CA. 25M likes. Organizing the world's information and making it universally accessible and useful."},
   { "aref": "Discover - Google +"},
   {"desc": "Starting next February, Google's Chrome program will square advertisements neglecting to meet benchmarks laid out in a program went for enhancing internet publicizing."},
   { "aref": "Google Maps"},

   {"desc": "Find local businesses, view maps and get driving directions in Google Maps."}
   ];
});
