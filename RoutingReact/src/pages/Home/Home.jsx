import React from 'react'
import Header from '../../Layout/Header/Header'
import Post from '../../components/Post/Post'
import bgImage from '../../assets/images/home-bg.jpg';
import Footer from '../../Layout/Footer';

const Home = () => {
    return (
        <>
            <div>
                <Header title='Clean Blog' subtitle='A Blog Theme by Start Bootstrap' bgimage={bgImage} ></Header>
                <div>
                    <Post title='Man must explore, and this is exploration at its greatest'
                    subtitle='Problems look mighty small from 150 miles up'
                    date='September 24,2023'
                    />
                    <Post title='I believe every human has a finite number of heartbeats. '
                    subtitle="I don't intend to waste any of mine"
                    date='September 18,2023'
                    />
                    <Post title='Science has not yet mastered prophecy'
                    subtitle='We predict too much for the next year and yet far too little for the next ten.'
                    date='August 24,2023'
                    />
                    <Post title='Failure is not an option'
                    subtitle='Many say exploration is part of our destiny, but it’s actually our duty to future generations.'
                    date='July 8,2023'
                    />
                </div>
                <Footer></Footer>
            </div>
        </>
    )
}

export default Home
