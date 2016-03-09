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

/**
 * 老版本浏览器不支持classList属性
 * 该函数用户模拟该属性得对的DOMTokenList对象
 * 该对象有add remove contains toggle方法
 * @param {[type]} element 元素对象
 */
function ClassList(element) {
	if(element.classList) {
		return element.classList;
	}
	return element ? new _MyClassList(element) : false;
}

function _MyClassList(element) {
	this.element = element;
}

_MyClassList.prototype.contains = function(className) {
	if(className.indexOf(" ") !== -1 || className.length === 0) {
		throw new Error("Invalid Class Name :" + "'" + className + "'");
	}
	var classNames = this.element.className;
	if(classNames === "") {
		return false;
	} else if(classNames === className) {
		return true;
	}
	return classNames.search("\\b"+className+"\\b") !== -1;

};
_MyClassList.prototype.add = function(className) {
	if(this.contains("className")) {
		return;
	}
	var classNames = this.element.className;
	if(classNames && classNames[classNames.length - 1] !== " ") {
		alert(classNames + ",");
		className = " " + className;
	}
	this.element.className = classNames + className;
};
_MyClassList.prototype.remove = function(className) {
	if(className.indexOf(" ") !== -1 || className.length === 0) {
		throw new Error("Invalid Class Name :" + "'" + className + "'");
	}
	var classNames = this.element.className,
		pattern = new RegExp("\\b"+ className + "\\b\\s*", "g");
	alert(classNames, className)
	this.element.className = classNames.replace(pattern, "");

};
_MyClassList.prototype.toggle = function(className) {
	if(this.contains(className)) {
		this.remove(className);
		return false;
	} else {
		this.add(className);
		return true;
	}

};
