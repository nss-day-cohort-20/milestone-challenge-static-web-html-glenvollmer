let blogPostArr = [
{
	"Title":"Blogpost 1",
	"Date":"",
	"Copy":"Blog text here",

},
{
	"Title":"Blogpost 2",
	"Date":"",
	"Copy":"Blog text here",
}
];

function blogArticle (post) {
	let blogPost = document.getElementById("javaBlog");
	blogPost.innerHTML = post;
};

let blogToHTML = ""

for (var i = 0; i < blogPostArr.length; i++) {
	let post = `
		<h3>${blogPostArr[i].Title}</h3>
		<h4>${blogPostArr[i].Date}</h4>
		<p>${blogPostArr[i].Copy}</p>

	`;
	blogToHTML += post;
}

blogArticle(blogToHTML);