
/* GET home page */

exports.index = function(req, res){
  	res.render('index.html', { title: 'Tails A Waggin' });
};
exports.walkRoutes = function(req, res){
  	res.render('routes.html', { title: 'Walk Routes' });
};
exports.packages = function(req, res){
  	res.render('packages.html', { title: 'Walk Packages' });
};
exports.bookAWalk = function(req, res){
  	res.render('bookAWalk.html', { title: 'Book A Walk' });
};
exports.admin = function(req, res){
	user = req.user;
	console.log(req);
  res.render('admin.ejs', { userName: user,
  		title: 'Admin Page'
  		});
};