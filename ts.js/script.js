"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var travelArr = [];
// declaration of propertys from Class Location
var Locations = /** @class */ (function () {
    function Locations(name, image, adress, city, zipCode) {
        this.name = name;
        this.image = image;
        this.adress = adress;
        this.city = city;
        this.zipCode = zipCode;
        // function to push objects of class in the array
        travelArr.push(this);
    }
    // define the output in html
    Locations.prototype.render = function () {
        return "\n  <div class=\"locations col-12  mt-5 col-xl-3 col-lg-4 col-md-6\" >\n  <div id=\"box\" class=\"  card h-100 \">\n    <img src=\"" + this.image + "\" class=\"card-img-top  d-none d-md-flex\" alt=\"\">\n    <div class=\"card-body\">\n       <h5 class=\"card-title\">" + this.name + "</h5>\n       <p class=\"card-text\">" + this.adress + " </p>\n       <p class=\"card-text\">" + this.city + " " + this.zipCode + "</p>   \n       \n    </div>\n    </div>\n  </div>";
    };
    return Locations;
}());
// here get the class filled with new objects....place to add new locations
new Locations("St. Charles Church", "img/church.jpg", "Karlsplatz 1", "Vienna", 1010);
new Locations("Zoo Vienna", "img/zoo.jpg", "Maxingstraße 13b", "Vienna", 1030);
// here begins the extention of class Locations to create and render class Restaurants and in addition class Events, litteraly just copying the lines 5 to 43  without the push function on line 24 and  adjust the propertys and add the super function in the costructor + expand the render function with the same propertys
var Restaurants = /** @class */ (function (_super) {
    __extends(Restaurants, _super);
    function Restaurants(name, image, adress, city, zipCode, phone, type, website) {
        var _this = _super.call(this, name, image, adress, city, zipCode) || this;
        _this.phone = phone;
        _this.type = type;
        _this.website = website;
        return _this;
    }
    Restaurants.prototype.render = function () {
        return "\n    <div class=\"restaurants col-12  mt-5 col-xl-3 col-lg-4 col-md-6\" >\n    <div id=\"box\" class=\"  card h-100 \" > \n      <img src=\"" + this.image + "\" class=\"card-img-top d-none d-md-flex\" alt=\"\">\n      <div class=\"card-body\">\n         <h5 class=\"card-title\">" + this.name + "</h5>\n         <p class=\"card-text\">" + this.adress + " </p>\n         <p class=\"card-text\">" + this.city + " " + this.zipCode + "</p>\n         <p class=\"card-text\">" + this.phone + " </p>   \n         <p class=\"card-text\">" + this.type + " </p>   \n         <a href=\"" + this.website + "\" target=\"_blank\" class=\"btn btn-link\">...come to our Website ;-) </a>\n      </div>\n      </div>\n    </div>";
    };
    return Restaurants;
}(Locations));
// here get the class filled with new objects....place to add new restaurants
new Restaurants("Lemon Leaf Thai Restaurant", "img/restaurant.png", "Schönbrunner Straße 21", "Vienna", "1050", "+43(1)5812308", "Thai- Restaurant", "http://www.lemonleaf.at");
new Restaurants("SIXTA", "img/sixta.png", "Kettenbrückengasse 19", "Vienna", "1050", "+43 1 58 528 56", "Traditional Restaurant", "http://www.sixta-restaurant.at");
// extention Events
var Events = /** @class */ (function (_super) {
    __extends(Events, _super);
    function Events(name, image, adress, city, zipCode, eventDate, eventTime, price, website) {
        var _this = _super.call(this, name, image, adress, city, zipCode) || this;
        _this.website = website;
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.price = price;
        return _this;
    }
    Events.prototype.render = function () {
        return "\n    <div class=\"events col-12  mt-5 col-xl-3 col-lg-4 col-md-6\" >\n    <div id=\"box\" class=\" card  h-100 \">\n      <img src=\"" + this.image + "\" class=\"card-img-top img-fluid d-none d-md-flex\" alt=\"\">\n      <div class=\"card-body\">\n         <h5 class=\"card-title\">" + this.name + "</h5>\n         <p class=\"card-text\">" + this.adress + " </p>\n         <p class=\"card-text\">" + this.city + " " + this.zipCode + "</p>\n         <p class=\"card-text\">on " + this.eventDate + " at " + this.eventTime + "</p>   \n         <p class=\"card-text\">" + this.price + " </p>   \n         <a href=\"" + this.website + "\" target=\"_blank\" class=\"btn btn-link\">...come to our Website ;-)</a>\n      </div>\n      </div>\n    </div>";
    };
    return Events;
}(Locations));
// here get the class filled with new objects....place to add new events
new Events("Kris Kristofferson", "img/kris.jpg", "Wiener Stadthalle, Halle F, Roland Rainer Platz 1", "Vienna", "1150", "Fr 15.11.2021", "20:00", "€ 58,50", "http://www.kriskristofferson.com");
new Events("Lenny Krawitz", "img/lenny.jpg", "Wiener Stadthalle - Halle D, Roland Rainer Platz 1", "Vienna", "1150", "Sat 09.12.2021", "19:30", "€ 47,80", "http://www.lennykravitz.com");
// here is the loop to render
for (var i in travelArr) {
    document.getElementById("content").innerHTML += travelArr[i].render();
}
console.log(travelArr);
// here is my solution for the bonus¯\_(ツ)_/¯ after trying to wrap my brain around the timestamp function and come up with a solution in the given amount of time i decided shorthanded to just kind of sort the cards at least after there class, with a simple on click event and the show and hide function.  
$(document).on("click", "#OV", function () {
    $(".locations").show();
    $(".restaurants").show();
    $(".events").show();
});
$(document).on("click", "#locations", function () {
    $(".locations").show();
    $(".restaurants").hide();
    $(".events").hide();
});
$(document).on("click", "#restaurants", function () {
    $(".restaurants").show();
    $(".locations").hide();
    $(".events").hide();
});
$(document).on("click", "#events", function () {
    $(".events").show();
    $(".locations").hide();
    $(".restaurants").hide();
});
