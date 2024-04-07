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

import './App.css';
import CaseFiles from "./components/case-files";
import Header from "./components/header";
import Footer from "./components/footer";
import Contact from "./components/contact";
import ProjectsSection from "./components/ProjectsSection";
import ModalWrapper from "./components/ModalWrapper";
import Modal from "react-modal";

Modal.setAppElement('#root');

function App() {

  return (
    <div className="App">
      <Header />
      <CaseFiles />
      <ProjectsSection />
      <Contact />
      <Footer />
      <ModalWrapper />
    </div>
  );
}

export default App;
