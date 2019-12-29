export const calcTime = timeBySecond => {
    let [ hour, min, sec ] = [ 0, 0, 0 ];
    let [ lbH, lbM, lbS ] = [ "giờ", "phút", "giây" ];
    let rs = "";
    if ( timeBySecond <= 60 ) {
        rs = `${timeBySecond} ${lbS}`;
    } else if ( timeBySecond < 7200 && timeBySecond > 60 ) {
        min = Math.floor(timeBySecond / 60);
        sec = timeBySecond - min * 60;
        rs = `${min} ${lbM} ${(sec !== 0) ? `${sec} ${lbS}` : ''}`;
    } else {
        hour = Math.floor(timeBySecond / 3600);
        min = Math.floor((timeBySecond - hour * 3600) / 60);
        sec = timeBySecond - (hour * 3600) - (min * 60);
        rs = `${hour} ${lbH} ${(min !== 0) ? `${min} ${lbM}` : ''} ${(sec !== 0) ? `${sec} ${lbS}` : ''}`;
    }
        
    return rs;
}