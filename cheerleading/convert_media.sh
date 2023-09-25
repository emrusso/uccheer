#!/usr/bin/env bash
for img in Media/*.jpg; do
    echo "converting $img"
    convert $img -sampling-factor 4:2:0 -strip -quality 85 $img
    echo "\n"
done

for img in Media/roster_photos/*.jpg; do
    echo "converting $img"
    convert $img -sampling-factor 4:2:0 -strip -quality 85 $img
    echo "\n"
done