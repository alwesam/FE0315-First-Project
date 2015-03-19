$(function() {
	var quote = $('.quote').find('h1');
	var author = $('.quote').find('h3');
	//will display a different quote everytime the page reloads
	var selectedAuthor = randAuthor();
 	quote.text(quotes(selectedAuthor));
 	author.text(selectedAuthor); 	
})

/*A collection of my favorite quotes*/
function quotes(key) {
	var quote = {
				'Thomas Edison' : '"There is no substitute for hard work."',
				'Friedrich Nietzsche' :'"He who has a why to live can bear almost any how."',
				'Theodore Roosevelt' : '“The only man who never makes a mistake is the man who never does anything.”',
				'Abraham Lincoln' : '"You can\'t believe everything you read on the internet."',
				'Jim Rohn' : '"Your life does not get better by chance, it gets better by change."'
				};
	return quote[key];
}

//returns a random key (author)
function randAuthor()
{
	var author = ["Thomas Edison",
				  "Abraham Lincoln",
				  "Theodore Roosevelt",
				  "Jim Rohn",
				  "Friedrich Nietzsche"
				];
    //I just learned that array.lenght is a property not a method
    return author[Math.floor(Math.random()*author.length)];
}

