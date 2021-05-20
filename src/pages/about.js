import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Header from "../components/Header"

const AboutPage = () => (
  <Layout>
    <Seo title="About" />
    <Header>About Us</Header>
    <section className="container-md fs-6 my-3 ">
      <h2>Our Story</h2>
      <article>
        The Butcher’s Cut prime steakhouse & seafood opened its doors shortly
        before Covid-19. Inspired California cuisine with this contemporary
        grill and steakhouse is nested in the heart of the Gaslamp. The ambiance
        is a rustic and vintage vibe that takes you back to a simply classic
        era. The newly installed glass meat locker on the restaurant floor is a
        spectacle one must experience in person. The Butcher’s Cut promises to
        be the freshest, most desired dining destination in the Gaslamp
        District. We are passionate about serving perfectly aged steaks,
        locally-grown vegetables, and an award-winning wine list. These elements
        have combined to provide our guests with a unique culinary experience.
      </article>
      <article>
        The menu showcases a veritable who’s who of meats in all forms, sourced
        from the very best beef and lamb producers. Quality beef is carefully
        selected from the highest pedigree and defined by breed and feed. You
        will find dishes like the Signature Prime Rib, selected from the finest
        150-day grain fed Black Angus that has been dry aged then patiently
        roasted in their special oven. Or The Butcher Cut’s cut eye fillet on
        the bone, farmed on the West Coast, which gives this animal an unmatched
        tenderness and flavour that can only come from cattle fed on New
        Zealand’s magnificent grasslands.
      </article>
      <article>
        Immerse yourself in our vast, sommelier-selected wine collection. Each
        visit to The Butcher’s Cut takes you on a gastronomic adventure that
        defines us not as a meal but as an experience. In short, whether you’re
        looking for a casual dinner with friends or a sophisticated dinner with
        clients, there’s something to suit every palate. So come on down to the
        Gaslamp and enjoy life at The Butcher’s Cut. You’ll always be welcome
        here!
      </article>
    </section>
  </Layout>
)

export default AboutPage
