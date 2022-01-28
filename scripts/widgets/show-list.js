module.exports = function($context, script){ 'use strict';
	$context.find('.show-list').each(function(){
		$(this).wrapInner('<div class="wrapper"></div>').textillate({
			loop:true,
			in:{effect:'fadeInRight', reverse:true},
			out:{effect:'fadeOutLeft', sequence:true},
			selector:'.wrapper'
		});
	});
};