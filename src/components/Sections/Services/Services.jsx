import { Container, Title } from 'components/baseStyles/CommonStyle.styled';

export const Services = () => {
  return (
    <Container>
      <Title as="h1">Services</Title>
      <div>
        <div>
          <h2>Skills that we have mastered so far.</h2>
          <p>
            With our extensive experience and expertise, we offer a full range
            of services that include creating websites, Instagram accounts,
            TikTok pages, logos and more. We understand that each brand has its
            own unique history and values, which is why we approach each project
            individually, providing our clients with personalized solutions.
          </p>
        </div>
        <ul>
          <li>
            <label htmlFor="file">
              <span>Website design</span>
              <span>90%</span>
            </label>
            <progress id="file" max="100" value="90" />
          </li>
          <li>
            <label htmlFor="development">
              <span>Web development</span>
              <span>95%</span>
            </label>
            <progress id="development" max="100" value="95" />
          </li>
          <li>
            <label htmlFor="logo">
              <span>Logo design</span>
              <span>93%</span>
            </label>
            <progress id="logo" max="100" value="93" />
          </li>
          <li>
            <label htmlFor="instagram">
              <span>Instagram</span>
              <span>95%</span>
            </label>
            <progress id="instagram" max="100" value="95" />
          </li>
          <li>
            <label htmlFor="tiktok">
              <span>TikTok</span>
              <span>95%</span>
            </label>
            <progress id="tiktok" max="100" value="95" />
          </li>
        </ul>
      </div>
      <div>
        <h2>Who are our customers?</h2>
        <p>
          We develop websites for a wide range of clients and businesses.
          Whether you're a small startup, medium-sized business, or large
          corporation, we work with you to create a website that meets your
          needs and goals. Our services are available for a variety of
          industries including retail, hospitality, services, technology, arts
          and many more. We do our best to provide you with an effective,
          professional and user-friendly web presence that will help you attract
          customers and grow your business.
        </p>
        <button type="button">Order Now</button>
      </div>
      <div>
        <h2>Development by Steps</h2>
        <ul>
          <li>
            <span>01</span>
            <h3>The importance of the first meeting</h3>
            <p>
              During our first meeting, we will have an introductory
              conversation where we will learn about your goals, objectives and
              expectations. We'll also find out what role your website should
              play. This information will be extremely useful for us as it will
              help us to develop a detailed plan of work in the future.
            </p>
          </li>
          <li>
            <span>02</span>
            <h3>Create Layouts</h3>
            <p>
              At this stage, the main role is played by the designer, who
              carefully examines the technical task and reproduces his artistic
              vision of the project. His creativity allows you to create the
              interface of your website to be the best in the world.
            </p>
          </li>
          <li>
            <span>03</span>
            <h3>The programmer gives life to the design</h3>
            <p>
              The role of the programmer is to ensure flawless operation of the
              site's functionality, maintaining its coherence with the design.
              The work of the coder is crucial and affects many aspects of the
              project. We make sure that our maestro can work without rushing to
              achieve the best results.
            </p>
          </li>
          <li>
            <span>04</span>
            <h3>Unrelenting attention to detail</h3>
            <p>
              We provide harmony in our symphony. By conducting tests, we make
              sure that the application works flawlessly and does not have any
              bugs when the site opens to everyone.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h2>Technologies</h2>
        <table>
          <tbody>
            <tr>
              <th>Frontend</th>
              <td>HTML CSS / JavaScript / React.js / Redux</td>
            </tr>
            <tr>
              <th>Backend</th>
              <td>Node.js</td>
            </tr>
            <tr>
              <th>Database</th>
              <td>MongoDB</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div>
        <h2>Why Brand Maze?</h2>
        <ul>
          <li>
            <span>01</span>
            <h3>We help you find exceptional and unforgettable concepts</h3>
            <p>
              There is no doubt that many people nowadays know how to create
              beautiful and stylish websites. But we offer more than just
              appearance - together with aesthetics, you get an expanded set of
              functions and capabilities.
            </p>
          </li>
          <li>
            <span>02</span>
            <h3>We keep secrets within the company</h3>
            <p>
              We accept orders from customers who bring unique technologies to
              the market that are not similar to the competition. We are fully
              aware that this work requires special care and we guarantee that
              your sensitive information will be kept confidential. If
              necessary, we may also enter into a non-disclosure agreement.
            </p>
          </li>
          <li>
            <span>03</span>
            <h3>We are vigilant guardians of your technical task.</h3>
            <p>
              We have a completely opposite philosophy compared to companies
              that do not consider listening to the client mandatory. Our main
              priority is to create a project that will be perfect in all
              aspects. Therefore, we pay great attention to listening to your
              needs, fix all the details in the technical task and do not
              deviate from the given course.
            </p>
          </li>
          <li>
            <span>04</span>
            <h3>We are open to the use of innovative methods</h3>
            <p>
              We always have a ready arsenal of promising and bold strategies.
              Not everyone will take such a step, but those who bravely take the
              risk will thank us later. Maybe you will find the courage to
              accept this challenge?
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h2>What we can also do</h2>
        <ul>
          <li>
            <h3>
              We already have a ready-made site, but we need technical support.
              Can you help?
            </h3>
            <p>
              Even if your site was developed by another company, we are ready
              to provide technical support for your project. We have the ability
              to allocate a separate team for your project or prioritize tasks
              according to your needs.
            </p>
          </li>
          <li>
            <h3>What is the price of the web application?</h3>
            <p>
              The cost and terms of development of a web application depend on
              the complexity of the project and the scope of functionality. To
              get a preliminary estimate, please fill out an application and
              provide a detailed description of your project or upload a
              ready-made technical task. This will help us make a more accurate
              estimate of the cost and terms of implementation.
            </p>
          </li>
          <li>
            <h3>Can I be informed about the development of the project?</h3>
            <p>
              We provide regular reporting to the client at each stage of
              development. Before proceeding to the next stage, we agree on the
              details with you. Our team is always available for communication
              and ready to provide updates on the progress of the project at any
              time convenient for you.
            </p>
          </li>
          <li>
            <h3>I want a better site than a competitor's</h3>
            <p>
              This is exactly what we do. We will conduct a detailed study of
              competitors to identify their strengths and weaknesses. This will
              help us determine the right way to achieve your goal.
            </p>
          </li>
        </ul>
      </div>
      <div>
        <h2>We look forward to working with you</h2>
        <button type="button">Order Now</button>
      </div>
    </Container>
  );
};
