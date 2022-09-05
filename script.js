function toggleGhost(name) {
	document.getElementById(name).style.display =
		document.getElementById(name).style.display != 'block'
			? 'block'
			: 'none';
}
