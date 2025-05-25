import { OpenAI } from 'openai';
import { writeFile } from 'node:fs/promises';
import { spawn } from 'node:child_process';

export default class Bashmo {

agent = new OpenAI;
conversation = [];

$_prompt ( $ ) {};

async $_director ( $, ... argv ) {

if ( ! argv .length )
return;

const { conversation } = this;
const request = argv .join ( ' ' );
const response = ( await this .agent .responses .create ( {

model: 'gpt-4.1',
input: conversation .concat ( [ {

role: 'user',
content: request

} ] )

} ) ) .output_text;

conversation .push ( {

role: 'assistant',
content: response

} );

writeFile ( 'conversation.json', JSON .stringify ( conversation ), 'utf8' );

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

$bye () {

return Symbol .for ( 'exit' );

};

};
