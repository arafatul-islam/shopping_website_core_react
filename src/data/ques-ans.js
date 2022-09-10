import shortid from "shortid";
const answers = [
    {
        id: shortid.generate(),
        ques: 'how react works?',
        ans: 'A React application is made of multiple components, each responsible for rendering a small, reusable piece of HTML. Components can be nested within other components to allow complex applications to be built out of simple building blocks. A component may also maintain an internal state – for example, a TabList component may store a variable corresponding to the currently open tab.',

    },
    {
        id: shortid.generate(),
        ques: 'What are the differences between props and state ?',
        ans: 'props: The Data is passed from one component to another. state: The Data is passed within the component only.' ,

    },{
        id: shortid.generate(),
        ques: 'how useSates works?',
        ans: 'The state starts as { count: 0 }, and we increment state.count when the user clicks a button by calling this.setState(). We’ll use snippets from this class throughout the page.',

    },
];

export default answers;