import { Controller, Get, Post } from '@nestjs/common';

@Controller('posts')
export class PostsController {
	@Get()
	getPosts(){
		let chars =[
			{
				name:'Hook',
				lastName:'Banner'
			},
			{
				name:'Sentry',
				lastName:'Reynolds'
			},
			{
				name:'Hulk',
				lastName:'Green'
			}
		];
		return chars;
	}
	@Get('profile')
	getProfs(){
		return {
			name:'Terminator'
		};
	}
}
