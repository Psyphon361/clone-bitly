const express = require("express");
const bodyParser = require("body-parser");

// import express from 'express';
// import bodyParser from 'body-parser';

const app = express();

app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get("/", function(req, res) {

    res.render("home", {
        title: "Bitly | Custom URL Shortener"
    });
});

app.get("/signup", function(req, res) {

    res.render("signup", {
        title: "Bitly | Sign Up"
    });
});

app.get("/signin", function(req, res) {

    res.render("signin", {
        title: "Bitly | Sign In"
    });
});

app.get("/googlepageone", function(req, res) {

    res.render("googlepageone", {
        title: "Bitly. The power of the link."
    });
});

app.get("/googlepagetwo", function(req, res) {

    res.render("googlepagetwo", {
        title: "Bitly | Onboard"
    });
});

app.get("/forwork", function(req, res) {

    res.render("forwork", {
        title: "Bitly | Onboard"
    });
});

app.get("/personal", function(req, res) {

    res.render("personal", {
        title: "Bitly | Onboard"
    });
});

app.get("/both", function(req, res) {

    res.render("both", {
        title: "Bitly | Onboard"
    });
});

app.get("/privacypolicy", function(req, res) {

    res.render("privacypolicy", {
        title: "Privacy Policy - Bitly"
    });
});

app.get("/tos", function(req, res) {

    res.render("tos", {
        title: "Terms of Service - Bitly"
    });
});

app.get("/dashboard", function(req, res) {

    res.render("dashboard", {
        title: "Bitly | Link Management"
    });
});

app.get("/notfound", function(req, res) {

    res.render("notfound", {
        title: "Bitly | Page Not Found | 404"
    });
});

app.get("/bitly101", function(req, res) {

    res.render("bitly101", {
        title: "Bitly | Page Not Found | 404"
    });
});

app.get("/integrations-api", function(req, res) {

    res.render("integrations-api", {
        title: "Bitly | Page Not Found | 404"
    });
});

app.get("/social-media", function(req, res) {

    res.render("social-media", {
        title: "Bitly | Page Not Found | 404"
    });
});

app.get("/link-management", function(req, res) {

    res.render("link-management", {
        title: "Bitly | Page Not Found | 404"
    });
});

app.get("/digital-marketing", function(req, res) {

    res.render("digital-marketing", {
        title: "Bitly | Page Not Found | 404"
    });
});

app.get("/customer-service", function(req, res) {

    res.render("customer-service", {
        title: "Bitly | Page Not Found | 404"
    });
});

app.get("/for-developers", function(req, res) {

    res.render("for-developers", {
        title: "Bitly | Page Not Found | 404"
    });
});

app.get("/branded-links", function(req, res) {

    res.render("branded-links", {
        title: "Bitly | Page Not Found | 404"
    });
});

app.get("/mobile-links", function(req, res) {

    res.render("mobile-links", {
        title: "Bitly | Page Not Found | 404"
    });
});

app.get("/campaign", function(req, res) {

    res.render("campaign", {
        title: "Bitly | Page Not Found | 404"
    });
});

app.get("/enterprise", function(req, res) {

    res.render("enterprise", {
        title: "Bitly | Page Not Found | 404"
    });
});

app.get("/pricing", function(req, res) {

    res.render("pricing", {
        title: "Bitly | Page Not Found | 404"
    });
});




let port = process.env.PORT;

if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
    console.log("Server started on port 3000!");
});