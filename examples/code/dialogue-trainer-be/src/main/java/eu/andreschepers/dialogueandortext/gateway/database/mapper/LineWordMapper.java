/*
 * Copyright 2024 - 2025 André Schepers
 *
 *    Licensed under the Apache License, Version 2.0 (the "License");
 *    you may not use this file except in compliance with the License.
 *    You may obtain a copy of the License at
 *
 *        http://www.apache.org/licenses/LICENSE-2.0
 *
 *    Unless required by applicable law or agreed to in writing, software
 *    distributed under the License is distributed on an "AS IS" BASIS,
 *    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *    See the License for the specific language governing permissions and
 *    limitations under the License.
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
