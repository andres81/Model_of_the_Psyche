/*
 * Dialogue and/or Text Trainer: Learn with scenarios and alternate flows
 * Copyright (C) 2023 André Schepers, https://www.andreschepers.eu
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

package eu.andreschepers.dialogueandortext.domain;

import eu.andreschepers.dialogueandortext.common.ShaSumCalculator;
import eu.andreschepers.dialogueandortext.domain.enums.DialogueAndOrTextLineType;
import lombok.Getter;

import java.util.*;

@Getter
public class DialogueAndOrTextLine {

    private final int index;
    private final String personName;
    private final String line;
    private final String sha512Sum;
    private final List<DialogueAndOrTextLineWord> words;
    private final DialogueAndOrTextLineType dialogueAndOrTextLineType;

    public DialogueAndOrTextLine(int index,
                                 String personName,
                                 String line) {

        this(index, personName, line, null);
    }

    public DialogueAndOrTextLine(int index,
                                 String personName,
                                 String line,
                                 List<String> words) {
        this.index = index;
        var isPersonNameBlank = ("".equals(personName) || null == personName);
        this.dialogueAndOrTextLineType = isPersonNameBlank ? DialogueAndOrTextLineType.TEXT : DialogueAndOrTextLineType.DIALOGUE;
        this.personName = personName;
        this.line = line;
        this.sha512Sum = ShaSumCalculator.calculateSha512Sum(line);
        this.words = Collections.unmodifiableList(checkAndMapWordsAsStringToPojo(line, words));
    }

    private List<DialogueAndOrTextLineWord> checkAndMapWordsAsStringToPojo(String line, List<String> words) {

        if (words == null) {
            words = extractWordsFromLineAsStrings(line);
        } else if (!extractWordsFromLineAsStrings(line).equals(words)) {
            throw new IllegalStateException("");
        }

        List<DialogueAndOrTextLineWord> wordList = new ArrayList<>();
        for (int i=0;i<words.size();++i) {
            wordList.add(new DialogueAndOrTextLineWord(
                    UUID.randomUUID(),
                    i,
                    words.get(i)
            ));
        }

        return wordList;
    }

    private List<String> extractWordsFromLineAsStrings(String line) {
        if (line == null) {
            return Collections.emptyList();
        }
        return Arrays.asList(line.split("\\P{L}+"));
    }
}
