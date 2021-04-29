id = "";
pass = "";

username = document.getElementById("username");
if(!username) do_bad_shit();
else do_good_shit();

function do_bad_shit() {
    div_ele = document.getElementsByTagName("input");

    for(i = 0; i < div_ele.length; i++) {
        if(div_ele[i].value === "Cancel") {
            div_ele[i].click();
            break;
        }
    }
}

function do_good_shit() {
    chrome.storage.sync.get(['moodle_username'], function(stored_id) {
      username.value = stored_id;
    });

    chrome.storage.sync.get(['moodle_password'], function(stored_password) {
      document.getElementById("password").value = stored_password;
    });

    form = document.getElementById("login").innerHTML;
    line_s = form.search("Please");
    line_end = line_s + form.substring(line_s).search("=");

    line = form.substring(line_s, line_end);

    answer = -1;

    add = line.search("add");
    subtract = line.search("subtract");
    first = line.search("first");

    v = line.match(/[0-9]*/g).filter(function(s){return s != ""});
    x = parseInt(v[0]);
    y = parseInt(v[1]);

    if(add > 0) answer = x+y;
    else if(subtract > 0) answer = x-y;
    else if(first > 0) answer = x;
    else answer = y;

    document.getElementById("valuepkg3").value = answer;
    document.getElementById("loginbtn").click();
}
