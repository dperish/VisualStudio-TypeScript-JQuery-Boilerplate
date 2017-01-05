define(["require", "exports", "jquery", "greeter/greeter"], function (require, exports, $, greeter_1) {
    "use strict";
    $(document).ready(function () {
        var greeter = new greeter_1.default($("#content")[0]);
        greeter.start();
    });
});
//# sourceMappingURL=app.js.map