import React from 'react'
import Header from '../../Layout/Header/Header'
import bgImage from '../../assets/images/about-bg.jpg';
import Footer from '../../Layout/Footer';
const About = () => {
  return (
    <div>
      <Header title='About Me' subtitle='This is what I do' bgimage={bgImage}></Header>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore reiciendis fugit obcaecati omnis quae magni alias accusantium ipsa dicta, ut, voluptatum ullam sint eaque quos magnam ea doloremque necessitatibus adipisci.
      Debitis magnam placeat fugiat possimus minus, neque, ea ullam, officia mollitia corrupti corporis non dolorem? Natus sed libero error, veritatis laudantium qui quas iusto, doloremque ea id quos minima enim?
      Doloremque voluptatem ipsum eaque perspiciatis numquam rerum illo, impedit nesciunt. Placeat in assumenda impedit adipisci neque quaerat at voluptatum dolorum qui sed, ducimus molestiae, perspiciatis inventore est, id magni. Libero?</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo doloribus, eaque eius culpa corporis temporibus distinctio dolorum! Aut provident quos sequi, vero minus amet dicta accusamus sint, animi qui sapiente.
        Doloremque error similique saepe porro non neque placeat, perspiciatis ad obcaecati unde velit exercitationem culpa repellat soluta numquam nisi sed adipisci, tempora reprehenderit pariatur, quas et quaerat asperiores! Sint, maxime.
        Quam optio ex harum sint! Nihil necessitatibus fugit ullam, voluptatum tenetur quod eaque exercitationem ipsum error vero temporibus? Odit laudantium qui autem, labore aut error magni vitae. Commodi, nesciunt sapiente?
      </p>
      <Footer></Footer>
    </div>
  )
}

export default About
