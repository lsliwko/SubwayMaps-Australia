#!/bin/bash --

for file in `find . -name '*-map.gif' | sort`
do
	file=`echo $file | sed 's/\.\///g'`
	cityname=`echo ${file^} | sed 's/-map.gif//g'`
	
	echo -n "$cityname, "
done
