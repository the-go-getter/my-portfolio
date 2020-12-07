import React, {Component} from 'react';

export default class Resume extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="resume">
                <div className="row education">
                    <div className="three columns header-col">
                        <h1><span>Education</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        {
                            resumeData.education && resumeData.education.map((item) => {
                                return (
                                    <div className="row item education-item">
                                        <div className="twelve columns">
                                            <h4>{item.UniversityName}</h4>
                                            <p className="info">
                                                {item.specialization}
                                                <span>&bull;</span>
                                                <em className="date">{item.MonthOfJoining} {item.YearOfJoining}
                                                    <text> - </text>
                                                </em>
                                                <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                                            <p className="description">
                                                {item.Achievements}
                                            </p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row work">
                    <div className="one column header-col work-header">
                        <h1><span>Work</span></h1>
                    </div>
                    <div className="twelve columns main-col">
                        {
                            resumeData.work && resumeData.work.map((item) => {
                                return (
                                    <div className="row item">
                                        {/*<div className="twelve columns">
                                            <h4>{item.CompanyName}</h4>
                                            <p className="info">
                                                {item.Location}
                                                <span>&bull;</span>
                                                <em className="date">{item.MonthOfJoining} {item.YearOfJoining}
                                                    <text> -</text>
                                                </em>
                                                <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></p>
                                            <p className="description">
                                                {item.Description}
                                            </p>
                                        </div>*/}

                                        {/*<div className="item">
                                            <div className="image three columns">
                                                <div>
                                                    <img src="http://lorempixel.com/400/400/people/1/"/>
                                                    <span>
                                                        <em className="date">{item.MonthOfJoining} {item.YearOfJoining}<text> - </text></em>
                                                        <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em>
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="details nine columns">
                                                <div>
                                                    <h5 >{item.CompanyName}</h5>
                                                    <p className="info">{item.Location}</p>
                                                    <p className="info">{item.Description}</p>
                                                </div>
                                            </div>
                                        </div>*/}

                                        <div className="timeline">
                                            <div className="entry">
                                                <div className="title">
                                                    <h3><em className="date">{item.MonthOfJoining} {item.YearOfJoining}<text> - </text></em>
                                                        <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em></h3>

                                                    <p className="info">{item.Location}</p>
                                                </div>
                                                <div className="body">
                                                    <h6 className="role">{item.CompanyName}</h6>
                                                    <p className="description">{item.Description}</p>
                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="row skill">
                    <div className="three columns header-col">
                        <h1><span>Skills</span></h1>
                    </div>
                    <div className="nine columns main-col">
                        <p>
                            {resumeData.skillsDescription}
                        </p>
                        <div className="bars">
                            <ul className="skills">
                                {
                                    resumeData.skills && resumeData.skills.map((item) => {
                                        return (
                                            <li>
                                            <span className={`bar-expand ${item.skillname.toLowerCase()}`}>
                                            </span><em>{item.skillname}</em>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
