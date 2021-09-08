/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import {
	__experimentalNumberControl as NumberControl,
	TextControl,
} from '@wordpress/components';
import { useState } from '@wordpress/element';

/**
 * Internal dependencies
 */
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const [value, setValue] = useState(attributes.testValue);
	const props = {
		isShiftStepEnabled: false,
		isDragEnabled: false,
		hideHTMLArrows: false,
	};
	const updateValue = (val) => {
		setValue();
		setAttributes({ testValue: val });
	};

	return (
		<div {...useBlockProps()}>
			<TextControl
				label={__('Variable name', 'variableblock')}
				value={attributes.variableName}
				onChange={(val) => setAttributes({ variableName: val })}
			/>
			<NumberControl
				{...props}
				label={__('Test value (work in progress)', 'variableblock')}
				value={value}
				onChange={updateValue}
			/>
		</div>
	);
}
