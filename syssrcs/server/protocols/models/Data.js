module.exports = function Data(session){
    this.hash = session.hash
    this.info = {}
    this.cmd = null
    this.secSocketKey = session.secSocketKey
    this.isDesktopMode = false
}