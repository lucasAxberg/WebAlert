document.addEventListener("click", (e) => {
	switch (e.target.id) {
		case "add":
			add_function();
			break;
		case "remove":
			remove_function();
			break;
		case "settings":
			settings_function();
			break;
		case "refresh":
			refresh_function();
			break;
		default:
			browser.tabs.executeScript({
				code: 'console.log("other")',
			});
	}
});

function add_function() {
	print_console("add");
}

function remove_function() {
	print_console("remove");
}

function settings_function() {
	print_console("settings");
}

function refresh_function() {
	print_console("refresh");
}

function print_console(message) {
	browser.tabs.executeScript({
		code: `console.log("${message}")`,
	});
}
