import React from 'react';
import image from './../assets/me.png';
import { aboutMe } from '../assets/content.js'
import Title from './title.js'
import '../styles/mystyle.css'

export default function About() {
  return (
    <div >
      <Title title='About Me' accent='red'></Title>
      <div className={"center"}>
        <img className={"picture"} src={image} alt="" />
        <p>{aboutMe}</p>
      </div>
    </div>
  )
}
