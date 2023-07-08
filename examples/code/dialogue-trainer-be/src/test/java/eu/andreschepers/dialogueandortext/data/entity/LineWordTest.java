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

package eu.andreschepers.dialogueandortext.data.entity;

import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.transaction.annotation.Propagation;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@DataJpaTest
@ActiveProfiles("dbtest")
@Transactional(propagation = Propagation.NOT_SUPPORTED)
@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class LineWordTest {

//    @Autowired
//    private LineWordRepository lineWordRepository;
//
//    @Autowired
//    private LineRepository lineRepository;
//
//    @Autowired
//    private WordRepository wordRepository;
//
//    @Test
//    @Transactional
//    void testStorage() {
//        initDb();
//        var lineWords = lineWordRepository.findAll();
//        log.info("check");
//    }
//
//    private void initDb() {
//
//        var line = new Line();
//        line.setId(UUID.randomUUID());
//        line.setLineText("line text");
//        lineRepository.save(line);
//
//        var word = new Word();
//        word.setId(UUID.randomUUID());
//        wordRepository.save(word);
//
//        var lineWord = new LineWord();
//        lineWord.setId(UUID.randomUUID());
//        lineWord.setLine(line);
//        lineWord.setWord(word);
//        lineWord.setWordIndex(0);
//
//        lineWordRepository.save(lineWord);
//    }
}