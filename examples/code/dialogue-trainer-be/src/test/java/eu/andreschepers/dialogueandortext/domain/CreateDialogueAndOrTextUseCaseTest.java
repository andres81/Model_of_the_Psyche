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

import com.fasterxml.jackson.core.JsonPointer;
import com.fasterxml.jackson.databind.JsonNode;
import com.fasterxml.jackson.databind.ObjectMapper;
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.DialogueAndOrTextJpaEntity;
import eu.andreschepers.dialogueandortext.gateway.database.port.DBDialogueAndOrTextOutputPort;
import eu.andreschepers.dialogueandortext.usecase.CreateDialogueAndOrTextUseCase;
import eu.andreschepers.dialogueandortext.usecase.inputport.ICreateDialogueAndOrTextUseCase;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.UUID;
import java.util.stream.StreamSupport;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

@Slf4j
@ExtendWith(MockitoExtension.class)
class CreateDialogueAndOrTextUseCaseTest {

    private static final String DAOT_FILE = "/domain-tests/daot-tests/test-daots.json";

    @Mock
    private DBDialogueAndOrTextOutputPort dbOutputPort;

    @InjectMocks
    private CreateDialogueAndOrTextUseCase sut;

    @Captor
    ArgumentCaptor<DialogueAndOrText> dialogueTextCaptor;

    @Test
    void testCreationOfDialogueAndOrText() throws IOException {
        var daotEntity = new DialogueAndOrTextJpaEntity();
        daotEntity.setId(UUID.randomUUID());
        when(dbOutputPort.persistDialogueAndOrText(any())).thenReturn(daotEntity);
        var testDaots = getTestDaots();
        for (JsonNode testDaot : testDaots) {

            sut.createDialogueAndOrText(createDialogueTextList(testDaot));
            verify(dbOutputPort).persistDialogueAndOrText(dialogueTextCaptor.capture());
            var dialogueText = dialogueTextCaptor.getValue();

            assertEquals("ce97e5981473f24e37cb629388281a17aa93eb89e10be2e436a0d07ca1023ef27a70fcfb635c1858c99e40523e3e18cfba8e4e3d2a7260abbc7b15b6581f81d2", dialogueText.getSha512Sum());
            var lines = dialogueText.getLines();
            assertLines(testDaot, lines);
        }
    }

    private void assertLines(JsonNode testDaot, List<DialogueAndOrTextLine> dialogueAndOrTextLines) {
        var testDaotLines = testDaot.at(JsonPointer.compile("/expected/lines"));
        assertEquals(testDaotLines.size(), dialogueAndOrTextLines.size());
        for (int index = 0; index < testDaotLines.size(); ++index) {
            var testDaotLine = testDaotLines.get(index);
            var createdLine = dialogueAndOrTextLines.get(index);
            assertEquals(testDaotLine.get("actor").textValue(), createdLine.getPersonName());
            assertEquals(testDaotLine.get("line-text").textValue(), createdLine.getLine());
            assertEquals(testDaotLine.get("sha512sum").textValue(), createdLine.getSha512Sum());
            log.info("words of index: [{}], words: [{}]", index, createdLine.getWords());

            var lineWords = testDaot.at(JsonPointer.compile("/expected/line-words")).get(index).elements();
            Iterable<JsonNode> iterable = () -> lineWords;
            List<String> actualList = StreamSupport
                    .stream(iterable.spliterator(), false)
                    .map(JsonNode::textValue).toList();

            List<String> expectedList = createdLine.getWords()
                    .stream()
                    .map(DialogueAndOrTextLineWord::toString)
                    .toList();

            assertEquals(actualList, expectedList);
        }
    }

    private JsonNode getTestDaots() throws IOException {
        var dialoguesJsonInputstream = this.getClass().getResourceAsStream(DAOT_FILE);
        return new ObjectMapper().reader().readTree(dialoguesJsonInputstream);
    }

    private List<ICreateDialogueAndOrTextUseCase.DialogueAndOrTextLineRecord> createDialogueTextList(JsonNode testDaot) {

        var input = testDaot.get("input");

        var linesArrayNode = input.get("lines");
        var recordList = new ArrayList<ICreateDialogueAndOrTextUseCase.DialogueAndOrTextLineRecord>();
        linesArrayNode.forEach(line -> {
            var record = new ICreateDialogueAndOrTextUseCase.DialogueAndOrTextLineRecord(line.get("actor").textValue(), line.get("line-text").textValue());
            recordList.add(record);
        });

        return recordList;
    }
}
