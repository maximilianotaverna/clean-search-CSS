// ==UserScript==
// @namespace   https://openuserjs.org/users/MilionMax
// @name        Google Clean Search
// @description Clean up the current look of google search
// @version     0.0.1
// @include     http://www.google.*/search*
// @include     https://www.google.*/search*
// @include     https://www.google.*/*
// @include     https://encrypted.google.*/search*
// @include     https://encrypted.google.*/*
// @grant       GM_getValue
// @grant       GM_setValue
// @grant       GM_xmlhttpRequest
// @grant       GM_log
// @grant       GM_registerMenuCommand
// @grant       unsafeWindow
// @license     MIT
// ==/UserScript==

// ==OpenUserJS==
// @author      Max Taverna
// ==OpenUserJS==

/*jshint multistr: true */

var cssblock = document.createElement("div");
var csstext = `
<style>

@import url('https://fonts.googleapis.com/css?family=Roboto|Nunito|Rubik|Questrial&display=swap');


/*-----    colors / fonts   -----*/
html {
  --color-green: #0F9D58;
  --color-blue: #4285F4;
  --color-red: #DB4437;
  --color-yellow: #F4B400;
  --color-orange: #F57F17;
  --color-grey: #838383;
  --font-main: 'Product Sans';
  --font-alt: 'Roboto';
  /*--font-main: 'Questrial';  */
  /*--font-alt: 'Questrial';  */
  /*--font-main: 'Nunito';  */
  /*--font-alt: 'Nunito';*/
  /*--font-main: 'Rubik';  */
  /*--font-alt: 'Rubik';  */
}	


/*----- global -----*/

* {
    font-family: -apple-system, var(--font-main), var(--font-alt);
    font-size: 15px;
}


h1 {
    font-family: -apple-system, var(--font-main), var(--font-alt);
    font-size: small;
}

body, html, input {
    font-family: -apple-system, var(--font-main), var(--font-alt);
    font-size: small;
}


/*----- above results -----*/

div#extabar {
    padding-top: 20px;
}

body.vasq #hdtbMenus.hdtb-td-o {
    top: 88px;
}

/*----- search results -----*/

h3 {
    font-size: 20px!important;
    font-weight: 500;
    margin-bottom: 0.6%;
    margin-top: 0.6%;
    padding: 0;
    letter-spacing: -0.3px!important;
    /*color: var(--color-red);*/
    /*opacity: 0.3;*/
}

/*--date--*/
span.f {
    color: var(--color-blue);
}  

.g {
    background: white;
    padding: 25px;
    border-bottom: 1px solid #efefef;
}    

.st {
    letter-spacing: -0.3px;
    font-family: var(--font-alt)!important;
    color: var(--color-grey);
}

.s .st em, .st.s.std em {
	color: black;
	text-decoration: underline;
}

.RNNXgb {
    background: #fff;
    display: flex;
    box-shadow: none;
    height: 39px;
    width: 630px;
    z-index: 3;
    height: 44px;
    margin: 0 auto;

}

/*--- people also ask ---*/

.xpdopen {
    zoom: 0.8;
}

.kno-ftr {
	visibility: hidden;
}

.cbphWd {
    border-top: 1px dotted #e5e5e5!important;
}

/*------- summary --------*/

#rhs .rhsvw.liYKde {
	zoom: 0.8;
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
    font-size: 15px!important;
  	letter-spacing: -0.2px;

}


/* related links */
a:link, .w, #prs a:visited, #prs a:active, .q:active, .q:visited, .kl:active, .tbotu {
    color: var(--color-blue);
}

/* new links */
#res h3, #extrares h3 {
	color: var(--color-red)!important;
}

/* visited */
.mblink:visited, a:visited {
    color: var(--color-grey)!important;
}

/* site */
.a, cite, cite a:link, cite a:visited, .cite, .cite:link, #nygTcd>i, .bc a:link {
    color: var(--color-green)!important;
}


/* page */
.eipWBe {
    color: var(--color-blue)!important;
}

/* subs pages */
a.fl:link, .fl a, .flt, a.flt, .gl a:link, a.mblink, .mblink b {
    color: var(--color-yellow)!important;
    /*font-size: larger;*/
}

/*button*/
.headline-cta-section a, a.h-c-button, a.get-google-editors{
    color: white!important;
}

/*-------  searchbar -------*/
#hdtb-msb .hdtb-mitem.hdtb-msel {
    border-bottom: 3px solid var(--color-blue)!important;
    color: var(--color-blue)!important;
}


/*----- mini searchbar -----*/

.minidiv .sfbg {
    box-shadow: none;
    border-bottom: 2px dotted #eee;
    // height: 90px;
    // box-shadow: 0px 2px 20px 20px #00000021;
}

.minidiv #logo img {
    zoom: 0.7
}



</style>`;

cssblock.innerHTML = csstext;
document.body.appendChild(cssblock);
document.querySelector("html").style.cssText = 'display:block';