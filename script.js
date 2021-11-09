let j1 = [["cross00","cross01","cross02"],
            ["cross10","cross11","cross12"],
            ["cross20","cross21","cross22"]]
;
let j2 = [["dot00","dot01","dot02"],
            ["dot10","dot11","dot12"],
            ["dot20","dot21","dot22"]]
;
let t;
function juego(a,b) {
    if (t == 0 && document.getElementById(j1[a][b]).style.display != "inline") {
        document.getElementById(j2[a][b]).style.display = "inline";
        t = 1;
    }
    else if (document.getElementById(j2[a][b]).style.display != "inline"){
        document.getElementById(j1[a][b]).style.display = "inline";
        t = 0;
    }
}
function reset() {
    window.location.reload();
}