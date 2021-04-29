let pass_button = document.getElementById("pass_button")
pass_button.addEventListener("click", async () => {
    pass_button.disabled = true
    chrome.storage.sync.set({moodle_password: document.getElementById("pass_input").value}, function() {
        pass_button.disabled = false
        console.log("set the pass")
    })
})

let uname_button = document.getElementById("uname_button")
uname_button.addEventListener("click", async () => {
    uname_button.disabled = true
    chrome.storage.sync.set({moodle_username: document.getElementById("uname_input").value}, function() {
        uname_button.disabled = false
        console.log("set the uname")
    })
})
