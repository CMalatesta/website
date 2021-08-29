const base = (logo, navbar, content) => `
<html>

<head>

    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta charset="UTF-8" />

    <!-- Bootstrap -->
    <link href="static/bootstrap/bootstrap.css" rel="stylesheet">

     <!-- Fonts -->

     <link href="static/fonts/css.css" rel="stylesheet">
     <link href="static/fonts/css2.css" rel="stylesheet">
     <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

    <!-- Styles -->
     <link href="static/fonts/style.css" rel="stylesheet">

</head>

<body>
<div>
    ${navbar}
</div>
<div class="container bg-white container-xxl p-0 m-auto"">
    ${content}
</div>
    
    <script src="static/bootstrap/jquery.min.js"></script>
    <script src="static/bootstrap/bootstrap.bundle.js"></script>

</body>

</html>
`;

module.exports = base;


