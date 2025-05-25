#!/usr/bin/env node

import Bashmo from 'bashmo';
import Scenarist from 'bashmo/scenarist';
import Shell from 'bashmo/shell';

try {

Scenarist ( new class {

$shell = new Shell ( new Bashmo );

$_producer ( $ ) {

$ .shell ();

};

async $_director ( $, ... argv ) {

return $ .shell ( ... argv );

};

} );

process .on ( 'exit', () => console .log ( "Okay bye bye!" ) );

} catch ( error ) {

console .error ( "Failed to start Bashmo's Bashmo" );
console .error ( error );

}
