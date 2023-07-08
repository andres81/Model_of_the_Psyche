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

package eu.andreschepers.dialogueandortext.gateway.database;

import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.DialogueAndOrTextJpaEntity;
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.DialogueAndOrTextLineJpaEntity;
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.LineJpaEntity;
import eu.andreschepers.dialogueandortext.gateway.database.jpaentities.enums.DialogueAndOrTextLineTypeJpa;
import eu.andreschepers.dialogueandortext.gateway.database.repository.DialogueAndOrTextJpaRepository;
import eu.andreschepers.dialogueandortext.gateway.database.repository.DialogueAndOrTextLineJpaRepository;
import eu.andreschepers.dialogueandortext.gateway.database.repository.LineJpaRepository;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.ArrayList;
import java.util.List;

@DataJpaTest
@ActiveProfiles("dbtest")
//@Transactional(propagation = Propagation.NOT_SUPPORTED)
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class DBDialogueAndOrTextOutputPortTest {

    @Autowired
    private DialogueAndOrTextJpaRepository daotRepository;
    @Autowired
    private DialogueAndOrTextLineJpaRepository daotLineRepository;
    @Autowired
    private LineJpaRepository lineRepository;

    @Test
    void persistDialogueAndOrText() {
        DialogueAndOrTextJpaEntity daotEntity = new DialogueAndOrTextJpaEntity();
        daotEntity.setDialogueHash(" hash ");
        daotEntity.setLines(createLines(daotEntity));
        daotRepository.save(daotEntity);
    }

    private List<DialogueAndOrTextLineJpaEntity> createLines(DialogueAndOrTextJpaEntity daotEntity) {
        var lines = new ArrayList<DialogueAndOrTextLineJpaEntity>();
        var daotLine = new DialogueAndOrTextLineJpaEntity();
        daotLine.setLineIndex(0);
        daotLine.setDialogueAndOrText(daotEntity);
        daotLine.setType(DialogueAndOrTextLineTypeJpa.DIALOGUE);
        daotLine.setLine(createLine());
        lines.add(daotLine);
        return lines;
    }

    private LineJpaEntity createLine() {
        LineJpaEntity line = new LineJpaEntity();
        return line;
//        return lineRepository.save(line);
    }
}