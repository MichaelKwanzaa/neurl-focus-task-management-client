import { environment } from "src/environments/environment";

function getGoogleOAuthUrl(){
    const rootUrl = 'https://accounts.google.com/o/oauth2/v2/auth'

    const options = {
        redirect_uri: environment.CLIENT_REDIRECT_URI as string,
        client_id: environment.CLIENT_ID as string,
        access_type: 'offline',
        response_type: 'code',
        prompt: 'consent',
        scope: [
            'https://www.googleapis.com/auth/userinfo.profile',
            'https://www.googleapis.com/auth/userinfo.email'
        ].join(" ")
    };

    const qs = new URLSearchParams(options)

    return `${rootUrl}?${qs.toString()}`;

}

export default getGoogleOAuthUrl