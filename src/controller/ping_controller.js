function pingController (req, res) {
    return res.json({message: "routing setup nested setup"})
}

module.exports = {
    pingController,
}