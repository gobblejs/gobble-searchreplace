
function searchreplace ( text, options ) {
	return text.replace( options.search, options.replace );
}

module.exports = searchreplace;

searchreplace.defaults = {
	// we only want to use this function with text files - not binaries (images etc)
	accept: 'html svg txt md hbs json cson xml yml js coffee ts css scss sass'.split( ' ' ).map( function ( ext ) { return '.' + ext; })
};
