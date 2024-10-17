import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import Button from './Button'
import Text from './Text'
import ButtonGroup from './ButtonGroup'
import Icon from './Icon'

interface DialogProps {
	onClose: () => void
	headerButtons?: React.ReactNode[]
	footerButtons?: React.ReactNode[]
	content?: string
	footerDescription?: string
	iconSrc?: string
	className?: string
}

const Dialog: React.FC<DialogProps> = ({ onClose, headerButtons, footerButtons, content, footerDescription, iconSrc, className }) => {
	return (
		<div className={`dialog ${className && className}`}>
			<Button onClick={onClose} className="close-button">
				X
			</Button>
			<Header>
				{iconSrc && <Icon src={iconSrc} />}
				{headerButtons && <ButtonGroup buttons={headerButtons} />}
			</Header>
			<Content>
				<Text content={content} />
			</Content>
			<Footer>
				{footerButtons && <ButtonGroup buttons={footerButtons} />}
				{footerDescription && <p>{footerDescription}</p>}
			</Footer>
		</div>
	)
}

export default Dialog
