export function saveData(key,data){
    localStorage.setItem(key,JSON.stringify(data))
}

export function getData(key){
    return JSON.parse(localStorage.getItem(key))
}

export function saveProfile(profile){
    saveData('profile',profile)
}

export function fetchProfile(){
    return getData('profile')
}

export function deletItem(key){
    localStorage.setItem(key,null)
}

export function deleteProfile(){
    deletItem('profile')
}