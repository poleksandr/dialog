import React, { useState } from 'react'
import Dialog from './components/Dialog'
import Button from './components/Button'

function App() {
	const [openDialogType, setOpenDialogType] = useState<string | null>(null)

	const openDialog = (type: string) => {
		setOpenDialogType(type)
	}

	const closeDialog = () => {
		setOpenDialogType(null)
	}

	const headerButtons1 = [<Button onClick={() => alert('OK clicked')}>OK</Button>, <Button onClick={() => alert('Cancel clicked')}>Cancel</Button>]

	const footerButtons1 = [<Button onClick={() => alert('Yes clicked')}>Yes</Button>, <Button onClick={() => alert('No clicked')}>No</Button>]

	const footerButtons2 = [
		<Button onClick={() => alert('Yes clicked')}>Yes</Button>,
		<Button onClick={() => alert('No clicked')}>No</Button>,
		<Button onClick={() => alert('Maybe clicked')}>Maybe</Button>,
	]

	return (
		<div>
			<h1>Dialog</h1>
			<button onClick={() => openDialog('dialog-1')}>Dialog 1</button>
			<button onClick={() => openDialog('dialog-2')}>Dialog 2</button>

			{openDialogType === 'dialog-1' && (
				<>
					<div className="dialog-overlay" onClick={closeDialog} />
					<Dialog
						onClose={closeDialog}
						headerButtons={headerButtons1}
						footerButtons={footerButtons1}
						content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur placerat facilisis sapien non varius. Donec volutpat ligula diam, ac aliquam sem ornare sed. Pellentesque id metus nibh. Aenean id velit ac felis tristique convallis ut sit amet metus. Donec malesuada erat non tellus condimentum pharetra. Sed porta vehicula erat et tempor. Aenean tempor, magna a mattis tristique, est erat ornare dolor, vitae pellentesque orci augue cursus risus. Curabitur luctus consectetur faucibus."
						footerDescription="Footer description"
						iconSrc="/logo192.png"
					/>
				</>
			)}

			{openDialogType === 'dialog-2' && (
				<>
					<div className="dialog-overlay" onClick={closeDialog} />
					<Dialog onClose={closeDialog} footerButtons={footerButtons2} content="Short content" />
				</>
			)}
		</div>
	)
}

export default App
