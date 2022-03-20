/*
Copyright (C) 2022  André Schepers

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
export const splitSentenceUpInWords = (sentence) => {
    if (typeof sentence !== 'string') {
        return [];
    }
    return sentence.split(' ')
        .filter(word => word.length > 0)
        .map((word) => word.replace(/[.,?!]/g, ''));
}

export const getIndexOfNewWord = (first, second) => {
    let index = getFirstDiffIndex(first, second);

    if (!isNewWord(second, index)) {
        return -1;
    }

    let substring = second.substring(0, index);
    return splitSentenceUpInWords(substring).length;
}

export const getFirstDiffIndex = (first, second) => {
    if (first.length <= second) {
        return -1;
    }
    let diffIndex = 0;
    for (let i=0;i<first.length;++i) {
        if (first[i] !== second[i]) {
            break;
        }
        ++diffIndex;
    }
    return diffIndex;
}

export const getLastDiffIndex = (first, second) => {
    let flen = first.length;
    let slen = second.length;
    if (flen === 0 || slen === 0) {
        return -1;
    } else if (flen === 1 && slen === 1) {
        return first[0] === second[0] ? 0 : -1;
    }

    let smallestLength = flen > slen ? slen -1 : flen -1;
    let fIndex = flen - 1;
    let sIndex = slen - 1;

    for (let i=0;i<smallestLength;++i) {
        if (first[fIndex-i] !== second[sIndex-i]) {
            break;
        }
    }

    while (fIndex >= 0 && sIndex >= 0 && first[fIndex] === second[sIndex]) {
        --fIndex;
        --sIndex;
    }

}

export const isNewWord = (newString, diffIndex) => {
    if (diffIndex <= 0) {
        return false;
    }
    let isNewBySpaceInsert = newString[diffIndex] === " " &&
        (diffIndex > 0 && newString[diffIndex-1] !== " ") &&
        (diffIndex < (newString.length-1) && newString[diffIndex+1] !== " ");
    let isNewByLetterInsert = newString[diffIndex] !== " " &&
        (diffIndex > 0 && newString[diffIndex-1] === " ") &&
        (diffIndex < (newString.length-1) && newString[diffIndex+1] === " ");;
    return isNewByLetterInsert || isNewBySpaceInsert;
}
