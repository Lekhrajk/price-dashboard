import React from 'react'

const CommonMessages = ({title,className}) => {
  return (
    <div className={`text-sm text-gray-600 text-center ${className}`}>{title || ""}</div>
  )
}

export default CommonMessages