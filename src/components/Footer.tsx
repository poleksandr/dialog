import React from 'react'

interface FooterProps {
	children: React.ReactNode
	className?: string
}

const Footer: React.FC<FooterProps> = ({ children, className }) => {
	return <div className={`dialog-footer ${className && className}`}>{children}</div>
}

export default Footer
