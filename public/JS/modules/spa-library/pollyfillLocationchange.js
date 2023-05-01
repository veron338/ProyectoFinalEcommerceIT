const pushState = history.pushState;
const replaceState = history.replaceState;

history.pushState = function () {
    pushState.apply(history, arguments);
    window.dispatchEvent(new Event('pushstate'));
    window.dispatchEvent(new Event('locationchange'));
};

history.replaceState = function () {
    replaceState.apply(history, arguments);
    window.dispatchEvent(new Event('replacestate'));
    window.dispatchEvent(new Event('locationchange'));
};

window.addEventListener('popstate', function () {
    window.dispatchEvent(new Event('locationchange'))
});