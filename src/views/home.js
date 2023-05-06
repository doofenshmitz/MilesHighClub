import React from 'react'

import DangerousHTML from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Miles High Club</title>
        <meta
          name="description"
          content="Don't just aim for the mile high club, aim higher. For smiles &amp; fun and the real treasure made along the way. Miles High Club NFTs"
        />
        <meta property="og:title" content="Miles High Club" />
        <meta
          property="og:description"
          content="Don't just aim for the mile high club, aim higher. For smiles &amp; fun and the real treasure made along the way. Miles High Club NFTs"
        />
      </Helmet>
      <header data-thq="thq-navbar" className="home-navbar">
        <img
          alt="image"
          src="/playground_assets/miles%20char-1500w.png"
          className="home-image"
        />
        <div
          data-thq="thq-navbar-nav"
          data-role="Nav"
          className="home-desktop-menu"
        >
          <nav
            data-thq="thq-navbar-nav-links"
            data-role="Nav"
            className="home-nav"
          >
            <button className="home-button button-clean button">About</button>
            <button className="home-button1 button-clean button">
              Features
            </button>
            <button className="home-button2 button-clean button">Team</button>
          </nav>
        </div>
        <div data-thq="thq-navbar-btn-group" className="home-btn-group">
          <div className="home-socials">
            <button className="social button">
              <img
                alt="image"
                src="/playground_assets/twitter.svg"
                className="home-image01"
              />
            </button>
            <button className="social button">
              <img
                alt="image"
                src="/playground_assets/discord.svg"
                className="home-image02"
              />
            </button>
          </div>
          <button className="button">Mint</button>
        </div>
        <div data-thq="thq-burger-menu" className="home-burger-menu">
          <button className="button home-button3">
            <svg viewBox="0 0 1024 1024" className="home-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </button>
        </div>
        <div data-thq="thq-mobile-menu" className="home-mobile-menu">
          <div
            data-thq="thq-mobile-menu-nav"
            data-role="Nav"
            className="home-nav1"
          >
            <div className="home-container1">
              <span className="home-logo">Character</span>
              <div data-thq="thq-close-menu" className="home-menu-close">
                <svg viewBox="0 0 1024 1024" className="home-icon02">
                  <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                </svg>
              </div>
            </div>
            <nav
              data-thq="thq-mobile-menu-nav-links"
              data-role="Nav"
              className="home-nav2"
            >
              <span className="home-text">About</span>
              <span className="home-text01">Features</span>
              <span className="home-text02">Pricing</span>
              <span className="home-text03">Team</span>
              <span className="home-text04">Blog</span>
            </nav>
            <div className="home-container2">
              <button className="home-login button">Login</button>
              <button className="button">Register</button>
            </div>
          </div>
          <div className="home-icon-group">
            <svg viewBox="0 0 950.8571428571428 1024" className="home-icon04">
              <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
            </svg>
            <svg viewBox="0 0 877.7142857142857 1024" className="home-icon06">
              <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
            </svg>
            <svg viewBox="0 0 602.2582857142856 1024" className="home-icon08">
              <path d="M548 6.857v150.857h-89.714c-70.286 0-83.429 33.714-83.429 82.286v108h167.429l-22.286 169.143h-145.143v433.714h-174.857v-433.714h-145.714v-169.143h145.714v-124.571c0-144.571 88.571-223.429 217.714-223.429 61.714 0 114.857 4.571 130.286 6.857z"></path>
            </svg>
          </div>
        </div>
      </header>
      <section className="home-hero">
        <div className="home-heading">
          <h1 className="home-header">Miles High Club</h1>
          <p className="home-caption">
            A clubhouse for artists, fans &amp; learners. A place of memes,
            movies &amp; medias of all kind, a platform for art lovers &amp;
            enjoyers alike to learn about latest techniques, tips and share fun
            stuff
          </p>
        </div>
        <div className="home-buttons">
          <button className="button">View on Opensea</button>
        </div>
      </section>
      <section className="home-description">
        <img
          alt="image"
          src="/playground_assets/miles%20banner-2900w.png"
          className="home-divider-image"
        />
      </section>
      <section className="home-cards">
        <div className="home-row">
          <div className="home-card">
            <div className="home-avatar">
              <img
                alt="image"
                src="/playground_assets/miles%20char%20%5B3%5D-1500w.png"
                className="home-avatar1"
              />
            </div>
            <div className="home-main">
              <div className="home-content">
                <h2 className="home-header01">4200+ unique characters</h2>
              </div>
            </div>
          </div>
          <div className="home-card01">
            <div className="home-avatar2">
              <img
                alt="image"
                src="/playground_assets/miles%20char%20%5B1%5D-1500w.png"
                className="home-avatar3"
              />
            </div>
            <div className="home-main1">
              <div className="home-content01">
                <h2 className="home-header02">100+ traits</h2>
              </div>
            </div>
          </div>
        </div>
        <div className="home-card02">
          <div className="home-avatar4">
            <img
              alt="image"
              src="/playground_assets/miles%20char%20%5B6%5D-1500w.png"
              className="home-avatar5"
            />
          </div>
          <div className="home-row1">
            <div className="home-main2">
              <div className="home-content02">
                <h2 className="home-header03">10,690,420 combinations</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-collection">
        <div className="home-content03">
          <span className="home-caption01">collection</span>
          <div className="home-heading01">
            <h2 className="home-header04">8 backgrounds signfying rarities</h2>
            <p className="home-header05">All Miles are </p>
          </div>
        </div>
        <div className="home-main3">
          <div className="home-card03">
            <div className="home-image03">
              <img
                alt="image"
                src="/playground_assets/miles%20char%20%5B3%5D-1500w.png"
                className="home-image04"
              />
            </div>
            <div className="home-content04">
              <span className="home-caption02">Character #1</span>
              <h3 className="home-title">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card04">
            <div className="home-image05">
              <img
                alt="image"
                src="/playground_assets/miles%20char%20%5B6%5D-1500w.png"
                className="home-image06"
              />
            </div>
            <div className="home-content05">
              <span className="home-caption03">Character #2</span>
              <h3 className="home-title1">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card05">
            <div className="home-image07">
              <img
                alt="image"
                src="/playground_assets/miles%20char%20%5B5%5D-1500w.png"
                className="home-image08"
              />
            </div>
            <div className="home-content06">
              <span className="home-caption04">Character #3</span>
              <h3 className="home-title2">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card06">
            <div className="home-image09">
              <img
                alt="image"
                src="/playground_assets/miles%20char%20%5B2%5D-1500w.png"
                className="home-image10"
              />
            </div>
            <div className="home-content07">
              <span className="home-caption05">
                <span>Character #4</span>
                <br></br>
              </span>
              <h3 className="home-title3">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card07">
            <div className="home-image11">
              <img
                alt="image"
                src="/playground_assets/miles%20char%20%5B8%5D-200w.png"
                className="home-image12"
              />
            </div>
            <div className="home-content08">
              <span className="home-caption06">Character #5</span>
              <h3 className="home-title4">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card08">
            <div className="home-image13">
              <img
                alt="image"
                src="/playground_assets/miles%20char%20%5B7%5D-1500w.png"
                className="home-image14"
              />
            </div>
            <div className="home-content09">
              <span className="home-caption07">Character #6</span>
              <h3 className="home-title5">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card09">
            <div className="home-image15">
              <img
                alt="image"
                src="/playground_assets/miles%20char%20%5B1%5D-1500w.png"
                className="home-image16"
              />
            </div>
            <div className="home-content10">
              <span className="home-caption08">Character #7</span>
              <h3 className="home-title6">0.05 ETH</h3>
            </div>
          </div>
          <div className="home-card10">
            <div className="home-image17">
              <img
                alt="image"
                src="/playground_assets/miles%20char-1500w.png"
                className="home-image18"
              />
            </div>
            <div className="home-content11">
              <span className="home-caption09">Character #8</span>
              <h3 className="home-title7">0.05 ETH</h3>
            </div>
          </div>
        </div>
      </section>
      <section className="home-project">
        <div className="home-understand">
          <div className="home-content12">
            <span className="home-caption10">MEET the artist</span>
            <div className="home-heading02">
              <h2 className="home-header06">MyGumsAreBleeding</h2>
              <p className="home-header07">
                <span>
                  His gums are not the only thing bleeding, a bleeding edge wit
                  so sharp it cuts trending a new jawline
                </span>
                <br></br>
                <span>
                  Don&apos;t just laugh at Miles jokes. Have a shiny bright
                  character that you own get featured in one of those r/all
                  smashing 69+ comics.
                </span>
              </p>
            </div>
          </div>
          <img
            alt="image"
            src="/playground_assets/p1rd9910mi691-1500w.webp"
            className="home-image19"
          />
        </div>
        <div className="home-mining">
          <img
            alt="image"
            src="/playground_assets/group%202422.svg"
            className="home-image20"
          />
          <div className="home-content13">
            <span className="home-caption11">Project</span>
            <div className="home-heading03">
              <h2 className="home-header08">How the minting works</h2>
              <p className="home-header09">
                <span>
                  Step 1. Download metamask or any ethereum wallet of your
                  choice.
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }}
                  />
                </span>
                <br></br>
                <br></br>
                <span>
                  Step 2.Put money in them wallets. You can use credit/debit
                  cards or purchase via coinbase and send it to your metamask
                  wallet address
                </span>
                <br></br>
                <br></br>
                <span>
                  Step 3. Connect your wallet to our site on the day of the mint
                </span>
                <br></br>
                <br></br>
                <span>
                  Step 4. Mint on the day. Keep some extra funds for the gas
                  fees
                </span>
                <br></br>
              </p>
            </div>
            <button className="home-view2 button-link button">
              <span>Learn More On YouTube</span>
              <img
                alt="image"
                src="/playground_assets/arrow.svg"
                className="home-image21"
              />
            </button>
          </div>
        </div>
      </section>
      <section className="home-roadmap">
        <div className="home-heading04">
          <h2 className="home-header10">Roadmap</h2>
          <p className="home-header11">Our Plans for the future</p>
        </div>
        <div className="home-list">
          <div className="home-step">
            <span className="home-caption12">01</span>
            <div className="home-heading05">
              <h2 className="home-header12">Project Minting</h2>
              <p className="home-header13">
                First we sellout &amp; get listed on Opensea &amp; all the top
                marketplaces
              </p>
            </div>
            <button className="home-button4 button">View on Opensea</button>
          </div>
          <div className="home-step1">
            <span className="home-caption13">02</span>
            <div className="home-heading06">
              <h2 className="home-header14">Launch Discord</h2>
              <p className="home-header15">
                <span>
                  We tokengate our fans with private access to some of our 
                </span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step2">
            <span className="home-caption14">03</span>
            <div className="home-heading07">
              <h2 className="home-header16">Disco Disco Good Good</h2>
              <p className="home-header17">
                <span>We launch a couple fun music videos</span>
                <br></br>
              </p>
            </div>
          </div>
          <div className="home-step3">
            <span className="home-caption15">04</span>
            <div className="home-heading08">
              <h2 className="home-header18">DJ LLM in the house</h2>
              <p className="home-header19">
                <span className="home-text26">
                  We even got something something we can collectively
                  participate in
                </span>
                <br className="home-text27"></br>
                <br className="home-text28"></br>
                <span className="home-text29">
                  Hint - It&apos;s a media form with audiovisual components
                </span>
                <br className="home-text30"></br>
                <br className="home-text31"></br>
                <span className="home-text32">Hint Hint - google ebsynth</span>
                <br className="home-text33"></br>
                <br className="home-text34"></br>
                <span className="home-text35">
                  Hint with no tint - We&apos;re gonna make a music video in the
                  art style of our beloved artist MyGumsAreBleeding using AI to
                  repaint
                </span>
                <br className="home-text36"></br>
                <span className="home-text37">
                  &amp; that&apos;s just for starters
                </span>
                <br className="home-text38"></br>
                <span className="home-text39">
                  We&apos;re here to build a web3 brand &amp; have some fun
                  along the way
                </span>
                <br className="home-text40"></br>
                <span className="home-text41">Tag along young fella</span>
              </p>
              <div className="home-benefits">
                <div className="home-item">
                  <img
                    alt="image"
                    src="/playground_assets/people.svg"
                    className="home-image22"
                  />
                  <p className="home-header20">4200 Miles</p>
                </div>
                <div className="home-item1">
                  <img
                    alt="image"
                    src="/playground_assets/paper.svg"
                    className="home-image23"
                  />
                  <p className="home-header21">
                    100+ traits &amp; 10Million+ combinations
                  </p>
                </div>
                <div className="home-item2">
                  <img
                    alt="image"
                    src="/playground_assets/checklist.svg"
                    className="home-image24"
                  />
                  <p className="home-header22">ERC 721A</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-join-us">
        <div className="home-content14">
          <div className="home-main4">
            <div className="home-heading09">
              <h2 className="home-header23">View your character now</h2>
              <p className="home-caption16">
                <span className="home-text42">
                  A character custom collection is joining the NFT space on
                  Opensea.
                </span>
                <br></br>
                <span>(Available as soon as Minting Begins)</span>
                <br></br>
              </p>
            </div>
            <button className="home-view3 button">View on Opensea</button>
          </div>
          <img
            alt="image"
            src="/playground_assets/miles%20banner-2900w.png"
            className="home-image25"
          />
        </div>
      </section>
      <section className="home-faq">
        <h2 className="home-header24">FAQs</h2>
        <div className="home-accordion">
          <div
            data-role="accordion-container"
            className="home-element accordion"
          >
            <div className="home-content15">
              <span className="home-header25">What&apos;s an NFT?</span>
              <span data-role="accordion-content" className="home-description1">
                It&apos;s a shiny digital collectible that pays artists rents
              </span>
            </div>
            <div className="home-icon-container">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon10"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon12"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element1 accordion"
          >
            <div className="home-content16">
              <span className="home-header26">Why should I care?</span>
              <span data-role="accordion-content" className="home-description2">
                <span className="home-text46">
                  Ever been part of a close knit group that helps you, teaches
                  you &amp; makes you laugh. Well that&apos;s what friends are
                  for- well these are friends with benefits like limited access
                  airdrops &amp; 
                </span>
                <span>
                  events we can collectively participate in as community members
                  from games to projects
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-icon-container1">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon14"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon16"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element2 accordion"
          >
            <div className="home-content17">
              <span className="home-header27">
                <span>Is it free?</span>
                <br></br>
              </span>
              <span data-role="accordion-content" className="home-description3">
                <span className="home-text51">
                  Almost. 1 free mint/wallet. But even that costs a couple
                  dollars gas.
                </span>
                <br></br>
                <span>0.0069 eth for more than 1mint</span>
                <br></br>
              </span>
            </div>
            <div className="home-icon-container2">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon18"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon20"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element3 accordion"
          >
            <div className="home-content18">
              <span className="home-header28">What Network?</span>
              <span data-role="accordion-content" className="home-description4">
                <span>
                  We&apos;re going for Ethereum but we&apos;ll ask the community
                  if they prefer Polygon or some layer2
                </span>
                <br></br>
              </span>
            </div>
            <div className="home-icon-container3">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon22"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon24"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
          <div
            data-role="accordion-container"
            className="home-element4 accordion"
          >
            <div className="home-content19">
              <span className="home-header29">When is the launch?</span>
              <span data-role="accordion-content" className="home-description5">
                We&apos;re giving away 690 Smilelist away on our twitter. Launch
                is follow when we&apos;re done with that. 
              </span>
            </div>
            <div className="home-icon-container4">
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-closed"
                className="home-icon26"
              >
                <path d="M213.333 554.667h256v256c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-256h256c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-256v-256c0-23.552-19.115-42.667-42.667-42.667s-42.667 19.115-42.667 42.667v256h-256c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
              <svg
                viewBox="0 0 1024 1024"
                data-role="accordion-icon-open"
                className="home-icon28"
              >
                <path d="M213.333 554.667h597.333c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-597.333c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
              </svg>
            </div>
          </div>
        </div>
      </section>
      <section className="home-get-yours">
        <div className="home-row2">
          <div className="home-column">
            <div className="home-card11">
              <img
                alt="image"
                src="/playground_assets/miles%20char%20%5B7%5D-1500w.png"
                className="home-image26"
              />
            </div>
          </div>
          <div className="home-column1">
            <div className="home-card12">
              <img
                alt="image"
                src="/playground_assets/miles%20char-1500w.png"
                className="home-image27"
              />
            </div>
          </div>
        </div>
        <div className="home-column2">
          <div className="home-card13">
            <div className="home-content20">
              <h2 className="home-header30">Get yours now</h2>
              <p className="home-description6">
                We&apos;ll Inform you when we launch on twitter &amp; instagram
              </p>
            </div>
            <button className="home-button5 button">Mint (Soon)</button>
          </div>
        </div>
      </section>
      <div>
        <DangerousHTML
          html={`<script>
 /*
  Accordion - Code Embed
  */
  const accordionContainers = document.querySelectorAll('[data-role="accordion-container"]'); // All accordion containers
  const accordionContents = document.querySelectorAll('[data-role="accordion-content"]'); // All accordion content
  const accordionIconsClosed = document.querySelectorAll('[data-role="accordion-icon-closed"]'); // All accordion closed icons
  const accordionIconsOpen = document.querySelectorAll('[data-role="accordion-icon-open"]'); // All accordion open icons

  accordionContents.forEach((accordionContent) => {
      accordionContent.style.display = "none"; //Hides all accordion contents
  });

  accordionIconsClosed.forEach((icon) => {
    icon.style.display = "flex"
  })

  accordionIconsOpen.forEach((icon) => {
    icon.style.display = "none"
  })

  accordionContainers.forEach((accordionContainer, index) => {
      accordionContainer.addEventListener("click", () => {
          if (accordionContents[index].style.display === "flex") {
              // If the accordion is already open, close it
              accordionContents[index].style.display = "none";
              accordionIconsClosed[index].style.display = "flex";
              accordionIconsOpen[index].style.display = "none"
          } else {
              // If the accordion is closed, open it
              accordionContents.forEach((accordionContent) => {
                  accordionContent.style.display = "none"; //Hides all accordion contents
              });

              accordionIconsClosed.forEach((accordionIcon) => {
                  accordionIcon.style.display = "flex"; // Resets all icon transforms to 0deg (default)
              });

              accordionIconsOpen.forEach((accordionIcon) => {
                accordionIcon.style.display = "none";
              })
              
              accordionContents[index].style.display = "flex"; // Shows accordion content
              accordionIconsClosed[index].style.display = "none"; // Rotates accordion icon 180deg
              accordionIconsOpen[index].style.display = "flex";
          }
      });
  });
</script>
`}
        ></DangerousHTML>
      </div>
      <div className="home-container3"></div>
    </div>
  )
}

export default Home
