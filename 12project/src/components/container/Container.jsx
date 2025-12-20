import React from 'react'

function Container({children}) {
  return (
    <div className='w-full max-w-7xl mx-auto px-4'>
      {children}
    </div>
  )
}

export default Container
// { children } is destructuring props.
// children means: Any JSX or components placed inside <Container>...</Container> when it’s used.

// Ex <Container>
//    <h1>Hello World</h1>
//.   </Container>

//Here, <h1>Hello World</h1> becomes children.