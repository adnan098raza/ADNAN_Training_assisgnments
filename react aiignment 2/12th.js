import React from 'react';
class Home extends React.Component {
    render() {
    return (

      <div className="main-body">
        <nav id="navbar">
          <header>JS Documentation</header>
          <a href="#Introduction" className="nav-link">Introduction</a>
          <a href="#JavaScript" className="nav-link">JavaScript</a>
          <a href="#Variables" className="nav-link">Variables</a>
          <a href="#Scope" className="nav-link">Scope</a>
          <a href="#Functions" className="nav-link">Functions</a>
        </nav>
        <main id="main-doc">
          <section className="main-section" id="Introduction">
            <header>Introduction</header>
            <p>JavaScript is a cross-platform, object-oriented scripting language. It is a small and lightweight language. Inside a host environment (for example, a web browser), JavaScript can be connected to the objects of its environment to provide programmatic
              control over them.</p>
            <p>JavaScript contains a standard library of objects, such as Array, Date, and Math, and a core set of language elements such as operators, control structures, and statements. Core JavaScript can be extended for a variety of purposes by supplementing
              it with additional objects; for example:</p>
          </section>
          <section className="main-section" id="JavaScript">
            <header>JavaScript</header>
            <p>JavaScript and Java are similar in some ways but fundamentally different in some others. The JavaScript language resembles Java but does not have Java's static typing and strong type checking. JavaScript follows most Java expression syntax, naming
              conventions and basic control-flow constructs which was the reason why it was renamed from LiveScript to JavaScript.</p>
            <p>In contrast to Java's compile-time system of classes built by declarations, JavaScript supports a runtime system based on a small number of data types representing numeric, Boolean, and string values. JavaScript has a prototype-based object model
              instead of the more common class-based object model. The prototype-based model provides dynamic inheritance; that is, what is inherited can vary for individual objects. JavaScript also supports functions without any special declarative requirements.
              Functions can be properties of objects, executing as loosely typed methods.</p>
            <code>function greetMe(yourName) {'{'}
              alert("Hello " + yourName);
              {'}'}
              greetMe("World");</code>
            <ul>
              <li>Variables</li>
              <li>Functions</li>
              <li>Control Flow</li>
              <li>Promises</li>
              <li>The Strange Parts</li>
            </ul>
          </section>
          <section className="main-section" id="Variables">
            <header>Variables</header>
            <p>Global variables are in fact properties of the global object. In web pages the global object is window, so you can set and access global variables using the window.variable syntax.</p>
            <p>Consequently, you can access global variables declared in one window or frame from another window or frame by specifying the window or frame name. For example, if a variable called phoneNumber is declared in a document, you can refer to this variable
              from an iframe as parent.phoneNumber.</p>
            <code>const PI = 3.14;</code>
            <code>// THIS WILL CAUSE AN ERROR
              function f() {'{'}{'}'};
              const f = 5;
              // THIS WILL CAUSE AN ERROR ALSO
              function f() {'{'}
              const g = 5;
              var g;
              //statements
              {'}'}</code>
          </section>
          <section className="main-section" id="Scope">
            <header>Scope</header>
            <p>When you declare a variable outside of any function, it is called a global variable, because it is available to any other code in the current document. When you declare a variable within a function, it is called a local variable, because it is available
              only within that function.</p>
            <p>JavaScript before ECMAScript 2015 does not have block statement scope; rather, a variable declared within a block is local to the function (or global scope) that the block resides within. For example the following code will log 5, because the scope
              of x is the function (or global context) within which x is declared, not the block, which in this case is an if statement.</p>
            <code>if (true) {'{'}
              var x = 5;
              {'}'}
              console.log(x);  // 5</code>
          </section>
          <section className="main-section" id="Functions">
            <header>Functions</header>
            <p>Functions store instructions to reusable code.</p>
            <p>They are one of the fundamentals of software.</p>
            <code>function square(number) {'{'}
              return number * number;
              {'}'}</code>
            <code>return number * number;</code>
          </section>
        </main>
      </div>
    );
  }
};
export default Home;