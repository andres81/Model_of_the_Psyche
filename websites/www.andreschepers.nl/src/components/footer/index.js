/*
 * Copyright 2022 - 2025 André Schepers
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

export default function Footer() {

    return (
        <footer className="footer py-4">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-5 text-lg-start">Copyright &copy; André Schepers 2023 - 2024</div>
                    <div className="col-lg-4 text-lg-end ms-auto">
                        <a className="link-dark text-decoration-none me-3" href="https://andreschepers.nl/privacypolicy.html" target="_blank" rel="noreferrer">Privacy Policy</a>
                        <a className="link-dark text-decoration-none" href="https://andreschepers.nl/termsandconditions.html" target="_blank" rel="noreferrer">Terms of Use</a>
                    </div>
                </div>
            </div>
        </footer>
    )
}
