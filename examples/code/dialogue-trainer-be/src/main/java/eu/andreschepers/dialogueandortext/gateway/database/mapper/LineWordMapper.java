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

package eu.andreschepers.dialogueandortext.gateway.database.mapper;

import eu.andreschepers.dialogueandortext.domain.DialogueAndOrTextLine;
import eu.andreschepers.dialogueandortext.domain.DialogueAndOrTextLineWord;
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.LineWordJpaEntity;
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.WordJpaEntity;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class LineWordMapper {

    public List<LineWordJpaEntity> mapWords(DialogueAndOrTextLine dialogueAndOrTextLine) {
        var words = dialogueAndOrTextLine.getWords();
        return words.stream()
            .map(this::mapWord)
            .toList();
    }

    private LineWordJpaEntity mapWord(DialogueAndOrTextLineWord dialogueAndOrTextLineWord) {
        var word = new WordJpaEntity();
        word.setWordShaSum(dialogueAndOrTextLineWord.getSha512Sum());
        word.setWord(dialogueAndOrTextLineWord.getWord());

        LineWordJpaEntity lineWord = new LineWordJpaEntity();
        lineWord.setWord(word);
        lineWord.setIndex(dialogueAndOrTextLineWord.getIndex());
        return lineWord;
    }
}
