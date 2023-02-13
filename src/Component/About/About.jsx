import react from "react"
import './About.css'
function About(){
    return(
        <div className="about__div">
            <div className="about__grid">
                 <iframe   
                    className="iframe"
                    src="https://www.youtube.com/embed/omAOqqkbRfo">
                    allowfullscreen
                 </iframe> 
                 <div className="about__content">
                    <h7>About</h7>
                    <div className="content">Blake eLearning is an Australian-owned, global provider of quality educational products for children to use at school and at home.For over 30 years, our mission has been to create better ways for children to learn.Our broad range of literacy and numeracy books are successful in all major English-speaking markets and have been used by millions of children around the world. Our company is also a recognised leader in creating innovative and engaging online programmes that children enjoy using, including our flagship product, Reading Eggs.</div>
                 </div>
            </div>
        </div>
    )
}
export default About;
