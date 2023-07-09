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

package eu.andreschepers.dialogueandortext.integration;

import eu.andreschepers.dialogueandortext.gateway.database.repository.DialogueAndOrTextJpaRepository;
import eu.andreschepers.dialogueandortext.usecase.CreateDialogueAndOrTextUseCase;
import eu.andreschepers.dialogueandortext.usecase.ReadDialogueAndOrTextUseCase;
import eu.andreschepers.dialogueandortext.usecase.inputport.ICreateDialogueAndOrTextUseCase;
import eu.andreschepers.dialogueandortext.usecase.inputport.IReadDialogueAndOrTextUseCase;
import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import java.util.List;
import java.util.Map;

@Slf4j
@SpringBootTest
@ActiveProfiles("integrationtest")
//@Transactional(propagation = Propagation.NOT_SUPPORTED)
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class CreateDialogueAndOrTextUseCaseIntegrationTest {

    private static final Map<String,String> DIALOGUE_ONE = Map.of(
            "Jan", "Hey Joop, wat een dikke bmw!",
            "Joop", "Ja, daar heb ik wél het geld voor Jan..."
    );
    private static final Map<String,String> DIALOGUE_TWO = Map.of(

    );

    @Autowired
    private DialogueAndOrTextJpaRepository daotRepository;

    @Autowired
    private IReadDialogueAndOrTextUseCase readDialogueAndOrTextUseCase;

    @Autowired
    private CreateDialogueAndOrTextUseCase sut;

    @Test
    void testCreationAndPersistence() {
        sut.createDialogueAndOrText(createDialogueAndOrTextLineRecords());
        var daots = daotRepository.findAll();
        log.info("Daots: {}", daots);
        var readDaot = readDialogueAndOrTextUseCase.readDialogueAndOrTextByHashSum(daots.get(0).getDialogueHash());
        log.info("Daot: [{}]", readDaot);
    }

    private List<ICreateDialogueAndOrTextUseCase.DialogueAndOrTextLineRecord> createDialogueAndOrTextLineRecords() {
        return DIALOGUE_ONE.entrySet().stream()
            .map(entry -> new ICreateDialogueAndOrTextUseCase.DialogueAndOrTextLineRecord(entry.getKey(), entry.getValue()))
            .toList();
    }
}
