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

package eu.andreschepers.dialogueandortext.usecase;

import eu.andreschepers.dialogueandortext.domain.DialogueAndOrText;
import eu.andreschepers.dialogueandortext.domain.DialogueAndOrTextLine;
import eu.andreschepers.dialogueandortext.usecase.inputport.ICreateDialogueAndOrTextUseCase;
import eu.andreschepers.dialogueandortext.usecase.outputport.IDBDialogueAndOrTextOutputPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Component
@RequiredArgsConstructor
public class CreateDialogueAndOrTextUseCase implements ICreateDialogueAndOrTextUseCase {

    private final IDBDialogueAndOrTextOutputPort dbOutputPort;

    @Override
    public UUID createDialogueAndOrText(List<DialogueAndOrTextLineRecord> lines) {
        var mappedLines = mapToDomainEntities(lines);
        var domainDialogueAndOrText = new DialogueAndOrText(mappedLines);
        return dbOutputPort.persistDialogueAndOrText(domainDialogueAndOrText).getId();
    }

    private List<DialogueAndOrTextLine> mapToDomainEntities(List<DialogueAndOrTextLineRecord> lines) {
        var mappedLines = new ArrayList<DialogueAndOrTextLine>();
        for (int index = 0 ; index<lines.size() ; ++index) {
            var lineRecord = lines.get(index);
            mappedLines.add(new DialogueAndOrTextLine(index, lineRecord.actor(), lineRecord.lineText()));
        }
        return mappedLines;
    }
}
