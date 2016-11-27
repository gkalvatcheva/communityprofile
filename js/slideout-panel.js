$(function(){
             $('.slide-out-tab-province').tabSlideOut({
                 tabHandle: '.handle',                              //class of the element that will be your tab
                 tabLocation: 'left',                               //side of screen where tab lives, top, right, bottom, or left
                 speed: 300,                                        //speed of animation
                 action: 'click',                                   //options: 'click' or 'hover', action to trigger animation
                 topPos: '65px',                                   //position from the top
                 fixedPosition: false                               //options: true makes it stick(fixed position) on scroll
               });
});


$(function(){
             $('.slide-out-tab-legend').tabSlideOut({
                 tabHandle: '.handle-legend',                              //class of the element that will be your tab
                 tabLocation: 'left',                               //side of screen where tab lives, top, right, bottom, or left
                 speed: 300,                                        //speed of animation
                 action: 'click',                                   //options: 'click' or 'hover', action to trigger animation
                 topPos: '218px',                                   //position from the top
                 fixedPosition: false                               //options: true makes it stick(fixed position) on scroll
               });
});
