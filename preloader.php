<style>
	.preloader
	{
		position: fixed;
		top: 0;
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100vh;
		background: #070707;
		z-index: 9999999;
	}
	.preloader:before
	{
		content: 'Loading...';
		position: absolute;
		font-size: 12em;
	    text-transform: uppercase;
	    color: rgba(255,255,255,0.3);

	}
	.counter
	{
		position: relative;
		color: #fff;
		font-size: 16em;
		font-weight: 700;
		z-index: 1;
	}
	.counter:after
	{
		content: '%';
		font-size: 0.5em;

	}
	.pre-hide
	{
       opacity: 0;
       transition: 1s;
       pointer-events: none;
    
	}
	.preloader.pre-active
	{
      transform: translateY(-100vh);
      transition: ease-in-out 2s;
      transition-delay: 1s;
	}
</style>
<div class="preloader">
	<div class="counter">0</div>
</div>