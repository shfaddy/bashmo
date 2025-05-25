export default class Maitre {

request = [];

constructor ( details ) {

if ( typeof details ?.request [ Symbol .iterator ] === 'function' )
this .request = [ ... details .request ];

};

async $_director ( $, ... argv ) {

if ( ! argv .length )
return;

try {

let response = await $ ( Symbol .for ( 'workshop' ), ... argv );

if ( typeof response === 'function' )
this .$_workshop = response;

else
await $ ( Symbol .for ( 'response' ), response, ... argv );

return response;

} catch ( error ) {

await $ ( Symbol .for ( 'apologize' ), error, ... order );

}

};

};
