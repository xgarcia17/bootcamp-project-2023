// You can name the function within page.tsx anything you want.
//<Image src={'/Screenshot 2023-11-04 234745.png'} height={300} width={200} alt='Xavier at one of the Kaumana Caves of Hawaii in the summer of 2022.'></Image>

//import Image from 'next' was not working for me

import style from './home/home.module.css'
import './globals.css'
import Image from 'next/image'


export default function Home() {
  return (<div>  
			<h2 className="page-title">Xavier Garcia</h2>
            <div className={style.about}>
                <div className={style.aboutimage}>
					<Image src='/Screenshot 2023-11-04 234745.png' alt="Me at one of the Kaumana Caves of Hawai'i in the summer of 2022." width={300} height={300}></Image>
                </div>
                <div className={style.abouttext}>
                    <p>My name is <strong>Xavier Garcia, </strong> 
                    and I am a third-year Computer Science major at Cal Poly San Luis Obispo from Hayward, CA. 
                    I enjoy watching and playing sports and am an avid fisherman. I work as an <em>Instructional Student Assistant </em>
                    in my role as a workshop leader for Calculus I here on campus. I'm excited to learn and grow my programming
                    skills the rest of my time at Cal Poly.</p> 
                </div>
            </div>
		</div>
        ) 
}

	