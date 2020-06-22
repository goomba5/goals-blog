import React from 'react';

import Layout from "../components/layout";
import about from "../components/about.module.css"

const About = ({ data }) => {

    return (
        <Layout>
            <div className={about.about_container}>
                <div className={about.about__parallax_coding}>
                    <h2 className={about.about__parallax_title}>Learning to Code</h2>
                </div>
                <div className={about.about__section_container}>
                    <h2 className={about.about__sectionTitle}>Learning to Code</h2>
                    <div className={about.about__section}>
                        <div className={about.about__section_description}>
                            <p>
                                If you stumbled upon my site or came here purposefully, I just want to say thank you and welcome! It's not much but it's a start.
                            </p>
                            <p>
                                This journey to find a place within tech is one of the biggest risks that I've taken, but there have been people willing to help from the very first step. Yes, there have been plenty of bumps in the road while navigating a path clouded by an overwhelming sense of being completely lost - no doubt about that. However, the number of memorable moments that I've documented on this journey are many, and the amount of help I've received along the way cannot be overstated.
                            </p>
                            <p>
                                This path hasn't been a straight shot, and I am more than thankful for that.
                            </p>
                        </div>
                        <div className={`${about.about__section_image} ${about.about__section_coding_image}`}>
                        </div>
                    </div>
                </div>
                <div className={about.about__parallax_soccer}>
                    <h2 className={`${about.about__parallax_title} ${about.about__parallax_soccer_title}`}>Taking Big Steps</h2>
                </div>
                <div className={about.about__section_container}>
                    <h2 className={about.about__sectionTitle}>Taking Big Steps</h2>
                    <div className={about.about__section}>
                        <div className={`${about.about__section_image} ${about.about__section_soccer_image}`}>
                        </div>
                        <div className={about.about__section_description}>
                            <p>
                                My mom said it best: I have always liked basketball, but I <em><strong>love</strong></em> soccer.
                            </p>
                            <p>
                                If you are going to set out on a journey to do something you have never done, then it's best to surround yourself with a supportive team before you go. The lessons I learned through playing soccer are hard coded into every part of me. Soccer has been and will always be my north star. The people I have had the great fortune to meet, the places I've been fortunate enough to travel to, and the life lessons I've learned are central to who I am as a person.
                            </p>
                            <p>
                                I play that the way that I live, and I live the way that I play: unselfish, compassionate, and demanding the best of myself to do my best for others.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={about.about__parallax_destiny}>
                    <h2 className={about.about__parallax_title}>Connecting With People</h2>
                </div>
                <div className={about.about__section_container}>
                    <h2 className={about.about__sectionTitle}>Connecting With People</h2>
                    <div className={about.about__section}>
                        <div className={about.about__section_description}>
                            <p>
                                Outside of coding and playing soccer, my favorite hobby is playing video games with friends. One game in particular called Destiny has been a huge influence on me for the past five years.
                            </p>
                            <p>
                                Destiny is a (takes a deep breath):
                            </p>
                            <p>massive multiplayer online role playing first person action adventure game (WHEW).</p>
                            <p>
                                The core of the game emphasizes team work, building connections and having fun. And that is what makes Destiny so powerful: going on a journey with friends to reach places you never would've thought were possible. That is something I can relate to.
                            </p>
                        </div>
                        <div className={`${about.about__section_image} ${about.about__section_people_image}`}>
                        </div>
                    </div>
                </div>
            </div>
        </Layout >
    );
}

export default About;