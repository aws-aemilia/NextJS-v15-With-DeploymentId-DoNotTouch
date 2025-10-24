#!/bin/bash

if [[ -z "${NEXTJS_VERSION_OVERRIDE}" ]]; then
  echo "No NEXTJS_VERSION_OVERRIDE variable set. Will not override";
else
  echo "NEXTJS_VERSION_OVERRIDE variable set to $NEXTJS_VERSION_OVERRIDE";
  npm install next@$NEXTJS_VERSION_OVERRIDE;
fi