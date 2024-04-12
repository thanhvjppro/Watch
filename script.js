const h = document.getElementById('h');
const m = document.getElementById('m');
const s = document.getElementById('s');

setInterval(returnTime, 1024)

function returnTime() {
    const time = new Date();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();
    for(let i = 1; i < 12; i++) {
        if(i < 6) {
            Positions(1, s, 0 + (i*4), document.getElementById("s" + i));
            Positions(1, m, 0 + (i*4), document.getElementById("m" + i));
            Positions(2, h, 0 + (i*4), document.getElementById("h" + i))
        } else if(i < 8) {
            Positions(1, s, 0 + (i*4), document.getElementById("s" + i));
            Positions(1, m, 0 + (i*4), document.getElementById("m" + i));
        } else {
            Positions(1, s, 0 + (i*4), document.getElementById("s" + i));
        }
        
    }
}

function Positions(cases,  time, l, ss) {
    var pos = 50;
    switch (cases) {
        case 1:
            var pL = 0;
            var pT = 0;
            
            if(time < 15) {
                var a = Math.tan(time * 6 * Math.PI / 180);
                var d = Math.sqrt((l * l) / ((a * a) + 1));
                var n = Math.sqrt((l * l) - (d * d));
                console.log(a);
                console.log(time * 6);
                pT = pos - d;
                pL = pos + n;
            } else if(time < 30) {
                var a = Math.tan((time - 15) * 6 * Math.PI / 180);
                var n = Math.sqrt((l * l) / ((a * a) + 1));
                var d = Math.sqrt((l * l) - (n * n));
                pT = pos + d;
                pL = pos + n;
                console.log(time);
            } else if(time < 45) {
                var a = Math.tan((time - 30) * 6 * Math.PI / 180);
                var d = Math.sqrt((l * l) / ((a * a) + 1));
                var n = Math.sqrt((l * l) - (d * d));
                pT = pos + d;
                pL = pos - n;
            } else if(time < 60) {
                var a = Math.tan((time - 45) * 6 * Math.PI / 180);
                var n = Math.sqrt((l * l) / ((a * a) + 1));
                var d = Math.sqrt((l * l) - (n * n));
                console.log(time);
                console.log(n);
                pT = pos - d;
                pL = pos - n;
            }
            ss.style.top = pT + '%';
            ss.style.left = pL + '%';
            ss.innerHTML = time;
            break;
        case 2:
            var pL = 0;
            var pT = 0;

            var times = time;
            if(times > 12) {
                times -= 12;
            }
            if(times == 0) {
                times = 12;
            }
            
            if(times < 3) {
                var a = Math.tan(times * 30 * Math.PI / 180);
                var d = Math.sqrt((l * l) / ((a * a) + 1));
                var n = Math.sqrt((l * l) - (d * d));
                console.log(a);
                console.log(times * 6);
                pT = pos - d;
                pL = pos + n;
            } else if(times < 6) {
                var a = Math.tan((times - 15) * 30 * Math.PI / 180);
                var n = Math.sqrt((l * l) / ((a * a) + 1));
                var d = Math.sqrt((l * l) - (n * n));
                pT = pos + d;
                pL = pos + n;
                console.log(times);
            } else if(times < 9) {
                var a = Math.tan((times - 30) * 30 * Math.PI / 180);
                var d = Math.sqrt((l * l) / ((a * a) + 1));
                var n = Math.sqrt((l * l) - (d * d));
                pT = pos + d;
                pL = pos - n;
            } else {
                var a = Math.tan((times - 45) * 30 * Math.PI / 180);
                var n = Math.sqrt((l * l) / ((a * a) + 1));
                var d = Math.sqrt((l * l) - (n * n));
                console.log(times);
                console.log(n);
                pT = pos - d;
                pL = pos - n;
            }
            ss.style.top = pT + '%';
            ss.style.left = pL + '%';
            ss.innerHTML = time;
            break;
    }
}