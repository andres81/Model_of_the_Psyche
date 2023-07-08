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
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.LineJpaEntity;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

@Component
@RequiredArgsConstructor
public class LineMapper {

    private final LineWordMapper lineWordMapper;

    public LineJpaEntity mapLine(DialogueAndOrTextLine dialogueAndOrTextLine) {
        LineJpaEntity lineJpaEntity;
        lineJpaEntity = new LineJpaEntity();
        lineJpaEntity.setLine(dialogueAndOrTextLine.getLine());
        lineJpaEntity.setLineShaSum(dialogueAndOrTextLine.getSha512Sum());
        lineJpaEntity.setLineWords(lineWordMapper.mapWords(dialogueAndOrTextLine));
        return lineJpaEntity;
    }
}
