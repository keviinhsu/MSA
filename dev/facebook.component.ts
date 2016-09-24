 import {Component} from "angular2/core";

 @Component({ 
     selector: 'my-facebook',
     template: `
     <div id="fb-root"></div>   
     <script>(function(d, s, id) {
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) return;
            js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.7";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));</script>
    <div class="fb-share-button" data-href="http://microsoftmoduletwo.azurewebsites.net" data-layout="button_count" data-mobile-iframe="true"><a class="fb-xfbml-parse-ignore" target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Fmicrosoftmoduletwo.azurewebsites.net%2F&amp;src=sdkpreparse">Share</a></div>
`,
styleUrls: ['src/css/facebook.css']
 })
export class FacebookComponent {
}
