/* eslint-disable max-lines */
import JobDisclosure from './JobDisclosure'

const Works = () => {
  return (
    <div className="py-10 text-lg md:py-20 md:text-xl">
      <h2 className="mb-10 text-4xl font-bold">Work Experiences 👨‍💻</h2>
      {/* <JobDisclosure /> */}
      <div className="space-y-10">
        <div>
          <p className="text-base text-slate-700 dark:text-slate-400">
            2021 - Current
          </p>
          <JobDisclosure
            title={
              <h3 className="text-left text-2xl font-semibold">
                Front end Engineer/Team leader at{' '}
                <a
                  href="https://www.just.engineer"
                  target="_blank"
                  className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                  rel="noreferrer"
                >
                  JUST.engineer
                </a>
              </h3>
            }
            content={
              <div className="space-y-4 dark:text-slate-200">
                <p>
                  At{' '}
                  <span className="font-semibold text-teal-500 dark:text-teal-400">
                    JUST.engineer
                  </span>
                  , I&apos;m proudly in charge of user interface and experience
                  of multiple projects.
                </p>

                <ul className="list-inside list-disc space-y-3">
                  <li>
                    <span className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400">
                      Hidden name:
                    </span>{' '}
                    I joined this project as a front-end developer, where I
                    worked closely with the team to create a dashboard for data
                    analysis, developed customer reports, and occasionally
                    assisted with back-end coding to support my colleagues. The
                    project focused on data analysis for an insurance company.
                  </li>
                  <li>
                    <span className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400">
                      Blueberries:
                    </span>{' '}
                    A completed system to manager sales for electronic
                    distributors in Singapore. As the team leader, I've
                    coordinated the team members to work closely with the
                    customer to design and implement an efficient platform that
                    streamlined inventory management, sales tracking and human
                    resources management.
                  </li>
                  <li>
                    <a
                      href="https://business.cozycot.com"
                      target="_blank"
                      className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                      rel="noreferrer"
                    >
                      CozyCot:
                    </a>{' '}
                    A CRM platform helps businesses efficiently manage and
                    analyze customer reviews to gain valuable insights. By
                    consolidating feedback from multiple sources, the platform
                    enables companies to track customer sentiment, identify
                    trends, and uncover areas for improvement. I was the team
                    leader of the project and the MVP was successfully delivered
                    with the help of my 4 teammates.
                  </li>
                  <li>
                    <a
                      href="https://spiking.com"
                      target="_blank"
                      className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                      rel="noreferrer"
                    >
                      Spiking:
                    </a>{' '}
                    A completed, well-crafted platform for stock traders to
                    catch up with precious information from insiders. In{' '}
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      Spiking
                    </span>
                    , I successfully delivered a better experience for their
                    users while using the web application. By revamping their
                    Membership page, Learning page and creating new Events page,
                    I helped the users to easily choose what they want to learn
                    and which subscription packages they want to pay for. I also
                    delivered a brand new trading competition called 7-days
                    Challenge (a fantasy trading game) to help new traders
                    experience with the stock market before they enter the real
                    battle.
                  </li>
                  <li>
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      Locate
                    </span>
                    : A well-known Food and Beverage delivery platform in Saudi
                    Arabia. I was assigned to improving the current management
                    dashboard of express service, including managing
                    drivers&apos; information, order status, money flow, pay
                    rate, HTTP-log tracking and map tracking service. By
                    delivering my best work to{' '}
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      Locate
                    </span>
                    , their operators are now able to track and control
                    thousands of orders per day.
                  </li>
                  <li>
                    <a
                      href="https://attlas.io"
                      target="_blank"
                      className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                      rel="noreferrer"
                    >
                      Attlas:
                    </a>{' '}
                    One of the most credited cryptocurrency exchange platforms
                    in South East Asia. At{' '}
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      Attlas
                    </span>
                    , I was able to perform my best to bring the finest
                    cryptocurrency trading experience to the users. I have
                    successfully helped users to track multiple
                    cryptocurrencies&apos; data from a useful and accurate
                    market table grid. The swap trading and spot trading
                    experience on{' '}
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      Attlas
                    </span>{' '}
                    was also carefully crafted by me, so the users can get the
                    accurate data from chart and orderbook before placing an
                    order. I also help{' '}
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      Attlas
                    </span>{' '}
                    to protect their users from dangerous scammers by delivering
                    a strict but pleasing KYC process, which is an important
                    stage to verify the users of the platform.
                  </li>
                  <li>
                    <a
                      href="https://www.just.engineer"
                      target={'_blank'}
                      className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                      rel="noreferrer"
                    >
                      JUST.engineer:
                    </a>{' '}
                    The landing page of{' '}
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      JUST.engineer
                    </span>{' '}
                    was the result of my free time. After the Tet Holiday (a
                    traditional holiday in our country), I felt like I had all
                    the time in the world and also noticed that our company
                    landing page was not that good. So I turned on my PC, opened
                    Figma, drafted some prototypes, opened VSCode and started
                    typing. The whole project was completed in less than a week,
                    and I think it was very well-crafted. I also added a small
                    animated area to demonstrate the &quot;To the moon&quot;
                    idea of the CEO, along with a mailing function and a rate
                    limit function to prevent spammers. One of the most
                    aesthetic-pleasing projects I have ever done.
                  </li>
                </ul>
              </div>
            }
          />
        </div>
        <div>
          <p className="text-base text-slate-700 dark:text-slate-400">
            2020 - 2021
          </p>
          <JobDisclosure
            title={
              <h3 className="text-left text-2xl font-semibold">
                Front end Engineer at{' '}
                <a
                  href="https://www.just.engineer"
                  target="_blank"
                  className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                  rel="noreferrer"
                >
                  SOLID.engineer
                </a>
              </h3>
            }
            content={
              <div className="space-y-4 dark:text-slate-200">
                <p>
                  Before the company name changed to{' '}
                  <span className="font-semibold text-teal-500 dark:text-teal-400">
                    JUST.engineer
                  </span>
                  , they were{' '}
                  <span className="font-semibold text-teal-500 dark:text-teal-400">
                    SOLID.engineer
                  </span>
                  , At{' '}
                  <span className="font-semibold text-teal-500 dark:text-teal-400">
                    SOLID.engineer
                  </span>
                  , I was lucky to be a part of many interesting projects.
                </p>

                <ul className="list-inside list-disc space-y-3">
                  <li>
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      Maeda:
                    </span>{' '}
                    Before the client changed the name of the project to Locate,
                    it was{' '}
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      Maeda
                    </span>
                    . This is the first project that I have ever written with
                    React Native. While working on the project, I was able to
                    deliver the mobile application for both iOS and Android
                    users, helping them to order foods and beverages with
                    various options from their favorite restaurants. I also
                    successfully implemented the voucher system to give users a
                    lot of promotions from both restaurants and{' '}
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      Maeda
                    </span>
                    , increasing the time users spent on the application.
                    Nowadays,{' '}
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      Maeda
                    </span>{' '}
                    has thousands of orders per day.
                  </li>
                  <li>
                    <a
                      href="https://tuyensinh.luongthevinh.com.vn/"
                      target={'_blank'}
                      className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                      rel="noreferrer"
                    >
                      LTV Amissions:
                    </a>{' '}
                    A portal for students and their parents to access and check
                    out the admissions information. The users can also register
                    into the school through the portal itself. The portal is
                    also packed with a map for users to take a look at the
                    school&apos;s facility they are about to register at.
                  </li>
                  <li>
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      SOLID.engineer:
                    </span>{' '}
                    While working at{' '}
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      SOLID.engineer
                    </span>
                    , my first task was to create the company landing page using
                    HTML, CSS and Javascript only. I was able to manage the
                    task, and successfully delivered the website to the BoD with
                    a main homepage, a blog section and a contact form. The
                    working process took me a lot of time, and this is the first
                    time I learned how to optimize a website using Chrome
                    Profiling and Audit tools. The final product took less than
                    1.5 seconds to fully loaded the first time (without browser
                    cache) and less than 1 second to load (with browser cache).
                  </li>
                </ul>
              </div>
            }
          />
        </div>
        <div>
          <p className="text-base text-slate-700 dark:text-slate-400">
            2019 - 2020
          </p>
          <JobDisclosure
            title={
              <h3 className="text-left text-2xl font-semibold">
                Front end Engineer at{' '}
                <a
                  href="https://job.vccorp.vn/"
                  target="_blank"
                  className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                  rel="noreferrer"
                >
                  VCCorp
                </a>
              </h3>
            }
            content={
              <div className="space-y-4 dark:text-slate-200">
                <p>
                  Working at{' '}
                  <span className="font-semibold text-teal-500 dark:text-teal-400">
                    VCCorp
                  </span>{' '}
                  was my first real job I have managed to land.
                </p>

                <ul className="list-inside list-disc space-y-3">
                  <li>
                    <a
                      href="https://lotus.vn/"
                      target={'_blank'}
                      className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                      rel="noreferrer"
                    >
                      Lotus:
                    </a>{' '}
                    A Vietnam-made social platform, specified in the news. I was
                    able to deliver an embed system for their posts in multiple
                    media types, including text, video, image, link, quote, etc.
                    using shadow dom. This system can generate urls to embed
                    posts into other websites, and even support Internet
                    Explorer (yes, IE was considered still alive at that time).
                  </li>
                  <li>
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      TinyCMS:
                    </span>{' '}
                    An in-house product of{' '}
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      VCCorp
                    </span>
                    , and used at many online newspapers in Vietnam, such as{' '}
                    <a
                      href="https://danviet.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                    >
                      Danviet
                    </a>
                    ,{' '}
                    <a
                      href="https://gamek.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                    >
                      GameK
                    </a>
                    ,{' '}
                    <a
                      href="https://cafef.vn"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                    >
                      CafeF
                    </a>
                    , etc. While working on the project, my task was
                    implementing new plugins for the CMS.
                  </li>
                  <li>
                    <span className="font-semibold text-teal-500 dark:text-teal-400">
                      CMSConfig:
                    </span>{' '}
                    A small project aimed to manage configurations of different
                    websites using TinyCMS. The project reads configurations
                    from an .xml file, and updates them using REST APIs written
                    in C#. This is a solo project, and I&apos;m glad I was able
                    to deliver the result successfully.
                  </li>
                </ul>
              </div>
            }
          />
        </div>
        <div>
          <p className="text-base text-slate-700 dark:text-slate-400">
            2018 - 2019
          </p>
          <JobDisclosure
            title={
              <p className="text-left text-2xl font-semibold">
                Internship at{' '}
                <a
                  href="https://www.fpt-software.com/"
                  target="_blank"
                  className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                  rel="noreferrer"
                >
                  FPT Software
                </a>
              </p>
            }
            content={
              <div className="space-y-4 dark:text-slate-200">
                <p>First contact with extraterrestrial life 👀</p>

                <ul className="list-inside list-disc space-y-3">
                  <li>
                    <a
                      href="https://www.kiongroup.com"
                      target={'_blank'}
                      className="font-semibold text-teal-500 duration-200 hover:text-teal-600 hover:underline hover:underline-offset-2 dark:text-teal-400"
                      rel="noreferrer"
                    >
                      KION:
                    </a>{' '}
                    This was the first time I ever had a detailed look into the
                    technology scene. I was lucky to be placed into a team with
                    so many talented and heart-warming people. Internship on
                    this project was one of my biggest steps in life and still
                    affecting me until now. I learnt to work with React here,
                    and was able to create a small dashboard to control the
                    automation process of creating Azure services.
                  </li>
                </ul>
              </div>
            }
          />
        </div>
      </div>
    </div>
  )
}

export default Works
