#!/bin/bash
set -e # Exit with nonzero exit code if anything fails

SOURCE_BRANCH="feature/revamp"
TARGET_BRANCH="test"
GITHUB_API_V4_READ_TOKEN=""

function updateProjects {
  node scripts/projects_updater.js ${GITHUB_API_V4_READ_TOKEN} &&
  yarn build
}

# Save some useful information
REPO=`git config remote.origin.url`
SSH_REPO=${REPO/https:\/\/github.com\//git@github.com:}
SHA=`git rev-parse --verify HEAD`

git clone $REPO project
cd project
git checkout $SOURCE_BRANCH

updateProjects

cp -rf bundle ../project_dist

git checkout $TARGET_BRANCH
# rm -rf ./**/*
cp -rf ../project_dist/* .

git config user.name "Atul R"
git config user.email "atulanand94@gmail.com"

# If there are no changes to the compiled out (e.g. this is a README update) then just bail.
if git diff --quiet; then
    echo "No changes to the output on this push; exiting."
    exit 0
fi

# Commit the "changes", i.e. the new version.
# The delta will show diffs between new and old versions.
git add -A .
git commit -m "Deploy to GitHub Pages: ${SHA}"

# Get the deploy key by using Travis's stored variables to decrypt deploy_key.enc
# ENCRYPTED_KEY_VAR="encrypted_${ENCRYPTION_LABEL}_key"
# ENCRYPTED_IV_VAR="encrypted_${ENCRYPTION_LABEL}_iv"
# ENCRYPTED_KEY=${!ENCRYPTED_KEY_VAR}
# ENCRYPTED_IV=${!ENCRYPTED_IV_VAR}
# openssl aes-256-cbc -K $ENCRYPTED_KEY -iv $ENCRYPTED_IV -in ../deploy_key.enc -out ../deploy_key -d
# chmod 600 ../deploy_key
# eval `ssh-agent -s`
# ssh-add deploy_key
#
# # Now that we're all set up, we can push.
# git push $SSH_REPO $TARGET_BRANCH
