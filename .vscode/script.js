if ('geolocation' in navigator) {
// this checks if geolocation is supported in the web browser. I assume there is a navigator function of sorts
// this says that Geolocation is supported in the browser, so here is where I write the rest of the code

navigator.geolocation.getCurrentPosition(successCallback, errorCallback);

function successCallback(position) {
    const latitude = position.coords.latitude
    const longitude = position.coords.longitude
    // these stay constant and I'm assuming the position.coords is pulled from the GPS info from the API

    if (latitude === 42.30943636436529 && longitude === -72.63488128885417) {window.location.href = 'paris.html';} 
    else {
        window.location.href = 'index.html';
    }
}


} else {
    // This means geolocation is not supported so provide what I want to happen if it isn't, likely a popup or something saying you aren't at the location
}