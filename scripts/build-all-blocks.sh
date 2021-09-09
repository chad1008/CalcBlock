#!/bin/bash
# This bash script builds all the blocks. Courtesy of @designbombs:
# https://www.designbombs.com/reusing-functionality-for-wordpress-plugins-with-blocks/
 
# Directory of the bash script
DIR=$(cd $( dirname ${BASH_SOURCE[0]}) && pwd)

# Function `buildBlocks` will run `npm run build` on all subfolders in the current directory
buildBlocks(){
  for file in ./*
  do
    if [ -d "$file" ]; then
      cd "$file"
      npm run build
      cd ..
    fi
  done
}
 
# Step on the root folder where all blocks are located
cd "$DIR/../blocks/"
 
# Build all blocks
buildBlocks