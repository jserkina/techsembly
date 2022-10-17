import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import mob_mockup from '../asset/Mob_mockup.png'
import visual from '../asset/Visual.jpg'
import image_cta from '../asset/Image_cta.png'
import tick from '../asset/Tick.svg'
import x from '../asset/X.svg'
import check from '../asset/Check.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.hero}>
        <h2>Join us with your team for 30 days</h2>
        <h4>Try Techsembly free, no obligations.</h4>
        <button className="btn white_btn">Start your free trial</button>
        <h5>No credit card required</h5>
      </section>
      <section className={styles.card_section}>
        <div className={styles.card}>
          <hr className={styles.blue_line}/>
          <h3>Assembly</h3>
          <div className={styles.assembly_frame_with_btn}>
            <h4>Go global. Launch new storefronts in seconds. Everything you need to bring your products to the world.</h4>
            <div>
              <p>Start at $500 USD</p>
              <p>/yearly or $600 monthly</p>
            </div>
            <button className="btn blue_btn">Get started</button>
          </div>
          <p>
            2 Storefronts<br/>5 Vendors<br/>
            <italic>Add more storefronts and vendors as you grow</italic>
          </p>
          <hr className={styles.light_line}/>
          <div className={styles.assembly_text_frame}>
            <p>Transaction fee</p>
            <p>0.25%</p>
          </div>
          <hr className={styles.light_line}/>
          <div className={styles.assembly_text_frame}>
            <span>Storefront/Vendors addons</span>
          </div>
          {addons.map((item, i) => (
            <div key={i} className={styles.assembly_text_frame}>
              <p>{item.text}</p>
              <p>{item.price}</p>
            </div>
          ))}
          <hr className={styles.light_line}/>
          {assembly_info.map((info, i) => (
            <div key={i} className={`${styles.assembly_text_frame} ${styles.assembly_text_with_tick} `}>
              <Image src={tick} width={15} height={15} alt=''/>
              <p>{info.text}</p>
            </div>
          ))}
        </div>
        <div className={styles.card}>
          <hr className={styles.dark_line}/>
          <h3>Enterprise</h3>
          <div className={styles.assembly_frame_with_btn}>
            <h4>For businesses with advanced requirements and customisation needs.</h4>
            <div>
              <p>Customised</p>
              <p>to your needs</p>
            </div>
            <button className="btn black_btn">Let’s chat</button>
          </div>
          <hr className={styles.light_line}/>
          <div className={styles.assembly_text_frame}>
            <p>Transaction fee</p>
            <p>* Negotiable</p>
          </div>
          <hr className={styles.light_line}/>
          {assembly_info.map((info, i) => (
            <div key={i} className={`${styles.assembly_text_frame} ${styles.assembly_text_with_tick} `}>
              <Image src={tick} width={15} height={15} alt=''/>
              <p>{info.text}</p>
            </div>
          ))}
        </div>
      </section>
      <section className={styles.section_with_mobile}>
        <div className={styles.frame_with_mobile}>
          <div>You know the little add-ons you’re constantly subscribing to and before you know it, you could have probably paid for a fully customised website instead? </div>
          <p>With us, we’ve got our hero platform paired with top-notch service - and that’s why you won’t be needing any plug-ins with us. No surprise add-ons, no hidden fees, just a web butler at your service to help you design the website of your dreams, to your liking.</p>
        </div>
        <div><Image src={mob_mockup} width={660} height={792} alt=''/></div>
      </section>
      <section className={styles.comparison}>
        <table>
          <tbody>
            <tr>
              <th>Features</th>
              <th className="table_logo">Contact</th>
              <th className="table_logo">Country</th>
              <th className="table_logo">Country</th>
              <th className="table_logo">Country</th>
            </tr>
            <tr>
              <td className="table_text">Central platform & global expansion</td>
              <td><Image src={tick} width={26} height={26} alt=''/></td>
              <td><Image src={x} width={26} height={26} alt=''/></td>
              <td><Image src={x} width={26} height={26} alt=''/></td>
              <td><Image src={x} width={26} height={26} alt=''/></td>
            </tr>
            <tr>
              <td className="table_text">30-Day Free Trial</td>
              <td><Image src={tick} width={26} height={26} alt=''/></td>
              <td><Image src={check} width={26} height={26} alt=''/></td>
              <td><Image src={x} width={26} height={26} alt=''/></td>
              <td><Image src={x} width={26} height={26} alt=''/></td>
            </tr>
            <tr>
              <td className="table_text">Marketplace as standard</td>
              <td><Image src={tick} width={26} height={26} alt=''/></td>
              <td><Image src={x} width={26} height={26} alt=''/></td>
              <td><Image src={x} width={26} height={26} alt=''/></td>
              <td><Image src={x} width={26} height={26} alt=''/></td>
            </tr>
          </tbody>
        </table>
      </section>
      {/*
      <section className={styles.features}>
        <h2>What’s included</h2>
        <div>Everything your global eCommerce business needs in one centralised platform.</div>
        <div className={styles.features_cards}>
          <div>Multi-Vendor Marketplace</div>
          <div>ICON</div>
          <p>Allow vendors to select which markets and storefronts they wish to sell to and customise their products and pricing to the needs of their local audience.</p>
        </div>
      </section>

      <section className={styles.logos}>
        <div>Companies we work with</div>
        <div>
          <div>LOGO</div>
        </div>
        <button className="btn white_btn">Read full case studies</button>
      </section>
      */}
      <section className={styles.text_block}>
        <Image src={visual} width={546} height={588} alt=''/>
        <div className={styles.text_block_frame}>
          <div>Why go Enterprise?</div>
          <p>Our Enterprise solutions is for businesses that have advanced customisation requirements. Our Headless eCommerce API allows clients to communicate with our backend service through mobile applications and 3rd party services/websites.</p>
          <button className="btn white_btn">Chat with our team</button>
        </div>
      </section>
      {/*
      <section className={styles.FAQs}>
        <div>
          <div>
            How much is your monthly plan?
          </div>
          Our pricing starts at $600 USD per month which includes your multi-store site with 2 storefronts and 5 vendors.
        </div>
      </section>
      */}
      <section className={styles.sustainability_CTA}>
        <div className={styles.container_CTA}>
          <div className={styles.text_frame_CTA}>
            <div>Are you a business that actively supports diversity and inclusion, and or sustainability?</div>
            <p>You may be eligible for a 50% reduction in fees. We want to make the world a better place, a more sustainable place.</p>
            <button className="btn black_btn">Apply for grant</button>
          </div>
          <div className={styles.img_frame_CTA}>
            <div className={styles.fade_over}></div>
            <Image src={image_cta} width={511} height={433} alt=''/>
          </div>
        </div>
      </section>
    </main>
  )
}

const addons = [
  {
    text: "1x additional storefront 10x",
    price: "$250"
  },
  {
    text: "10x additional vendors",
    price: "$100"
  },
  {
    text: "30x additional vendors",
    price: "$199"
  },
  {
    text: "100x additional vendors",
    price: "$500"
  },
  {
    text: "500x additional vendors",
    price: "$1,000"
  },
  {
    text: "1000x additional vendors",
    price: "$1,250"
  },
]

const assembly_info = [
  {
    text: "Multilingual website builder"
  },
  {
    text: "Mobile eCommerce"
  },
  {
    text: "Frictionless Progressive Web App"
  },
  {
    text: "Multi-vendor Marketplace Solution "
  },
  {
    text: "Multiple Base Currencies"
  },
  {
    text: "Complex Personalisation"
  },
  {
    text: "Store specific inventory & logistics"
  },
  {
    text: "Multiple Payment Gateways (Adyen, Stripe, Braintree, PayPal)"
  }
]
