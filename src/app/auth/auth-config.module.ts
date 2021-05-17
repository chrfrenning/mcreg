// import { APP_INITIALIZER, NgModule } from '@angular/core';
// import { AuthModule, OidcConfigService } from 'angular-auth-oidc-client';

// export function configureAuth(oidcConfigService: OidcConfigService): () => Promise<any> {
//     return () =>
//         oidcConfigService.withConfig({
//             stsServer: 'https://sts.windows.net/72f988bf-86f1-41af-91ab-2d7cd011db47',
//             authWellknownEndpoint: 'https://login.microsoftonline.com/72f988bf-86f1-41af-91ab-2d7cd011db47',
//             redirectUrl: window.location.origin,
//             clientId: '6a06efcf-e31e-4fc1-96a7-ecd070467c49',
//             scope: 'openid profile email api://6a06efcf-e31e-4fc1-96a7-ecd070467c49/api', // 'openid profile offline_access ' + your scopes // user_impersonation scope=https://xysyodxc.azurewebsites.net/.default
//             responseType: 'code',
//             silentRenew: false,
//             useRefreshToken: true,
//             maxIdTokenIatOffsetAllowedInSeconds: 600,
//             issValidationOff: false,
//             autoUserinfo: false,
//             customParams: {
//               prompt: 'select_account', // login, consent
//             },
//     });
// }

// @NgModule({
//     imports: [AuthModule.forRoot()],
//     exports: [AuthModule],
//     providers: [
//         OidcConfigService,
//         {
//             provide: APP_INITIALIZER,
//             useFactory: configureAuth,
//             deps: [OidcConfigService],
//             multi: true,
//         },
//     ],
// })
// export class AuthConfigModule {}