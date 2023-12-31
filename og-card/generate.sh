#!/bin/bash

files=$(find content/posts -name '*.md')

for file in $files; do
    title=$(echo "$file" | sed -E 's@content/posts/([^/]+)/index.md@\1@')

    output_file="static/card/$title.png"

    if [ ! -f "$output_file" ]; then
        echo "$title"
        tcardgen -o="$output_file" -f=og-card/font -c=og-card/config.yml "$file"
    else
        echo "The file $output_file already exists, skipping."
    fi
done
