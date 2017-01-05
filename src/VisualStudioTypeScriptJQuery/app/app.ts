/// <reference path="../scripts/typings/jquery/jquery.d.ts" />

import * as $ from "jquery";
import Greeter from "greeter/greeter";

$(document).ready(() => {

    var greeter = new Greeter( $("#content")[0] );
    greeter.start();

});