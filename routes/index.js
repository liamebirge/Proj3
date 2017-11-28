
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
	first_name = req.name_first;
	last_name = req.name_last;
	contact_phone = req.contactinfo_phone;
	contact_email = req.contactinfo_email;
	walk_package = req.walkinfo_packages;
	walk_date = req.walkinfo_date;
	walk_time = req.walkinfo_time;
	walk_comments = req.Comments;
	console.log(req);
  	res.render('admin.ejs', { userName: user,
  		name1: first_name,
  		name2: last_name,
  		phone: contact_phone,
  		email: contact_email,
  		package: walk_package,
  		date: walk_date,
  		time: walk_time,
  		comments: walk_comments,
  		title: 'Admin Page', 
  		});
};