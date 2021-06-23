import React from 'react'
import { Component } from 'react'
import styled from 'styled-components'
import Number from './number'
import Line from './line'
import {animated, useSpring} from 'react-spring'
import Countdown from './countdown'
export default function Wheel() {

    // render() {

    var numbers = []

    for (var i = 0; i < 10; i++) {
        if (i == 7) {
            numbers.push({ color: 'green', number: 7 })
        }
        if (i == 10) {
            numbers.push({ color: 'gold', number: 10 })
        }
        numbers.push({
            color: (i % 2) ? 'black' : 'red',
            number: (i % 2 == 0) ? 4 - i : i
        });
    }

    var Container = styled.div`
            width: 100%;
            height: 100px;
            border: solid black 0px;
            overflow: hidden;
            white-space: nowrap
        `

        return (
            <Container>
                <Line/>
                <div style={({backgroundColor: 'black', To: {marginLeft: '0px'}, from: {marginRight: '-1000px'}})}>
                    {numbers.map((item) => (
                        <Number color={item.color} number={item.number} />
                    ))}
                </div>
            </Container>
        )
    }