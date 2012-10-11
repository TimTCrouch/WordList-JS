Word List JS >> v0.2

Title: WordList JS 
Author: Tim Crouch
Contact: dacypher@gmail.com
Date: Oct 10, 2012
Purpose: To allow Javascript developers to make word games without resorting to using web services or other online services to verify and generate words. This will allow developers to make word game apps in JS for mobile devices.
Version: 0.2
License: MIT

SPECIAL THANKS to English Open Word List:  http://dreamsteep.com/projects/the-english-open-word-list.html
Without the EOWL, I would be reading and typing words out of the dictionary for years to come, instead of finishing this project in a little over one day!

======Instructions========

1. Add a script tag referencing either the regular or Min version of wordList<Min>V0.2.js into your main page's head section (use regular version to see the full code, or use Min version for production or app compilation).

2. Add a script tag referencing either the regular or Min version of wordBank<Min>V0.2.js into your main page's head section (use regular version to see the full code, or use Min version for production or app compilation). Make sure the Word Bank is BELOW the script tag for Word List. 

3. Either in another script file or an on-page script, simply reference Word_List.isInList("ALpha") to check if a word is in the list. Capitalization does not matter (as demonstrated here). You can also generate random words with Word_List.getRandomWord(). You can enter a number from 4 - 10 as an argument to look-up words with only that number of letters. You can also either make the argument 0 or leave it blank to get a random word with a random number of letters between 4 - 10. 


======Dependency Licenses=======

The English Open Word List (EOWL) was derived from the UK Advanced Cryptics Dictionary, and its only term of usage is the displaying of the following copyright notice:

UK Advanced Cryptics Dictionary Licensing Information:

Copyright © J Ross Beresford 1993-1999. All Rights Reserved. The following restriction is placed on the use of this publication: if the UK Advanced Cryptics Dictionary is used in a software package or redistributed in any form, the copyright notice must be prominently displayed and the text of this document must be included verbatim.
