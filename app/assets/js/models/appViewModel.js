'use strict';

/* global define:true*/
define(['jquery',
    'knockout',
    '../../../assets/js/models/sammyViewModel.js',
    '../../../controller/signup.js',
    'knockout.validation'
], function ($, ko, SammyViewModel, signup) {
    return function () {
        debugger;
        var self = this;
        $("#login").load("/view/login.html");
        $("#registration").load("/view/registration.html", function () {
            debugger;
            ko.applyBindings(self, $("#registrationform").get(0));
        });
        // Configure knockout validation plugin
        // To decorate form-group elements, use the validationElement binding
        ko.validation.configure({
            decorateElement: true,
            errorElementClass: 'has-error',
            errorMessageClass: 'help-block',
            errorsAsTitle: false
        });
        //self.submitRegistration = function (formElement) {
        //    debugger;
        //}

        // Example observable
        self.status = ko.observable('active');
        self.signup = new signup();
        // Add submodels here
        // Sammy view model for local navigation
        self.sammy = new SammyViewModel();
    };
});
