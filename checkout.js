/* Sample JavaScript file added with ScriptTag resource.
This sample file is meant to teach best practices.
Your app will load jQuery if it's not defined.
Your app will load jQuery if jQuery is defined but is too old, e.g. < 1.7.
Your app does not change the definition of $ or jQuery outside the app.
Example: if a Shopify theme uses jQuery 1.4.2, both of these statements run in the console will still return '1.4.2'
once the app is installed, even if the app uses jQuery 1.9.1:
jQuery.fn.jquery => "1.4.2"
$.fn.jquery -> "1.4.2"
*/

/* Using a self-executing anonymous function - (function(){})(); - so that all variables and functions defined within
aren’t available to the outside world. */

(function(){

    /* Load Script function we may need to load jQuery from the Google's CDN */
    /* That code is world-reknown. */
    /* One source: http://snipplr.com/view/18756/loadscript/ */
    
    var loadScript = function(url, callback){
    
      var script = document.createElement("script");
      script.type = "text/javascript";
    
      // If the browser is Internet Explorer.
      if (script.readyState){
        script.onreadystatechange = function(){
          if (script.readyState == "loaded" || script.readyState == "complete"){
            script.onreadystatechange = null;
            callback();
          }
        };
      // For any other browser.
      } else {
        script.onload = function(){
          callback();
        };
      }
    
      script.src = url;
      document.getElementsByTagName("head")[0].appendChild(script);
    
    };
    
    /* This is my app's JavaScript */
    var myAppJavaScript = function($){
      // $ in this scope references the jQuery object we'll use.
      // Don't use jQuery, or jQuery191, use the dollar sign.
      // Do this and do that, using $.
      $('#shopify-section-product-template').append('<h1>Add Script here</h1>');
    };
    
    /* If jQuery has not yet been loaded or if it has but it's too old for our needs,
    we will load jQuery from the Google CDN, and when it's fully loaded, we will run
    our app's JavaScript. Set your own limits here, the sample's code below uses 1.9.1
    as the minimum version we are ready to use, and if the jQuery is older, we load 1.9.1 */
    if ((typeof jQuery === 'undefined') || (parseInt(jQuery.fn.jquery) === 1 && parseFloat(jQuery.fn.jquery.replace(/^1\./,"")) < 9.1)) {
      loadScript('//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', function(){
        jQuery191 = jQuery.noConflict(true);
        myAppJavaScript(jQuery191);
      });
    } else {
      myAppJavaScript(jQuery);
    }
    
    })();
    