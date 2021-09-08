<?php

function my_awesome_blocks_cgb_block_assets() {
	if (is_singular()) {
	  $id = get_the_ID();
	  if (has_block('calc-block/calcblock', $id)) {
		wp_enqueue_script('calc-block-math',plugin_dir_url( __FILE__ ) . '/src/calculate.js', array(), '1.0.0', true);
	  }
	}
  }
  add_action( 'enqueue_block_assets', 'my_awesome_blocks_cgb_block_assets' );


/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/block-editor/tutorials/block-tutorial/writing-your-first-block-type/
 */
function create_block_calcblock_block_init() {
	register_block_type( __DIR__ );
}
add_action( 'init', 'create_block_calcblock_block_init' );
