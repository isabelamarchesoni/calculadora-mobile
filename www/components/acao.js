<!DOCTYPE HTML>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover">
  <meta http-equiv="Content-Security-Policy" content="default-src * data: gap: https://ssl.gstatic.com; style-src * 'unsafe-inline'; script-src * 'unsafe-inline' 'unsafe-eval'">
  
  <script src="cordova.js"></script>
  <script src="components/loader.js"></script>
  <script src="components/acao.js"></script>

  <link rel="stylesheet" href="components/loader.css">
  <link rel="stylesheet" href="lib/bootstrap/css/bootstrap.min.css">
  <link rel="stylesheet" href="css/style.css">

</head>
   <div class="container">
        <div class="coluna">
            <label>Calculadora</label>
            <label>Digite um valor::</label>
            <input type="number" name="valor1" id="valor1">

            <label>Digite outro valor:</label>
            <input type="number" name="valor2" id="valor2">

            <button class="btn" id="somar">Somar</button>
            <button class="btn" id="subtrair">Subtrair</button>
            <button class="btn" id="multiplicar">Multiplicar</button>
            <button class="btn" id="dividir">Dividir</button>

            <label>Resultado: </label>
            <Input type="text" name="resultado" id="resultado" readonly>
        </div>

    <div class="anteriores">

        <div>
          <h3>Histórico de Soma</h3>
          <p>Último resultado: <strong id="usoma"></strong></p>
          <h4>Somas anteriores:</h4>
          <div id="somaanterior"></div>
          <div class="resultado"><p>Soma total:<strong id="resultSomaTotal"></strong></p></div>
        </div>

        <div>
            <h3>Histórico de Subtração</h3>
            <p>Último resultado: <strong id="usub"></strong></p>
            <h4>Subtrações anteriores:</h4>
            <div id="subanterior"></div>
            <div class="resultado"><p>Subtrações totais:<strong id="resultSubTotal"></strong></p></div>
          </div>

          <div>
            <h3>Histórico de Multiplicação</h3>
            <p>Último resultado: <strong id="umult"></strong></p>
            <h4>Multiplicações anteriores:</h4>
            <div id="multanterior"></div>
            <div class="resultado"><p>Multiplicações totais:<strong id="resultMultTotal"></strong></p></div>
          </div>

          <div>
            <h3>Histórico de Divisão</h3>
            <p>Último resultado: <strong id="udiv"></strong></p>
            <h4>Divisões anteriores:</h4>
            <div id="divanterior"></div>
            <div class="resultado"><p>Divisões totais:<strong id="resultDivTotal"></strong></p></div>
          </div>
    </div>

</body>
<script type="text/javascript" src="jvsc/comando.js" ></script>
</html>