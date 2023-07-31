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
import eu.andreschepers.dialogueandortext.domain.enums.DialogueAndOrTextLineType;
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.DialogueAndOrTextJpaEntity;
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.DialogueAndOrTextLineJpaEntity;
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.LineJpaEntity;
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.enums.DialogueAndOrTextLineTypeJpa;
import eu.andreschepers.dialogueandortext.gateway.database.repository.LineJpaRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class DialogueAndOrTextLineMapper {

    private final LineMapper lineMapper;
    private final LineJpaRepository lineJpaRepository;

    public DialogueAndOrTextLineJpaEntity mapDialogueLineToEntity(DialogueAndOrTextJpaEntity dialogueEntity, DialogueAndOrTextLine dialogueAndOrTextLine) {

        var lineEntity = new DialogueAndOrTextLineJpaEntity();
        lineEntity.setName(dialogueAndOrTextLine.getPersonName());
        lineEntity.setDialogueAndOrText(dialogueEntity);
        lineEntity.setLineIndex(dialogueAndOrTextLine.getIndex());
        lineEntity.setType(mapType(dialogueAndOrTextLine.getDialogueAndOrTextLineType()));
        lineEntity.setLine(mapLine(dialogueAndOrTextLine));

        return lineEntity;
    }

    public DialogueAndOrTextLine mapEntityToDialogueAndOrTextLine(DialogueAndOrTextLineJpaEntity entityLine) {
        return new DialogueAndOrTextLine(entityLine.getLineIndex(),
                entityLine.getName(),
                entityLine.getLine().getLine());
    }

    private DialogueAndOrTextLineTypeJpa mapType(DialogueAndOrTextLineType type) {
        return DialogueAndOrTextLineTypeJpa.valueOf(type.name());
    }

    private LineJpaEntity mapLine(DialogueAndOrTextLine dialogueAndOrTextLine) {
        if (lineJpaRepository.existsLineJpaEntityByLineShaSum(dialogueAndOrTextLine.getSha512Sum())) {
            return lineJpaRepository.findByLineShaSum(dialogueAndOrTextLine.getSha512Sum()).get();
        } else {
            return lineMapper.mapLine(dialogueAndOrTextLine);
        }
    }
}
