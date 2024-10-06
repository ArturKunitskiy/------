//1

// let str = "абвгдеёжзийклмнопрстуфхцчшщъыьэюя. АБВГДЕЁЖЗИЙКЛМНОПРСТУФХЦЧШЩЪЫЬЭЮЯ";
// let answer = prompt("Введите своё ФИО: ");
// let correct = true;
// for (index in answer) 
// {
//     if (str.indexOf(answer[index]) == -1) 
//     {
//         alert("Некорректный символ: " + answer[index]);
//         correct = false;
//     }
// }
// if(correct == true)
// {
//     alert("Спасибо :)");
// }


//2
// let address = "http://www.ufa.com.ua/utilites/hdd/out.php?sort=2"; 
// let protocol = address.slice(0, address.indexOf(":") + 1);
// let hostStart = address.indexOf("//") + 2;
// let hostEnd = address.indexOf("/", hostStart);
// let host = address.slice(hostStart, hostEnd);
// let pathStart = hostEnd;
// let pathEnd = address.lastIndexOf("/") + 1;
// let path = address.slice(pathStart, pathEnd);
// let fileStart = address.lastIndexOf("/") + 1;
// let fileEnd = address.indexOf("?");
// let fileName = address.slice(fileStart, fileEnd);
// let queryString = address.slice(address.indexOf("?") + 1);

// document.write("протокол - " + protocol + "<br>");
// document.write("хост  - " + host + "<br>");
// document.write("путь  - " + path + "<br>");
// document.write("имя файла - " + fileName + "<br>");
// document.write("строка запроса - " + queryString + "<br>");