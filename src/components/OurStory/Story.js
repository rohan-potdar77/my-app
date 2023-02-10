import React from 'react'
import './Ourstory.css'

function Story() {
    return (
        <>
            {/* --------------------story-------------------------- */}
            <div className='story'>
                <h1 className='story-heading '>Our Story</h1>
                <h3 className='story-sub-heading '>A more vibrant tattoo starts here.</h3>
                <p className='paragraph ' >Formulated with clean + natural ingredients, Mad Rabbit  is your easy tattoo care solution from soothing new ink to reviving & protecting current ones. Designed to work as  hard as you do, specifically crafted for your tattoo.</p>
            <div className='story-history'>
                <h3 className='sub-heading '>Made with you in mind.</h3>
                <p className='founded '>Founded in 2019 by two friends with a passion for ink, Oliver and Selom saw an opportunity to reinvent the tattoo aftercare and tattoo skincare space to help improve the healing process and preserve tattoos. After their own experience with the lack of efficacious products in the market, Mad Rabbit was born.</p>
                <p className='founded '>Mad Rabbit’s “no nonsense” approach values clean ingredients so consumers don’t have to worry about unnecessary toxins and ingredients found in traditional tattoo skincare products, which often fail to deliver. Our focus encompasses a full cycle tattoo skincare routine from preventative + post aftercare to daily tattoo skincare solutions.</p>
            </div>

                <h2 className='nonsense-heading '>No nonsense - our product is simple.</h2>
                <p>Our simple formulations, made with clean and effective ingredients, allow tattoos to remain vivid, withstand aging, and maintain their original vibrancy.
                    <br />
                    <br />
                    We celebrate, promote and empower individuality, artistry, adventure, and anything badass.
                    <br />
                    <br />
                    <b className='preserve-heading'>Let’s preserve these through our ink.</b>
                </p>
            </div>

            {/* ----------second Half---------------- */}
            <div className='second-half'>
                <div className='container'>
                    <div className='row'>
                        <div className='second-left'>
                            <img class="story-founder" src="//cdn.shopify.com/s/files/1/0076/4156/3234/files/poo-09619_2x_c3a284f4-661f-4275-a433-fd3994892f42.png?v=1614336158" alt="photo_of_founders"></img>


                        </div>


                        <div className='second-right'>
                            <h2 className=''>A message from our founders</h2>
                            <h4 className=''>We believe that you deserve better.</h4>
                            <p className=''>You deserve better than overpriced tattoo care products that fall short of their promises. You deserve a simple product with effective ingredients that give you the confidence to show off your tattoos. You deserve aftercare made especially for your tattoo - products that make your tattoo more vibrant, help it withstand aging, and let you live your life without worrying what it will look like in the future.</p>
                            <p>We’re inspired by the tattoo artists that wake up every day to create beautiful art on their client's bodies - the ones that create art to reflect personality and milestones. They put in the effort to create your art, so we are putting in the effort to make sure your tattoo maintains its natural vibrancy. Our mission is to provide the best performing line of tattoo aftercare products that meet all of your tattoo needs. We hope to deliver on our promise to you and keep you excited about all that our aftercare has to offer!</p>
                            <div>
                                <div className='sign-left'>
                                    <img className='sign' src="//cdn.shopify.com/s/files/1/0076/4156/3234/files/4-layers_2x_3d3bed3f-670f-49cc-bb48-425ffdbec21e.png?v=1614336251" alt="oliver sign" />
                                    <p>Oliver Zak | Co-Founder</p>

                                </div>
                                <div className='sign-rigth'>
                                    <img className='sign' src="//cdn.shopify.com/s/files/1/0076/4156/3234/files/Screenshot_1.png?v=1614336251" alt="oliver sign" />
                                    <p>Selom Agbitor | Co-Founder</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>





        </>
    )
}

export default Story
