'use client'

import React from 'react'

interface ConvertKitModalProps {
  children?: React.ReactNode
}

const ConvertKitModal: React.FC<ConvertKitModalProps> = ({ children }) => {
  return (
    <a data-formkit-toggle="28797b89a2" href="https://fly100.ck.page/28797b89a2">
      {children || 'Your link text'}
    </a>
  )
}

export default ConvertKitModal
