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

export default function Contact() {

    return (
        <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact</h2>
                    <h3 className="section-subheading text-muted">It might be possible I will get in touch with you.</h3>
                </div>
                <form id="contactForm" action="https://api.web3forms.com/submit" method="POST">
                    <input type="hidden" name="access_key" value="ea33afc1-df96-4812-b446-8a523a72eb0c"/>
                    <input type="hidden" name="subject" value="New Submission from Web3Forms"/>
                    <input type="checkbox" name="botcheck" id="" style={{display: 'none'}}/>
                    <div className="row align-items-stretch mb-5">
                        <div className="col-md-6">
                            <div className="form-group">
                                <input className="form-control" id="name" type="text" name="name"
                                       placeholder="Your Name *"
                                       data-sb-validations="required"/>
                                <div className="invalid-feedback" data-sb-feedback="name:required">A name is
                                    required.
                                </div>
                            </div>
                            <div className="form-group">
                                <input className="form-control" id="email" type="email" name="email"
                                       placeholder="Your Email *"
                                       data-sb-validations="required,email"/>
                                <div className="invalid-feedback" data-sb-feedback="email:required">An email is
                                    required.
                                </div>
                                <div className="invalid-feedback" data-sb-feedback="email:email">Email is not
                                    valid.
                                </div>
                            </div>
                            <div className="form-group mb-md-0">
                                <input className="form-control" id="phone" type="tel" name="phone"
                                       placeholder="Your Phone"/>
                                <div className="invalid-feedback" data-sb-feedback="phone:required">A phone number
                                    is required.
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="form-group form-group-textarea mb-md-0">
                            <textarea className="form-control" id="message" name="message" placeholder="Your Message *"
                                      data-sb-validations="required"></textarea>
                                <div className="invalid-feedback" data-sb-feedback="message:required">A message is
                                    required.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <button className="btn btn-primary btn-xl text-uppercase" id="submitButton" type="submit">Send
                            Message
                        </button>
                    </div>
                </form>
            </div>
        </section>
    )
}
