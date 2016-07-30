'use strict';

function Contact(options) {
    if (!options) {
        options = {};
    }
    
    this.id = options.id;
    this.name = options.name;
    this.email = options.email;
}
/*comment*/
module.exports = Contact;
