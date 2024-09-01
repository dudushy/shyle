#!/bin/bash

# Ensure the docs/assets/shyle directory exists
mkdir -p docs/assets/shyle

# Copy the compiled files to the docs directory
cp dist/scss/shyle.css docs/assets/shyle/shyle.css
cp dist/ts/shyle.js docs/assets/shyle/shyle.js
