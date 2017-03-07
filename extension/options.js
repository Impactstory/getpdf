// Saves options to chrome.storage.sync.

if (chrome){
    browser = chrome
}


console.log("loaded options.js")
function save_options() {
    console.log("click")

    var showOaColor = document.getElementById('show-oa-color').checked;
    browser.storage.local.set({
        showOaColor: showOaColor
    })

    var status = document.getElementById('status');
    status.textContent = 'Preference saved.';

    setTimeout(function(){
        status.textContent = ''
    }, 1000)


}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
    // Use default value color = 'red' and likesColor = true.
    browser.storage.local.get({
        showOaColor: false
    }, function(items) {
        document.getElementById('show-oa-color').checked = items.showOaColor;
    });
}


document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('show-oa-color').addEventListener('click',
    save_options);