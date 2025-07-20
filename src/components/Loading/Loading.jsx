import React from 'react'
import styled from './Loading.module.css'

function Loading() {
  return (
    <div className="w-screen h-[80vh] flex justify-center items-center">
        <div class={styled.loader}></div>
    </div>
  )
}

export default Loading