#!/bin/bash
set -xe

if [ $TRAVIS_BRANCH == 'main' ] ; then
  eval "$(ssh-agent -s)"
  ssh-add ~/.ssh/id_rsa

  cd client
  rsync -a .next package.json package-lock.json public travis@167.71.231.248:/home/abhiap/supkenny-site
  echo "Deployed successfully!"
else
  echo "Not deploying, since the branch isn't main."
fi
