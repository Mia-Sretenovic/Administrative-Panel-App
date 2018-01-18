class RedirectService{

    redirect(path){

        window.location.assign(`/#${path}`);
    }
}
export const redirectService  = new RedirectService();