# Goals

- Design and implement SOLID-compatible calendar application
  - Provide UX and functionality similar to commercial calendars
  - For better adoption implement import/export of iCalendar format
  - Design RDF vocabulary for storing calendar data, reusing existing vocabularies
  - Implementation decisions should be based on analysis of existing SOLID applications and available tooling
- To demonstrate ability to share calendar data across multiple applications, create small to application to read and modify existing calendar, following SOLID principles
- Development utilizes production grade tools and principles
  - CI/CD pipelines utilized during development
  - Use of tools for code quality control such as linters or code formatters
  - Application is easily deployable
  - Application functionality is testable by automated tests

# Analysis

## Calendar

To demonstrate SOLID principles, we want to manage access control to other calendars using SOLID specification. Otherwise application should provide common calendar functionality similar to applications such as Apple Calendar - multiple views (day/month/year), modifying calendar events, setting color to events based on event groups (school, work, sport).

Important point is that if calendar design and functionality is not strictly defined, we should based our implementation choices on initial requirement to have good UX. From scratch implementation that fulfils UX requirement would require a lot of time, including analysis of correct design and converting that design into implementation. Creating tool such as calendar should not be done entirely from sratch as there must exist already fine solutions. Thus from software engineering point of view (not reinventing the wheel), it would make more sense to re-use feature rich implementation of the existing calendar UIs. In analysis part there should be some comparison of available libraries, still considering own solution as there is an option to implement only limited subset of calendar features, but final result of such implementation is not astonishing for an user. In case of reusing some existing implementation, calendar functionality will have functionality based on offered UI components.

*{Currently [FullCalendar](https://fullcalendar.io) looks like a good fit. I want to use TS and React and it fulfils all requirements, using MIT or GPLv3 license.}*

Important parts while selecting existing calendar UI solution:
- tech stack - React / TS preferred
- available functionality scope - multiple views (day/month/year), modifying calendar events, setting color to events based on event groups (school, work, sport)
- customisation and styling
- support and community, license
- time to learn, time to implement

## SOLID tools

Observe how existing SOLID applications manipulate data using SOLID specification, using different libraries / approaches. There is authentication and data fetch part. 

### Auth libs

Only Inrupt library is being heavily used so far. If data fetching code will run on server, find out how authentication should be handled [Inrupt article](https://docs.inrupt.com/developer-tools/javascript/client-libraries/tutorial/authenticate-nodejs-web-server/).

### Data fetching

Currently I see three approaches:

- *From scratch using HTTP protocol, managing explicitly SOLID structures such as LDP-BC in application code*
- *Client implementing management of SOLID structures and providing some basic RDF triples model to be processed by application*
- *Library that abstracts the SOLID structures and allows mapping to application model in way similar to ORM*

Even if SOLID allows to easily implement and work with data from scratch using HTTP requests, we want to follow best practises for application development and consume data from some specific source utilizing existing libraries and frameworks - often allowing some mapping to objects used by application (ORM, ODM). If possible (having enough community and maturity), I would like analyse possibility of using such library/framework that would make manipulation with SOLID structures easier (such as management of LDP-BC).

#### SOLID Model

Model for calendar data that represent storage in SOLID pod. There might be points for analysis of structuring data to tree in SOLID storage, regarding efficiency fetching / manipulating data and allowing other SOLID protocol features such as access control.

Assuming there might be some user customizations in application such as colors, language or time formats, analyse how such data can be stored -- should be stored in SOLID pod too. 

#### RDF Calendar vocabulary

Analysis which existing vocabularies to use and how functionality will be modeled in RDF vocab, also with conversion to iCalendar in mind.


## Existing implementation

There is a [SOLID calendar project](https://bitbucket.org/dylanmartin/solidcalendar/src/master/) available for comparison.

# Implementation

I need to check if Next.js can be used with SOLID authentication, especially deploying it to Vercel. Application architecture - should be still some part running on server? I would like to try using server side rendering with Next.js.

*Draft:*

- *Next.js (React / Typescript) app implementing calendar with FullCalendar*
- *Using Inrupt Authentication, soukai-solid*
- *Docker local deployment, Vercel deployments with CI/CD*
- *ESLint, Prettier, Webpack*

