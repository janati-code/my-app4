import React, { Component } from 'react'

export default class Line extends Component {


  render() {
    return (
      <>     
       <hr className={`${this.props.lineclr}  bg-white border-2  w-32 mt-20  transition-colors ease-out
        duration-700 `}>
        </hr>
      </>

    )
  }
}
