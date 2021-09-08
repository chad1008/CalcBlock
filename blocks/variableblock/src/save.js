/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	return (
		<div {...useBlockProps.save()}>
			<label for="this-input">{attributes.variableName}</label>
			<input
				type="number"
				id="thisInput"
				name="thisInput"
				className="calc-block-variable"
			/>
		</div>
	);
}
