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
                <h1 style={{ color: colorPrimary }}>In the beginning...</h1>
                <div className="story-wrapper">
                    <div
                        className="story-content"
                        style={{ color: textPrimary }}
                    >
                        <p>
                            I was hatched into a multi-subspecies eclectus family: 
                            {" "}
                            <span className="highlight"> Solomon Island</span>), 
                            {" "}
                            <span className="highlight"> Red-Sided</span>, and 
                            {" "}
                            <span className="highlight"> Aruensis</span>. 
                            My older brothers already flew the coop by the time I hatched, so it was a cool human who gave my name. 
                            He also taught me how to fly outside and find him again! 
                            Apparently it takes a lot of training (something about {" "}
                            <span className="highlight"> recall</span> and {" "}
                            <span className="highlight"> free flight</span>), but it was fun :D
                        </p>
                        <p>
                            Flying was so much fun that I decided to take a few {" "}
                            <span className="highlight"> solo joyflights</span> without the human.
                            Once, I found myself at a balcony where some humans were chillin'.
                            I'm a polite parrot, so I greeted them with my best {" "}
                            <span className="highlight"> 'hello'</span>. 
                            Next thing I know, these humans posted on the Book of Faces to find my original human! 
                        </p>
                        <p>
                            Sure enough, he got in touch and tried to prove to these humans that he's legit by telling them I {" "}
                            <span className="highlight"> 'can only say hello'</span>. 
                            *facetalon* sooo embarrassing.... Long story short, I went back home with my original human.
                        </p>
                        <p>
                            A few months after that, my original human broke the news 
                            that he was building his nest with his hen and new hatchling, 
                            so I decided to move in with those humans I had scouted out while on their balcony. 
                            And I've been with those humans, {" "}
                            <span className="highlight"> Seth</span> &{" "}
                            <span className="highlight"> Cleavan</span> ever since.
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
