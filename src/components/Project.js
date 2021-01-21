import React, {Component} from 'react';

export default class Project extends Component {
    render() {
        let resumeData = this.props.resumeData;
        return (
            <section id="project">
                <div className="row">
                    <div className="twelve columns collapsed">
                        <h1>Check Out Some of My Projects!</h1>
                        <div id="project-wrapper" className="bgrid-quarters s-bgrid-thirds cf" alt="">
                            {
                                resumeData.projects && resumeData.projects.map((item) => {
                                    return (
                                        <div className="columns project-item">
                                            <a className="project-link" target="_blank" rel="noopener noreferrer" href={item.link}>
                                                <div className="item-wrap">
                                                    <img src={`${item.imgurl}`} className="item-img"/>
                                                    <div className="overlay">
                                                        <div className="project-item-meta">
                                                            <h5 className="project-name">{item.name}</h5>
                                                            <p className="project-description">{item.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
