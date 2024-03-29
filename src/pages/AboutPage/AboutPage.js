import React from "react";
import PropTypes from "prop-types";
import ScrollToNext from "@components/ScrollToNext";
import "./style.scss";
import logo from "@images/cairo-coconut.png";
import moment from "moment";

const AboutPage = (props, context) => {
    const {
        theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary },
    } = context;
    const mbirthday = moment("2017-11-20");
    const mnow = moment(moment.now());
    const years = mnow.diff(mbirthday, "years");
    const months = mnow.diff(mbirthday, "months") % 12;

    return (
        <div className="about-page" style={{ backgroundColor: bgPrimary }}>
            <style jsx="true">
                {`
                    .highlight {
                        background-color: ${colorHighlight};
                    }
                    ::selection {
                        background-color: ${colorHighlight};
                    }
                `}
            </style>
            <div className="content-grid">
                <h1 style={{ color: colorPrimary }}>About</h1>
                <div className="about-wrapper">
                    <div
                        className="about-content"
                        style={{ color: textPrimary }}
                    >
                        <p>
                            Hello! I'm <span className="highlight">Cairo</span>{" "}
                            (pronounced <i>chai-row</i>, or 菜肉), a {years}{" "}
                            year and {months} months{" "}
                            <span className="highlight">
                                {" "}
                                <a
                                    href="https://eclectusparrotbreeders.com/about-eclectus.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    eclectus parrot
                                </a>
                            </span>{" "}
                            living in Singapore. I have adopted a pair of human
                            beings - whom I nicknamed{" "}
                            <span className="highlight"> Seth</span> &{" "}
                            <span className="highlight"> Cleavan</span> - and
                            I'm working on training them, so any advice on
                            training humans is most welcome!
                        </p>
                        <p>
                            A truly hatched and bred Singaporean, I currently
                            live in{" "}
                            <span className="highlight"> Joo Chiat</span> and
                            enjoy chilling out in the East with my{" "}
                            <i>parronts</i> (portmanteau of parrot and parent).
                            Say 'hi' if you see me and feel free to tag me -{" "}
                            <span className="highlight">
                                <a
                                    href="https://www.instagram.com/cairothedino/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    @cairothedino
                                </a>
                            </span>{" "}
                            - in your paparazzi photos.
                        </p>
                        <p>
                            I'm a parrot, so I{" "}
                            <span className="highlight">
                                {" "}
                                fly-fly and talk a lot
                            </span>
                            . Mostly not-so-chim words, like{" "}
                            <span className="highlight">
                                {" "}
                                'hello', 'uh-oh', 'peek-a-boo'
                            </span>
                            , and some important phrases, like{" "}
                            <span className="highlight">'I love you'</span> -
                            that always gets me treats ;) I also love blowing
                            kisses and saying the wrong thing at the wrong time! (Or is it the right thing at the right time?)
                            My human has repeatedly warned me not to try to eat
                            the Raspberry Pi - but why else would they name
                            something after two of my favourite foods?
                        </p>
                        <p>
                            I hope to put up my{" "}
                            <span className="highlight">
                                <a
                                    href="https://www.instagram.com/cairothedino/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    instagram
                                </a>
                            </span>{" "}
                            feed soon, but my humans are so busy all the time,
                            especially{" "}
                            <a
                                href="https://github.com/lackdaz"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="highlight">
                                    {" "}
                                    the developer
                                </span>
                            </a>
                            . So I'm crossing my talons that it will happen
                            soon.
                        </p>
                    </div>
                </div>
                <div className="logo">
                    <img src={logo} alt="peekaboo" />
                </div>
            </div>
            <ScrollToNext pageSelector=".story-page" />
        </div>
    );
};

AboutPage.contextTypes = {
    theme: PropTypes.any,
};

export default AboutPage;
