const html = [
    "<!DOCTYPE html>\n<html>\n\t<head>\n\t\t<title>My Page</title>\n\t</head>\n\t<body>\n\t\t<h1>Hello, World!</h1>\n\t</body>\n</html>",
    "<div>\n\t<p>This is a paragraph.</p>\n</div>",
    "<h2>This is a heading</h2>",
    "<p>This is a paragraph.</p>",
    "<a href=\"https://www.example.com\">Link</a>",
    "<img src=\"image.jpg\" alt=\"Image\">",
    "<ul>\n\t<li>Item 1</li>\n\t<li>Item 2</li>\n\t<li>Item 3</li>\n</ul>",
    "<ol>\n\t<li>Item 1</li>\n\t<li>Item 2</li>\n\t<li>Item 3</li>\n</ol>",
    "<table>\n\t<tr>\n\t\t<th>Header 1</th>\n\t\t<th>Header 2</th>\n\t</tr>\n\t<tr>\n\t\t<td>Data 1</td>\n\t\t<td>Data 2</td>\n\t</tr>\n</table>",
    "<form>\n\t<label for=\"fname\">First name:</label><br>\n\t<input type=\"text\" id=\"fname\" name=\"fname\"><br>\n\t<label for=\"lname\">Last name:</label><br>\n\t<input type=\"text\" id=\"lname\" name=\"lname\"><br><br>\n\t<input type=\"submit\" value=\"Submit\">\n</form>",
    "<header>\n\t<h1>Header</h1>\n</header>",
    "<footer>\n\t<p>Footer</p>\n</footer>",
    "<nav>\n\t<ul>\n\t\t<li><a href=\"#\">Home</a></li>\n\t\t<li><a href=\"#\">About</a></li>\n\t\t<li><a href=\"#\">Contact</a></li>\n\t</ul>\n</nav>",
    "<section>\n\t<h2>Section Title</h2>\n\t<p>This is a section.</p>\n</section>",
    "<aside>\n\t<h2>Aside Title</h2>\n\t<p>This is an aside.</p>\n</aside>",
    "<article>\n\t<h2>Article Title</h2>\n\t<p>This is an article.</p>\n</article>",
    "<h3>This is a subheading</h3>",
    "<p>This is another paragraph.</p>",
    "<a href=\"https://www.example.com\">Another Link</a>",
    "<img src=\"another_image.jpg\" alt=\"Another Image\">",
    "<ul>\n\t<li>Another Item 1</li>\n\t<li>Another Item 2</li>\n\t<li>Another Item 3</li>\n</ul>",
    "<ol>\n\t<li>Another Item 1</li>\n\t<li>Another Item 2</li>\n\t<li>Another Item 3</li>\n</ol>",
    "<table>\n\t<tr>\n\t\t<th>Another Header 1</th>\n\t\t<th>Another Header 2</th>\n\t</tr>\n\t<tr>\n\t\t<td>Another Data 1</td>\n\t\t<td>Another Data 2</td>\n\t</tr>\n</table>",
    "<form>\n\t<label for=\"email\">Email:</label><br>\n\t<input type=\"email\" id=\"email\" name=\"email\"><br><br>\n\t<input type=\"submit\" value=\"Submit\">\n</form>",
    "<header>\n\t<h2>Another Header</h2>\n</header>",
    "<footer>\n\t<p>Another Footer</p>\n</footer>",
    "<nav>\n\t<ul>\n\t\t<li><a href=\"#\">Page 1</a></li>\n\t\t<li><a href=\"#\">Page 2</a></li>\n\t\t<li><a href=\"#\">Page 3</a></li>\n\t</ul>\n</nav>",
    "<section>\n\t<h3>Another Section Title</h3>\n\t<p>This is another section.</p>\n</section>",
    "<aside>\n\t<h3>Another Aside Title</h3>\n\t<p>This is another aside.</p>\n</aside>",
    "<article>\n\t<h3>Another Article Title</h3>\n\t<p>This is another article.</p>\n</article>",
  "<!DOCTYPE html>\n<html>\n<head>\n\t<title>My HTML Page</title>\n</head>\n<body>\n\t<h1>Hello, World!</h1>\n\t<p>This is a simple HTML page.</p>\n</body>\n</html>",
  "<html>\n<body>\n\t<form action=\"/submit\" method=\"post\">\n\t\t<label for=\"username\">Username:</label>\n\t\t<input type=\"text\" id=\"username\" name=\"username\">\n\t\t<br>\n\t\t<label for=\"password\">Password:</label>\n\t\t<input type=\"password\" id=\"password\" name=\"password\">\n\t\t<br>\n\t\t<input type=\"submit\" value=\"Submit\">\n\t</form>\n</body>\n</html>",
  "<html>\n<head>\n\t<style>\n\t\tbody {\n\t\t\tfont-family: Arial, sans-serif;\n\t\t}\n\t\t.container {\n\t\t\twidth: 80%;\n\t\t\tmargin: 0 auto;\n\t\t}\n\t\t.header {\n\t\t\tbackground-color: #f2f2f2;\n\t\t\tpadding: 20px;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.main-content {\n\t\t\tmargin-top: 20px;\n\t\t}\n\t\t.footer {\n\t\t\tbackground-color: #f2f2f2;\n\t\t\tpadding: 10px;\n\t\t\ttext-align: center;\n\t\t}\n\t</style>\n</head>\n<body>\n\t<div class=\"container\">\n\t\t<div class=\"header\">\n\t\t\t<h1>Welcome to My Website</h1>\n\t\t</div>\n\t\t<div class=\"main-content\">\n\t\t\t<p>This is the main content of the website.</p>\n\t\t</div>\n\t\t<div class=\"footer\">\n\t\t\t<p>&copy; 2023 My Website</p>\n\t\t</div>\n\t</div>\n</body>\n</html>",
  "<html>\n<head>\n\t<script>\n\t\tfunction showMessage() {\n\t\t\talert('Hello, World!');\n\t\t}\n\t</script>\n</head>\n<body>\n\t<button onclick=\"showMessage()\">Click me</button>\n</body>\n</html>",
  "<html>\n<body>\n\t<svg width=\"100\" height=\"100\">\n\t\t<circle cx=\"50\" cy=\"50\" r=\"40\" stroke=\"black\" stroke-width=\"3\" fill=\"red\" />\n\t</svg>\n</body>\n</html>",
  "<html>\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<title>Responsive Website</title>\n\t<style>\n\t\tbody {\n\t\t\tfont-family: Arial, sans-serif;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\tbackground-color: #f1f1f1;\n\t\t}\n\t\t.container {\n\t\t\twidth: 80%;\n\t\t\tmargin: 0 auto;\n\t\t}\n\t\t.header {\n\t\t\tbackground-color: #333;\n\t\t\tcolor: #fff;\n\t\t\tpadding: 20px;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.main-content {\n\t\t\tmargin-top: 20px;\n\t\t}\n\t\t.footer {\n\t\t\tbackground-color: #333;\n\t\t\tcolor: #fff;\n\t\t\tpadding: 10px;\n\t\t\ttext-align: center;\n\t\t}\n\t\t@media (max-width: 600px) {\n\t\t\t.container {\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding: 0 10px;\n\t\t\t}\n\t\t}\n\t</style>\n</head>\n<body>\n\t<div class=\"container\">\n\t\t<div class=\"header\">\n\t\t\t<h1>Responsive Website</h1>\n\t\t</div>\n\t\t<div class=\"main-content\">\n\t\t\t<p>This website is responsive!</p>\n\t\t</div>\n\t\t<div class=\"footer\">\n\t\t\t<p>&copy; 2023 Responsive Website</p>\n\t\t</div>\n\t</div>\n</body>\n</html>",
  "<!DOCTYPE html>\n<html>\n<head>\n\t<style>\n\t\tbody {\n\t\t\tfont-family: 'Arial', sans-serif;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\tbackground-color: #f4f4f4;\n\t\t}\n\t\t.container {\n\t\t\twidth: 80%;\n\t\t\tmargin: 0 auto;\n\t\t}\n\t\t.header {\n\t\t\tbackground-color: #333;\n\t\t\tcolor: #fff;\n\t\t\tpadding: 20px;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.main-content {\n\t\t\tmargin-top: 20px;\n\t\t}\n\t\t.article {\n\t\t\tbackground-color: #fff;\n\t\t\tpadding: 20px;\n\t\t\tborder-radius: 5px;\n\t\t\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n\t\t}\n\t\t.sidebar {\n\t\t\twidth: 30%;\n\t\t\tfloat: left;\n\t\t\tpadding: 20px;\n\t\t\tbackground-color: #f9f9f9;\n\t\t\tborder-radius: 5px;\n\t\t\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n\t\t\tmargin-right: 20px;\n\t\t}\n\t\t.footer {\n\t\t\tbackground-color: #333;\n\t\t\tcolor: #fff;\n\t\t\tpadding: 10px;\n\t\t\ttext-align: center;\n\t\t\tclear: both;\n\t\t}\n\t</style>\n</head>\n<body>\n\t<div class=\"container\">\n\t\t<div class=\"header\">\n\t\t\t<h1>Blog Title</h1>\n\t\t</div>\n\t\t<div class=\"main-content\">\n\t\t\t<div class=\"article\">\n\t\t\t\t<h2>Article Title</h2>\n\t\t\t\t<p>This is the content of the article.</p>\n\t\t\t</div>\n\t\t\t<div class=\"sidebar\">\n\t\t\t\t<h3>Popular Posts</h3>\n\t\t\t\t<ul>\n\t\t\t\t\t<li><a href=\"#\">Post 1</a></li>\n\t\t\t\t\t<li><a href=\"#\">Post 2</a></li>\n\t\t\t\t\t<li><a href=\"#\">Post 3</a></li>\n\t\t\t\t</ul>\n\t\t\t</div>\n\t\t</div>\n\t\t<div class=\"footer\">\n\t\t\t<p>&copy; 2023 Blog Title</p>\n\t\t</div>\n\t</div>\n</body>\n</html>",
  "<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n\t<meta charset=\"UTF-8\">\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n\t<title>Image Gallery</title>\n\t<style>\n\t\tbody {\n\t\t\tfont-family: 'Arial', sans-serif;\n\t\t\tmargin: 0;\n\t\t\tpadding: 0;\n\t\t\tbackground-color: #f4f4f4;\n\t\t}\n\t\t.container {\n\t\t\twidth: 80%;\n\t\t\tmargin: 0 auto;\n\t\t}\n\t\t.header {\n\t\t\tbackground-color: #333;\n\t\t\tcolor: #fff;\n\t\t\tpadding: 20px;\n\t\t\ttext-align: center;\n\t\t}\n\t\t.gallery {\n\t\t\tmargin-top: 20px;\n\t\t\tdisplay: flex;\n\t\t\tflex-wrap: wrap;\n\t\t\tjustify-content: space-between;\n\t\t}\n\t\t.image {\n\t\t\twidth: 30%;\n\t\t\tmargin-bottom: 20px;\n\t\t}\n\t\t.image img {\n\t\t\twidth: 100%;\n\t\t\tborder-radius: 5px;\n\t\t\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\n\t\t\ttransition: transform 0.3s;\n\t\t}\n\t\t.image img:hover {\n\t\t\ttransform: scale(1.1);\n\t\t}\n\t\t.footer {\n\t\t\tbackground-color: #333;\n\t\t\tcolor: #fff;\n\t\t\tpadding: 10px;\n\t\t\ttext-align: center;\n\t\t\tclear: both;\n\t\t}\n\t</style>\n</head>\n<body>\n\t<div class=\"container\">\n\t\t<div class=\"header\">\n\t\t\t<h1>Image Gallery</h1>\n\t\t</div>\n\t\t<div class=\"gallery\">\n\t\t\t<div class=\"image\">\n\t\t\t\t<img src=\"image1.jpg\" alt=\"Image 1\">\n\t\t\t</div>\n\t\t\t<div class=\"image\">\n\t\t\t\t<img src=\"image2.jpg\" alt=\"Image 2\">\n\t\t\t</div>\n\t\t\t<div class=\"image\">\n\t\t\t\t<img src=\"image3.jpg\" alt=\"Image 3\">\n\t\t\t</div>\n\t\t\t<!-- Add more images here -->\n\t\t</div>\n\t\t<div class=\"footer\">\n\t\t\t<p>&copy; 2023 Image Gallery</p>\n\t\t</div>\n\t</div>\n</body>\n</html>",
  
]

export default html;