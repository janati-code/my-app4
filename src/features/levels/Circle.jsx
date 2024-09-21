import React, { Component } from 'react'

export default class Circle extends Component {

  render() {
    return (
      <>     
       <div  className={`${this.props.circleclr} flex  w-10 h-10 border-2 transition-colors 
      ease-in-out duration-700 bg-white cursor-pointer 
       rounded-full mt-16 mb-16`}
       >
          <p className='m-auto'>{this.props.text}</p>
          </div>
          </>

    )
  }
}
