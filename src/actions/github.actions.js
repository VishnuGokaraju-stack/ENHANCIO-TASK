export const GITHUB_PROFILES = 'GITHUB_PROFILES'

export const getGitHubProfiles = () => {
    return (dispatch) => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(profiles => {
            dispatch({
                type: GITHUB_PROFILES,
                payload: profiles
            })
        })
        .catch(error => {
            console.log('error : '+error);
        })
    }
}