import { OpenAI } from 'openai';
import { writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';

export default class Bashmo {

agent = new OpenAI;

$_prompt ( $ ) {};

async $_director ( $, ... argv ) {

if ( ! argv .length )
return;

const response = ( await this .agent .responses .create ( {

model: 'gpt-4.1',
input: argv .join ( ' ' )

} ) ) .output_text;

writeFile ( 'response.md', response, 'utf8' );

return response;

};

async $$ ( $, ... argv ) {

if ( ! argv .length )
return;

try {

return await new Promise ( resolve => {

spawn ( 'bash', [ '-c', argv .join ( ' ' ) ], { stdio: 'inherit' } )
.on ( 'exit', ( ... status ) => resolve ( status .filter (

status => status !== null

) ) );

} );

} catch ( error ) {

console .error ( error );

}

};

};
