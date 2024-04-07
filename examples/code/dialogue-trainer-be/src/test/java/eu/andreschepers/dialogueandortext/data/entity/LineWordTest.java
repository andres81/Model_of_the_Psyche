/*
 * Copyright 2024 André Schepers
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