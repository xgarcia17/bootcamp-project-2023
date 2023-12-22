
import style from './resume.module.css'
import Link from 'next/link'
import '../globals.css'


export default function Resume() {
    return (<div className='pageFormatting'>
            <main>
            <h1 className="page-title">Resume</h1>
            <Link download="resume.pdf" target="_blank" href={"./resume.pdf"}>Download Resume</Link>        
            <br></br>
            <div className={style.resume}>
                <h2 className={style.logo}>Xavier Garcia</h2>
                <section className={style.section}>
                    <h1 className={style.sectiontitle}>Education</h1>
                    <div className={style.entry}>
                        <h3 className={style.entrytitle}>Bachelor of Science in Computer Science</h3>
                        <p className={style.entryinfo}>California Polytechnic State University, San Luis Obispo, California  |  Expected Graduation: June 2025  |  GPA: 3.51</p>
                        <h3 className={style.entrytitle}>Awards</h3>
                        <ul className="awards-list">
                            <li>Cal Poly Dean&apos;s List: Fall 2021, Winter 2022, Fall 2022, Winter 2023, Spring 2023</li>
                            <li>President&apos;s Honors List 2022-23</li>
                            <li>Cal Poly Merit Scholarship 2021, 2022, 2023</li>
                        </ul>
                    </div>
                </section>
                <section className={style.section}>
                    <h1 className={style.sectiontitle}>Skills</h1>
                    <ul className="skill-list">
                        <li><strong>Programming Languages:</strong> Python, C, Java, HTML, CSS, RISC-V ASM, MIPS</li>
                        <li><strong>Programs and Applications:</strong> Visual Studio Code, IntelliJ Idea, PyCharm, Sublime Text, GitHub, Command Prompt, Microsoft Suite, Google Suite</li>
                    </ul>
                </section>
                <section className={style.section}>
                    <h1 className ={style.sectiontitle}>Coursework</h1>
                    <ul className="course-list">
                        <li>Introduction to Computing: Game Design</li>
                        <li>Fundamentals of Computer Science</li>
                        <li>Data Structures</li>
                        <li>Project-Based Object-Oriented Programming and Design</li>
                        <li>Introduction to Computer Organization</li>
                        <li>Systems Programming</li>
                        <li>Discrete Structures</li>
                        <li>Linear Analysis</li>
                        <li>Writing Arguments About STEM</li>
                    </ul>
                </section>
                <section className={style.section}>
                    <h1 className ={style.sectiontitle}>Projects</h1>
                    <div className={style.entry}>
                        <h3 className={style.entrytitle}>Personal Website</h3>
                        <p className={style.entryinfo}>Designed and built a personal website using HTML and CSS</p>
                        <p className={style.entrydescription}>-Utilized HTML and CSS to build multiple pages for a personal website to enhance Web development and GitHub skills</p>
                        <h3 className={style.entrytitle}>BitMap Data Encoding</h3>
                        <p className={style.entryinfo}>Developed program to convert Bitmap file pixels to grayscale and encode them</p>
                        <p className={style.entrydescription}>-Utilized C to parallelize and convert Bitmap pixel data into grayscale data to encode them into a text file using Huffman Nodes</p>
                        <h3 className={style.entrytitle}>Pacman-Style Video Game</h3>
                        <p className={style.entryinfo}>Built and designed an object-oriented videogame in Java</p>
                        <p className={style.entrydescription}>-Utilized Java to incorporate factory design method, object-oriented programming, A-Star pathing strategy, and user input allowing the player to escape ghosts that chase them</p>
                    </div>
                </section>
                <section className={style.section}>
                    <h1 className ={style.sectiontitle}>Experience</h1>
                    <div className={style.entry}>
                        <p className={style.entrytitle}><strong>Involvements:</strong> Cal Poly Supplemental Workshops, Cross Cultural Experience Orientation Program, Multiracial Students&apos; Association, Pilipino Cultural Exchange, Society of Hispanic Professional Engineers, Chinese Student Association</p>
                        <h3 className={style.entrytitle}>Developer</h3>
                        <p className={style.entryinfo}><em>Hack4Impact</em>, Cal Poly  |  October 2023 - Present</p>
                        <p className={style.entrydescription}>-Work with a team of developers to create software according to client specifications and requirements
                            <br></br>-Attend weekly standup meetings with my team and present develop features to the development team
                            <br></br>-Meet with Tech Lead to improve code quality and performance
                        </p>
                        <h3 className={style.entrytitle}>Workshop Facilitator</h3>
                        <p className={style.entryinfo}><em>Academic Skills Center</em>, Cal Poly  |  September 2023 - Present</p>
                        <p className={style.entrydescription}>-Work with professors and other student leaders to develop activities synchronous with course curriculum to enhance students&apos; abilities in Calculus
                            <br></br>-Facilitate lesson plans and group discussions to foster a collaborative learning environment for students of various backgrounds and skills
                        </p>
                        <h3 className={style.entrytitle}>Social Affairs Officer, Current Events Officer</h3>
                        <p className={style.entryinfo}><em>Multiracial Students&apos; Association</em>, Cal Poly  |  December 2021 - June 2023</p>
                        <p className={style.entrydescription}>-Invented and designed the <em>Multiracial Spotlight</em> series both on Instagram and during general club meetings consisting of in-depth segments on well-known people of interest
                            <br></br>-Run the club Instagram account
                            <br></br>-Present informative news segments at general meetings pertaining to the San Luis Obispo region
                        </p>
                        <h3 className={style.entrytitle}>Cross Cultural Experience Orientation Leader</h3>
                        <p className={style.entryinfo}><em>Cal Poly New Student and Transition Programs</em>, Cal Poly  |  September 2022</p>
                        <p className={style.entrydescription}>-Attended over fifty hours of leadership, diversity, and inclusion trainings
                            <br></br>-Worked with other leaders to plan and facilitate small group discussions and activities
                        </p>
                  </div>
                </section>
            </div>
        </main>
        </div>) 
  }