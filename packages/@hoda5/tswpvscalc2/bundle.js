import { createElement, Component } from 'react';
import { render } from 'react-dom';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

// tslint:disable-next-line:no-debugger
// debugger;
// import {soma} from "@hoda5/tswpvssoma"
// import {dobro} from "@hoda5/tswpvdobro"
// console.log( "1+2=", soma(1,2) )
// console.log( "dobre de 3=", dobro(3) )
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (createElement("div", { className: "App" },
            createElement("header", { className: "App-header" },
                createElement("h1", { className: "App-title" }, "Welcome to React")),
            createElement("p", { className: "App-intro" }, "passou")));
    };
    return App;
}(Component));

// tslint:disable:no-console
// In production, we register a service worker to serve assets from local cache.
// This lets the app load faster on subsequent visits in production, and gives
// it offline capabilities. However, it also means that developers (and users)
// will only see deployed updates on the 'N+1' visit to a page, since previously
// cached resources are updated in the background.
// To learn more about the benefits of this model, read https://goo.gl/KwvDNy.
// This link also includes instructions on opting out of this behavior.
var isLocalhost = Boolean(window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.1/8 is considered localhost for IPv4.
    window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
function register() {
    if (process.env.NODE_ENV === 'production' && 'serviceWorker' in navigator) {
        // The URL constructor is available in all browsers that support SW.
        var publicUrl = new URL(process.env.PUBLIC_URL, window.location.toString());
        if (publicUrl.origin !== window.location.origin) {
            // Our service worker won't work if PUBLIC_URL is on a different origin
            // from what our page is served on. This might happen if a CDN is used to
            // serve assets; see https://github.com/facebookincubator/create-react-app/issues/2374
            return;
        }
        window.addEventListener('load', function () {
            var swUrl = process.env.PUBLIC_URL + "/service-worker.js";
            if (isLocalhost) {
                // This is running on localhost. Lets check if a service worker still exists or not.
                checkValidServiceWorker(swUrl);
                // Add some additional logging to localhost, pointing developers to the
                // service worker/PWA documentation.
                navigator.serviceWorker.ready.then(function () {
                    console.log('This web app is being served cache-first by a service ' +
                        'worker. To learn more, visit https://goo.gl/SC7cgQ');
                });
            }
            else {
                // Is not local host. Just register service worker
                registerValidSW(swUrl);
            }
        });
    }
}
function registerValidSW(swUrl) {
    navigator.serviceWorker
        .register(swUrl)
        .then(function (registration) {
        registration.onupdatefound = function () {
            var installingWorker = registration.installing;
            if (installingWorker) {
                installingWorker.onstatechange = function () {
                    if (installingWorker.state === 'installed') {
                        if (navigator.serviceWorker.controller) {
                            // At this point, the old content will have been purged and
                            // the fresh content will have been added to the cache.
                            // It's the perfect time to display a 'New content is
                            // available; please refresh.' message in your web app.
                            console.log('New content is available; please refresh.');
                        }
                        else {
                            // At this point, everything has been precached.
                            // It's the perfect time to display a
                            // 'Content is cached for offline use.' message.
                            console.log('Content is cached for offline use.');
                        }
                    }
                };
            }
        };
    })
        .catch(function (error) {
        console.error('Error during service worker registration:', error);
    });
}
function checkValidServiceWorker(swUrl) {
    // Check if the service worker can be found. If it can't reload the page.
    fetch(swUrl)
        .then(function (response) {
        // Ensure service worker exists, and that we really are getting a JS file.
        if (response.status === 404 ||
            response.headers.get('content-type').indexOf('javascript') === -1) {
            // No service worker found. Probably a different app. Reload the page.
            navigator.serviceWorker.ready.then(function (registration) {
                registration.unregister().then(function () {
                    window.location.reload();
                });
            });
        }
        else {
            // Service worker found. Proceed as normal.
            registerValidSW(swUrl);
        }
    })
        .catch(function () {
        console.log('No internet connection found. App is running in offline mode.');
    });
}

render(createElement(App, null), document.getElementById('root'));
register();
