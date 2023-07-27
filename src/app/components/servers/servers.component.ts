import {Component} from '@angular/core';

type Server = {
	icon?: string;
	name: string;
	private: boolean;
	online: boolean;
	mods?: {num: number, link: string};
	url: string;
}

@Component({
	selector: 'app-servers',
	templateUrl: './servers.component.html'
})
export class ServersComponent {
	servers: Server[] = [{
		name: 'Arma 3',
		private: false,
		online: false,
		url: '291st.ca:2302'
	}, {
		name: 'Astroneer',
		private: true,
		online: false,
		url: '291st.ca:7777'
	}, {
		name: 'Minecraft (Bedrock)',
		private: true,
		online: true,
		url: '291st.ca:19132'
	}, {
		name: 'Minecraft (Java)',
		private: true,
		online: true,
		url: '291st.ca:25565'
	}, {
		name: 'Valheim',
		private: true,
		online: true,
		url: '291st.ca:2456'
	}, {
		name: 'V Rising',
		private: true,
		online: false,
		url: '291st.ca:27015'
	}]
}
