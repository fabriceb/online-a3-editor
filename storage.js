function getB64content() {

    // Select all div elements with contenteditable attribute set to true
    const editableDivs = document.querySelectorAll('div[contenteditable="true"]');
    // Initialize an array to hold the innerHTML of each div
    let divContents = [];
    // Loop through each element
    editableDivs.forEach(div => {
        // Add the innerHTML of the current div to the array
        divContents.push(div.innerHTML);
    });

    return btoa(JSON.stringify(divContents));
}

function loadB64Content(b64content) {
    // Decode the base64 content
    const content = JSON.parse(atob(b64content));
    // Select all div elements with contenteditable attribute set to true
    const editableDivs = document.querySelectorAll('div[contenteditable="true"]');
    // Loop through each element
    editableDivs.forEach((div, index) => {
        // Set the innerHTML of the current div to the corresponding index in the content array
        div.innerHTML = content[index];
    });
}

function saveToUrl() {
    // Get the base64 content
    const b64content = getB64content();
    // Set the base64 content in the URL
    window.location.hash = b64content;
}

function loadFromUrl() {
    // Get the base64 content from the URL
    const b64content = window.location.hash.slice(1);
    if (!b64content) {
        return;
    }
    // Load the content
    loadB64Content(b64content);
}

// Load content from URL when the page loads
document.addEventListener('DOMContentLoaded', function() {
    // DOM is fully parsed
    loadFromUrl();
});
