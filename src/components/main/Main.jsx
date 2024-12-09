import React from 'react'
import { MainContainer, MainContent, MainContentBorder } from './styles'
import MusicPlayer from '../music-player/MusicPlayer'
export default function Main() {
    return (
        <MainContainer className='mainContainer'>
            <MainContentBorder>
                <MainContent>
                    <h1>Hello world!</h1>
                    <h1>Hello world!</h1>
                    <h1>Hello world!</h1>
                    <h1>Hello world!</h1>
                    <h1>Hello world!</h1>
                    <h1>Hello world!</h1>
                    <MusicPlayer />
                </MainContent>
            </MainContentBorder>
        </MainContainer>
    )
}

