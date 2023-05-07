import React, {useEffect, useRef} from 'react'
import './assets/cursor.css'

function Cursor() {
    const delay = 18
    const endY = useRef(window.innerHeight / 2)
    const endX = useRef(window.innerWidth / 2)
    const cursorVisible = useRef(true)
    const cursorEnlarged = useRef(false)
    const requestRef = useRef(null)
    const dotOutline = useRef(null)
    const dot = useRef(null)
    const _X = useRef(0)
    const _Y = useRef(0)

    const toggleCursorVisibility = () => {
        if(cursorVisible.current) {
            dot.current.style.opacity = 1
            dotOutline.current.style.opacity = 1
        } else {
            dot.current.style.opacity = 0
            dotOutline.current.style.opacity = 0
        }

    }

    const toggleCursorSize = () => {
        if (cursorEnlarged.current) {
            dot.current.style.transform = 'translate(-50%, -50%) scale(0.75)'
            dotOutline.current.style.transform = 'translate(-50%, -50%) scale(0.75)'
        } else {
            dot.current.style.transform = 'translate(-50%, -50%) scale(1)'
            dotOutline.current.style.transform = 'translate(-50%, -50%) scale(1)'
        }
    }

    const mouseMoveEvent = e => {
        cursorVisible.current = true
        toggleCursorVisibility()
        endX.current = e.pageX;
        endY.current = e.pageY;
        dot.current.style.top = endY.current + 'px';
        dot.current.style.left = endX.current + 'px';
    }

    const animateDocOutline = () => {
        _X.current += (endX.current - _X.current ) /delay
        _Y.current += (endY.current - _Y.current ) /delay

        dotOutline.current.style.top = _Y.current  + 'px';
        dotOutline.current.style.left = _X.current  + 'px';

        requestRef.current = requestAnimationFrame(animateDocOutline)
    }

    useEffect(() => {
        document.addEventListener('mousemove', mouseMoveEvent)
        animateDocOutline()

        return () => {
            document.removeEventListener('mousemove', mouseMoveEvent)
            cancelAnimationFrame(requestRef.current)
        }
    }, [])

    return (
        <>
            <div ref={dotOutline} className={'cursor-dot-outline'}></div>
            <div ref={dot} className={'cursor-dot'}></div>
        </>
    )
}

export default Cursor
