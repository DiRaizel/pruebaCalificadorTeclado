<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="initial-scale=1,  maximum-scale=1, width=device-width, height=device-height" />
        <title>Pruebas Clificardor Teclado</title>
        <!--fuentes-->
        <link href="css/materialize.min.css" rel="stylesheet"/>
        <!--<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">-->
        <link href="css/iconos-materialize/icon.css" rel="stylesheet">
        <link href="css/estilos.css" rel="stylesheet"/>
        <!--jquery-->
        <script src="libs/jquery.js"></script>
        <!--scripts js-->
        <script src="libs/materialize.min.js"></script>
        <script src="logic/calificador.js"></script>
    </head>
    <body class="#424242 grey darken-3">

        <script>
            window.onload = show5;
        </script>

        <div class="row">
            <div class="col s12 l4 offset-l4 cont">

                <div class="l4 offset-l4 divPreloader">
                    <div class="preloader-wrapper big active ">
                        <div class="spinner-layer spinner-blue">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div><div class="gap-patch">
                                <div class="circle"></div>
                            </div><div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>

                        <div class="spinner-layer spinner-red">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div><div class="gap-patch">
                                <div class="circle"></div>
                            </div><div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>

                        <div class="spinner-layer spinner-yellow">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div><div class="gap-patch">
                                <div class="circle"></div>
                            </div><div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>

                        <div class="spinner-layer spinner-green">
                            <div class="circle-clipper left">
                                <div class="circle"></div>
                            </div><div class="gap-patch">
                                <div class="circle"></div>
                            </div><div class="circle-clipper right">
                                <div class="circle"></div>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="row msg" id="msg">
                    
                </div>

                <div class="row">
                    <h4 id="liveclock" style="margin-top: 0px; color: white;"></h4>
                </div>

            </div>
        </div>
    </div>

</body>
</html>
