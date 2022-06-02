function booWho(bool) {
    if (bool !== true && bool !== false) {  // Had to use strict inequality to not convert the data type
        return false;
    }
    else {
        return true;
    }
}

booWho(null);