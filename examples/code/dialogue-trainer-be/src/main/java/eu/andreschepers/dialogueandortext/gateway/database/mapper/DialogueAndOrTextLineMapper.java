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
