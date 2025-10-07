import React from 'react'

interface LabelProps {
  className?: string;
  content?: string;
  htmlFor?: string;
}

const Label: React.FC<LabelProps> = ({ className, content, htmlFor }) => {
  return (
    <label htmlFor={htmlFor} className={className}>
      {content}
    </label>
  )
}

export default Label