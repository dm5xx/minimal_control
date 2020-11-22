class LockStatus
{
    constructor()
    {
        this.IsGetRequest = false;
        this.IsSetRequest = false;
     
        this.IsGetLengthRequest = false;
        this.IsSetLengthRequest = false;
     
        this.IsRestarting = false;
     
        this.LockGetSetRequest = false;
        this.LockGetRequest = false;
        this.LockSetRequest = false;
        this.LockAll = false;
    }
}

module.exports = LockStatus;
