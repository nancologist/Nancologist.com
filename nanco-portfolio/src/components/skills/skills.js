import React from "react";
import StorageIcon from '@material-ui/icons/Storage';
import FlipToFrontIcon from '@material-ui/icons/FlipToFront';
import SettingsIcon from '@material-ui/icons/Settings';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';
import TranslateIcon from '@material-ui/icons/Translate';
import BuildIcon from '@material-ui/icons/Build';
import ComputerIcon from '@material-ui/icons/Computer';
import VideogameAssetIcon from '@material-ui/icons/VideogameAsset';
import Icon from '@mdi/react';
import {
    mdiLanguageJava, mdiNodejs, mdiLanguagePython, mdiLanguagePhp, mdiGraphql,

    mdiReact, mdiVuejs, mdiLanguageJavascript, mdiLanguageTypescript, mdiSass,
    mdiLanguageCss3, mdiLanguageHtml5, mdiJquery,

    mdiElectronFramework,

    mdiDatabase, mdiLanguageCsharp,
    mdiLanguageR, mdiGit, mdiGithub, mdiGitlab, mdiFirebase, mdiBookMultiple, mdiRobotAngry, mdiGamepadVariantOutline
} from '@mdi/js';

import {colors} from "../../colors";

import Skill from './skill/skill';

export default () => {
    return (
        <div className="skill__list">
            {skills.map((skill) => {
                // Todo: Outsource skill.techs in a new cmp, BUT NOT NOW...
                return (
                    <Skill
                        title={skill.title}
                        key={skill.title}
                        IconTagName={skill.IconTagName}
                        techs={skill.techs}
                    />
                );
            })}

            {/*
            <div className="skill__list-item">
                <div className="list-item__title">
                    <h2>Tools</h2>
                    <div className="skill-icon">
                        <BuildIcon fontSize={'large'} />
                    </div>
                </div>
                <div className="list-item__content">
                    <div className="list-item__content__tech">
                        <Icon
                            className="list-item__content__tech__icon"
                            path={mdiGithub}
                            color={colors.primary}
                            size={2}
                            title={'Github'}
                        />
                        <span className="list-item__content__tech__text">
                                    <strong>Github - </strong> For business and personal projects.
                                </span>
                    </div>
                    <div className="list-item__content__tech">
                        <Icon
                            className="list-item__content__tech__icon"
                            path={mdiGitlab}
                            color={colors.primary}
                            size={2}
                            title={'Gitlab'}
                        />
                        <span className="list-item__content__tech__text">
                                    <strong>GitLab - </strong> used for business projects.
                                </span>
                    </div>
                    <div className="list-item__content__tech">
                        <Icon
                            className="list-item__content__tech__icon"
                            path={mdiGit}
                            color={colors.primary}
                            size={2}
                            title={'Git'}
                        />
                        <span className="list-item__content__tech__text">
                                    <strong>Git - </strong> daily use.
                                </span>
                    </div>
                    <div className="list-item__content__tech">
                        <Icon
                            className="list-item__content__tech__icon"
                            path={mdiFirebase}
                            color={colors.primary}
                            size={2}
                            title={'Firebase'}
                        />
                        <span className="list-item__content__tech__text">
                                    <strong>Google Firebase - </strong> NoSQL Database and BaaS (Backend as a Service)
                                </span>
                    </div>
                </div>
            </div>

            <div className="skill__list-item">
                <div className="list-item__title">
                    <h2>Others</h2>
                    <div className="skill-icon">
                        <ComputerIcon fontSize={'large'} />
                    </div>
                </div>
                <div className="list-item__content">
                    <div className="list-item__content__tech">
                        <Icon
                            className="list-item__content__tech__icon"
                            path={mdiRobotAngry}
                            color={colors.primary}
                            size={2}
                            title={'Firebase'}
                        />
                        <span className="list-item__content__tech__text">
                                    <strong>Machine Learning - </strong> R, Python : Data Cleaning, Linear Regression
                                </span>
                    </div>
                    <div className="list-item__content__tech">
                        <VideogameAssetIcon
                            fontSize={'large'} style={{
                            color: colors.primary,
                            transform: 'scale(1.2)'
                        }}
                        />
                        <span className="list-item__content__tech__text">
                                    <strong> Assembly 6502</strong>
                                </span>
                    </div>
                    <div className="list-item__content__tech">
                        <Icon
                            className="list-item__content__tech__icon"
                            path={mdiBookMultiple}
                            color={colors.primary}
                            size={2}
                            title={'Firebase'}
                        />
                        <span className="list-item__content__tech__text">
                                    MacOS X, Windows 10, Bash, Terminal (Bash), LDAP, Assembly 6502,
                                </span>
                        <span className="list-item__content__tech__text">
                                    Machine Learning (R, Python), Deno, 10-Fingers-Typing
                                </span>
                    </div>
                </div>
            </div>*/}

        </div>
    );
}

const skills = [
    {
        title: 'Frontend',
        IconTagName: FlipToFrontIcon,
        techs: [
            {
                techName: 'ReactJS - ',
                techDesc: 'Redux, Gatsby, NextJS, Material-UI, Certified By Udemy (40hrs)',
                techIcon: mdiReact,
                techIconTitle: 'ReactJS'
            },
            {
                techName: 'VueJS - ',
                techDesc: 'Vuex, NuxtJS, Vuetify, Certified By Udemy (30hrs)',
                techIcon: mdiVuejs,
                techIconTitle: 'VueJS'
            },
            {
                techName: 'Typescript - ',
                techDesc: 'Generics, Interfaces, Unions, Certified By Udemy (20hrs)',
                techIcon: mdiLanguageTypescript,
                techIconTitle: 'Typescript'
            },
            {
                techName: 'Javascript - ',
                techDesc: 'ES6, ES7, Fetch API, Ajax, ...',
                techIcon: mdiLanguageJavascript,
                techIconTitle: 'Javascript'
            },
            {
                techName: 'jQuery',
                techDesc: '',
                techIcon: mdiJquery,
                techIconTitle: 'jQuery',
            },
            {
                techName: 'Sass',
                techDesc: '',
                techIcon: mdiSass,
                techIconTitle: 'Sass',
            },
            {
                techName: 'CSS - ',
                techDesc: 'BEM, Mobile First, Grid, Flexbox',
                techIcon: mdiLanguageCss3,
                techIconTitle: 'CSS',
            },
            {
                techName: 'HTML',
                techDesc: '',
                techIcon: mdiLanguageHtml5,
                techIconTitle: 'HTML',
            },
        ]
    },
    {
        title: 'Backend',
        IconTagName: SettingsIcon,
        techs: [
            {
                techName: 'Java - ',
                techDesc: 'Spring MVC, Maven, Thymeleaf, JUnit, Mockito, Selenium',
                techIcon: mdiLanguageJava,
                techIconTitle: 'Java'
            },
            {
                techName: 'NodeJS - ',
                techDesc: 'ExpressJS, Typescript, Sequelize, Mongoose, Pug, EJS, Handlebars',
                techIcon: mdiNodejs,
                techIconTitle: 'NodeJS',
            },
            {
                techName: 'Python - ',
                techDesc: 'Django, PythonLDAP',
                techIcon: mdiLanguagePython,
                techIconTitle: 'Python',
            },
            {
                techName: 'PHP',
                techDesc: '',
                techIcon: mdiLanguagePhp,
                techIconTitle: 'PHP'
            },
            {
                techName: 'Firebase (NoSQL) - ',
                techDesc: 'Google Service BaaS ',
                techIcon: mdiDatabase,
                techIconTitle: 'Firebase'
            },
            {
                techName: 'GraphQL - ',
                techDesc: 'Query Language for APIs',
                techIcon: mdiGraphql,
                techIconTitle: 'GraphQL'
            }
        ]
    },
    {
        title: 'Desktop Apps',
        IconTagName: DesktopWindowsIcon,
        techs: [
            {
                techName: 'ElectronJS - ',
                techDesc: 'Cross Plattform Desktop Applications (MacOS, Windows, Linux)',
                techIcon: mdiElectronFramework,
                techIconTitle: 'ElectronJS'
            },
        ]
    },
    {
        title: 'Mobile Apps',
        IconTagName: PhoneAndroidIcon,
        techs: [
            {
                techName: 'React Native - ',
                techDesc: 'In Learning Progress, Cross Plattform Mobile Applications (Android, iOS)',
                techIcon: mdiReact,
                techIconTitle: 'React Native'
            },
        ]
    },
    {
        title: 'Database',
        IconTagName: StorageIcon,
        techs: [
            {
                techName: 'MongoDB (NoSQL) - ',
                techDesc: 'Atlas, Compass',
                techIcon: mdiDatabase,
                techIconTitle: 'MongoDB'
            },
            {
                techName: 'Firebase (NoSQL) - ',
                techDesc: 'Google Service BaaS ',
                techIcon: mdiDatabase,
                techIconTitle: 'Firebase'
            },
            {
                techName: 'MySQL - ',
                techDesc: 'PhpMyAdmin',
                techIcon: mdiDatabase,
                techIconTitle: 'MySQL'
            },
            {
                techName: 'MS-SQL',
                techDesc: '',
                techIcon: mdiDatabase,
                techIconTitle: 'MS-SQL'
            },
        ]
    },
    {
        title: 'Other Languages',
        IconTagName: TranslateIcon,
        techs: [
            {
                techName: 'CSharp',
                techDesc: '',
                techIcon: mdiLanguageCsharp,
                techIconTitle: 'CSharp'
            },
            {
                techName: 'R',
                techDesc: '',
                techIcon: mdiLanguageR,
                techIconTitle: 'R'
            },
            {
                techName: 'Assembly 6502 - ',
                techDesc: 'Great language to get deep in the machine.',
                techIcon: mdiGamepadVariantOutline,
                techIconTitle: 'Assembly 6502'
            },
        ]
    },
];