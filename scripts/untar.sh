#!/usr/bin/env sh
set -x
export NODE_ENV=production
export NVM_BIN=$HOME/.nvm/versions/node/v12.18.1/bin
cd /var/www/build.jesusamador.com/ && \
rm -R html/ && \
tar zxvf package.tgz -C . && \
mv build_blog/ /var/www/build.jesusamador.com/html \
# pm2 delete api \
# cd html \
# pm2 start index.js --name "api"
# mv build/package.json . && \
# npm install
# && \
# npm run start