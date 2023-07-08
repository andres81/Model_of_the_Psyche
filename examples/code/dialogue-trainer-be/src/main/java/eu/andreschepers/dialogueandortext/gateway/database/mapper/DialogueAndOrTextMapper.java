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

import eu.andreschepers.dialogueandortext.domain.DialogueAndOrText;
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.DialogueAndOrTextJpaEntity;
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.DialogueAndOrTextLineJpaEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
@RequiredArgsConstructor
public class DialogueAndOrTextMapper {

    private final DialogueAndOrTextLineMapper dialogueAndOrTextLineMapper;

    public DialogueAndOrTextJpaEntity mapDialogueAndOrText(DialogueAndOrText dialogueAndOrText) {
        var dialogueEntity = new DialogueAndOrTextJpaEntity();
        dialogueEntity.setLines(mapDialogueLines(dialogueEntity, dialogueAndOrText));
        dialogueEntity.setDialogueHash(dialogueAndOrText.getSha512Sum());
        return dialogueEntity;
    }

    private List<DialogueAndOrTextLineJpaEntity> mapDialogueLines(DialogueAndOrTextJpaEntity dialogueEntity, DialogueAndOrText dialogueAndOrText) {
        return dialogueAndOrText.getLines().stream()
            .map(line -> dialogueAndOrTextLineMapper.mapDialogueLine(dialogueEntity, line))
            .toList();
    }
}
