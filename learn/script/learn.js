var editor = ace.edit("editor");
editor.setTheme("ace/theme/twilight");
editor.session.setMode("ace/mode/html");
editor.setReadOnly(true);

var editorB = ace.edit("editorB");
editorB.setTheme("ace/theme/twilight");
editorB.session.setMode("ace/mode/css");
//editor.setReadOnly(true);

// var csseditor = ace.edit("csseditor");
// csseditor.setTheme("ace/theme/twilight");
// csseditor.session.setMode("ace/mode/css");
// csseditor.setReadOnly(true);



editorB.on('change', function(e){
	console.log("CHange");	
});