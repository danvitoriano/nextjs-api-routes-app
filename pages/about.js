import Enquete from '../components/Enquete'
import VideoPlayer from '../components/VideoPlayer'
import Greeting from '../components/Greeting'
import styles from '../styles.module.css'


export default function AboutPage() {
    return (
        <div className={styles.inicio}>

            <Greeting />
            <Enquete />
            <VideoPlayer />
        </div>
    )
}