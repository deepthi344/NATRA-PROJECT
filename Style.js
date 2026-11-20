*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
html{
    scroll-behavior: smooth;
}
body{
    background-color: darksalmon;
    color: bisque;
    font-family: Arial, sans-serif;
    min-height: 100vh;
}
button{
    background-color: aliceblue;
    border: 0;
    color: aqua;
    padding: 12px 20px;
    border-radius: 8px;
    cursor: pointer;
    font-weight: bold;
}
button:hover{
    background-color: rgb(14, 99, 18);
}
.brand{
    display: flex;
    align-items: center;
    gap: 12px;
}
.brand-logo{
    background-color: cornsilk;
    border-radius: 10px;
    padding: 12px 16px;
    font-size: 23px;
    font-weight: bold;
}
.brand h1{
    color: blanchedalmond;
    letter-spacing: 3px;
}
.brand p{
    font-size: 9px;
    color: floralwhite;
}