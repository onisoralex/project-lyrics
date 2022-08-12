function openFile(event) {
  var input = event.target;

  var reader = new FileReader();
  reader.onload = function () {
    var text = reader.result;
    var node = document.getElementById('output');
    node.innerText = text;
    console.log(reader.result.substring(0, 200));
  };
  reader.readAsText(input.files[0]);
}

function changeFont(num) {
  let e = document.getElementById("output");
  e.classList.remove(e.classList[0]);
  e.classList.add("st" + num);
}

function prepare() {
  document.getElementById("hide_me").addEventListener("click", function () {
    this.classList.add("hide")
  });
}

//function readTextFile(file) {
//  var rawFile = new XMLHttpRequest();
//  rawFile.open("GET", file, false);
//  rawFile.onreadystatechange = function() {
//    if (rawFile.readyState === 4) {
//      if (rawFile.status === 200 || rawFile.status == 0) {
//        var allText = rawFile.responseText;
//        alert(allText);
//      }
//    }
//  }
//  rawFile.send(null);
//}
//
//readTextFile("file:///C:/Users/aonisor/Downloads/test.txt")
////---------------------------------------------------------------
//var openFile = function(event) {
//  var input = event.target;
//
//  var reader = new FileReader();
//  reader.onload = function() {
//    var text = reader.result;
//    var node = document.getElementById('output');
//    node.innerText = text;
//    console.log(reader.result.substring(0, 200));
//  };
//  reader.readAsText(input.files[0]);
//};
