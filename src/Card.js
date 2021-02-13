import React from 'react'

/*Implement card function*/
const Card=()=>{

  return(
      <div>
       <img alt='robots' src='https://robohash.org/newfriend'/>
       <div>
        <h2>Jane Doe</h2>
        <p>Jane Doe @email.com</p>
       </div>
       <img alt='robots' src='https://robohash.org/newfriend'/>
       <div>
        <h2>Jane Doe</h2>
        <p>Jane Doe @email.com</p>
       </div>
       <img alt='robots' src='https://robohash.org/newfriend'/>
       <div>
        <h2>Jane Doe</h2>
        <p>Jane Doe @email.com</p>
       </div>
      </div>
      
    );

}

/*Export Card.js*/
export default Card;
/*1)Declare component in index.js
  2)implement Card.js
    import REACT
    Card function
      return <img alt='robots' src=''/> 
        <div>
          <h2>Name
          <p>jane.doe@gmail
        </div>
  3)import Card.js in index.js
  4)index.js
    wrap multiple card elements in wrapping tags like div
  5)Card.js(styling)
    dib(display:inline-block)
    br3(border-radius)
    pa3(Padding)
    ma3(Margin)
    grow(Animation)
    bw2(Border width)
    shadow-5(Box-shadow)
  6)index.js
    import list from Robots.js
    give props to card(id,name and email) using robots array
  7)card.js
    passing props to Card function
      #1:
        a)'props' inside parameter
        b){props.[props name here]} when referencing a particular props
      
      OR
       #2:Destructuring simple
          const {[prop#1 name],[prop#2 name],...[prop#N name]}=props
    
      OR
       #3:Destructuring advanced
          {[prop#1 name],[prop#2 name],...[prop#N name]} as function parameter
*/