// Allows for restricting routes for unauthenticated users
module.exports = function(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }

    req.flash("error_msg", "Please log in to use this resource");
    res.redirect("/login");
};