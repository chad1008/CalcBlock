/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
export default function save() {
	return (
		<div {...useBlockProps.save()}>
			<InnerBlocks.Content />
			{<button class="calc-block-exec-button">Calculate</button>}
		</div>
	);
}
