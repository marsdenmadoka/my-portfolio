//var partialsbar=require('../helpers/partialsbar')
module.exports = {
    home: function(req, res) {
    res.render('index');
},
contact:function(req,res){
res.render('contacts')
}
};