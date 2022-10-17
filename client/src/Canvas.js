import styled from "styled-components"
import NewfoundlandBG from './imgs/newfoundland-bg.jpg'
import { useRef, useEffect } from "react"
export const Canvas = () => {
    const ref = useRef();
    useEffect(()=>{
        if (ref.current) {
            const canvas = ref.current.getContext('2d')
            console.log(canvas)
        }
    }, [])

    return (
        <Wrapper>
            <canvas ref={ref}></canvas>
            <section>
                <div>
                    <p>text</p>
                </div>
            </section>
        </Wrapper>
    )
}

const Wrapper = styled.div`
border: 1px solid red;
text-align: center;
background-image: url(${NewfoundlandBG});
background-size: cover;
height: 800px;

canvas {
    z-index: 2;
}`