/**
 * 该函数用于得到视口的尺寸
 * @param  {[type]} win [windowd对象]
 * @return {[type]}     [description]
 */
function getViewportSize(win) {
	win = win || window;
	if(win.innerWidth) {
		return {
			width: win.innerWidth,
			height: win.innerHeight
		};
	}
	var doc = win.document;
	if(doc.compatMode === "CSS1Compat") {
		return {
			width: doc.documentElement.clientWidth,
			height: doc.documentElement.clientHeight
		};
	}
	return {
		width: doc.body.clientWidth,
		height: doc.body.clientHeight
	};
}