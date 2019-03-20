# clean-search-CSS
Display a clean google search results page (no ads at the top) with material looking UI.

## Requirements
* Install chrome extension : 
https://chrome.google.com/webstore/detail/user-javascript-and-css/nbhcbdghjpllgmfilhnhkllmkecfmpld 

## Instructions
* Step 1 - open a new tab 
* Step 2 - click on the user CSS / Javascript icon from the chrome toolbar 
* Step 3 - click on the settings wheel for rules 
* Step 4 - click + Add new site button 
* Step 5 - replace * .exmaple.com with www.google.com 
* Step 6 - copy and paste the CSS below into the CSS pane & save
* Step 7 - perform a google search in a new tab <br>


```css
* {
    font-family: Product Sans;
    font-size: 15px;
}


h1 {
    font-family: Product Sans;
    font-size: small;
}

body, html, input {
    font-family: Product Sans;
    font-size: small;
}


/*----- shadow style NOT IN USE -----*/

/*
.mw {
    background: #f8f8f8;
}
*/

/*
.g {
    background: white;
    border-bottom: 1px solid #efefef;
    border-radius: 20px;
    padding: 45px;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.07), 0 6px 20px 0 rgba(0, 0, 0, 0.03);
}

div#cnt {
    background: #f8f8f8;
}

*/

/*----- search results -----*/

h3 {
    font-size: 21px!important;
    font-weight: 100;
    margin-bottom: 0.6%;
    margin-top: 0.6%;
    padding: 0;
    color: black;
}

.g {
    background: white;
    padding: 25px;
    border-bottom: 1px solid #efefef;
}    

.st {
    letter-spacing: -0.3px;
    /* remove font family below for product sans*/
    font-family: Roboto!important;
}

.RNNXgb {
    background: #fff;
    display: flex;
    border-radius: 0px;
    border-bottom: 1px solid #dfe1e5;
    box-shadow: none;
    height: 39px;
    width: 630px;
    z-index: 3;
    height: 44px;
    margin: 0 auto;

}

/*----- ads -----*/

div#tads {
    background: #f7f7f7cc;
    border: 1px solid #ddd;
    color: white!important;
    border-radius: 6px;
    padding: 1.5em 0.5em 0.5em 1.5em!important;
  	display: none;
}

/*----- links -----*/

.iUh30 {
    //font-size: inherit!important;
    font-size: 12px!important;
    font-family: Roboto!important;
  	letter-spacing: -0.2px;

}

/* blue */
a:link, .w, #prs a:visited, #prs a:active, .q:active, .q:visited, .kl:active, .tbotu {
    color: #4285F4;
}

/* yellow */
.mblink:visited, a:visited {
    color: #F4B400!important;
}

/* green */
.a, cite, cite a:link, cite a:visited, .cite, .cite:link, #nygTcd>i, .bc a:link {
    color: #0F9D58!important;
}

/* red */
a.fl:link, .fl a, .flt, a.flt, .gl a:link, a.mblink, .mblink b {
    color: #DB4437!important;
    /*font-size: larger;*/
}

/*----- searchbar -----*/

.minidiv .sfbg {
    height: 86px;
}

div#searchform {
    padding-top: 15px;
}

.gsfi, .lst {
    font: 14px Product Sans,sans-serif;
}

.sfbgx {
    background: #f8f8f8;
}

div#hdtbSum {
    padding-top: 1em;
    padding-bottom: 1.5em;
    background: #f8f8f8;
}

#hdtb-msb .hdtb-mitem.hdtb-msel {
    border-bottom: 3px solid #4285F4!important;
    color: #4285F4!important;
}


/*----- mini searchbar -----*/

.minidiv .sfbg {
    background: #f8f8f8;
    box-shadow: none;
    height: 90px;
    border-bottom: 1px solid #eee;
}
```
