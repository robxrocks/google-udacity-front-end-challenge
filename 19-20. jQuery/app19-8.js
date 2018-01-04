/*
For this quiz, remove the <ul> from the first article item!

You must use jQuery's remove() method.
*/

// Start with this variable!
var articleItems;

articleItems = $('.article-item').first();
articleItems.children('ul').remove();

//or
articleItems.children().remove('ul');
