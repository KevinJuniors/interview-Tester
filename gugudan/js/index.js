for (var i = 2; i <= 9; i++) {
    document.write("<hr>");
    document.write(i + "단");
    document.write("<hr>");
    
    for (var j = 1; j <= 9; j++) {
        document.write(i + "X" + j + "=" + (i * j));
        document.write("<br>");
    }
}