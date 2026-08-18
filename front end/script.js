let python = document.getElementById("py");
let js = document.getElementById("js");
let sql = document.getElementById("sql");
let java = document.getElementById("java");
let c = document.getElementById("c");
let cpp = document.getElementById("cpp");
let cs = document.getElementById("cs");
let css = document.getElementById("css");
let html = document.getElementById("html");
let logo = document.getElementById("logo");
let abt = document.getElementById("abt");
let home = document.getElementById("hm");
let ath = document.getElementById("at");
let main = document.getElementById("mainlan");


logo.onclick = function relod(){
    location.reload();
}

abt.onclick = function about(){
    document.write(`
        <body>
    <h1 id="logo" onclick="location.reload();">ATeacher</h1>
<div id="navbar">
    <ul>
        
        <li id="hm" onclick="location.reload();">home</li>
         
    </ul>
</div>
    <p class="d">ATeacher is a webapp learn how progrmaing language  use and this importance 
    </p>
    <p class="v">version 1.1</p>
    <style>
        #logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 60px;
    font-weight: bolder;
    color: white;
    font-style: italic;
    text-shadow: 20px 30px 7px rgb(38, 37, 37);
    cursor: pointer;
}
#logo::selection{
    background-color: transparent;
}
.d{
    font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    font-size: x-large;
    font-weight: bolder;
    color: aliceblue;
    font-style: normal;
    white-space: inherit;
}
body{
    background-image: url(img2.jpg);
}
.v{
    font-family: Cambria, Cochin, Georgia, Times, 'Times New Roman', serif;
    font-size: large;
    font-weight: lighter;
    font-style: italic;
    color: cadetblue;
}
#navbar{
    width: 100px;
    height: 100px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    
}
ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    text-indent: 20px;
    font-weight: bold;
    font-size: larger;
    color: blanchedalmond;
    text-shadow: 5px 5px 4px black;
    cursor: pointer;
}
ul::selection{
    background-color: transparent;
}

    </style>
</body>
        `)
}

home.onclick = function hm(){
    history.back();
}

ath.onclick = function athr(){
    document.write(`
        <body>
    <h1 id="logo" onclick="location.reload();">ATeacher</h1>
    
        <div id="navbar">
    <ul>
        <li id="hm" onclick="location.reload();">home</li>
    </ul>
</div>

    <h1 id="name">Aouther is Ahmed Mohamed Farook El-zemity</h1>
    <p>14 years old</p>
    <br>
    <p>south sainai - egypt</p>
<style>
    body{
    background-image: url(img2.jpg);
}
#logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 60px;
    font-weight: bolder;
    color: white;
    font-style: italic;
    text-shadow: 20px 30px 7px rgb(38, 37, 37);
    cursor: pointer;
}
#logo::selection{
    background-color: transparent;
}
#name{
    font-family: 'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;
    font-weight: 900;
    font-style: italic;
    color: yellow;
    align-items: center;
    justify-content: center;
    display: flex;
}
p{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: 600;
    font-style: normal;
    color: blanchedalmond;
}
#navbar{
    width: 100px;
    height: 100px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    
}
ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    text-indent: 20px;
    font-weight: bold;
    font-size: larger;
    color: blanchedalmond;
    text-shadow: 5px 5px 4px black;
    cursor: pointer;
}
ul::selection{
    background-color: transparent;
}
</style>

</body>
        `)
}

python.onclick = function pyt() {
    document.write(`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Python | ATeacher</title>
</head>

<body>
    <title>PYTHON | ATeacher</title>
    <h1 id="logo" onclick="location.reload()">ATeacher</h1>
<div id="navbar">
    <ul>
       
        <li onclick="location.reload();">home</li>
        
    </ul>
</div>
    <div id="main">
        <h1 id="hed">Python</h1>
        <h2>What is Python uses?</h2>
        <h4>Python uses</h4>
        <hr>
        <p>Python use in all banches of AI</p>
        <p>It's a manger for all AI in the worled</p>
        <p>python can make websit , mobile app ,descktop app and practing AI</p>
    </div>

    <style>
body{
    background-image: url(img2.jpg);
}
#logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 60px;
    font-weight: bolder;
    color: white;
    font-style: italic;
    text-shadow: 20px 30px 7px rgb(38, 37, 37);
    cursor: pointer;
}
#logo::selection{
    background-color: transparent;
}
#navbar{
    width: 100px;
    height: 100px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    text-indent: 20px;
    font-weight: bold;
    font-size: larger;
    color: blanchedalmond;
    text-shadow: 5px 5px 4px black;
    cursor: pointer;
}
ul::selection{
    background-color: transparent;
}
#hed{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
    font-size: x-large;
    font-style: oblique;
    color: chartreuse;
}
h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: larger;
    color: cornflowerblue;

}
h4{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: blueviolet;
    font-size: large;
}
p{
    color: whitesmoke;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
hr{
    color: aliceblue;
}
    </style>


    
</body>

        `);
}
js.onclick = function jsc() {
    document.write(`
        

<body>
    <title>JavaScript | ATeacher</title>
    <h1 id="logo" onclick="location.reload()">ATeacher</h1>
<div id="navbar">
    <ul>
        
        <li onclick="location.reload();">home</li>
        
    </ul>
</div>
    <div id="main">
        <h1 id="hed">JavaScript</h1>
        <h2>What is javascript uses?</h2>
        <h4>javascript uses</h4>
        <hr>
        <p>javascript use in all website aroundly</p>
        <p>There's not a websit not uses java script</p>
        <p>python can make websit ,descktop app and practing AI litle</p>
    </div>

    <style>
body{
    background-image: url(img2.jpg);
}
#logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 60px;
    font-weight: bolder;
    color: white;
    font-style: italic;
    text-shadow: 20px 30px 7px rgb(38, 37, 37);
    cursor: pointer;
}
#logo::selection{
    background-color: transparent;
}
#navbar{
    width: 100px;
    height: 100px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    text-indent: 20px;
    font-weight: bold;
    font-size: larger;
    color: blanchedalmond;
    text-shadow: 5px 5px 4px black;
    cursor: pointer;
}
ul::selection{
    background-color: transparent;
}
#hed{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
    font-size: x-large;
    font-style: oblique;
    color: orange;
}
h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: larger;
    color: red;

}
h4{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: blueviolet;
    font-size: large;
}
p{
    color: whitesmoke;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
hr{
    color: aliceblue;
}
    </style>
    
<script>
    let logo = document.getElementById("logo");

logo.onclick = function relod(){
    location.reload()
}
    </script>

</body>

        `);
}
sql.onclick = function squl() {
    document.write(`
        

<body>
    <title>SQL | ATeacher</title>
    <h1 id="logo" onclick="location.reload()">ATeacher</h1>
<div id="navbar">
    <ul>
        
        <li onclick="location.reload();">home</li>
        
    </ul>
</div>
    <div id="main">
        <h1 id="hed">SQL</h1>
        <h2>What is SQL uses?</h2>
        <h4>SQL uses</h4>
        <hr>
        <p>SQL use in all databasese and data sciense learning and servers</p>
        <p>There's not a websit or applcation not uses SQL in back end</p>
        <p>SQL can make websit backend , data basses</p>
    </div>

    <style>
body{
    background-image: url(img2.jpg);
}
#logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 60px;
    font-weight: bolder;
    color: white;
    font-style: italic;
    text-shadow: 20px 30px 7px rgb(38, 37, 37);
    cursor: pointer;
}
#logo::selection{
    background-color: transparent;
}
#navbar{
    width: 100px;
    height: 100px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    text-indent: 20px;
    font-weight: bold;
    font-size: larger;
    color: blanchedalmond;
    text-shadow: 5px 5px 4px black;
    cursor: pointer;
}
ul::selection{
    background-color: transparent;
}
#hed{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
    font-size: x-large;
    font-style: oblique;
    color: red;
}
h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: larger;
    color: white;

}
h4{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: red;
    font-size: large;
}
p{
    color: whitesmoke;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
hr{
    color: aliceblue;
}
    </style>
    
<script>
    let logo = document.getElementById("logo");

logo.onclick = function relod(){
    location.reload()
}
    </script>

</body>

        `);
}
java.onclick = function jav() {
    document.write(`
        

<body>
    <title>JAVA | ATeacher</title>
    <h1 id="logo" onclick="location.reload()">ATeacher</h1>
<div id="navbar">
    <ul>
        
        <li onclick="location.reload();">home</li>
        
    </ul>
</div>
    <div id="main">
        <h1 id="hed">JAVA</h1>
        <h2>What is JAVA uses?</h2>
        <h4>JAVA uses</h4>
        <hr>
        <p>JAVA use in all mobile app </p>
        <p>There's not a app not uses JAVA</p>
        <p>JAVA can make descktop app and mobile app (with Android Studio)</p>
    </div>

    <style>
body{
    background-image: url(img2.jpg);
}
#logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 60px;
    font-weight: bolder;
    color: white;
    font-style: italic;
    text-shadow: 20px 30px 7px rgb(38, 37, 37);
    cursor: pointer;
}
#logo::selection{
    background-color: transparent;
}
#navbar{
    width: 100px;
    height: 100px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    text-indent: 20px;
    font-weight: bold;
    font-size: larger;
    color: blanchedalmond;
    text-shadow: 5px 5px 4px black;
    cursor: pointer;
}
ul::selection{
    background-color: transparent;
}
#hed{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
    font-size: x-large;
    font-style: oblique;
    color: darkblue;
}
h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: larger;
    color: red;

}
h4{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: green;
    font-size: large;
}
p{
    color: whitesmoke;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
hr{
    color: aliceblue;
}
    </style>
    
<script>
    let logo = document.getElementById("logo");

logo.onclick = function relod(){
    location.reload()
}
    </script>

</body>

        `);
}
c.onclick = function cl() {
    document.write(`
        

<body>
    <title>C | ATeacher</title>
    <h1 id="logo" onclick="location.reload()">ATeacher</h1>
<div id="navbar">
    <ul>
        
        <li onclick="location.reload();">home</li>
    </ul>
</div>
    <div id="main">
        <h1 id="hed">C</h1>
        <h2>What is C uses?</h2>
        <h4>C uses</h4>
        <hr>
        <p>C use in all hardware system whith life way</p>
        <p>There's not hardware like CPU not uses C</p>
        <p>C can make virus and hardware system (so fast lanuage)</p>
    </div>

    <style>
body{
    background-image: url(img2.jpg);
}
#logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 60px;
    font-weight: bolder;
    color: white;
    font-style: italic;
    text-shadow: 20px 30px 7px rgb(38, 37, 37);
    cursor: pointer;
}
#logo::selection{
    background-color: transparent;
}
#navbar{
    width: 100px;
    height: 100px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    text-indent: 20px;
    font-weight: bold;
    font-size: larger;
    color: blanchedalmond;
    text-shadow: 5px 5px 4px black;
    cursor: pointer;
}
ul::selection{
    background-color: transparent;
}
#hed{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
    font-size: x-large;
    font-style: oblique;
    color: gold;
}
h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: larger;
    color: gray;

}
h4{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: gold;
    font-size: large;
}
p{
    color: whitesmoke;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
hr{
    color: aliceblue;
}
    </style>
    
<script>
    let logo = document.getElementById("logo");

logo.onclick = function relod(){
    location.reload()
}
    </script>


</body>

        `);
}
cpp.onclick = function cp() {
    document.write(`
        

<body>
    <title>C++ | ATeacher</title>
    <h1 id="logo" onclick="location.reload()">ATeacher</h1>
<div id="navbar">
    <ul>
        
        <li onclick="location.reload();">home</li>
        
    </ul>
</div>
    <div id="main">
        <h1 id="hed">C++</h1>
        <h2>What is C++ uses?</h2>
        <h4>C++ uses</h4>
        <hr>
        <p>C++ use in all games realy (With unreal) and  programing Arduino</p>
        <p>There's not a game or arduino board not uses C++</p>
        <p>C++ can make Games and mobile app and Arduino programing</p>
    </div>

    <style>
body{
    background-image: url(img2.jpg);
}
#logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 60px;
    font-weight: bolder;
    color: white;
    font-style: italic;
    text-shadow: 20px 30px 7px rgb(38, 37, 37);
    cursor: pointer;
}
#logo::selection{
    background-color: transparent;
}
#navbar{
    width: 100px;
    height: 100px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    text-indent: 20px;
    font-weight: bold;
    font-size: larger;
    color: blanchedalmond;
    text-shadow: 5px 5px 4px black;
    cursor: pointer;
}
ul::selection{
    background-color: transparent;
}
#hed{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
    font-size: x-large;
    font-style: oblique;
    color: blue;
}
h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: larger;
    color: whithe;

}
h4{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: green;
    font-size: large;
}
p{
    color: whitesmoke;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
hr{
    color: aliceblue;
}
    </style>
    
<script>
    let logo = document.getElementById("logo");

logo.onclick = function relod(){
    location.reload()
}
    </script>


</body>

        `);
}
cs.onclick = function csharp() {
    document.write(`
        

<body>
    <title>C# | ATeacher</title>
    <h1 id="logo" onclick="location.reload()">ATeacher</h1>
<div id="navbar">
    <ul>
        
        <li onclick="location.reload();">home</li>
        
    </ul>
</div>
    <div id="main">
        <h1 id="hed">C#</h1>
        <h2>What is C# uses?</h2>
        <h4>C# uses</h4>
        <hr>
        <p>C# use in all games realy (With unity) and  programing descktop app</p>
        <p>There's not a game or descktop app not uses C#</p>
        <p>C# can make Games and descktop app</p>
    </div>

    <style>
body{
    background-image: url(img2.jpg);
}
#logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 60px;
    font-weight: bolder;
    color: white;
    font-style: italic;
    text-shadow: 20px 30px 7px rgb(38, 37, 37);
    cursor: pointer;
}
#logo::selection{
    background-color: transparent;
}
#navbar{
    width: 100px;
    height: 100px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    text-indent: 20px;
    font-weight: bold;
    font-size: larger;
    color: blanchedalmond;
    text-shadow: 5px 5px 4px black;
    cursor: pointer;
}
ul::selection{
    background-color: transparent;
}
#hed{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
    font-size: x-large;
    font-style: oblique;
    color: blueviolet;
}
h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: larger;
    color: white;

}
h4{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: blueviolet;
    font-size: large;
}
p{
    color: whitesmoke;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
hr{
    color: aliceblue;
}
    </style>
    
<script>
    let logo = document.getElementById("logo");

logo.onclick = function relod(){
    location.reload()
}
    </script>


</body>

        `);
}
css.onclick = function cstyle() {
    document.write(`
        

<body>
    <title>CSS | ATeacher</title>
    <h1 id="logo" onclick="location.reload()">ATeacher</h1>
<div id="navbar">
    <ul>
        
        <li onclick="location.reload();">home</li>
        
    </ul>
</div>
    <div id="main">
        <h1 id="hed">CSS</h1>
        <h2>What is CSS uses?</h2>
        <h4>CSS uses</h4>
        <hr>
        <p>CSS use in all website (With html) and style the elements in html</p>
        <p>There's not a website not uses CSS</p>
        <p>CSS can style elements in html</p>
    </div>

    <style>
body{
    background-image: url(img2.jpg);
}
#logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 60px;
    font-weight: bolder;
    color: white;
    font-style: italic;
    text-shadow: 20px 30px 7px rgb(38, 37, 37);
    cursor: pointer;
}
#logo::selection{
    background-color: transparent;
}
#navbar{
    width: 100px;
    height: 100px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    text-indent: 20px;
    font-weight: bold;
    font-size: larger;
    color: blanchedalmond;
    text-shadow: 5px 5px 4px black;
    cursor: pointer;
}
ul::selection{
    background-color: transparent;
}
#hed{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
    font-size: x-large;
    font-style: oblique;
    color: red;
}
h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: larger;
    color: blue;

}
h4{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: red;
    font-size: large;
}
p{
    color: whitesmoke;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
hr{
    color: aliceblue;
}
    </style>
    
<script>
    let logo = document.getElementById("logo");

logo.onclick = function relod(){
    location.reload()
}
    </script>


</body>

        `);
}
html.onclick = function hml() {
    document.write(`
        

<body>
    <title>HTML | ATeacher</title>
    <h1 id="logo" onclick="location.reload()">ATeacher</h1>
<div id="navbar">
    <ul>
        
        <li onclick="location.reload();">home</li>
        
    </ul>
</div>
    <div id="main">
        <h1 id="hed">HTML</h1>
        <h2>What is HTML uses?</h2>
        <h4>HTML uses</h4>
        <hr>
        <p>HTML use in all website to build the structure</p>
        <p>There's not a website not uses HTML</p>
        <p>HTML can build elements in webpage</p>
    </div>

    <style>
body{
    background-image: url(img2.jpg);
}
#logo{
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 60px;
    font-weight: bolder;
    color: white;
    font-style: italic;
    text-shadow: 20px 30px 7px rgb(38, 37, 37);
    cursor: pointer;
}
#logo::selection{
    background-color: transparent;
}
#navbar{
    width: 100px;
    height: 100px;
    font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}
ul{
    display: flex;
    text-decoration: none;
    list-style: none;
    text-indent: 20px;
    font-weight: bold;
    font-size: larger;
    color: blanchedalmond;
    text-shadow: 5px 5px 4px black;
    cursor: pointer;
}
ul::selection{
    background-color: transparent;
}
#hed{
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-weight: 900;
    font-size: x-large;
    font-style: oblique;
    color: blue;
}
h2{
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-weight: bold;
    font-size: larger;
    color: red;

}
h4{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    color: whitesmoke;
    font-size: large;
}
p{
    color: whitesmoke;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
hr{
    color: aliceblue;
}
    </style>
    
<script>
    let logo = document.getElementById("logo");

logo.onclick = function relod(){
    location.reload()
}
    </script>


</body>

        `);
}
