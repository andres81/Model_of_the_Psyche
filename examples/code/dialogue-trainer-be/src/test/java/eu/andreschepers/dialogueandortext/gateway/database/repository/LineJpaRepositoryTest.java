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

package eu.andreschepers.dialogueandortext.gateway.database.repository;

import eu.andreschepers.dialogueandortext.common.ShaSumCalculator;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.ActiveProfiles;

import static org.junit.jupiter.api.Assertions.assertTrue;

@DataJpaTest(
    properties = "spring.sql.init.data-locations=classpath:db/line.sql"
)
@ActiveProfiles("dbtest")
//@Transactional(propagation = Propagation.NOT_SUPPORTED)
//@AutoConfigureTestDatabase(replace = AutoConfigureTestDatabase.Replace.NONE)
class LineJpaRepositoryTest {

    private static final String SHA_512_SUM = ShaSumCalculator.calculateSha512Sum("test123 456");

    @Autowired
    private LineJpaRepository sut;

    @Test
    void existsLineJpaEntityByLineShaSum() {
        var all = sut.findAll();
        var existsOrNot = sut.existsLineJpaEntityByLineShaSum(SHA_512_SUM);

        var entity = sut.findByLineShaSum(SHA_512_SUM);

        assertTrue(existsOrNot);
    }
}
