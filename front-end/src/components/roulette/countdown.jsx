import React from 'react'
import { Component } from 'react'
import styled from 'styled-components'
import { animated, useSpring } from 'react-spring'

export default function Countdown(props) {

    var countdown = useSpring({
        from: {number: props.time},
        to: {number: 0},
        reset: true,
        immediate: false,
        config: {
            duration: props.time * 1000
        }
    })

    return(
        <h1>Rolling In <div>{countdown.number}</div></h1>
    )
}