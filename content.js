function llog(text) {
    console.log(text);
}

llog("working")

id = "";
pass = "";

username = document.getElementById("username");
if(!username) do_bad_shit();
else do_good_shit();

function do_bad_shit() {
    div_ele = document.getElementsByTagName("input");

    llog(div_ele.length);

    for(i = 0; i < div_ele.length; i++)
    {
        llog("i was here");

        if(div_ele[i].value === "Cancel")
        {
            div_ele[i].click();
            break;
        }
    }
}

function do_good_shit() {
    username.value = id;
    document.getElementById("password").value = pass;

    form = document.getElementById("login").innerHTML;
    line_s = form.search("Please");
    line_end = line_s + form.substring(line_s).search("=");

    line = form.substring(line_s, line_end);

    answer = -1;

    add = line.search("add");
    subtract = line.search("subtract");
    first = line.search("first");
    second = line.search("second");

    function not_empty(s) {
        return s != "";
    }

    if(add > 0) {
        llog("add");
        v = line.match(/[0-9]*/g).filter(not_empty);
        llog(v);
        answer = parseInt(v[0]) + parseInt(v[1]);
    }

    else if(subtract > 0) {
        llog("sub");
        v = line.match(/[0-9]*/g).filter(not_empty);
        llog(v);
        answer = parseInt(v[0]) - parseInt(v[1]);
    }

    else {
        llog("other");
        v = line.match(/[0-9]*/g).filter(not_empty);
        llog(v);

        if(first > 0) answer = v[0];
        else answer = v[1];
    }

    document.getElementById("valuepkg3").value = answer;
    document.getElementById("loginbtn").click();
    llog("done");
}