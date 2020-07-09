console.log("app.js is linked");

function createParagraph () {
    console.log('create Paragraph has been called');
    var broskiOne = document.getElementById('textOne').value;
    console.log(textOne);


    var paragraph = '<p>Ellen Degeneres and I had gone to Las Vegas to get our photos taken today. First photo we really wanted to take was a picture of us dressed as, Super Man, pretending to be heroes. When we saw the Batman movie, I really wanted to dress as the Joker! In the end, me and Ellen went back to the Ballegio Hotel and ordered pizza! '+ broskiOne + ' .</p>';
    console.log(paragraph);

    document.getElementById('answer').innerHTML = paragraph;
}