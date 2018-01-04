/*
For this quiz, use articleList and DOM navigation methods to collect articleList's
sibling <h1> (var h1), children (var kids), and parent <div>s (var parents).

You must use articleList to navigate to the element(s)!
*/

// Start with these variable!
var articleList, h1, kids, parents;

articleList = $('.article-list');
h1 = articleList.siblings('h1');
kids = articleList.children('*');
parents = articleList.parents('div');

/*

*/
var featuredArticle;
featuredArticle = $('li.article-item')
featuredArticle.toggleClass('featured', false);


/*
For this quiz, remove the class 'featured' from Article #2 and add it to Article #3!

You must use jQuery's toggleClass method!
*/

// don't change these variable!
var article2, article3;

article2 = $('li.featured');
article2.toggleClass('featured', false);

article3 = article2.next();
article3.addClass('featured').toggleClass('featured', true);


/*
For this quiz, set the href of the <a> in the first nav item to "#1".

You must use jQuery's attr() method!
*/

// Start with this variable!
var navList;

navList = $('.nav-item');
navList.first().children('a').attr("href", "#1");

// var navList firstItem, link;
// navList = $('.nav-item');
// firstItem = navList.children().first;
// link = firstItem.find('a');
// link.attr('href', '#1);

