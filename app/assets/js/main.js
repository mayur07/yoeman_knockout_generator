'use strict';
/* global define:true*/
define(['jquery',
    'knockout',
    '../../assets/js/models/appViewModel.js',
    'jquery.bootstrap'
], function ($, ko, AppViewModel) {
    // for Extend custom validation message
    //ko.extenders.required = function (target, overrideMessage) {
    //    //add some sub-observables to our observable
    //    target.hasError = ko.observable();
    //    target.validationMessage = ko.observable();

    //    //define a function to do validation
    //    function validate(newValue) {
    //        debugger;
    //        target.hasError(newValue ? false : true);
    //        target.validationMessage(newValue ? "" : overrideMessage || "This field is required");
    //    }
    //    //initial validation
    //    validate(target());
    //    //validate whenever the value changes
    //    target.subscribe(validate);
    //    //return the original observable
    //    return target;
    //};

    ko.validation.rules['equalToPwd'] = {
        getValue: function (o) {
            debugger;
            return (typeof o === 'function' ? o() : o);
        },
        validator: function (val, otherField) {
            debugger;
            return val === this.getValue(otherField);
        },
        message: 'The fields must have the same value'
    };

    ko.validation.registerExtenders();

    var UI = new AppViewModel();

    ko.applyBindings(UI);
});
