import React, { Component } from 'react';

export default class About extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id= "about">
                <div className = "row">
                    <div className = "three columns">
                        <img className= "profile-pic" href="../../public/images/profilepic.jpg"
                              alt="" />
                    </div>
                        <div className="bg"></div>
                        <div className="bg bg2"></div>
                        <div className="bg bg3"></div>
                        <div className="content nine columns main-col">
                            <h2>About Me</h2>
                            <p>{"I’m currently a candidate for Master’s in Computer Science at Northeastern University " +
                            "with an emphasis on Software development and Data Science." }</p>
                            <p>{"During undergrad, I majored in Mechatronics engineering with a minor specialization in " +
                            "Robotics with an intention to build machines that can benefit our agricultural and manufacturing industry."}</p>
                            <p>{"While building a smart home cleaner, I found it interesting how these machines gain the" +
                            " capability to think and reason through programming, which propelled me to major in " +
                            "Computer Science to continue working on technology that has impact on our society.\n"}</p>
                            <p>{ "Throughout these years, being curious to learn new stuff helped me gain a work " +
                            "experience of 1 year in Software development, 1 year in educational services " +
                            "and 4 months in Industrial Automation."}</p>
                        {/*<div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{resumeData.name}</span>
                                    <br></br>
                                    <span>
                                    {resumeData.address}
                                    </span>
                                    <br></br>
                                    <span>{resumeData.website}</span>
                                </p>
                            </div>
                        </div>*/}
                    </div>
                </div>
            </section>);
        }
    }
