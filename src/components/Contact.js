import React, {Component} from 'react';

export default class Contact extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="four columns">
                        <h1 className="lead">
                            Get in touch
                        </h1>
                    </div>
                    <div className="eight columns">
                        <form className="contact-form row">
                            <div className="form-field col x-50">
                                <label className="label" htmlFor="name">Name</label>
                                <input id="name" className="input-text js-input" type="text" required/>
                            </div>
                            <div className="form-field col x-50">
                                <label className="label" htmlFor="email">E-mail</label>
                                <input id="email" className="input-text js-input" type="email" required/>
                            </div>
                            <div className="form-field col x-100">
                                <label className="label" htmlFor="message">Message</label>
                                <input id="message" className="input-text js-input" type="text" required/>
                            </div>
                            <div className="form-field col x-100 align-center">
                                <input className="submit-btn" type="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
            /*<section className="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <h1 className="title">Get in touch</h1>
                        <form className="contact-form row">
                            <div className="form-field col x-50">
                                <input id="name" className="input-text js-input" type="text" required/>
                                <label className="label" htmlFor="name">Name</label>
                            </div>
                            <div className="form-field col x-50">
                                <input id="email" className="input-text js-input" type="email" required/>
                                <label className="label" htmlFor="email">E-mail</label>
                            </div>
                            <div className="form-field col x-100">
                                <input id="message" className="input-text js-input" type="text" required/>
                                <label className="label" htmlFor="message">Message</label>
                            </div>
                            <div className="form-field col x-100 align-center">
                                <input className="submit-btn" type="submit" value="Submit"/>
                            </div>
                        </form>
                    </div>
                </div>
            </section>*/
        );
    }
}
