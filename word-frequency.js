/*
The wordFrequency function takes in a string of text and prints a list of unique words contained in 
the string along with the number of occurrences frequency, and ascending order alphabetically when 
multiple words occur with the same frequency.

Example:
Input: 
"This is a test. That is not a test. Test"

Output: 
test 3
a 2
is 2
not 1
that 1
this 1

*/

function wordFrequency(str) {
  let counts = {};
  let sortedList = [];

  let currentStartIdx = 0;
  let currentWordLen = 0;

  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    // Add the last word when the end of string is reached.
    if (i === str.length - 1) {
      if (isLetter(char)) {
        currentWordLen += 1;
      }
      addWord();
      // Add word when space or emdash is reached.
    } else if (char === " " || char === "\u2014") {
      addWord();
      // Add letter or apostraphe to current word.
    } else if (isLetter(char) || char === "'") {
      if (currentWordLen === 0) {
        currentStartIdx = i;
      }
      currentWordLen += 1;
      // Add word if two periods in a row.
    } else if (char === ".") {
      if (i < str.length - 1 && str[i + 1] === ".") {
        addWord();
      }
      // hyphen surrounded by letters
    } else if (char === "-") {
      if (i > 0 && isLetter(str[i - 1]) && isLetter(str[i + 1])) {
        if (currentWordLen === 0) {
          currentStartIdx = i;
        }
        currentWordLen += 1;
      } else {
        addWord();
      }
    } else {
      addWord();
    }
  }
  sortWords();

  for (let i = 0; i < sortedList.length; i++) {
    console.log(`${sortedList[i][0]} ${sortedList[i][1]}`);
  }

  function isLetter(char) {
    return "abcdefghijklmnopqrstuvwxyz0123456789".indexOf(char) >= 0;
  }

  function addWord() {
    if (currentWordLen > 0) {
      const word = str
        .slice(currentStartIdx, currentStartIdx + currentWordLen)
        .toLowerCase();
      currentWordLen = 0;
      if (counts[word] === undefined) {
        counts[word] = 1;
      } else {
        counts[word] += 1;
      }
    }
  }

  function sortWords() {
    sortedList = Object.entries(counts).sort((a, b) => {
      // sort values descending
      if (b[1] > a[1]) return 1;
      else if (b[1] < a[1]) return -1;
      //if values are the same sort keys ascending
      else {
        if (a[0] > b[0]) return 1;
        else if (a[0] < b[0]) return -1;
        else return 0;
      }
    });
  }
}

let str1 = "This is a test. That is not a test. Test";
wordFrequency(str1);

/* 
test 3
a 2
is 2
not 1
that 1
this 1
*/

let str2 = "From the moment the first immigrants arrived on these shores, generations of parents have worked hard and sacrificed whatever is necessary so that their children could have the same chances they had; or the chances they never had. Because while we could never ensure that our children would be rich or successful; while we could never be positive that they would do better than their parents, America is about making it possible to give them the chance. To give every child the opportunity to try. Education is still the foundation of this opportunity. And the most basic building block that holds that foundation together is still reading. At the dawn of the 21st century, in a world where knowledge truly is power and literacy is the skill that unlocks the gates of opportunity and success, we all have a responsibility as parents and librarians, educators and citizens, to instill in our children a love of reading so that we can give them the chance to fulfill their dreams."

wordFrequency(str2);

/*
the 13
that 7
and 6
is 6
of 5
to 5
we 4
a 3
children 3
could 3
give 3
have 3
never 3
opportunity 3
parents 3
their 3
they 3
be 2
chance 2
chances 2
foundation 2
had 2
in 2
or 2
our 2
reading 2
so 2
still 2
them 2
while 2
would 2
21st 1
about 1
all 1
america 1
arrived 1
as 1
at 1
basic 1
because 1
better 1
block 1
building 1
can 1
century 1
child 1
citizens 1
dawn 1
do 1
dreams 1
education 1
educators 1
ensure 1
every 1
first 1
from 1
fulfill 1
gates 1
generations 1
hard 1
holds 1
immigrants 1
instill 1
it 1
knowledge 1
librarians 1
literacy 1
love 1
making 1
moment 1
most 1
necessary 1
on 1
positive 1
possible 1
power 1
responsibility 1
rich 1
sacrificed 1
same 1
shores 1
skill 1
success 1
successful 1
than 1
these 1
this 1
together 1
truly 1
try 1
unlocks 1
whatever 1
where 1
worked 1
world 1
*/