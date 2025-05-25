import Bashmo from 'bashmo';
import Maitre from 'bashmo/maitre';
import { createInterface } from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';

export default class Shell extends Maitre {

prompt = 'Bashmo';

argv = process .argv .slice ( 2 );

constructor ( bashmo, ... argv ) {

super ( { request: argv } );

this .$_workshop = bashmo instanceof Bashmo ? bashmo : new Bashmo;

};

$_producer ( $ ) {

console .log ( "Hello World! This is Shaikh Faddy's Bashmo!" );

this .shell = createInterface ( { input, output } )
.on ( 'SIGINT', () => $ ( Symbol .for ( 'interrupt' ) ) );

};

async $_director ( $, ... argv ) {

if ( argv .length )
return this .shell .write ( argv .join ( ' ' ) + '\n' );

let prompt = $ ( Symbol .for ( 'workshop' ), Symbol .for ( 'prompt' ) );

if ( prompt instanceof Array )
prompt = prompt .join ( '/' );

if ( ! prompt ?.length )
prompt = this .prompt

try {

const line = await this .shell .question ( `

${ '=' .repeat ( 13 ) }

${ prompt }: How can I help?

` );

if ( ( await super .$_director ( $, ... line .trim () .split ( /\s+/ ) ) ) === Symbol .for ( 'exit' ) )
return;

} catch ( error ) {

console .error ( error );

this .shell .close ();

process .exit ();

}

return $ ();

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

this .$_workshop = response;

break;

default:

if ( response !== Symbol .for ( 'exit' ) )
return console .log ( response );

this .shell .close ();

return response;

}

};

$_apologize ( $, error ) {

console .error ( "Sorry but something went wrong" );
console .error ( error );

};

$_interrupt ( $ ) {

this .shell .line = '';

return $ ();

};

};
