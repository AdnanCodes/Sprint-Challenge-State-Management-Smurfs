1. What problem does the context API help solve?
   - Context API allows the react to have global state access via useContext Hook. This allows us to avoid prop drilling from component to component. Instead, we can pull state and even actions by invoking useContext in whichever component we desire.
1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?
   - Actions - are methods/functions which causes the state to change
   - Reducers - They hold the initial state and integrate actions appropriately so the state can be changed. The initial state always exist as well as newly updated state when actions are invoked. They make our code more compact and you do not have to looking around the source files find the functions/methods that are causing state changes for key data.
   - Store - Redux is not part of React, it is library that allows us to integrate state management. To enable Redux, Redux needs a place called 'store' where the reducers can live and allow its functionalities to operate. In respect of Context API, Store behave as such by being global state management place aka single source of truth.
1. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   - Application state can be considered the primary and global state for the app. While components depend on Application state, it may have its own state in order to perform asynchronous actions. In such, you may have to build async actions for your reducers, so the global state can change without causing the typical side-effects to break the app.
1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   -Redux-Thunk allows us to perform those Async actions. It changes our action-creators as we need to perform side effects such as API request and send the respective paylod to make state changes and in return make sure renderer doesn't break.
1. What is your favorite state management system you've learned and this sprint? Please explain why!
   -I like the hook version a lot more than redux as it requires less code to be integrated with an App however, I am not fully confident applying async actions with Hook version for the sprint and I would like to practice without time restrictions to implement my own version with hooks.
   So I will use redux for the sprint as it seems a lot more straight-forward for async actions.
