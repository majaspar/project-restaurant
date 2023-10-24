import React from 'react'
import { motion } from 'framer-motion'

export default function PageTitle({ content, description }) {


    return (
        <div className="margins hero grid PageTitle">

            <div className="hero__text mt3 mb3 flex-column">
                <motion.h1
                    initial={{ scale: 0.1 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 300, duration: 0.5 }}
                    className="center">{content}</motion.h1>
                {description}
            </div>

        </div>
    )
}
