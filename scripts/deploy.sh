#!/usr/bin/env sh
set -x
# base=$(basename $PWD) && \
# cd .. && \
ls -l && \
tar -czf package.tgz dist/ && \
scp package.tgz $REMOTEUSER@$REMOTEHOST:$REMOTEAPPDIR && \
ssh $REMOTEUSER@$REMOTEHOST 'bash -s' <  /home/travis/build/jesusamador-dev/build_blog/scripts/untar.sh