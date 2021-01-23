import React, {Component} from 'react';

export default class Contact extends Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         name: '',
    //         email: '',
    //         subject: '',
    //         message: ''
    //     }
    // }

    render() {
        // let resumeData = this.props.resumeData;
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
                                <label className="label" htmlFor="subject">Subject</label>
                                <input id="subject" className="input-text js-input" type="text" required/>
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
        );
    }
}
