<html>
	<head>
		<title>Media Queries</title>
		<link rel="stylesheet" href="../style/style.css">
		<link href="https://fonts.googleapis.com/css?family=Source+Code+Pro|Source+Sans+Pro:300,400,600,700|Source+Serif+Pro:400,600" rel="stylesheet">
	</head>
	<body>
		<div class="content">
			<h2>Introduction</h2>
			<p>Media Queries allows you to conditionally control your CSS based on a variety of factors which include the type of media your site is being viewed on, the width of your browser viewport, even environmental factors like lighting conditions (coming soon)</p>

			<p>A media query consists of two components: a media type that describes the medium that they user is on when accessing the website and an expression that states the properties and values that need to be true in order to for the corresponding style sheet or style rules are applied, following the normal cascading rules</p>
			
			<h3>Media Types</h3>
			<p>The value of the "media" attribute specifies on what device the linked document will be displayed.</p>
			<ul>
				<li>braile</li>
				<li>embossed</li>
				<li>handheld</li>
				<li>print</li>
				<li>projection</li>
				<li>screen</li>
				<li>speech</li>
				<li>tty</li>
				<li>TV</li>
			</ul>
			<p>Setting this to "all" would indicate that the styling rules apply to all the devices</p>
			
		</div>
	</body>
</html>