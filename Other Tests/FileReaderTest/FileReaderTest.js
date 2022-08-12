function openFile(event) {	//Read Content from selected File (Change HTML accordingly for it to work)
  let input = event.target;	//Takes Information from the HTML that executed this Script. Event contains the File Name.
  let reader = new FileReader();	//Create a new File Reader

  reader.onload = function () {
    let lyrics = reader.result;	//Reads the Lyrics from the Object

    //createTextAndChords(lyrics);

    let node = document.getElementById('output');	//Gets the Place where the Lyrics should go in the HTML
    node.innerText = lyrics;	//Displays the Lyrics
  };

  reader.readAsText(input.files[0]);	//Reads first File from Array
}