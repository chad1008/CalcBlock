/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import { Button } from '@wordpress/components';

/**
 * Internal dependencies
 */
import './editor.scss';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/developers/block-api/block-edit-save/#edit
 *
 * @return {WPElement} Element to render.
 */
export default function Edit() {
	const ALLOWED_BLOCKS = ['calc-block/variableblock'];
	const CALC_TEMPLATE = [['calc-block/variableblock', {}]];
	return (
		<div {...useBlockProps}>
			<InnerBlocks
				allowedBlocks={ALLOWED_BLOCKS}
				template={CALC_TEMPLATE}
			/>
		</div>
	);
}
