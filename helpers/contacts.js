module.exports = {  
    contacts: function(callback) { 
        res.render('contacts',   
        function(err, contact) {
        if (err) throw err;
        callback(null,contact);
        });
    }
}
