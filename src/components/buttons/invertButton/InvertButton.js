import React from 'react'
import Button from '../buttonPrimary/Button';
import InvertBtn from './InvertBtn';
// import InvertBtn from './InvertBtn';

const InvertButton = ({className, styles, ...args}) => {
  return (
    <InvertBtn
        className={`inline-flex items-center bg-transparent gap-2 rounded-xl py-2 px-10 text-[#8B8B8B] border border-[#272728] hover:border-[#F8A932] hover:text-[#F8A932] ${className}`}
        style={styles}
        {...args}
    />
  )
}

export default InvertButton