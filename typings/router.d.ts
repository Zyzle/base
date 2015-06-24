declare module 'angular2/router' {
	class Instruction {}
	class Router {
		navigate(url: string): Promise<any>
		config(config: any): Promise<any>
		subscribe(onNext: Function): Promise<any>
	}
	var RouterOutlet: any;
	var RouterLink: any;
	var routerInjectables: any;
	var RouteConfig: any;
}
