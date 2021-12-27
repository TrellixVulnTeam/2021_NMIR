export default {
                    
    background: {
        color: {
            value: "hsl(213, 24%, 16%)",
            opacity: 1
        },
    },
    backgroundMask: {
        color: '#000'
    },
    fpsLimit: 60,
    interactivity: {
    events: {
        onClick: {
            enable: true,
            mode: "push",
        },
        onHover: {
            enable: false,
            mode: "repulse",
        },
        resize: true,
    },
    modes: {
        bubble: {
            distance: 400,
            duration: 2,
            opacity: 0.2,
            size: 40,
        },
        push: {
            quantity: 4,
        },
        repulse: {
            distance: 200,
            duration: 0.4,
        },
    },
    },
    particles: {
        color: {
            value: "hsl(176, 96%, 69%)",
        },
        links: {
            color: "hsl(220, 20%, 60%)",
            distance: 200,
            enable: false,
            opacity: 0.2,
            width: 2,
        },
        collisions: {
            enable: true,
        },
        move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 6,
            straight: false,
        },
        number: {
            density: {
            enable: true,
            value_area: 800,
            },
            value: 60,
        },
        opacity: {
            value: 0.5,
        },
        shape: {
            type: "circle",
        },
        size: {
            random: true,
            value: 6,
        },
        shadow: {
            blur: 5,
            color: {
                value: '#000000'
            },
            enable: true,
            offset: {
                x: 3,
                y: 3
            }
        },
    },
    detectRetina: true,
}