const something = function() {
	console.log("SOMETHING IS HAPPENING");
}

const foo = function() {
	console.table("FOO IS HAPPENING HERE", "FOO", "FOO");
}

const bar = function() {
	console.log('THIS IS REMOVED IN TREE SHAKING');
}

export {something, foo}