Vue.component('services-st',{
	props: ['numero','title','ctd'],
	template:`
	<div class="box" data-aos="zoom-in" >
	<span>{{numero}}</span>
	<h4> {{title}}</h4>
	<p>{{ctd}}</p>
	</div>
	`
})
