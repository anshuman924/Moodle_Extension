let pass_button = document.getElementById("pass_button")
pass_button.addEventListener("click", async () => {
    pass_button.disabled = true
    chrome.storage.local.set({moodle_password: document.getElementById("pass_input").value}, function() {
        pass_button.disabled = false
    })
})

let uname_button = document.getElementById("uname_button")
uname_button.addEventListener("click", async () => {
    uname_button.disabled = true
    chrome.storage.local.set({moodle_username: document.getElementById("uname_input").value}, function() {
        uname_button.disabled = false
    });
});
