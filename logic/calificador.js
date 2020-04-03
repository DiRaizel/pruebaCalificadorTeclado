//-----------------------------Reloj en vivo------------------------------------
function show5() {
    if (!document.layers && !document.all && !document.getElementById)
        return;

    var Digital = new Date();
    var hours = Digital.getHours();
    var minutes = Digital.getMinutes();
    var seconds = Digital.getSeconds();

    var dn = "PM";
    if (hours < 12)
        dn = "AM";
    if (hours > 12)
        hours = hours - 12;
    if (hours == 0)
        hours = 12;

    if (minutes <= 9)
        minutes = "0" + minutes;
    if (seconds <= 9)
        seconds = "0" + seconds;
    //change font size here to your desire
    myclock = hours + ":" + minutes + ":"
            + seconds + " " + dn;
    if (document.layers) {
        document.layers.liveclock.document.write(myclock);
        document.layers.liveclock.document.close();
    } else if (document.all)
        liveclock.innerHTML = myclock;
    else if (document.getElementById)
        document.getElementById("liveclock").innerHTML = myclock;
    setTimeout("show5()", 1000);
}

//
$(document).ready(function () {
    //
    msgInicio();
});

//
function msgInicio() {
    //
    M.toast({html: 'Bienvenido, ya puedes empezar a probar los calificadores!', classes: '#00bfa5 teal accent-4'}, 5000);
}

//
var blockmayus = false;
var cblockmayus = 0;
var keys = '';
var control = 0;
var mayus = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', 'A', 'S', 'D',
    'F', 'G', 'H', 'J', 'K', 'L', 'Ñ', 'Z', 'X', 'C', 'V', 'B', 'N', 'M'];

//
document.addEventListener("keyup", function (event) {
    //
    if (event.getModifierState("CapsLock") && blockmayus === false) {
        //
        M.toast({html: 'Desactiva las mayusculas!', classes: '#e53935 red darken-1'}, 5000);
        //
        blockmayus = true;
    }
});

//
$(document).keydown(function (e) {
    //
    if (mayus.indexOf(e.key) !== -1) {
        //
        M.toast({html: 'Desactiva las mayusculas!', classes: '#e53935 red darken-1'}, 5000);
        //
        keys = '';
        control = 0;
        //
    } else {
        //
        if (control === 0 && keys === '') {
            //
            keys = e.key + '+';
            control++;
        } else if (control === 1 && keys === 'Alt+') {
            //
            control++;
            keys += e.key;
            //
        } else {
            //
            control = 1;
            keys = e.key + '+';
            //
            M.toast({html: 'No oprimas botones del teclado...', classes: '#e53935 red darken-1'}, 5000);
        }
        //
        if (keys !== '' && control === 2) {
            //
            msg(keys);
            //
            blockmayus = false;
        }
    }
});

//
function msg(valor) {
    //
    if (valor === 'Alt+m') {
        //
        M.toast({html: 'Malo!', classes: '#e53935 red darken-1'}, 5000);
        //
        $('#msg').html('<div style="color: #e53935;">Malo</div>');
        //
    } else if (valor === 'Alt+r') {
        //
        M.toast({html: 'Regular!', classes: '#ffc107 amber'}, 5000);
        //
        $('#msg').html('<div style="color: #ffc107;">Regular</div>');
        //
    } else if (valor === 'Alt+b') {
        //
        M.toast({html: 'Bueno!', classes: '#1976d2 blue darken-2'}, 5000);
        //
        $('#msg').html('<div style="color: #1976d2;">Bueno</div>');
        //
    } else if (valor === 'Alt+w') {
        //
        M.toast({html: 'Excelente!', classes: '#00bfa5 teal accent-4'}, 5000);
        //
        $('#msg').html('<div style="color: #00bfa5;">Excelente</div>');
        //
    } else {
        //
        M.toast({html: 'Error el valor recibido es: ' + valor, classes: '#e53935 red darken-1'}, 5000);
        //
        $('#msg').html('');
    }
    //
    keys = '';
    control = 0;
}