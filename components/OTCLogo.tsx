import React from 'react'

interface OTCLogoProps {
  className?: string
  width?: number
  height?: number
}

export default function OTCLogo({ className, width = 160, height = 60 }: OTCLogoProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 480 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Shield with checkmark */}
      <path
        d="M50 20 L80 15 L80 55 C80 75 65 85 50 85 C35 85 20 75 20 55 L20 15 Z"
        fill="#00A99D"
      />
      <path
        d="M42 48 L48 54 L62 38"
        stroke="white"
        strokeWidth="6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* OTC Text */}
      <text
        x="95"
        y="70"
        fontFamily="Arial, sans-serif"
        fontSize="60"
        fontWeight="bold"
        fill="#00A99D"
      >
        OTC
      </text>

      {/* Oilfield Text */}
      <text
        x="50"
        y="140"
        fontFamily="Arial, sans-serif"
        fontSize="52"
        fontWeight="bold"
        fill="#6B7280"
      >
        Oilfield
      </text>

      {/* Subtitle */}
      <text
        x="50"
        y="175"
        fontFamily="Arial, sans-serif"
        fontSize="18"
        fill="#9CA3AF"
      >
        Training and Certification S.A. de C.V.
      </text>
    </svg>
  )
}
