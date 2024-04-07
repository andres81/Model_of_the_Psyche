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

package eu.andreschepers.dialogueandortext.domain;

import lombok.extern.slf4j.Slf4j;
import org.junit.jupiter.api.Test;

import java.util.Arrays;

@Slf4j
class DialogueAndOrTextLineTest {

    private static final String TEST_STRING = "Дайте, пожалуйста;;;)*#)(%#%,    меню";

    @Test
    void getWords() {
        String[] words = TEST_STRING.split("\\P{L}+");
        log.info(" test: [{}]", Arrays.asList(words));
    }
}
