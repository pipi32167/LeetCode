FILE=195_input2.txt
LINECOUNT=`cat "$FILE" | wc -l`
if [[ $LINECOUNT -gt 9 ]]; then
  head -n 10 $FILE | tail -n 1 
fi