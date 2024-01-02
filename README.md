# The CalmCoders Presents

[![projectintro.png](https://i.postimg.cc/Kv1tVwzC/projectintro.png)](https://postimg.cc/56MHQP8m)

<h2 align="center"> Bubble <br> <i>where mindful moments are made...</i></h2>

---

<p align="center"> 
Bubble is a tablet app designed to aid children's wellbeing by helping them reflect and understand their thoughts and feelings.
    <br> 
    <br>
Both adults and children can use Bubble! Children are encouraged to log their emotions and optionally engage in a breathing exercise whilst adults have access to view their little one's logs in both graphical and written format.
    
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Tech Stack](#tech_stack)
- [Lessons Learned](#lessons_learned)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

Sometimes children can be reluctant to open up about how they're feeling, or they may just not know how to. Similarly, parents or guardians don’t always know how to start a conversation to address how their child is feeling and this can lead to a disconnect and miscommuncation.

Mindfulness for children involves teaching them to focus their attention on the present moment, cultivating awareness of their thoughts, feelings, bodily sensations, and surroundings without judgment. Regarding mood, children in this age range can experience a wide range of emotions. They might struggle with understanding and expressing their feelings, which can lead to mood swings. Factors such as school, friendships, family dynamics, and personal experiences greatly influence their mood.

Mindfulness practices can assist in regulating emotions, enhancing their ability to navigate and cope with these emotional fluctuations effectively. Encouraging open communication and providing a supportive environment are also crucial in helping children manage their moods during this developmental stage.

## 💡 Idea / Solution <a name = "idea"></a>

Our solution to this was to build a child-friendly, simple app that connects children and adults through soft prompts and activities to enable both parties to build a positive relationship through open communication.

Bubble aims to help children reflect on their feelings and for their trusted adult to gain an insight into these feelings.

## 🛑 Dependencies / Limitations <a name = "limitations"></a>

- In it's MVP stage, we currently have no auth or permissions built into the app. This is something we decided to not do early on with a focus more on features, however we recognise the importance of privacy and security and intend to build this in the future.
- As our app targets two different parties with children being the main users and adults being the main customers, we had a difficult task making the app accessible and applicable.
- We are using a free tier of Vercel for hosting. This may result in the app being slow to load and/or not being able to store all of the users data.

## 💻 Setting Up A Local Enivronment <a name = "getting_started"></a>

We came to an agreement to have weekly deployment aligned with each sprint, a production branch called "dev" acted as production branch before each deploment to ensure the app works and looks as intended. This was a vital step into detecting any errors, bugs and ultimately gaining feedback. Using Next as our React App, we had a development server that helped with 
the build that was accessed using "npm run dev" in the terminal (a default script in the package.json to run Next dev).

## 🚀 Future Scope <a name = "future_scope"></a>

Our next sprint goal, would be to start on login and authentication. This is important to safeguarding the content of the reflection page so that entries are private to each user, we felt as this is a new technology to us for the timeframe of this project, this wasn't included in our MVP. The advice from bootcamp coaches also agreed with this decision. We could also introduce more control to the bubble breathing such as a pause & play or a slider to control the speed. 

In the next few weeks, we could work on accessibility, putting our focus to include keyboard users and a setting section in both the grown-up zone and child area. The settings would include options that allow the app to cater for an individual's experience. The personalisation would build trust and likely keep users engaged with the app. Options could include a toggle for a light mode and dark mode, controls for the background bubble and more. A disclaimer section would be built, only availablein the grown up zone, with helpful links to charities and the NHS service for mental health in children.

In the next few months, Bubble will have a notification system to let the grown-up know when a a child under their account has filled in the mood logger form. We would also work on including a character as a representation of the app to build trust and commercialability, this character has appeared in our tutorial video, but we want the character to be providing the prompts and work on improving the contents of the prompts to fit the character. More content in the data analysis tailoring prompts depending the leading average emotion score. 

In the near future, Bubble will include more content for both the grown-up and child. A variety in the mindfulness acitvities to keep users engaged, from "mindful-listening" to encourage children to be present in the moment and reflection to "paired yoga" to encourage physical movement and connection between our two users; the grown-up and child. We aim to educate both grown-ups and children, so we would provide more content in this respect; an education section for the grown-up for them to understand the science behind why mindfulness is important and for the child to understand why they are doing these activities.

## 🏁 Visit Our Website <a name = "vist_our_website"></a>

You can visit our app here -> <a href="https://bubble-app-two.vercel.app/">Bubble app</a>

## ⛏️ Tech Stack <a name = "tech_stack"></a>

- [NextJs](https://nextjs.org/) - Web Framework
- [JavaScript](https://www.javascript.com/) - Coding Language
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [ChakraUI](https://chakra-ui.com/) - Styling
- [Plawright](https://playwright.dev/) - Testing
- [Supabase](https://supabase.com/) - Database

## 🏫 Lessons Learned <a name = "lessons_learned"></a>

- Good planning in general goes a long way and then the code basically writes itself.
- Having a different Scrum Master per day allowed for easy decision making, task priorisation and day-to-day structure.
- Making big decisions as a team and moving on with the intended plan. We decided not to use Express and or have auth early on but we kept them in mind for future progress.
- Accessibility is extremely important. We learned to have this in mind from the very beginning of the process, from desing all the way through.
- ChakraUI is brilliant for quick and easy styling and re-usable components!
- Understanding about the architecture of a full-stack app starting with a the visual aspect.
- Playwright testing - check for the box rather than the content. We don't want brittle tests!
- Dynamic routing in Next.
- Energisers make for a happy team! Gartic league still ongoing.

## ✍️ Authors <a name = "authors"></a>

- https://www.linkedin.com/in/india-grant/ - India Grant
- https://www.linkedin.com/in/andy-carey/ - Andy Carey
- https://www.linkedin.com/in/fyza-chishty/- Fyza Chishty
- https://www.linkedin.com/in/nikhilbhalla38/ - Nikhil Bhalla
- https://www.linkedin.com/in/david-n-de-jong/ - David de Jong

## 🎉 Acknowledgments <a name = "acknowledgments"></a>

Big thank you to the School of Code for all the support and guidance!

- https://www.schoolofcode.co.uk - https://github.com/SchoolOfCode
