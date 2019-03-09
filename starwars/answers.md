# Answers

1.  What is React JS and what problems does it try and solve?
React tries to solve the problem of having the ability to build large scale applications effectively but 
also rapidly. Because the software industry changes at a rapid pace, frameworks & libraries like React allows
developers to build & deploy applications more easily. 
React attempts to also not rely heavily on 
API, but instead makes heavier use of JavaScript programming within its ecosystem.  
One of the unique benefits of React which 
makes it scalable & agile is the use of the virtual DOM.  Large scale web applications have constantly
changing data and millions of users, all of which require quick effective ways to offload the state data, from the DOM.
Basically the Virtual DOM is a programming middle man/agent where we build the exact DOM enviornment we want.  In the virutal DOM
we assign data, handlers, styles etc to specific elements using React components (encapsulated pieces of UI).  React then compares our virtual DOM to the real
DOM and makes changes to the real DOM to match our virtual DOM in the most efficient way possible.  This
takes makes it a lot easier for our browser to not be overloaded. 



1.  What does it mean to _think_ in react?

    TO think in react involves thinking of apps in terms of how to build the components that create it.  The 1st step is to break the UI into a Component Hierarchy, using techniques like the single responsiblity principle (which is that a component should ideally only do one thing), and building a hierarchy organizing components that may belong under another component. 2nd step is to build a static version in react that only takes the data model and renders UI but no interactivity. Do this by passing props data from parent to child.  The 3rd step is to ID the minimal & complete respresentation of UI State, and compute everything else on demand. State allows you to make changes to the underlying data model.  The 4th step is to ID where your state should live.  ID which component mutates or owns the state.  And 5th step add the inverse data flow.  

1.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.
    Differences. A functional component is plain JS which accepts props as an argument & returns a React element. You can't use setState() with functional components .   A class component requires you to extend from React.Component and create a render function which returns a react element.  Class components allow you to have a state and use setState() (as well as from your parent class component pass down state the function components via props).  


1.  Describe state.
  State is created in the component. Where it gets its intial data. State is mutable, dynamic and interactive data.  Using setState() which updates the state object and re-renders the component. It is information for the component to initialize, change and use on its own.  
1.  Describe props.
  Props, short for property is an property argument can passed to the component,  and holds information about the component. .  It will always render the same static output, is not mutable & given the same input and does not handle interactive or dynamic data. 
