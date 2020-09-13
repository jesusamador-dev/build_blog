#!/usr/bin/env sh
set -x
export NODE_ENV=production
export NVM_BIN=$HOME/.nvm/versions/node/v12.18.1/bin
cd /var/www/test.jesusamador.com/ && \
rm -R html/ && \
tar zxvf package.tgz -C . && \
mv dist/ /var/www/build.jesusamador.com/html
# mv build/package.json . && \
# npm install
# && \
# npm run start