# The CalmCoders Presents

[![Logo-With-Text.png](https://i.postimg.cc/V6gZw7Cw/Logo-With-Text.png)](https://postimg.cc/FdfVgVpC)

<h3 align="center">Bubble</h3>

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
- We will be holding users key documentation and user data so GDPR compliance must be adhered to. This will require keeping on top of any law chances and updating our app accordingly.
- As our app targets two different parties with children being the main users and adults being the main customers, we had a difficult task making the app accessible and applicable.
- We are using a free tier of Vercel for hosting. This may result in the app being slow to load and/or not being able to store all of the users data.

## 🚀 Future Scope <a name = "future_scope"></a>

We didn't have time to implement secure document storage, as a result we scaled back our mvp to focus on the job board, ticket generation with a custom chat interface for said tickets, whilst having our user roles set we are in the process of finalising our database so that specific landlords can connect with specific tenants via linked IDs .

In the future we are confident that we can implement the above document storage as well as a host of other features ie: payment monitor, a tools and guides page to help tenants maintain the property themselves, the option to download transcripts and templates for things like inventories, checkout and tenancy agreements.

## 🏁 Visit Our Website <a name = "vist_our_website"></a>

You can visit our app here -> <a href="https://bubble-app-two.vercel.app/">Bubble app</a>

## ⛏️ Tech Stack <a name = "tech_stack"></a>

- [NextJs](https://nextjs.org/) - Web Framework
- [JavaScript](https://www.typescriptlang.org) - Coding Language
- [NodeJs](https://nodejs.org/en/) - Server Environment
- [ChakraUI](https://tailwindcss.com) - Styling
- [Plawright](https://www.cypress.io) - Testing
- [Supabase](https://www.postgresql.org) - Database

## 🏫 Lessons Learned <a name = "lessons_learned"></a>

- Good planning in general goes a long way and then the code basically writes itself.
- Having a different Scrum Master per day allowed for easy decision making, task priorisation and day-to-day structure.
- Making big decisions as a team and moving on with the intended plan. We decided not to use Express and or have auth early on but we kept them in mind for future progress.
- Accessibility is extremely important. We learned to have this in mind from the very beginning of the process, from desing all the way through.
- ChakraUI is brilliant for quick and easy styling and re-usable components!
- Understating about the architecture of a full-stack app starting with a the visual aspect.
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
