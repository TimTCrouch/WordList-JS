/*
 *Word List JS
 *Purpose: This module create the Word_List variable, which handles word-checking and random word generation.
 *Instructions: Add <script> element to include this file first, and then another <script> element to add the wordBank file.
 *Author: Tim Crouch
 *Date: 10.9.2012
 *Version: 0.1
 */

var Word_List = (function() {
    var publicInt = {};
    var wordBank = new Array();
    
    //Create method for checking if word is in list
    function listCheck(toCheck) {
        toCheck = toCheck.toLowerCase();
        var letter = toCheck.charAt(0);
        
        //wordBank will be an array initialized with the full word list, indexed by letter.
        if (wordBank[letter].indexOf(toCheck) > -1) {
            return true;
        } else {
            return false;
        }
        
    }
    
    function getRand(letterCount) {
        
        letterCount = letterCount || 0;
        
        if (letterCount == 0) {
            //If 0 was entered, get a random number of digits between 4 and 10
            letterCount = Math.floor(Math.random() * 10) + 4;
        }
        
        //Check bounds
        if (letterCount < 4) {
            letterCount = 4;
        }
        
        if (letterCount > 10) {
            letterCount = 10;
        }
        
        //Randomize the letter you are looking in
        var checkLetterNum = Math.floor(Math.random() * 26) + 1;
        
        //Create a letter array
        var allLetters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        
        var checkLetter = allLetters[checkLetterNum - 1];
        
        var wordNum;
        
        //Randomly choose the number of an element in the correct wordBank letter array
        wordNum = Math.floor(Math.random() * wordBank[checkLetter].length);        
        var wordPick = wordBank[checkLetter][wordNum - 1];
        
        //check if the word is the correct length and repeat if not
        while (wordPick.length != letterCount) {
            wordNum = Math.floor(Math.random() * wordBank[checkLetter].length);        
        var wordPick = wordBank[checkLetter][wordNum - 1];
        }
        
        return wordPick;     
       
    }
    
    function loadWordDat(wordArray) {
        var character = wordArray[12].charAt(0);
        if (!character) {
            throw "Not able to get first letter from word to determine word bank.";
        }
        wordBank[character] = wordArray;
    }
    
    publicInt.isInList = listCheck;
    publicInt.getRandomWord = getRand;
    publicInt.loadBank = loadWordDat;
    
    return publicInt;

}());