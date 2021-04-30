#!/bin/bash
sftp -v a40860@access-5002313688.ud-webspace.de <<EOF
put -r . shakespeare2go.com/ 
EOF
