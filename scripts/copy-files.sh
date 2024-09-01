#!/bin/bash

# Ensure the docs/assets/shyle directory exists
mkdir -p docs/assets/shyle

# Copy the compiled files to the docs directory
cp dist/css/shyle.css docs/assets/shyle/css/shyle.css
cp dist/js/shyle.js docs/assets/shyle/js/shyle.js
