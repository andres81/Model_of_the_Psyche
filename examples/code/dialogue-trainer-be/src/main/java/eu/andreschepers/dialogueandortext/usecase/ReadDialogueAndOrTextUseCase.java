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

package eu.andreschepers.dialogueandortext.usecase;

import eu.andreschepers.dialogueandortext.domain.DialogueAndOrText;
import eu.andreschepers.dialogueandortext.usecase.inputport.IReadDialogueAndOrTextUseCase;
import eu.andreschepers.dialogueandortext.usecase.outputport.IDBDialogueAndOrTextOutputPort;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.UUID;

@Component
@RequiredArgsConstructor
public class ReadDialogueAndOrTextUseCase implements IReadDialogueAndOrTextUseCase {

    private final IDBDialogueAndOrTextOutputPort dbOutputPort;

    @Override
    public DialogueAndOrText readDialogueAndOrTextById(UUID id) {
        return dbOutputPort.readDialogueAndOrTextById(id);
    }

    @Override
    public DialogueAndOrText readDialogueAndOrTextByHashSum(String hashSum) {
        return dbOutputPort.readDialogueAndOrTextByHashSum(hashSum);
    }
}
