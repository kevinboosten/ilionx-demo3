#!/usr/bin/env bash

#
#
# App Center - Ionic build script
#
# Reusable build script for App Center to build your Ionic + Capacitor application with Angular
# as your framework.
# This script assumes that you are making use of buildTargets (Android) and schemes (iOS) to use specific configuration
# based on the selected target/scheme. Your native projects can have target/scheme specific configuration. We call this the BUILD_ENV in this script.
# The BUILD_ENV will then be used to select the correct Angular configuration that you need to set in your angular.json file
# to use the correct environment settings for the Angular part of the application.
#
# MAKE SURE THAT YOU KEEP THIS FILE IN SYNC IN BOTH ANDROID AND IOS PROJECTS.
#
#

# fail if any command fails
set -e
# debug log
set -x

echo 'NodeJS Version: '
node -v


# go to root of project
cd ../..

# install dependencies
npm ci
npm run build -- --configuration=production
# copy the web assets to the native projects and updates the native plugins and dependencies based in package.json
npx cap sync