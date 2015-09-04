'use strict';
/* global define:true*/
define(['jquery',
    'knockout'
], function ($, ko) {
    return function () {
        debugger;
        var self = this;
        self.userModel = ko.validatedObservable({
            firstname: ko.observable('mayur').extend({
                required: {
                    message: 'Please supply your firstname.'
                }
            }),
            lastname: ko.observable('mathurkar').extend({
                required: {
                    message: 'Please supply your lastname.'
                }
            }),
            displayname: ko.observable('matya').extend({
                required: {
                    message: 'Please supply your displayname.'
                }
            }),
            email: ko.observable('mail@mail.com').extend({
                required: {
                    message: 'Please supply your email address.'
                },
                email: true
            }),
            password: ko.observable('123').extend({
                required: {
                    message: 'Please supply your password.'
                }
            })

        });

        self.userModel().checkpassword = ko.observable('123').extend({
            required: {
                message: 'Please supply your password.'
            },
            equal: {
                params: self.userModel().password,
                message: 'Password & Confirm password is not match!'
            }
        });


        self.RegisterMethod = function () {
            debugger;
            if (self.userModel.isValid() && self.userModel().checkpassword() === self.userModel().password()) {
                var data = ko.toJSON(self.userModel());

                $.get('/model/user.json', function (json) {
                    debugger;
                    var result;

                    // modify data.json file and modify result;

                    // set the result to reduced data before leaving the callback
                    // write yourself a message indicating that the script is finished
                    console.log('All done making your data smaller and prettier!');
                    $.post('0.0.0.0:8000/model/user.json', data, function (response) {
                        debugger;
                        // Do something with the request
                    }, 'json');

                });

            } else {
                self.userModel.errors.showAllMessages();
            }
        }
        ko.validation.registerExtenders();
    };
});