import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useTranslation } from "react-i18next";


export const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 75 },
        visible: { opacity: 10, y: 0 },
      }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
};



export const AnimatedTypingText: React.FC = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 100;
  // const pauseTime = 2000;

  const { t } = useTranslation()
  const textArray = [t('dev'), t('mern')];

  useEffect(() => {
    const currentText = textArray[currentIndex];

    const timer = setTimeout(() => {
      if (isDeleting) {
        setDisplayedText((prev) => prev.slice(0, -1));
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % textArray.length);
        }
      } else {
        setDisplayedText((prev) => currentText.slice(0, prev.length + 1));
        if (displayedText === currentText) {
          setIsDeleting(true);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentIndex]);

  return (
    <motion.div
      key={displayedText}
      initial={{ opacity: 1 }}
      animate={{ opacity: 8 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ fontSize: '1.5rem', color: 'white' }}
    >
      {displayedText}
      <span className="cursor" style={{ borderRight: '0.5px solid #fff', marginLeft: '5px', opacity: .6 }}></span>
    </motion.div>
  );
};
