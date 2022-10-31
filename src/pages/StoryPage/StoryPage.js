import React from "react";
import PropTypes from "prop-types";
// import ScrollToNext from '@components/ScrollToNext';
import "./style.scss";
import logo from "@images/cairo-bflowers.png";

const StoryPage = (props, context) => {
    const {
        theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary },
    } = context;

    return (
        <div className="story-page" style={{ backgroundColor: bgPrimary }}>
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
                <h1 style={{ color: colorPrimary }}>Life story</h1>
                <div className="story-wrapper">
                    <div
                        className="story-content"
                        style={{ color: textPrimary }}
                    >
                        <p>
                            I was hatched into a multi-subspecies eclectus
                            family:{" "}
                            <span className="highlight">
                                <a
                                    href="https://eclectus-parrots.com/subspecies-info-solomon-island-eclectus/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Solomon Island
                                </a>
                            </span>
                            ,{" "}
                            <span className="highlight">
                                <a
                                    href="https://eclectus-parrots.com/subspecies-info-new-guinea-eclectus/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Red-Sided
                                </a>
                            </span>
                            , and{" "}
                            <span className="highlight">
                                <a
                                    href="https://eclectus-parrots.com/subspecies-info-aru-island-eclectus/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Aruensis
                                </a>
                            </span>
                            . My older brothers already flew the coop by the
                            time I hatched and I was adopted into a Malay family
                            that gave me my name. I learned how to{" "}
                            <span className="highlight">
                                <a
                                    href="https://vimeo.com/ondemand/parrotflight"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    recall
                                </a>
                            </span>{" "}
                            and{" "}
                            <span className="highlight">
                                <a
                                    href="https://blogpamelaclarkonline.com/2019/06/26/commentary-on-free-flight-part-one/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    free-fly
                                </a>
                            </span>{" "}
                            as soon as I was flighted but that was risky but fun
                            - like some things in life.
                        </p>
                        <p>
                            Flying was so much fun that I decided to take a{" "}
                            <span className="highlight">
                                <a
                                    href="https://goodbirdinc.blogspot.com/2008/08/when-flighted-parrot-escapes.html"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    solo joyflight
                                </a>
                            </span>{" "}
                            without the human. And after 3 weeks, I flew halfway
                            across the island and chanced upon some humans
                            having a picnic at a balcony. Polite parrot as I am,
                            I greeted them with my best{" "}
                            <span className="highlight"> 'hello'</span> and got
                            many, many treats. They took many photos of me,
                            posted it to some Book of Faces and within a day I
                            was reunited with my owner! How much I missed him!
                        </p>
                        <p>
                            A few months after that, my original human broke the
                            news that he was building his own nest with his hen
                            and new hatchling, so I had to go to a new home. I
                            was very anxious and toe-tapped till I met my new
                            humans. They turned out to be the kind humans from
                            my last adventure -{" "}
                            <span className="highlight"> Seth</span> &{" "}
                            <span className="highlight"> Cleavan. </span>
                            I'm excited because they give a lot of treats{" "}
                            <span role="img" aria-label="star struck">
                                🤩
                            </span>
                        </p>
                    </div>
                </div>
                <div className="logo">
                    <img src={logo} alt="peekaboo" />
                </div>
            </div>
            {
                // TODO: add this selector
                // <ScrollToNext pageSelector=".portfolio-page" />
            }
        </div>
    );
};

StoryPage.contextTypes = {
    theme: PropTypes.any,
};

export default StoryPage;
