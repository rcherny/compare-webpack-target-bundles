import 'react';
import 'react-dom';
import { foo, something } from './dep_one.js';

something(); 
foo(); 

var fooboo = document.querySelectorAll('.foo');
console.log(fooboo);

import('./dep_two.js').then((module) => {
	let hello = module.hello;

	hello();
})