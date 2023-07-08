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

package eu.andreschepers.dialogueandortext.domain;

import eu.andreschepers.dialogueandortext.common.ShaSumCalculator;
import lombok.Getter;

import java.util.Collections;
import java.util.List;

@Getter
public class DialogueAndOrText {

    private final List<DialogueAndOrTextLine> lines;
    private final String sha512Sum;

    public DialogueAndOrText(List<DialogueAndOrTextLine> lines) {
        this.lines = Collections.unmodifiableList(lines);
        this.sha512Sum = calculateSha512Sum(lines);
    }

    private String calculateSha512Sum(List<DialogueAndOrTextLine> lines) {
        StringBuilder sb = new StringBuilder();
        lines.forEach(line -> sb.append(line.getSha512Sum()));
        return ShaSumCalculator.calculateSha512Sum(sb.toString());
    }
}
