#!/usr/bin/env node

import Bashmo from './index.mjs';
import Scenarist from './scenarist.mjs';
import Maitre from './maitre.mjs';
import { createInterface } from 'node:readline';
import { stdin as input, stdout as output } from 'node:process';

try {

Scenarist ( new class extends Maitre {

$_producer ( $ ) {

console .log ( "Hello World! This is Shaikh Faddy's Bashmo!" );

this .$_director = new Bashmo;

this .shell = createInterface ( { input, output } )
// .on ( 'line', line => $ ( Symbol .for ( 'serve' ), line ) )
.on ( 'SIGINT', () => $ ( Symbol .for ( 'interrupt' ) ) );

return super .$_producer ( $ );

};

$_response ( $, response ) {

switch ( typeof response ) {

case 'undefined':

break;

case 'object':

if ( response instanceof Array )
console .log ( response .join ( '\n' ) );

else
for ( const output in response )
console .log ( output, response [ output ] );

break;

case 'function':

this .$_director = response;

break;

default:

console .log ( response );

}

};

$_apologize ( $, error ) {

console .error ( "Sorry but something went wrong" );
console .error ( error );

};

$_interrupt ( $ ) {

this .shell .line = '';

$ [ Symbol .for ( 'prompt' ) ] ();

};

$_prompt ( $ ) {

if ( ! this .shell )
return process .exit ();

let prompt = $ ( Symbol .for ( 'director' ), Symbol .for ( 'prompt' ) );

if ( prompt instanceof Array )
prompt = prompt .join ( '/' );

if ( ! prompt ?.length )
prompt = '';

this .shell .question ( `${ '=' .repeat ( 13 ) }

${ prompt }: How can I help?

`, answer => $ [ Symbol .for ( 'serve' ) ] ( answer ) );

};

$bye () {

this .shell .close ();

delete this .shell;

return "Okay, bye bye!";

};

} ( {

request: process .argv .slice ( 2 )

} ) );

} catch ( error ) {

console .error ( "Failed to start Shaikh Faddy's Bashmo" );
console .error ( error );

}
