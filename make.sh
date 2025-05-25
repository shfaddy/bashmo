#!/bin/bash

output=bashmo

rollup -c

cd bin/

node --experimental-sea-config sea-config.json

cp $(command -v node) $output

npx postject $output NODE_SEA_BLOB sea-prep.blob \
            --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
