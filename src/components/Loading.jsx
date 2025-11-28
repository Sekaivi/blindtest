'use client';
import React from 'react'
import { motion, useReducedMotion } from 'framer-motion'

    export default function BlindtestLoader({ size = 50, color = 'bg-(--accent)', speed = 2 }) {
    const shouldReduce = useReducedMotion()
    const baseHeight = size * 0.4 // hauteur mini (40% de la taille)
    const fullHeight = size // hauteur max
    const barWidth = size / 3
    const barStyle = {
        width: `${barWidth}px`,
        borderRadius: '6px',
    }

    const variants = {
        animate: (i) => ({
            height: [baseHeight, fullHeight, baseHeight, baseHeight],
            transition: {
                duration: speed,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: i * (speed / 4),
                times: [0, 0.3, 0.6, 1],
            },
        }),
    }

    return (
        <div className="flex flex-col items-center justify-center p-4 px-20
        bg-[var(--middleground)] shadow-md border border-solid border-[var(--foreground)] rounded-[10px]">
            <div className="mb-3 text-center">
                <span className="sr-only">Chargement de votre blindtest</span>
                <h3 className="text-xl font-medium text-(--text) zalando-sans-expanded-regular">
                    Chargement de votre blindtest
                </h3>
            </div>

            <div
                role="status"
                aria-live="polite"
                aria-label="Chargement de votre blindtest"
                className="flex items-center gap-2 h-16 justify-center"
            >
                {[0, 1, 2].map((i) =>
                    shouldReduce ? (
                        <div
                            key={i}
                            style={{ ...barStyle, height: `${baseHeight}px` }}
                            className={`${color}`}
                        />
                    ) : (
                        <motion.div
                            key={i}
                            custom={i}
                            variants={variants}
                            animate="animate"
                            style={barStyle}
                            className={`${color} origin-bottom`}
                        />
                    )
                )}
            </div>

            <p className="mt-2 text-md text-gray-500">Veuillez patienter...</p>
        </div>
    )
}