import React from 'react'
import { Row, Col } from 'antd'

const PostReturn = (props) => {
  const { title, category, primaryColor, secondaryColor } = props
  return (
    <div
      style={{
        background:
          `repeating-linear-gradient( 45deg, ${primaryColor}, ${primaryColor} 10px, ${secondaryColor} 10px, ${secondaryColor} 20px)`,
      }}
    >
      <Row>
        <Col className="post-col-left" xs={24} sm={24} md={7} lg={6} xl={5}>
          <div className="vertical-text">{category}</div>
        </Col>
        <Col className="post-col-right" style={{"background-color": `${primaryColor}`}} xs={24} sm={24} md={17} lg={18} xl={19}>
          <div className="post-title" >
            <h1 style={{"color": `${primaryColor}`}}>{title}</h1>
          </div>
          <div className="post-content">
            <p>
              Lorem ipsum dolor amet photo booth raw denim brunch hexagon.
              Pickled flannel bushwick kombucha truffaut. Normcore beard cronut
              lo-fi, cardigan pug roof party subway tile meditation small batch
              truffaut distillery paleo intelligentsia pop-up. Brooklyn
              helvetica readymade literally distillery kickstarter, keffiyeh
              bushwick cornhole celiac messenger bag cold-pressed sustainable
              art party.{' '}
            </p>
            <p>
              Succulents put a bird on it forage, scenester banjo heirloom
              humblebrag semiotics health goth gastropub keffiyeh cred. Hoodie
              williamsburg man braid meh, tote bag cronut YOLO. Pickled tumeric
              locavore mixtape ugh raclette. Helvetica pabst wayfarers copper
              mug poutine la croix. Asymmetrical kickstarter ethical tumeric,
              chillwave meggings tilde crucifix XOXO keytar 90's quinoa
              letterpress flexitarian put a bird on it. Keffiyeh +1 health goth
              live-edge quinoa poutine. Pug tbh bicycle rights post-ironic tacos
              pour-over cray vape four loko green juice edison bulb. Skateboard
              brooklyn single-origin coffee kinfolk. Lyft lomo irony, tumblr
              palo santo pug echo park umami. 3 wolf moon XOXO meggings, cliche
              tacos gochujang jean shorts lo-fi vinyl photo booth listicle umami
              flexitarian normcore. Venmo messenger bag enamel pin typewriter
              taxidermy. Sriracha austin forage subway tile jianbing live-edge
              lumbersexual fam craft beer. Meh subway tile heirloom paleo offal,
              pok pok keytar. Wayfarers photo booth raclette mixtape copper mug
              prism occupy gentrify paleo small batch health goth echo park.
              Adaptogen tacos sartorial pork belly, pinterest fanny pack banjo
              pickled. Post-ironic hell of helvetica lo-fi la croix asymmetrical
              knausgaard stumptown. 8-bit hammock chia, celiac selvage yuccie
              keffiyeh raclette asymmetrical. Lomo letterpress cardigan artisan
              viral. Oh. You need a little dummy text for your mockup? How
              quaint. I bet you’re still using Bootstrap too…
            </p>
            <p>
              Lorem ipsum dolor amet photo booth raw denim brunch hexagon.
              Pickled flannel bushwick kombucha truffaut. Normcore beard cronut
              lo-fi, cardigan pug roof party subway tile meditation small batch
              truffaut distillery paleo intelligentsia pop-up. Brooklyn
              helvetica readymade literally distillery kickstarter, keffiyeh
              bushwick cornhole celiac messenger bag cold-pressed sustainable
              art party.{' '}
            </p>
            <p>
              Succulents put a bird on it forage, scenester banjo heirloom
              humblebrag semiotics health goth gastropub keffiyeh cred. Hoodie
              williamsburg man braid meh, tote bag cronut YOLO. Pickled tumeric
              locavore mixtape ugh raclette. Helvetica pabst wayfarers copper
              mug poutine la croix. Asymmetrical kickstarter ethical tumeric,
              chillwave meggings tilde crucifix XOXO keytar 90's quinoa
              letterpress flexitarian put a bird on it. Keffiyeh +1 health goth
              live-edge quinoa poutine. Pug tbh bicycle rights post-ironic tacos
              pour-over cray vape four loko green juice edison bulb. Skateboard
              brooklyn single-origin coffee kinfolk. Lyft lomo irony, tumblr
              palo santo pug echo park umami. 3 wolf moon XOXO meggings, cliche
              tacos gochujang jean shorts lo-fi vinyl photo booth listicle umami
              flexitarian normcore. Venmo messenger bag enamel pin typewriter
              taxidermy. Sriracha austin forage subway tile jianbing live-edge
              lumbersexual fam craft beer. Meh subway tile heirloom paleo offal,
              pok pok keytar. Wayfarers photo booth raclette mixtape copper mug
              prism occupy gentrify paleo small batch health goth echo park.
              Adaptogen tacos sartorial pork belly, pinterest fanny pack banjo
              pickled. Post-ironic hell of helvetica lo-fi la croix asymmetrical
              knausgaard stumptown. 8-bit hammock chia, celiac selvage yuccie
              keffiyeh raclette asymmetrical. Lomo letterpress cardigan artisan
              viral. Oh. You need a little dummy text for your mockup? How
              quaint. I bet you’re still using Bootstrap too…
            </p>
            <p>
              Lorem ipsum dolor amet photo booth raw denim brunch hexagon.
              Pickled flannel bushwick kombucha truffaut. Normcore beard cronut
              lo-fi, cardigan pug roof party subway tile meditation small batch
              truffaut distillery paleo intelligentsia pop-up. Brooklyn
              helvetica readymade literally distillery kickstarter, keffiyeh
              bushwick cornhole celiac messenger bag cold-pressed sustainable
              art party.{' '}
            </p>
            <p>
              Succulents put a bird on it forage, scenester banjo heirloom
              humblebrag semiotics health goth gastropub keffiyeh cred. Hoodie
              williamsburg man braid meh, tote bag cronut YOLO. Pickled tumeric
              locavore mixtape ugh raclette. Helvetica pabst wayfarers copper
              mug poutine la croix. Asymmetrical kickstarter ethical tumeric,
              chillwave meggings tilde crucifix XOXO keytar 90's quinoa
              letterpress flexitarian put a bird on it. Keffiyeh +1 health goth
              live-edge quinoa poutine. Pug tbh bicycle rights post-ironic tacos
              pour-over cray vape four loko green juice edison bulb. Skateboard
              brooklyn single-origin coffee kinfolk. Lyft lomo irony, tumblr
              palo santo pug echo park umami. 3 wolf moon XOXO meggings, cliche
              tacos gochujang jean shorts lo-fi vinyl photo booth listicle umami
              flexitarian normcore. Venmo messenger bag enamel pin typewriter
              taxidermy. Sriracha austin forage subway tile jianbing live-edge
              lumbersexual fam craft beer. Meh subway tile heirloom paleo offal,
              pok pok keytar. Wayfarers photo booth raclette mixtape copper mug
              prism occupy gentrify paleo small batch health goth echo park.
              Adaptogen tacos sartorial pork belly, pinterest fanny pack banjo
              pickled. Post-ironic hell of helvetica lo-fi la croix asymmetrical
              knausgaard stumptown. 8-bit hammock chia, celiac selvage yuccie
              keffiyeh raclette asymmetrical. Lomo letterpress cardigan artisan
              viral. Oh. You need a little dummy text for your mockup? How
              quaint. I bet you’re still using Bootstrap too…
            </p>

            <p>
              Lorem ipsum dolor amet photo booth raw denim brunch hexagon.
              Pickled flannel bushwick kombucha truffaut. Normcore beard cronut
              lo-fi, cardigan pug roof party subway tile meditation small batch
              truffaut distillery paleo intelligentsia pop-up. Brooklyn
              helvetica readymade literally distillery kickstarter, keffiyeh
              bushwick cornhole celiac messenger bag cold-pressed sustainable
              art party.{' '}
            </p>
            <p>
              Succulents put a bird on it forage, scenester banjo heirloom
              humblebrag semiotics health goth gastropub keffiyeh cred. Hoodie
              williamsburg man braid meh, tote bag cronut YOLO. Pickled tumeric
              locavore mixtape ugh raclette. Helvetica pabst wayfarers copper
              mug poutine la croix. Asymmetrical kickstarter ethical tumeric,
              chillwave meggings tilde crucifix XOXO keytar 90's quinoa
              letterpress flexitarian put a bird on it. Keffiyeh +1 health goth
              live-edge quinoa poutine. Pug tbh bicycle rights post-ironic tacos
              pour-over cray vape four loko green juice edison bulb. Skateboard
              brooklyn single-origin coffee kinfolk. Lyft lomo irony, tumblr
              palo santo pug echo park umami. 3 wolf moon XOXO meggings, cliche
              tacos gochujang jean shorts lo-fi vinyl photo booth listicle umami
              flexitarian normcore. Venmo messenger bag enamel pin typewriter
              taxidermy. Sriracha austin forage subway tile jianbing live-edge
              lumbersexual fam craft beer. Meh subway tile heirloom paleo offal,
              pok pok keytar. Wayfarers photo booth raclette mixtape copper mug
              prism occupy gentrify paleo small batch health goth echo park.
              Adaptogen tacos sartorial pork belly, pinterest fanny pack banjo
              pickled. Post-ironic hell of helvetica lo-fi la croix asymmetrical
              knausgaard stumptown. 8-bit hammock chia, celiac selvage yuccie
              keffiyeh raclette asymmetrical. Lomo letterpress cardigan artisan
              viral. Oh. You need a little dummy text for your mockup? How
              quaint. I bet you’re still using Bootstrap too…
            </p>

            <p>
              Lorem ipsum dolor amet photo booth raw denim brunch hexagon.
              Pickled flannel bushwick kombucha truffaut. Normcore beard cronut
              lo-fi, cardigan pug roof party subway tile meditation small batch
              truffaut distillery paleo intelligentsia pop-up. Brooklyn
              helvetica readymade literally distillery kickstarter, keffiyeh
              bushwick cornhole celiac messenger bag cold-pressed sustainable
              art party.{' '}
            </p>
            <p>
              Succulents put a bird on it forage, scenester banjo heirloom
              humblebrag semiotics health goth gastropub keffiyeh cred. Hoodie
              williamsburg man braid meh, tote bag cronut YOLO. Pickled tumeric
              locavore mixtape ugh raclette. Helvetica pabst wayfarers copper
              mug poutine la croix. Asymmetrical kickstarter ethical tumeric,
              chillwave meggings tilde crucifix XOXO keytar 90's quinoa
              letterpress flexitarian put a bird on it. Keffiyeh +1 health goth
              live-edge quinoa poutine. Pug tbh bicycle rights post-ironic tacos
              pour-over cray vape four loko green juice edison bulb. Skateboard
              brooklyn single-origin coffee kinfolk. Lyft lomo irony, tumblr
              palo santo pug echo park umami. 3 wolf moon XOXO meggings, cliche
              tacos gochujang jean shorts lo-fi vinyl photo booth listicle umami
              flexitarian normcore. Venmo messenger bag enamel pin typewriter
              taxidermy. Sriracha austin forage subway tile jianbing live-edge
              lumbersexual fam craft beer. Meh subway tile heirloom paleo offal,
              pok pok keytar. Wayfarers photo booth raclette mixtape copper mug
              prism occupy gentrify paleo small batch health goth echo park.
              Adaptogen tacos sartorial pork belly, pinterest fanny pack banjo
              pickled. Post-ironic hell of helvetica lo-fi la croix asymmetrical
              knausgaard stumptown. 8-bit hammock chia, celiac selvage yuccie
              keffiyeh raclette asymmetrical. Lomo letterpress cardigan artisan
              viral. Oh. You need a little dummy text for your mockup? How
              quaint. I bet you’re still using Bootstrap too…
            </p>
            <p>
              Lorem ipsum dolor amet photo booth raw denim brunch hexagon.
              Pickled flannel bushwick kombucha truffaut. Normcore beard cronut
              lo-fi, cardigan pug roof party subway tile meditation small batch
              truffaut distillery paleo intelligentsia pop-up. Brooklyn
              helvetica readymade literally distillery kickstarter, keffiyeh
              bushwick cornhole celiac messenger bag cold-pressed sustainable
              art party.{' '}
            </p>
            <p>
              Succulents put a bird on it forage, scenester banjo heirloom
              humblebrag semiotics health goth gastropub keffiyeh cred. Hoodie
              williamsburg man braid meh, tote bag cronut YOLO. Pickled tumeric
              locavore mixtape ugh raclette. Helvetica pabst wayfarers copper
              mug poutine la croix. Asymmetrical kickstarter ethical tumeric,
              chillwave meggings tilde crucifix XOXO keytar 90's quinoa
              letterpress flexitarian put a bird on it. Keffiyeh +1 health goth
              live-edge quinoa poutine. Pug tbh bicycle rights post-ironic tacos
              pour-over cray vape four loko green juice edison bulb. Skateboard
              brooklyn single-origin coffee kinfolk. Lyft lomo irony, tumblr
              palo santo pug echo park umami. 3 wolf moon XOXO meggings, cliche
              tacos gochujang jean shorts lo-fi vinyl photo booth listicle umami
              flexitarian normcore. Venmo messenger bag enamel pin typewriter
              taxidermy. Sriracha austin forage subway tile jianbing live-edge
              lumbersexual fam craft beer. Meh subway tile heirloom paleo offal,
              pok pok keytar. Wayfarers photo booth raclette mixtape copper mug
              prism occupy gentrify paleo small batch health goth echo park.
              Adaptogen tacos sartorial pork belly, pinterest fanny pack banjo
              pickled. Post-ironic hell of helvetica lo-fi la croix asymmetrical
              knausgaard stumptown. 8-bit hammock chia, celiac selvage yuccie
              keffiyeh raclette asymmetrical. Lomo letterpress cardigan artisan
              viral. Oh. You need a little dummy text for your mockup? How
              quaint. I bet you’re still using Bootstrap too…
            </p>
            <p>
              Lorem ipsum dolor amet photo booth raw denim brunch hexagon.
              Pickled flannel bushwick kombucha truffaut. Normcore beard cronut
              lo-fi, cardigan pug roof party subway tile meditation small batch
              truffaut distillery paleo intelligentsia pop-up. Brooklyn
              helvetica readymade literally distillery kickstarter, keffiyeh
              bushwick cornhole celiac messenger bag cold-pressed sustainable
              art party.{' '}
            </p>
            <p>
              Succulents put a bird on it forage, scenester banjo heirloom
              humblebrag semiotics health goth gastropub keffiyeh cred. Hoodie
              williamsburg man braid meh, tote bag cronut YOLO. Pickled tumeric
              locavore mixtape ugh raclette. Helvetica pabst wayfarers copper
              mug poutine la croix. Asymmetrical kickstarter ethical tumeric,
              chillwave meggings tilde crucifix XOXO keytar 90's quinoa
              letterpress flexitarian put a bird on it. Keffiyeh +1 health goth
              live-edge quinoa poutine. Pug tbh bicycle rights post-ironic tacos
              pour-over cray vape four loko green juice edison bulb. Skateboard
              brooklyn single-origin coffee kinfolk. Lyft lomo irony, tumblr
              palo santo pug echo park umami. 3 wolf moon XOXO meggings, cliche
              tacos gochujang jean shorts lo-fi vinyl photo booth listicle umami
              flexitarian normcore. Venmo messenger bag enamel pin typewriter
              taxidermy. Sriracha austin forage subway tile jianbing live-edge
              lumbersexual fam craft beer. Meh subway tile heirloom paleo offal,
              pok pok keytar. Wayfarers photo booth raclette mixtape copper mug
              prism occupy gentrify paleo small batch health goth echo park.
              Adaptogen tacos sartorial pork belly, pinterest fanny pack banjo
              pickled. Post-ironic hell of helvetica lo-fi la croix asymmetrical
              knausgaard stumptown. 8-bit hammock chia, celiac selvage yuccie
              keffiyeh raclette asymmetrical. Lomo letterpress cardigan artisan
              viral. Oh. You need a little dummy text for your mockup? How
              quaint. I bet you’re still using Bootstrap too…
            </p>
            <p>
              Lorem ipsum dolor amet photo booth raw denim brunch hexagon.
              Pickled flannel bushwick kombucha truffaut. Normcore beard cronut
              lo-fi, cardigan pug roof party subway tile meditation small batch
              truffaut distillery paleo intelligentsia pop-up. Brooklyn
              helvetica readymade literally distillery kickstarter, keffiyeh
              bushwick cornhole celiac messenger bag cold-pressed sustainable
              art party.{' '}
            </p>
            <p>
              Succulents put a bird on it forage, scenester banjo heirloom
              humblebrag semiotics health goth gastropub keffiyeh cred. Hoodie
              williamsburg man braid meh, tote bag cronut YOLO. Pickled tumeric
              locavore mixtape ugh raclette. Helvetica pabst wayfarers copper
              mug poutine la croix. Asymmetrical kickstarter ethical tumeric,
              chillwave meggings tilde crucifix XOXO keytar 90's quinoa
              letterpress flexitarian put a bird on it. Keffiyeh +1 health goth
              live-edge quinoa poutine. Pug tbh bicycle rights post-ironic tacos
              pour-over cray vape four loko green juice edison bulb. Skateboard
              brooklyn single-origin coffee kinfolk. Lyft lomo irony, tumblr
              palo santo pug echo park umami. 3 wolf moon XOXO meggings, cliche
              tacos gochujang jean shorts lo-fi vinyl photo booth listicle umami
              flexitarian normcore. Venmo messenger bag enamel pin typewriter
              taxidermy. Sriracha austin forage subway tile jianbing live-edge
              lumbersexual fam craft beer. Meh subway tile heirloom paleo offal,
              pok pok keytar. Wayfarers photo booth raclette mixtape copper mug
              prism occupy gentrify paleo small batch health goth echo park.
              Adaptogen tacos sartorial pork belly, pinterest fanny pack banjo
              pickled. Post-ironic hell of helvetica lo-fi la croix asymmetrical
              knausgaard stumptown. 8-bit hammock chia, celiac selvage yuccie
              keffiyeh raclette asymmetrical. Lomo letterpress cardigan artisan
              viral. Oh. You need a little dummy text for your mockup? How
              quaint. I bet you’re still using Bootstrap too…
            </p>
            <p>
              Lorem ipsum dolor amet photo booth raw denim brunch hexagon.
              Pickled flannel bushwick kombucha truffaut. Normcore beard cronut
              lo-fi, cardigan pug roof party subway tile meditation small batch
              truffaut distillery paleo intelligentsia pop-up. Brooklyn
              helvetica readymade literally distillery kickstarter, keffiyeh
              bushwick cornhole celiac messenger bag cold-pressed sustainable
              art party.{' '}
            </p>
            <p>
              Succulents put a bird on it forage, scenester banjo heirloom
              humblebrag semiotics health goth gastropub keffiyeh cred. Hoodie
              williamsburg man braid meh, tote bag cronut YOLO. Pickled tumeric
              locavore mixtape ugh raclette. Helvetica pabst wayfarers copper
              mug poutine la croix. Asymmetrical kickstarter ethical tumeric,
              chillwave meggings tilde crucifix XOXO keytar 90's quinoa
              letterpress flexitarian put a bird on it. Keffiyeh +1 health goth
              live-edge quinoa poutine. Pug tbh bicycle rights post-ironic tacos
              pour-over cray vape four loko green juice edison bulb. Skateboard
              brooklyn single-origin coffee kinfolk. Lyft lomo irony, tumblr
              palo santo pug echo park umami. 3 wolf moon XOXO meggings, cliche
              tacos gochujang jean shorts lo-fi vinyl photo booth listicle umami
              flexitarian normcore. Venmo messenger bag enamel pin typewriter
              taxidermy. Sriracha austin forage subway tile jianbing live-edge
              lumbersexual fam craft beer. Meh subway tile heirloom paleo offal,
              pok pok keytar. Wayfarers photo booth raclette mixtape copper mug
              prism occupy gentrify paleo small batch health goth echo park.
              Adaptogen tacos sartorial pork belly, pinterest fanny pack banjo
              pickled. Post-ironic hell of helvetica lo-fi la croix asymmetrical
              knausgaard stumptown. 8-bit hammock chia, celiac selvage yuccie
              keffiyeh raclette asymmetrical. Lomo letterpress cardigan artisan
              viral. Oh. You need a little dummy text for your mockup? How
              quaint. I bet you’re still using Bootstrap too…
            </p>
            <p>
              Lorem ipsum dolor amet photo booth raw denim brunch hexagon.
              Pickled flannel bushwick kombucha truffaut. Normcore beard cronut
              lo-fi, cardigan pug roof party subway tile meditation small batch
              truffaut distillery paleo intelligentsia pop-up. Brooklyn
              helvetica readymade literally distillery kickstarter, keffiyeh
              bushwick cornhole celiac messenger bag cold-pressed sustainable
              art party.{' '}
            </p>
            <p>
              Succulents put a bird on it forage, scenester banjo heirloom
              humblebrag semiotics health goth gastropub keffiyeh cred. Hoodie
              williamsburg man braid meh, tote bag cronut YOLO. Pickled tumeric
              locavore mixtape ugh raclette. Helvetica pabst wayfarers copper
              mug poutine la croix. Asymmetrical kickstarter ethical tumeric,
              chillwave meggings tilde crucifix XOXO keytar 90's quinoa
              letterpress flexitarian put a bird on it. Keffiyeh +1 health goth
              live-edge quinoa poutine. Pug tbh bicycle rights post-ironic tacos
              pour-over cray vape four loko green juice edison bulb. Skateboard
              brooklyn single-origin coffee kinfolk. Lyft lomo irony, tumblr
              palo santo pug echo park umami. 3 wolf moon XOXO meggings, cliche
              tacos gochujang jean shorts lo-fi vinyl photo booth listicle umami
              flexitarian normcore. Venmo messenger bag enamel pin typewriter
              taxidermy. Sriracha austin forage subway tile jianbing live-edge
              lumbersexual fam craft beer. Meh subway tile heirloom paleo offal,
              pok pok keytar. Wayfarers photo booth raclette mixtape copper mug
              prism occupy gentrify paleo small batch health goth echo park.
              Adaptogen tacos sartorial pork belly, pinterest fanny pack banjo
              pickled. Post-ironic hell of helvetica lo-fi la croix asymmetrical
              knausgaard stumptown. 8-bit hammock chia, celiac selvage yuccie
              keffiyeh raclette asymmetrical. Lomo letterpress cardigan artisan
              viral. Oh. You need a little dummy text for your mockup? How
              quaint. I bet you’re still using Bootstrap too…
            </p>
            <p>
              Lorem ipsum dolor amet photo booth raw denim brunch hexagon.
              Pickled flannel bushwick kombucha truffaut. Normcore beard cronut
              lo-fi, cardigan pug roof party subway tile meditation small batch
              truffaut distillery paleo intelligentsia pop-up. Brooklyn
              helvetica readymade literally distillery kickstarter, keffiyeh
              bushwick cornhole celiac messenger bag cold-pressed sustainable
              art party.{' '}
            </p>
            <p>
              Succulents put a bird on it forage, scenester banjo heirloom
              humblebrag semiotics health goth gastropub keffiyeh cred. Hoodie
              williamsburg man braid meh, tote bag cronut YOLO. Pickled tumeric
              locavore mixtape ugh raclette. Helvetica pabst wayfarers copper
              mug poutine la croix. Asymmetrical kickstarter ethical tumeric,
              chillwave meggings tilde crucifix XOXO keytar 90's quinoa
              letterpress flexitarian put a bird on it. Keffiyeh +1 health goth
              live-edge quinoa poutine. Pug tbh bicycle rights post-ironic tacos
              pour-over cray vape four loko green juice edison bulb. Skateboard
              brooklyn single-origin coffee kinfolk. Lyft lomo irony, tumblr
              palo santo pug echo park umami. 3 wolf moon XOXO meggings, cliche
              tacos gochujang jean shorts lo-fi vinyl photo booth listicle umami
              flexitarian normcore. Venmo messenger bag enamel pin typewriter
              taxidermy. Sriracha austin forage subway tile jianbing live-edge
              lumbersexual fam craft beer. Meh subway tile heirloom paleo offal,
              pok pok keytar. Wayfarers photo booth raclette mixtape copper mug
              prism occupy gentrify paleo small batch health goth echo park.
              Adaptogen tacos sartorial pork belly, pinterest fanny pack banjo
              pickled. Post-ironic hell of helvetica lo-fi la croix asymmetrical
              knausgaard stumptown. 8-bit hammock chia, celiac selvage yuccie
              keffiyeh raclette asymmetrical. Lomo letterpress cardigan artisan
              viral. Oh. You need a little dummy text for your mockup? How
              quaint. I bet you’re still using Bootstrap too…
            </p>
            <p>
              Lorem ipsum dolor amet photo booth raw denim brunch hexagon.
              Pickled flannel bushwick kombucha truffaut. Normcore beard cronut
              lo-fi, cardigan pug roof party subway tile meditation small batch
              truffaut distillery paleo intelligentsia pop-up. Brooklyn
              helvetica readymade literally distillery kickstarter, keffiyeh
              bushwick cornhole celiac messenger bag cold-pressed sustainable
              art party.{' '}
            </p>
            <p>
              Succulents put a bird on it forage, scenester banjo heirloom
              humblebrag semiotics health goth gastropub keffiyeh cred. Hoodie
              williamsburg man braid meh, tote bag cronut YOLO. Pickled tumeric
              locavore mixtape ugh raclette. Helvetica pabst wayfarers copper
              mug poutine la croix. Asymmetrical kickstarter ethical tumeric,
              chillwave meggings tilde crucifix XOXO keytar 90's quinoa
              letterpress flexitarian put a bird on it. Keffiyeh +1 health goth
              live-edge quinoa poutine. Pug tbh bicycle rights post-ironic tacos
              pour-over cray vape four loko green juice edison bulb. Skateboard
              brooklyn single-origin coffee kinfolk. Lyft lomo irony, tumblr
              palo santo pug echo park umami. 3 wolf moon XOXO meggings, cliche
              tacos gochujang jean shorts lo-fi vinyl photo booth listicle umami
              flexitarian normcore. Venmo messenger bag enamel pin typewriter
              taxidermy. Sriracha austin forage subway tile jianbing live-edge
              lumbersexual fam craft beer. Meh subway tile heirloom paleo offal,
              pok pok keytar. Wayfarers photo booth raclette mixtape copper mug
              prism occupy gentrify paleo small batch health goth echo park.
              Adaptogen tacos sartorial pork belly, pinterest fanny pack banjo
              pickled. Post-ironic hell of helvetica lo-fi la croix asymmetrical
              knausgaard stumptown. 8-bit hammock chia, celiac selvage yuccie
              keffiyeh raclette asymmetrical. Lomo letterpress cardigan artisan
              viral. Oh. You need a little dummy text for your mockup? How
              quaint. I bet you’re still using Bootstrap too…
            </p>
          </div>
        </Col>
      </Row>
    </div>
  )
}

export default PostReturn
