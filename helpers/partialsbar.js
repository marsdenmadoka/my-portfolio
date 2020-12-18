
var Contact=require('./contacts')

module.exports =function(views,callback){
async.parallel([
    function(next){
        Contact.contacts(next);
    }
],

function(err,results){
    views.partialsbar={
Contact:results[0]
    };
    callback(views)
});
};