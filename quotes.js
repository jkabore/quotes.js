// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
//object quotes in an array
var quote;
var source;
var citation;
var year;
var tag;
var message;
var quotes = [
    {
        quote: "No matter how old you are, there's always something good to look forward to. ",
        source: " Lynn Johnston",
        citation: " For Better or For Worse",
        year: 2004,
        tag: "Hope"
  },
    {
        quote: " You've got to find what you love and that is as true for work as it is for lovers. Your work is going to fill a large part of your life and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what what you do. If you haven't found it yet, keep looking and don't settle. As with all matters of the heart, you'll know when you've found it.",
        source: " Steve Jobs",
        citation: " Stanford Commencement Adress",
        year: 2005,
        tag: "work"
  },
    {
        quote: " If you have only two pennies left in the world, with the first penny, you should buy rice to feed your family. With the second penny, say the wise Japanese, you should buy a lily. The Japanese understand the importance of dreaming...",
        source: "Japanese Proverb",
        citation: "from Lilies Words and Music: Annie Walker",
        year: 1999,
        tag: "Dream"
  },
    {
        quote: " If you don't like someone's story, write your own",
        source: " Chinua Achebe",
        citation: "Things Fall Apart",
        year: 1958,
        tag: "Change"
 },
    {
        quote: " If you can make a woman laugh, you can make her do anything",
        source: "Marilyn Monroe",
        citation: "Unsourced",
        tag: "Love"
},
    {
        quote: " Have you ever been in love? Horrible isn't it? It makes you so vulnerable. It opens your chest and it opens up your heart and it means that someone can get inside you and mess you up",
        source: "  Neil Gaiman",
        citation: " The Sandman, Vol. 9: The Kindly Ones",
        year: 1989,
        tag: "Love"
    },
    {
        quote: " For every minute you are angry you lose sixty seconds of happiness",
        source: "Julian Germain",
        citation: "Book",
        year: 2005,
        tag: "Happiness"
      },
    {
        quote: "Coincidence is God's way of remaining anonymous",
        source: "Albert Einstein",
        citation: "The World As I See It",
        year: 1931,
        tag: "Coincidence"
        },
];
//document.getElementById('loadQuote').addEventListener("click", randomQuote);
// function that will generate random quotes
    var randomQuote = function getRandomQuote(){
		var randomNumber= Math.floor(Math.random()*quotes.length);
		quote= quotes[randomNumber].quote;
        source= quotes[randomNumber].source;
        citation= quotes[randomNumber].citation;
        year= quotes[randomNumber].year;
        tag= quotes[randomNumber].tag;
		message = '<p>'+ quote +'</p>' + '<p>'+ source +'</p>' + '<p>' + citation +'</p>'+ '<p>'+ year+'</p>'+ '<p>'+tag + '</p>';
		document.getElementById("quote-box").innerHTML = message;
		document.getElementById("rbgcolor").style.backgroundColor = randColors();

		};
var red;
var green;
var blue;
var nIntervId;
// function that will generate random colors
    var randColors = function randomColors() {
	var randomcolor;
    red = Math.floor(Math.random() * 256);
    green = Math.floor(Math.random() * 256);
    blue = Math.floor(Math.random() * 256);
    col = 'rgb(' + red + ',' + green + ',' + blue + ')';
	return col;
		document.getElementById('loadQuote').addEventListener("click", randomQuote);
