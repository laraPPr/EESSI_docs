#!/bin/bash

# Return an error when a variable is not set.
set -u


# example: /bin/bash -c "echo hello"
bash="$0"
cflag="$1"
cmd="$2"

# Emulate find command.
if echo "$cmd" | grep -q -E "find"; then
   cat "${MOCK_FILE_AVAIL_CLUSTER}" >&2
fi
