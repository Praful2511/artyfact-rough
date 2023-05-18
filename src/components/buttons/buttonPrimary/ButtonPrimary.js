import React from 'react'
import Button from './Button';

const ButtonPrimary = ({className, styles, ...args}) => {
  return (
    <Button
        className={`inline-flex items-center gap-2 rounded-xl py-2 px-10 text-white ${className}`}
        style={styles}
        {...args}
    />
  )
}

export default ButtonPrimary