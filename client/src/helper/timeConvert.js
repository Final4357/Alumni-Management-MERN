export function T24hrTo12hr(time){
    let [hr, min] = time.split(":")
    let modifire
    if(parseInt(hr)>12) {hr=parseInt(hr)-12; modifire='PM'}
    else modifire='AM'

    return `${hr}:${min} ${modifire}`
}