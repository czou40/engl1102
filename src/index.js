import React from 'react';
import ReactDOM from 'react-dom';
import Plane from "./plane";
import AOS from 'aos';
import 'aos/dist/aos.css'
import "./style.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFlushed, faGrinBeamSweat, faGrinStars, faSmileWink } from '@fortawesome/free-solid-svg-icons'
import Foldable from "./foldable";
import Particles from 'react-particles-js';
var section1 = "Since the course is about visualization, undoubtedly the most difficult challenge is in visual communication. There is one assignment in our class where we need to draw comics, but I am bad at drawing, to be honest. When I was in primary school, our teacher required us to draw a “portrait” of our parents. No matter how I drew the lines again and again, my depiction of light and shadow was just horrible – I gave my mom dark circles around her eyes, I gave her acne, I gave her rash! Also, her nostrils were as big as that of a pig. The whole figure was so ugly that I couldn’t even recognize her as my mom! You know what, when our teacher asked us to hand in our portrait, I wrote down my “enemy’s” name to embarrass him in front of his mom!\n" +
    "I know, visual communication is not just in the form of drawings, and it encompasses other elements such as videos, posters, and photographs. This is where I found my niche.  Manipulating color blocks and shades and embracing UI Design Standards like Fluent Design, I made my first aesthetically pleasing digital poster. I also quickly mastered Premiere Pro and made some beautiful videos for my middle school. So here is my conclusion: if I am truly bad at drawing, then so be it. What I need to do is to focus on my strength in multimedia processing. By utilizing the power of computers, I may overcome this challenge and do well in my ENGL 1102 course.\n";
var section2 = "Throughout this course, we are required to draw sketch notes for each reading material we are assigned. The purpose of the practice is to develop essential visual communication skills. \n" +
    "Since the very beginning of the class, our instructor has always been reaffirming that drawing is not about artistic styles, but rather about conveying our message to our audience. There are no such things as bad drawings, and the preconceived idea that childish drawings are bad drawings hinders people from trying and truly making improvements in their visual communication.\n" +
    "So, I started dabbling into this novel practice with a mentality different from what I once had. I identified my purpose of drawing as to summarize my readings, as well as to add a “layer” of my own understanding of the topic to my work. \n" +
    "The first reading Syllabus is a guide to drawing, so I spent a lot of time just doing the same practice the book tells us to do, like drawing a house on fire, drawing an imaginative car, drawing a demon you imagine, drawing a castle within a few seconds. I also wrote down important ideas I learned from the book, such as the interconnection among the concept “imitation”, “memorization”, and “concentration”. I drew these concepts in nodes and connected them in a that resembles a “circular linked list”. These useful ideas became something ingrained in my mind. Especially, there was a practice from which I learn the most: drawing anything trivial that I recalled and weaving it into a story. During the process of sketching, I sometimes found it difficult to find what things I should draw. Despite the sundry events and phenomena that happen every day, A careless person like me may not be able to heed every detail in life. To fulfill the requirements of the assignment, I had to spend a few minutes drawing swirls to calm myself down, meanwhile meditating and scanning through all the things that happened on that day. I could, therefore, find something I previously would just brush off, like seeing a blocked toilet! The activity truly made me a more heeded and detail-oriented person.\n" +
    "To be honest, I did not like the first reading as much as I like the second reading Unflattening, which talks about the “philosophy” of seeing through multiple perspectives. Since the book is of a completely different genre, I tried to switch my genres of drawing, too. This time, I included a lot of imitation of the illustrations in the book, and my style became more realistic. For example, my drawing of the puppet person for the 2/5 reading almost perfectly resembles the original drawing: different parts of his body harmonized in color and proportion. Meanwhile, my drawings also became more abstract. For the first time, I became able to summarize the readings by drawing symbolizing imageries. For instance, I juxtaposed a pair of eyes with a telescope so epitomize the way we human beings see farther and farther quest after truth. I also draw a map of Manhattan with different subway routes connecting one point to the other to illustrate the concept that “there is not a single way”. Both my drawing skills and my ability to convey my understanding of the reading materials improved significantly.\n";
var section3 = "The greatest enhancement in my visual communication came as more and more readings are assigned.  I constantly tried different genres of drawing and made a lot of original and creative work, which were excellent at communicating my own perspectives to the public.\n" +
    "In the sketch note for Lost at Sea, I made an audacious decision to make my drawing as exaggerated as possible. I drew a huge wave that is hundreds of inches tall and a boat full of refugees that sits at the crest. Many people are falling from the boat as if they are falling from the cliff into the abyss. More crazily, I drew a hand reaching from the sky that catches the refugees. There were no such imageries in the original comic, but I found it meaningful to do some derivative work. By including imaginative and unrealistic elements, I found a new way to engage the audience and make my sketch note outstanding.\n" +
    "In the sketch note for It’s Time to Rethink How Recycling is Done, Who Owns an Asteroid, and Locked Out. I carefully picked and reproduced imageries from each comic and introduced a question for each topic. “Does Airbnb truly make housing more affordable?” “Asteroid. Is it a place for us to EXPLOIT?” The means of intentionally raising questions quickly grabbed the attention of my readers.\n" +
    "Most importantly, my works began to reflect many There was one sentence from Unflattening that says, “We emerge from the INTERACTION of forces in motion and ASSOCIATION of vectors.” Seeing through association has become my personal creed, which helped me see the world dynamically, thoroughly and more comprehensively. I made use of this though in almost all my following sketch notes, as I always wrote down the common theme in my notes. Phrases like “Humanity in disaster and misfortune” and “Motherhood, family, and love” quickly help the readers of my sketch note easily comprehend my central idea. \n";
var section4 = "Before taking this class, I had little experience in visual communication except in computer multimedia design. I was bad at drawing, too. However, I managed to draw pictures that increasingly reflect the central ideas of the readings and my central ideas. There are two big takeaways from this class: First things first, always try different things. I would not have improved my communication skills so much if I were not open to changes in genre and techniques. Also, if your drawing reflects you as a real person, then there is no such thing as a bad drawing. Drawing is by no means created just to be realistic, rather, it is served as a way for us to think, to grasp, to connect our sense with our mind, and to bridge the gap between us and the real world.";
var images = [];
for (let i = 0; i < 5; i++) {
    images.push({
        file: i + ".jpg",
        title: i + ".jpg",
        description: "This is " + i + ".jpg"
    });
}
images.push({
    file: "logo192.png",
    title: "React Icon",
    description: "ndkjsand jkdnkjanfkj fdjkfdskf dskj fdsjkf jdksfnkdsf jksdfn dskjf dsjkfsdhjf dskf jdskfdsjkf dsjkfdsjkf ds jkfdsjkfdsnkjfdnsjkfdsnjfkdds dnjkasdn kjsadkjas dnjksnjkdsnakjdn ndiewfojfe fjweoif jiwoefj oiew fjoiewjf iowefj oiwe fjoiewfj oiwef jioewfj ew"
});
var intro = "Hello everyone, my name is Chunhao Zou from Suzhou, China. I am a freshman majoring in computer science, and my topic for the English class is \"Visualizing Science Communication\" by Doctor Misemer.";
intro += "";
AOS.init();

ReactDOM.render(
    <div>
        <div id="particle-wrapper">
            <Particles
                params={{
                    particles: {
                        number: {
                            value: 100,
                            density: {
                                enable: true,
                                value_area: 1000,
                            }
                        },
                    },
                }}
                style={{position:"fixed", height:"100%"}}
            />
        </div>
        <div id="header-wrapper">
            <ul className="header">
                <li><a href="#about">About</a></li>
                <li><a href="#growth">Drawing & Learning</a></li>
                <li><a href="#portfolio">My Artifacts</a></li>
                <li><a href="#future">Future Work</a></li>
            </ul>
            <ul className="header-small-screen">
                <li><a href="#">Menu</a>
                    <div className="c">
                        <a href="#about">About</a>
                        <a href="#growth">Drawing & Learning</a>
                        <a href="#portfolio">My Artifacts</a>
                        <a href="#future">Future Work</a>
                    </div>
                </li>
            </ul>
        </div>
        <div className="white-section" id="about" data-aos="flip-down">
            <div id="video-wrapper">
                <video autoPlay loop muted playsInline id="me">
                    <source src="me.mp4" type="video/mp4"/>
                </video>
            </div>
            <div id="intro" data-aos="fade-up">
                <h1>About Me</h1>
                <p>Hello everyone, my name is Chunhao Zou from Suzhou, China. I am a freshman at Georgia Tech, and my topic for the English class is "Visualizing Science Communication" by Doctor Misemer.
                    </p><p> As a CS major, I have been interested in software engineering since middle school and the majority of my extracurriculars are in programming contests, robotics, and front-end development. Nevertheless, I am also an avid natural science lover and am willing to leverage the power of computer science in other fields as well. I will probably pick Intelligence and ModSim as my thread in the future.
                    </p><p> Besides academics, I am a kayaker and hiker. I also have a weird obsession with Google Earth and usually spend a whole afternoon browsing the map.
                </p>
            </div>
        </div>
        <div className="black-section" id="growth">
            <h1>Drawing & Learning</h1>
            <h2>My Growth as an Excellent Drawer & an Effective Communicator</h2>
            <Foldable icon={faGrinBeamSweat} title="Dabbling Into the World of Visual Communication" content={section2}/>
            <Foldable icon={faGrinStars} title="I Found My Own Style!" content={section3}/>
            <Foldable icon={faSmileWink} title="My Takeaways" content={section4}/>
        </div>
        <div className="white-section" id="cs">
            <h1>My Artifacts</h1>
            <p>Move mouse to both sides to navigate between artifacts. Move mouse to the bottom for more details. </p>
            <Plane images={images}/>
        </div>
        <div className="black-section" id="future"></div>
        <div id="copyright"></div>
    </div>, document.getElementById('root'));
